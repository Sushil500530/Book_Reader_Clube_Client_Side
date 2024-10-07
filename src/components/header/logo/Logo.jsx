/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/logo-image.jpg';

const Logo = ({isScrolled}) => {
    return (
        <div className='flex items-center gap-5 pb-1'>
            <Link to="/" className='flex items-center justify-start w-52 gap-4'>
                <img src={logo} className='w-14 h-14 rounded-t-full rounded-lg' alt="logo" />
                <h1 className={`capitalize text-xl md:text-2xl lg:text-2xl font-extrabold text-center ${isScrolled ? "scroll-text-gradient" : " text_gradient"}`}><span className='text-xl md:text-2xl lg:text-2xl font-extrabold text-center '>Furni</span> <br /> <span className='mt[-5] '>Track</span> </h1>
            </Link>
        </div>
    );
};

export default Logo;