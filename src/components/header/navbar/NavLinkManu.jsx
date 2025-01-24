/* eslint-disable react/prop-types */
import ManuList from "../../../shared/manuItems/ManuList";
import { FaHome, FaSignOutAlt, FaBlog } from "react-icons/fa";
import { GiFurnace } from "react-icons/gi";
import { MdAddShoppingCart, MdExpandLess } from "react-icons/md";
// import { FaUserPlus } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import { useAuth } from './../../../hooks/useAuth';
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { FcAbout, FcContacts } from "react-icons/fc";

const NavLinkManu = ({ handleToggle, sales }) => {
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
                <ul className="menu menu-horizontal flex">
                    {/* Navbar menu content here */}
                    <ManuList
                        address={'/'}
                        linkTitle={"Home"}
                        icon={FaHome}
                    />
                    <ManuList
                        address={'all-shop'}
                        linkTitle={"All Shop"}
                        icon={GiFurnace}
                    />
                    {
                        user?.email && <>
                            <ManuList
                                address={'/dashboard'}
                                linkTitle={"Dashboard"}
                                icon={MdOutlineDashboardCustomize}
                            />
                            <span className="hidden md:block lg:block">
                                <button onClick={handleToggle}
                                    className={`flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative`}>
                                    <span>{<MdShoppingBasket className="w-5 h-8 mr-1 " />}</span>
                                    My Cart
                                    <div className="badge text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] absolute -top-2 border-none outline-none left-1/2 text-[18px]">{sales?.length}</div>
                                </button>
                            </span>
                        </>
                    }

                    <ManuList
                        address={'create-shop'}
                        linkTitle={"Create Shop"}
                        icon={MdAddShoppingCart}
                    />

                    <div className="relative group font-semibold capitalize text-lg">
                        <button className=" flex items-center gap-3 text-base font-medium px-4 py-2 mt-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 group">
                            Pages <MdExpandLess className="text-2xl rotate-180 group-hover:rotate-0 w-full " />
                        </button>
                        {/* Sub-menu dropdown (if any) */}
                        <div className="absolute group-hover:block mt-6 rounded dropdown-content z-50 flex  flex-col bg-gray-100  px-4 text-gray-800 shadow-xl transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 w-36">
                            <NavLink
                                to='about'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                             ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FcAbout className="w-5 h-8 mr-1 " />}</span>
                                About
                            </NavLink>
                            <NavLink
                                to='contact'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                             ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FcContacts className="w-5 h-8 mr-1 " />}</span>
                                Contact
                            </NavLink>
                            <NavLink
                                to='blog'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                            ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FaBlog className="w-5 h-8 mr-1 " />}</span>
                                Blog
                            </NavLink>
                        </div>
                    </div>
                    {/* <ManuList address={''} linkTitle={""} icon={} /> */}
                    {
                        user?.email ? <div className="flex gap-3 ml-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button " className="btn btn-ghost btn-circle avatar ring ring-white">
                                    <div className="rounded-full">
                                        <img
                                            src={user?.photoURL}
                                            alt="profile"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content !bg-white rounded-box w-52 text-[#d344ff]">
                                    <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
                                    <Link to='/dashboard/settings'><li><a>Profile</a></li></Link>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 z-10">
                                        <span><FaSignOutAlt /></span>
                                        Logout
                                    </button>
                                </ul>
                            </div>

                        </div> :
                            <>
                                <ManuList address={'login'} linkTitle={"Login"} icon={MdLogin} />
                                {/* <span className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] rounded-md text-white animate-bounce hover:animate-none ">
                                    <ManuList address={'signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                                </span> */}
                            </>
                    }
                </ul>
            </div>
        </>
    );
};

export default NavLinkManu;