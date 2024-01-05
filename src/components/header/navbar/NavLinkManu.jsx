/* eslint-disable react/prop-types */
import ManuList from "../../../shared/manuItems/ManuList";
import { FaHome, FaSignOutAlt, } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import { useAuth } from './../../../hooks/useAuth';
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinkManu = ({ handleToggle }) => {
    const { user, logoutUser } = useAuth();
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal flex text-black">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"} icon={FaHome} />

                    {
                        user?.email && <>
                            <ManuList address={'/dashboard'} linkTitle={"Dashboard"} icon={MdOutlineDashboardCustomize} />
                            <span className="hidden md:block lg:block">
                                <button onClick={handleToggle}
                                    className={`flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative`}>
                                    <span>{<MdShoppingBasket className="w-5 h-8 mr-1 " />}</span>
                                    My Cart
                                    <div className="badge text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] absolute -top-2 border-none outline-none left-1/2 text-[18px]">+99</div>
                                </button>
                            </span>
                        </>
                    }
                    <ManuList address={'about'} linkTitle={"About"} icon={FcAbout} />
                    <ManuList address={'create-shop'} linkTitle={"Create Shop"} icon={MdAddShoppingCart} />
                    {
                        user?.email ? <div className="flex gap-3 ml-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button " className="btn btn-ghost btn-circle avatar ring ring-white">
                                    <div className="rounded-full">
                                        <img src={user?.photoURL} alt="profile" className="w-full h-full" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Profile</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                            <button onClick={handleLogout} className="bg-[#ef0d4d] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                <span><FaSignOutAlt /></span>
                                Logout
                            </button>
                        </div> :
                            <>
                                <ManuList address={'login'} linkTitle={"Login"} icon={MdLogin} />
                                <span className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] rounded-md text-white animate-bounce hover:animate-none ">
                                    <ManuList address={'signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                                </span>
                            </>
                    }
                </ul>

            </div>
        </>
    );
};

export default NavLinkManu;