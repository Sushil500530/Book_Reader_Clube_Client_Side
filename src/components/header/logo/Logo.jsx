/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/logo.png';

const Logo = () => {
    return (
        <div className='flex items-center gap-5 pb-1'>
            <Link to="/" className='flex items-center justify-start w-max gap-1 relative'>
                <img src={logo} className='w-16 h-16 rounded-t-full rounded-lg' alt="logo" />
            </Link>
        </div>
    );
};

export default Logo;