import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../components/header/logo/Logo";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import ManuList from "../shared/manuItems/ManuList";
import { FaHome } from "react-icons/fa";
const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(true);
    const handleReverse = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            {/* <h1 className="text-3xl font-bold text-center">Dashboard</h1> */}
            <div className='bg-base-300 border text-gray-800 flex justify-between lg:hidden'>
                <div className="w-auto">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <button onClick={handleReverse} className='btn w-auto h-full dark:bg-zinc-800 relative top-3 bg-transparent border-none outline-none mobile-menu-button focus:outline-none dark:text-white'> {
                    isActive === true ? <IoMenuOutline className='h-8 w-8 font-bold text-black focus focus:text-blue-500' /> :   <RxCross1 className='h-7 w-8 font-bold text-black focus focus:text-blue-500' />
                }
                </button>
            </div>
             <div className="flex w-auto h-full">
                <div className={`z-10 pt-20 fixed flex flex-col justify-between pb-6  bg-blue-50 overflow-x-hidden w-64 h-screen px-2 inset-y-0 left-0 transform ${isActive && '-translate-x-full '} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                  <ManuList address={'dashboard'} linkTitle={'Dashboard'} icon={FaHome} />
                </div>
                <div className="w-full h-[100vh] bg-white">
                    <h1 className="text-3xl font-bold text-center">Right Side</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;