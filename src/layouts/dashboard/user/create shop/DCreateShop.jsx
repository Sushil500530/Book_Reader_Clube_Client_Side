import Swal from "sweetalert2";
import { imageUpload } from "../../../../api/getData";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdAddShoppingCart, MdDeleteForever } from "react-icons/md";

const DCreateShop = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const [loading, setLoading] = useState(false);
    const [showImage, setShowImage] = useState('');
    const [imageProperty, setImageProperty] = useState('');



    // showImageDelete 
    const handleRemoveImage = () => {
        setShowImage('');
    }
    // show image load 
    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageFind = e.target.files[0];
            setImageProperty(imageFind)
            setShowImage(URL.createObjectURL(imageFind));
        }
    }

    // create shop function 
    const handleCreateShop = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const shop_name = form.shop_name.value;
        const description = form.description.value;
        const location = form.location.value;
        console.log(shop_name, description);
        try {
            const loadImage = await imageUpload(imageProperty);
            const create_shop = {
                shop_name,
                shop_logo: loadImage?.data?.display_url,
                description,
                location,
                owner: user?.displayName,
                email: user?.email,
                role: 'manager',
            };
            // console.log(create_shop);
            await axiosSecure.patch('/managers', create_shop)
                .then(res => {
                    console.log(res.data);
                    setLoading(false)
                    if (res.data?.insertedId) {
                        Swal.fire({
                            title: "Create Successfull!",
                            text: "You clicked the button!",
                            icon: "success",
                            timer: 1000
                        });
                    }
                })
        }
        catch (error) {
            setLoading(false)
            toast.error('Please Choose file or select Image!');
        }
    }
    return (
        <div className="mt-12">
            <div className='lg:w-1/2 w-full bg-white text-black shadow mx-auto px-10 py-12 '>
                {/* <Helmet>
            <title>Create Shop | Inventory M </title>
        </Helmet> */}
                <h2 className="text-2xl lg:text-4xl font-bold text-center my-12 flex items-center justify-center gap-2">Create a New Shop   <span className="mr-3 text-5xl text-center text-indigo-500">{<MdAddShoppingCart />}</span></h2>
                <form onSubmit={handleCreateShop}>
                    <div className='grid grid-cols-1 '>
                        <div className='space-y-6'>
                            <div className='flex gap-4 items-center justify-center'>
                                <div className='space-y-2 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Your Shop Name
                                    </label>
                                    <input
                                        className='input input-bordered input-info w-full text-white px-4 py-3 border rounded-md border-blue-400 '
                                        name='shop_name' id='shop_name' type='text' placeholder='your shop name...' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium'>
                                        Location
                                    </label>
                                    <input className='w-full px-4 py-3 text-white border rounded-md input input-bordered input-info border-blue-400 '
                                        name='location' id='location' type='text' placeholder='Location...' required
                                    />
                                </div>
                            </div>
                            <div className=' p-4 bg-white w-full m-auto rounded-lg'>
                                <label className="block text-black font-medium"> Shop Logo</label>
                                <div className=' bg-white w-full m-auto rounded-lg mt-3'>
                                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                        {
                                            showImage ? <div className='relative'><img src={showImage} alt="imageShow" className='w-full h-44' /> <span onClick={handleRemoveImage} className='absolute rounded-full -top-3 -right-6 cursor-pointer'><MdDeleteForever className='text-5xl text-red-500' /></span></div> : <input onChange={handleImage} type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none bg-transparent" placeholder='choose your image.....' />
                                        }
                                        {/* <input type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none " /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-1 '>
                                <label htmlFor='description' className='block font-medium'>
                                    Description
                                </label>
                                <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-white  border rounded-md input input-bordered input-info border-blue-400 ' name='description' placeholder="Write description..."
                                ></textarea>
                            </div>
                        </div>

                        <button type='submit' className='btn w-full p-3 mt-5 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black ' >
                            {loading ? (
                                <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span>
                            ) : (
                                'Create Shop'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DCreateShop;