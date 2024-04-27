import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/image/authentication/undraw_fingerprint_login_re_t71l.svg'
import Container from '../../shared/container/Container';
import SocialAccount from '../../shared/socialAccount/SocialAccount';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { FaSpinner } from 'react-icons/fa';
import { useState } from 'react';

const LoginPage = () => {
    const axiosPbulic = useAxiosPublic();
    const { loginUser, googleSignIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('button clieked', email, password);
        await loginUser(email, password)
            .then(res => {
                if (res.user) {
                    navigate(location?.state ? location?.state : '/')
                    toast.success('Logged in successfully');
                    return setLoading(false)
                }

            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message)
            }
            )

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL,
                    role: 'guest',
                    status: 'Verified',
                };
                axiosPbulic.post('/users', userInfo)
                    .then(() => { })
                    .catch(error => toast.error(error.message))
                // console.log(location?.state);
                navigate(location?.state ? location?.state : '/');
                return toast.success('Login Successfull...!');

            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message)
            })

    }

    return (
        <div className="bg-[url('https://i.postimg.cc/RFDMMbwn/bg-image1.jpg')] w-full min-h-screen bg-cover bg-no-repeat ">
            <Container> 
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 dark:bg-zinc-800 dark:text-white mb-12">
                    <div className="w-full min-h-[70vh] lg:w-3/5 flex items-center justify-center p-5 rounded-md">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card-body p-0 lg:p-8 m-5 w-full lg:w-1/2 min-h-[70vh] text-white bg-gradient-to-t from-zinc-800 pb-8 ">
                        <form onSubmit={handleSubmit} className="p-5 space-y-3">
                            <h1 className="text-3xl  font-bold mb-12">Please Login🤔</h1>
                            <div className="space-y-3">
                                <label className="text-[18px]  font-medium">Email Address</label>
                                <input type="email" name="email" className="input input-bordered input-info bg-transparent text-gray-200 w-full border-blue-500 dark:text-black mb-1" id="" placeholder="Enter your username or address..." required />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[18px] font-medium">Password</label>
                                <input type="password" name="password" className="input input-bordered input-info bg-transparent text-gray-200 w-full border-blue-500 dark:text-black" id="" placeholder="Enter your password..." required />
                            </div>
                            <p className="text-base font-medium my-8">Don&apos;t have an account yet?{' '} Please <Link to='/signup' className="text-blue-500 underline">Sign up</Link></p>
                            <button type='submit' className="btn px-8 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] outline-none border-none font-medium hover:text-blue-500 w-full">
                                {loading ? (
                                    <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span>
                                ) : (
                                    'Sign in'
                                )}

                            </button>
                        </form>
                        <div className="w-[90%] md:w-2/3 lg:w-[80%] mx-auto pb-6">
                            <div className="divider text-2xl">Or</div>
                            <div className="space-y-3 mt-6 w-full">
                                <SocialAccount handleGoogleSignIn={handleGoogleSignIn} name={'Sign in With Google'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div>
    );
};

export default LoginPage;