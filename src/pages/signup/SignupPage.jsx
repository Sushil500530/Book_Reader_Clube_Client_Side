import { Link } from 'react-router-dom';
import loginImage from '../../assets/image/authentication/undraw_secure_files_re_6vdh.svg'
import { FcGoogle } from 'react-icons/fc';
import Container from '../../shared/container/Container';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';


const SignupPage = () => {
    const {createUser} = useAuth();
    const { register, handleSubmit,formState: { errors }, } = useForm();
    const handleSignIn = (data) => {

        
        console.log({
            name:data.name,
            email:data.email,
            password:data.password,

            });


    }
    return (
        <Container>
            <div className="container mx-auto dark:text-white mb-12 flex flex-col lg:flex-row items-center justify-center mt-7 gap-5">
                <div className="bg-[url('https://i.ibb.co/SdywPYN/Animated-Shape.png')] w-full lg:w-3/5 h-[80vh] bg-no-repeat bg-center bg-cover flex items-center justify-center p-5 rounded-md">
                    <img src={loginImage}  alt="" />
                </div>
                <div className="card-body p-0 lg:p-8 border m-5 w-full lg:w-1/2">
                    <form onSubmit={handleSubmit(handleSignIn)} className="p-5 space-y-3">
                        <h1 className="text-3xl font-bold mb-12">Please Register Now🤠</h1>
                        <div className="space-y-3">
                            <label className="text-xl  font-medium">Username </label>
                            <input type="text"  {...register("name", { required: true })} name="name" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black mb-2" id="" placeholder="Enter your name" />
                        {errors.name && <span className="text-red-500 mt-2">name is required!</span>}
                        </div>
                        <div className="space-y-3">
                            <label className="text-xl  font-medium">Email Address</label>
                            <input type="email"  {...register("email", { required: true })} name="email" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black mb-1" id="" placeholder="Enter your username or address" />
                        {errors.email && <span className="text-red-500 mt-1">email is required!</span>}
                        </div>
                        <div className="space-y-3">
                            <label className="text-xl font-medium">Password</label>
                            <input type="password"  {...register("password", {
                            required: true, minLength: 6,
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })} name="password" className="input bg-[#F3F3F3] w-full border-blue-500 dark:text-black" id="" placeholder="Enter your password" />
                        {errors.password?.type === "minLength" && <span className="text-red-600">password length must be 6 characters or longer!</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character!</span>}
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">password is required!</p>
                        )} 
                        </div>
                        <p className="text-base font-medium my-8"> have an account?{' '} Please <Link to='/login' className="text-blue-500 underline">Sign In</Link></p>
                        <button type='submit' className="btn px-8 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-blue-500 w-full">Sign Up</button>
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

export default SignupPage;