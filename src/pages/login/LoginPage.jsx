import { Link } from 'react-router-dom';
import loginImage from '../../assets/image/authentication/undraw_fingerprint_login_re_t71l.svg'
import { FcGoogle } from 'react-icons/fc';
import Container from '../../shared/container/Container';
const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button clieked');
    }
    return (
        <Container>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-7 gap-5 dark:text-white mb-12">
                <div className="bg-[url('https://i.ibb.co/SdywPYN/Animated-Shape.png')] w-full min-h-[50vh] lg:w-3/5 lg:h-[80vh] bg-no-repeat bg-center bg-cover flex items-center justify-center p-5 rounded-md">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card-body p-0 lg:p-8 border m-5 w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="p-5 space-y-3">
                        <h1 className="text-3xl font-bold mb-12">Please Login🤔</h1>
                        <div className="space-y-3">
                            <label className="text-xl font-medium">Username or Email Address</label>
                            {/* <input type="email" name="email"  {...register("email", { required: true })} className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-zinc-800" id="" placeholder="Enter your username or address" />
                    {errors.email && <span className="text-red-500">email is required</span>} */}
                        </div>
                        <div className="space-y-3">
                            <label className="text-xl font-medium">Password</label>
                            {/* <input type="password" name="password" {...register("password", { required: true })} className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your password" />
                    {errors.password && <span className="text-red-500">password is required</span>} */}
                        </div>
                        <p className="text-base font-medium my-8">Don&apos;t have an account yet?{' '} Please <Link to='/signup' className="text-blue-500 underline">Sign up</Link></p>
                        <button type='submit' className="btn px-8 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-blue-500 w-full">Sign in</button>
                    </form>
                    <div className="w-3/5 mx-auto pb-6">
                        <div className="divider text-2xl">Or</div>
                        <div className="space-y-3 mt-6">
                            <h1 className="flex items-center justify-center py-2 border rounded-full text-3xl ease-in gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600"><FcGoogle></FcGoogle> <span className="text-xl font-bold">Sign in With Google</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;