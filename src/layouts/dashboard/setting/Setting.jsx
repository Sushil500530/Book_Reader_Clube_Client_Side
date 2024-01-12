import coverImage from '../../../assets/image/setting2..gif'
import { FcBusinessman } from "react-icons/fc";
import useRole from '../../../hooks/useRole';

const Setting = () => {
    const [users, refetch, isLoading] = useRole();
    const { _id, name, email, image, role, status } = users || []
    // console.log(Object.keys(users).join(','));
    return (
        <div className='mb-12'>
            <div className="bg-[url('https://i.ibb.co/grk28gT/settng.gif')] w-full h-[60vh] bg-cover bg-no-repeat object-cover relative">
                <figure className='w-[250px] h-[250px] rounded-full absolute top-1/3 left-[25%] md:left-1/3 lg:left-[42%] border-4 border-fuchsia-500 cursor-pointer opacity-100 z-50 hover:border-blue-700'>
                    <img src={image} alt="profile_image" className='w-full h-full rounded-full' />
                </figure>
                <div className='bg-black absolute w-full h-full opacity-60 '></div>
            </div>
            <h1 className="text-2xl font-bold text-center flex items-center gap-2 justify-center mt-8"> Settings to Your Profile <FcBusinessman className="w-6 h-6" /></h1>
            <div className='flex flex-col md:flex-row lg:flex-row gap-8 w-[70%] mx-auto mt-10'>
                <div className='flex flex-col gap-2 items-center justify-center border py-8 w-full h-[350px] mt-6'>
                    <h1 className='text-xl font-bold'>Name: {name}</h1>
                    <h1 className='text-xl font-bold'>Email: {name}</h1>
                    <h1 className='text-xl font-bold'>Profile Photo</h1>
                    <figure className='w-20 h-20'>
                        <img src={image} alt="profile_image" className='w-full h-full rounded-full' />
                    </figure>
                    <h1 className='px-8 py-3 bg-fuchsia-600 text-white rounded-full text-xl font-bold mb-3'>Role: {role}</h1>
                    <h1 className='text-xl font-bold'>Status: {status}</h1>
                </div>
                <form className='flex flex-col gap-2 items-start justify-center border py-8 text-xl px-3 w-full h-auto mb-20'>
                    <label>Name*</label>
                    <input type="text" name='name' placeholder="Enter your name..." className="input input-bordered input-info w-full max-w-xs" />
                    <label>Email*</label>
                    <input type="text" name='email' placeholder="Enter your email..." className="input input-bordered input-info w-full max-w-xs" />
                    <div>
                        <h1 className='text-xl'>Profile Photo</h1>
                    </div>
                    <label>Status*</label>
                    <input type="text" name='status' placeholder="Enter your status..." className="input input-bordered input-info w-full max-w-xs" />
                    <button className='btn btn-primary' type='submit'>Save Chnages</button>
                </form>
            </div>
        </div>
    );
};

export default Setting;