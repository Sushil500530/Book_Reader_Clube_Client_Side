import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSale from "../../hooks/useSale";
import { ImSpinner9 } from "react-icons/im";
import { BsCheck2 } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [sales, refetch, isLoading] = useSale();
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [translateId, setTranslateId] = useState('');

    const totalPrice = sales?.reduce((total, currentItem) => total + (currentItem?.price), 0);
    // console.log(sales);
    const handleReturn = (e) => {
        e.preventDefault();
        return navigate('/dashboard')
    }

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('create-payment', { price: totalPrice })
                .then(res => {
                    // console.log('generated payment secret code=========>',res?.data);
                    setClientSecret(res?.data?.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice]);

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!stripe || !elements) {
            return toast.error('something went wrong!')
        }
        const card = elements?.getElement(CardElement);
        // console.log('what is card=====>',card);
        if (card === null) {
            return toast.error('something went wrong!');
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            toast.error(error?.message)
        }
        else {
            // console.log('payment method of condition is=======>', paymentMethod);
            setClientSecret('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log('confirm error is=======>', confirmError)
            return toast.error('Your card number is incomplete');
        }
        else {
            if (paymentIntent?.status === 'succeeded') {
                console.log('payment intent id is=======>', paymentIntent?.id);
                setTranslateId(paymentIntent?.id);

                // payment details store to database 
                const paymentInfo = {
                    email: user?.email,
                    price: totalPrice,
                    translateId: paymentIntent?.id,
                    date: new Date(),
                    saleIds: sales?.map(item => item?._id),
                    furniItemIds: sales?.map(item => item?.furniId),
                    status: 'pending'
                }
                const response = await axiosSecure.post('payments', paymentInfo);
                refetch();
                console.log('what is feedback in database', response?.data);
                if (response?.data?.paymentResult?.insertedId) {
                    setLoading(false);
                    Swal.fire({
                        title: "Payment Success🎉!",
                        text: "Thenak you for Paymented!",
                        icon: "success",
                        timer: 1000,
                    });
                    return navigate('/dashboard/payment-details')
                }
            }
        }
    }

    const handleBuy= () => {
       toast.error('somthing went wrong!')
  }



    return (
        <div className="mt-12 p-5 w-full h-full">
            <div className="lg:w-[550px] md:w-[550px] w-full h-auto mx-auto">
                <form >
                    <CardElement className="border border-black px-5 py-2 focus:border-[#f3f3f3] text-[20px]"
                        options={{
                            style: {
                                base: {
                                    fontSize: '17px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </form>
                <div className="flex flex-col md:flex-row lg:flex-row my-5 items-center justify-between gap-5 md:gap-0 lg:gap-0">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Name*</label>
                        <input className="text-xl font-bold text-black" type="text" name="" id="" disabled placeholder={`${user?.displayName}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Email*</label>
                        <input className="text-xl font-bold text-black" type="text" name="" id="" disabled placeholder={`${user?.email}`} />
                    </div>
                </div>
                <div className="flex flex-row my-8 items-center justify-between gap-5 ">
                    <button onClick={handleReturn} className="btn btn-error flex items-center gap-2 text-[17px] text-white"><RiDeleteBack2Line className="text-2xl" />Cencel</button>
                    <button disabled={!stripe || !clientSecret} onClick={handlePayment} type="submit" className="btn bg-green-600 text-white text-[17px] hover:text-black">{
                        loading ? <ImSpinner9 className='m-auto animate-spin' size={24} /> : `Pay $ ${totalPrice}`
                    } </button>
                </div>
                <h1 className="text-center font-medium text-[17px] text-green-500">{translateId}</h1>
            </div>
            <div className="divider divider-x text-xl font-bold mt-10">Other Your Offer!🎉</div>
            <div>
                <h1 className="flex items-center justify-center gap-2 text-2xl">Create a Furni Track Shop <IoIosCreate className="w-8 h-8 text-fuchsia-500" /></h1>
                <h1 className="text-2xl my-3">Get <span className="text-fuchsia-500">Discount</span> Offer🎉</h1>
            </div>
            <div className="w-full lg:w-[80%] mx-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between mt-12 gap-8">
                <div className="col-span-1 border pb-12">
                    <div className="w-full h-auto rounded-t-xl bg-green-700 text-white p-5">
                        <h1 className="text-2xl text-start mb-1">Entry</h1>
                        <h1 className="text-6xl flex gap-3 items-center justify-center ">
                            $14 <span className="text-base">/month</span> <button className="text-xl bg-[#fafcfa] px-5 py-2 rounded-full text-black border-2 border-fuchsia-500 md:border-none lg:border-none">10% OFF</button> </h1>
                           
                        <p className="mt-5">Easy Start on Your Bussiness</p>
                    </div>
                    <div className="flex flex-col items-center justify-between ">
                        {/* benifits */}
                        <div className="mt-5 px-6 h-auto">
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Discounted Annual Pricing</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Flexible Payment Options</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Priority Access to New Products</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Exclusive Promotions</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Early Renewal Discounts</h1>
                        </div>
                        <div className=" px-5 pt-10 w-full">
                            <button onClick={handleBuy} className="btn w-full text-white bg-green-700 hover:text-black">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border pb-12">
                    <div className="w-full h-auto rounded-t-xl bg-green-700 text-white px-4 py-8">
                        <h1 className="text-2xl text-start mb-1">Bussiness</h1>
                        <h1 className="text-6xl flex gap-3 items-center justify-center ">
                            $124 <span className="text-base">/yearly</span>
                            <button className="text-xl bg-[#fafcfa] px-5 py-2 rounded-full text-black border-2 border-fuchsia-500 md:border-none lg:border-none">20% OFF</button>
                        </h1>
                        <p className="mt-5">Easy Start on Your Bussiness</p>
                    </div>
                    <div className="flex flex-col items-center justify-between ">
                        {/* benifits */}
                        <div className="mt-5 px-6 w-full h-auto">
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Discounted Annual Pricing</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Flexible Payment Options</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Priority Access to New Products</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Exclusive Promotions</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Early Renewal Discounts</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Early Renewal Discounts</h1>
                        </div>
                        <div className=" px-5 pt-10 w-full">
                            <button onClick={handleBuy} className="btn w-full text-white bg-green-700 hover:text-black">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border pb-12">
                    <div className="w-full h-auto rounded-t-xl bg-green-700 text-white p-5">
                        <h1 className="text-2xl text-start mb-1">Entry</h1>
                        <h1 className="text-6xl flex gap-3 items-center justify-center ">
                            $14 <span className="text-base">/month</span>
                            <button className="text-xl bg-[#fafcfa] px-5 py-2 rounded-full text-black border-2 border-fuchsia-500 md:border-none lg:border-none">10% OFF</button>
                        </h1>
                        <p className="mt-5">Easy Start on Your Bussiness</p>
                    </div>
                    <div className="flex flex-col items-center justify-between ">
                        {/* benifits */}
                        <div className="mt-5 px-6 h-auto">
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Discounted Annual Pricing</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Flexible Payment Options</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Priority Access to New Products</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" /> Exclusive Promotions</h1>
                            <h1 className="flex items-center gap-2"><BsCheck2 className="w-8 h-8 text-green-500" />Early Renewal Discounts</h1>
                        </div>
                        <div className=" px-5 pt-10 w-full">
                            <button onClick={handleBuy} className="btn w-full text-white bg-green-700 hover:text-black">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;