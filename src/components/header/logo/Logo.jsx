import './logo.css'
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/logo-image.jpg';


const Logo = () => {
    return (
        <div className='flex items-center gap-5 pb-1'>
            <Link to="/" className='flex items-center justify-center w-52 gap-4'>
                <img src={logo} className='w-14 h-14 rounded-t-full rounded-lg' alt="logo" />
                {/* <div className='w-[60px] h-[60px] relative origin-center rotate-45 bg-gradient-to-l from-[#fe0fda] to-[#1c45d9]'> 
           <div className='text-2xl font-extrabold text-center origin-center rotate-[-50deg] skew-x-6 absolute top-4 w-full text-white'><h1>BRC</h1></div>
            </div> */}
                <h1 className="gradient-text capitalize text-xl md:text-2xl lg:text-2xl font-extrabold text-center "><span className='gradient-text capitalize text-xl md:text-2xl lg:text-2xl font-extrabold text-center '>Furni</span> <br /> <span className='mt[-5] gradient-text capitalize text-xl md:text-2xl lg:text-2xl font-extrabold text-center '>Track</span> </h1>
            </Link>
            {/* <h1 className=" capitalize text-xl md:text-2xl lg:text-3xl font-extrabold text-center "><span>Book</span> <br /> <span className='mt[-5]'>Reader</span> <br /> <span>Clube</span></h1> */}

        </div>
    );
};

export default Logo;