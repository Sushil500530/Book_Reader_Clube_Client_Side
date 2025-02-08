/* eslint-disable react/prop-types */
import useSale from "../../hooks/useSale";
import { FaRegEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Button from './../button/index';

export default function FurnitureCard({ furniture }) {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const [, refetch,] = useSale();
    const handleSetData = async (data) => {
        if (!user) {
            return toast.error("please login first, then add to cart or other....!")
        }
        const discountPrice = data?.discount / 100 * parseFloat(data?.price);
        const currentPrice = Math.round((data?.price - discountPrice).toFixed(2));
        const buyProduct = {
            furniId: data?._id,
            image: data?.image,
            category: data?.image,
            price: currentPrice,
            title: data?.title,
            description: data?.description,
            thumbnail1: data?.thumbnail1,
            thumbnail2: data?.thumbnail2,
            rating: data?.rating,
            quantity: data?.quantity,
            discount: data?.discount,
            email: user?.email,
            userName: user?.displayName
        }

        try {
            await axiosPublic.post('/sales', buyProduct)
                .then(res => {
                    if (res.data?.insertedId) {
                        refetch();
                        toast.success(`${data?.title} added successfully...!`);
                    }
                })
        }
        catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <div className="rounded-t-[110px] text-black transition ease-in-out w-full h-auto shadow-2xl relative rounded-md mb-10">
            <h1 className='absolute top-20 left-4 text-sm bg-fuchsia-500 text-white px-3 py-1 w-max rounded-full'>
                {furniture?.discount} % OFF
            </h1>
            <div className="flex items-center justify-center w-full py-3 -mt-12">
                <figure className="w-40 h-40 ">
                    <img src={furniture?.image} alt="love-image" className="w-full h-full rounded-full border border-purple-500 cursor-pointer hover:scale-110 transition ease-in-out duration-500" />
                </figure>
            </div>
            <div className="px-5 space-y-2 flex flex-col justify-between lg:h-56">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium">{furniture?.title?.length > 15 ? furniture?.title?.slice(0, 15) + "....." : furniture?.title}</h3>
                        <h3 className=" font-bold text-fuchsia-500">Price: $ {furniture?.price}</h3>
                    </div>
                    <p className="text-black/60 text-sm">{furniture?.description?.length > 90 ? furniture?.description?.slice(0, 90) + "...." : furniture?.description}</p>
                    <p className='text-[17px] mt-2 '>Category: {furniture?.category?.replace(/_/g, ' ')}</p>
                </div>
                <div className=" flex items-center md:justify-center lg:justify-between gap-3 w-full py-5 flex-col md:flex-row lg:flex-row">
                    <Link to={`/furni-details/${furniture?._id}`}>
                        <Button
                            title="View Details"
                            icon={FaRegEye}
                            className="px-2 py-2"
                        />
                    </Link>
                    <Button
                        onClick={() => handleSetData(furniture)}
                        title="Add to Cart"
                        icon={FaShoppingCart}
                        className="px-2 py-2"
                    />
                    {/* <button className="w-full backdrop-blur-md md:w-1/2 lg:1/2 lg:px-2 lg:py-3 lg:btn-none custom-bg-color flex items-center justify-center border-none outline-none text-sm rounded-md btn text-white hover:text-blue-400"><FaShoppingCart /> Add to Cart</button> */}
                </div>
            </div>
        </div>
    )
}
