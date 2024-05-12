import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { imageUpload } from './../../api/getData';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFindMananger from "../../hooks/useFindMananger";
import Loader from "../../shared/Loader";
import useFurCategory from "../../hooks/useFurCategory";
import { MdDeleteForever,MdAddShoppingCart } from "react-icons/md";

const AddProducts = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [currentManager, , isLoading] = useFindMananger();
    const [category, ,] = useFurCategory();
    const [showImage, setShowImage] = useState('');
    const [showThumbnail1,setShowThumbnail1] = useState('');
    const [showThumbnail2,setShowThumbnail2] = useState('');



    // showImageDelete 
    const handleRemoveImage = () => {
        setShowImage('');
    }
    const handleRemoveThumb1 = () => {
        setShowThumbnail1('');
    }
    const handleRemoveThumb2 = () => {
        setShowThumbnail2('');
    }
    // show image load 
    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageFind = e.target.files[0];
            setShowImage(URL.createObjectURL(imageFind));
        }
    }

    // thumbnail functionality is here 
    const handleShowThumb1 = (e) => {
        if(e.target.files && e.target.files[0]){
            const thumbName1 = e.target.files[0];
            setShowThumbnail1(URL.createObjectURL(thumbName1));
        }
    }

    const handleShowThumb2 = (e) => {
        if(e.target.files && e.target.files[0]){
            const thumbName2 = e.target.files[0];
            setShowThumbnail2(URL.createObjectURL(thumbName2));
        }
    }


    if (isLoading) {
        return <Loader />
    }
    const handleAddedProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const product_name = form.product_name.value;
        const image = form.image?.files[0];
        const thumb1 = form.thumbnail1.files[0];
        const thumb2 = form.thumbnail2.files[0];
        const description = form.description.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const price = form.product_cost.value;
        const product_prof = form.product_profit.value;
        const product_profit = parseInt(product_prof)
        const discount = form.discount.value;
        const shop_logo = currentManager[0]?.shop_logo;
        const shop_name = currentManager[0]?.shop_name;
        const owner_name = user?.displayName;
        const email = user?.email;
        const location = form.location.value;

        try {
            const loadImage = await imageUpload(image);
            const thmbnl1 = await imageUpload(thumb1);
            const thmbnl2 = await imageUpload(thumb2);
            const addProducts = {
                title: product_name,
                quantity,
                category,
                rating,
                price,
                image: loadImage?.data?.display_url,
                product_profit,
                thumbnail1: thmbnl1?.data?.display_url,
                thumbnail2: thmbnl2?.data?.display_url,
                discount,
                description,
                location,
                shop_logo,
                shop_name,
                email,
                owner_name
            };
            // console.log(addProducts);
            axiosSecure.post('/furniture', addProducts)
                .then(res => {
                    setLoading(false)
                    if (res.data?.insertedId) {
                        Swal.fire({
                            title: "Added Successfull!",
                            text: "You clicked the button!",
                            icon: "success",
                            timer: 1000
                        });
                          return navigate('/dashboard/add-product')
                    }
                })
        }
        catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    }
    return (
        <div className="w-[90%] mx-auto dark:text-white">
            {/* <Helmet>
                <title>Product Added | Inventory M</title>
            </Helmet> */}
            <h3 className="text-3xl text-center mt-12 mb-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] flex items-center gap-2">Add Product <span><MdAddShoppingCart className="text-7xl text-black" /></span> </h3>
            <div className="container mx-auto mt-12">
                <form onSubmit={handleAddedProduct}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='dark:text-white block text-black font-medium'>
                                        Product Name
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='product_name' id='product_name' type='text' placeholder='Product name' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Location
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 '
                                        name='location' id='location' type='text' placeholder='Location' required
                                    />
                                </div>
                            </div>

                            <div className='space-y-1 w-full'>
                                <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                    Image
                                </label>
                                <div className=' bg-white w-full m-auto rounded-lg'>
                                   <div className='file_upload px-5 py-3 my-5 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                        {/* <input type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none " /> */}
                                        {
                                                showImage ? <div className='relative'><img src={showImage} alt="imageShow" className='w-full h-32' /> <span onClick={handleRemoveImage} className='absolute rounded-full -top-3 -right-6 cursor-pointer'><MdDeleteForever className='text-5xl text-red-500' /></span></div> : <input onChange={handleImage} type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none bg-transparent" placeholder='choose your image.....' />
                                            }
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Set Thumbnail1
                                    </label>
                                    <div className=' bg-white w-full m-auto rounded-lg'>
                                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                            {
                                                showThumbnail1 ? <div className="relative">
                                                    <img src={showThumbnail1} alt="imageShow" className='w-full h-32' /><span onClick={handleRemoveThumb1} className='absolute rounded-full -top-3 -right-6 cursor-pointer'><MdDeleteForever className='text-3xl text-red-500' /></span>
                                                </div> : <input onChange={handleShowThumb1} type='file' name='thumbnail1' id='thumbnail1' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                            }
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Set Thumbnail2
                                    </label>
                                    <div className=' bg-white w-full m-auto rounded-lg'>
                                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                            {
                                                showThumbnail2 ?<div className="relative">
                                                <img src={showThumbnail2} alt="imageShow" className='w-full h-32' /><span onClick={handleRemoveThumb2} className='absolute rounded-full -top-3 -right-6 cursor-pointer'><MdDeleteForever className='text-3xl text-red-500' /></span>
                                            </div> : <input onChange={handleShowThumb2} type='file' name='thumbnail2' id='thumbnail2' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                            }
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Quantity
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='quantity' id='quantity' type='number' placeholder='Enter quantiey' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Product Price
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='product_cost' id='product_cost' type='number' placeholder='Product Cost' required
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='space-y-6'>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Category
                                    </label>
                                    <select name="category" id="category" className=" w-full max-w-xs border rounded-md border-blue-400">
                                        <option disabled selected required>Select Category</option>
                                        {
                                            category?.length > 0 && category.map(categ => <option key={categ?._id} required>
                                                {categ?.category}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Rating
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='rating' id='rating' type='number' placeholder='Product Cost' required
                                    />
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor='description' className='block font-medium'>
                                    Description
                                </label>
                                <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md border-blue-400  ' name='description' placeholder="Write description"
                                ></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Product Profit
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='product_profit' id='product_profit' type='number' placeholder='Product Profit' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Discount %
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 ' name='discount' id='discount' type='number' placeholder='Discount %' required
                                    />
                                </div>
                            </div>
                            <button type='submit' className='btn w-full mt-5 p-3 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black '>
                                {loading ? (
                                    <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span>
                                ) : (
                                    'Added Product'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;