import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { imageUpload } from '../../api/getData';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import Container from '../../shared/container/Container';
import { useAuth } from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import { useNavigate } from 'react-router-dom';

const CreateShop = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [users, ,] = useRole();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log(user?.photoURL);

    const handleCreateShop = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (users?.role === 'manager') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Shop is Existed in!",
            });
            return setLoading(false)
        }
        const form = e.target;
        const shop_name = form.shop_name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const location = form.location.value;
        try {
            const loadImage = await imageUpload(image);
            const create_shop = {
                shop_name,
                shop_logo: loadImage?.data?.display_url,
                description,
                location,
                image: user?.photoURL,
                owner_name: user?.displayName,
                email: user?.email,
                role: 'manager',
            };
            // console.log(create_shop);
            await axiosSecure.patch('/managers', create_shop)
                .then(res => {
                    // console.log(res.data);
                    setLoading(false)
                    if (res.data?.insertedId) {
                        Swal.fire({
                            title: "Create Successfull!",
                            text: "You clicked the button!",
                            icon: "success",
                            timer: 1000
                        });
                        return navigate('/dashboard/add-product')
                    }
                })
        }
        catch (error) {
            setLoading(false)
            toast.error('Please Choose file or select Image!');
        }
    }
    return (
        <Container>
            <div className='lg:w-1/2 w-full bg-base-100 shadow mx-auto pt-3 px-10 pb-12 '>
                {/* <Helmet>
                <title>Create Shop | Inventory M </title>
            </Helmet> */}
                <h2 className="text-2xl font-bold text-center dark:text-white my-12 flex items-center justify-center gap-2">Create a New Shop   <span className="mr-3 text-5xl text-center text-indigo-500">{<MdAddShoppingCart />}</span></h2>
                <form onSubmit={handleCreateShop}>
                    <div className='grid grid-cols-1 dark:text-white '>
                        <div className='space-y-6'>
                            <div className='flex gap-4 items-center justify-center'>
                                <div className='space-y-2 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium dark:text-white'>
                                        Shop Name
                                    </label>
                                    <input
                                        className=' w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 '
                                        name='shop_name' id='shop_name' type='text' placeholder='shop name' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block text-black font-medium dark:text-white'>
                                        Location
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md  border-blue-400 '
                                        name='location' id='location' type='text' placeholder='Location' required
                                    />
                                </div>
                            </div>
                            <div className=' py-4 bg-white w-full m-auto rounded-lg'>
                                <label className="block text-black font-medium dark:text-white"> Shop Logo</label>
                                <div className='file_upload px-5 py-3 my-5 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                    <input type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                </div>
                            </div>
                            <div className='space-y-1 '>
                                <label htmlFor='description' className='block font-medium'>
                                    Description
                                </label>
                                <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md  border-blue-400 ' name='description' placeholder="Write description"
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
        </Container>
    );
};

export default CreateShop;