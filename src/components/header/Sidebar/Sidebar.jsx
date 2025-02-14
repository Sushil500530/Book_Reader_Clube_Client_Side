/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import ManuList from "../../../shared/manuItems/ManuList";
import { FaBlog, FaHome, FaSignOutAlt, } from 'react-icons/fa';
import { MdAddShoppingCart, MdExpandLess, MdLogin, MdOutlineDashboardCustomize, MdShoppingBasket } from "react-icons/md";
import { FcAbout, FcContacts } from "react-icons/fc";
import { NavLink } from "react-router-dom";


const Sidebar = ({ handleToggle, sales,closeDrawer,isScrolled }) => {
    const { user, logoutUser } = useAuth()
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }
    return (
        <>
            <div className="drawer-side z-30">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay">

                </label>
                <ul onClick={closeDrawer}  className={`menu w-80 min-h-full bg-blue-50 flex items-start pl-12 text-black fixed overflow-y-auto ${isScrolled ? "top-[76px]" : "top-0"}`}>
                    <ManuList
                        address={'/'}
                        linkTitle={"Home"}
                        icon={FaHome}
                    />
                    {
                        user?.email && <>
                            <ManuList
                                address={'/dashboard'}
                                linkTitle={"Dashboard"}
                                icon={MdOutlineDashboardCustomize}
                            />
                            <span className="block md:hidden lg:hidden">
                                <NavLink
                                    to='my-cart'
                                    className={` flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                                    `} >
                                    <span>{<MdShoppingBasket className="w-5 h-8 mr-1 " />}</span>
                                    My Cart  <div className="badge w-14 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] absolute top-2 border-none outline-none left-[90%] text-[18px] p-4">{sales?.length}</div>
                                </NavLink>
                            </span>
                            <span className="hidden md:block lg:block">
                                <button onClick={handleToggle}
                                    className={`flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative`}>
                                    <span>{<MdShoppingBasket className="w-5 h-8 mr-1 " />}</span>
                                    My Cart <div className="badge w-14 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] absolute top-2 border-none outline-none left-[90%] text-[18px] p-4">{sales?.length}</div>
                                </button>
                            </span>
                        </>
                    }
                    {/* <ManuList
                        address={'about'}
                        linkTitle={"About"}
                        icon={FcAbout}
                    /> */}
                    <ManuList
                        address={'create-shop'}
                        linkTitle={"Create Shop"}
                        icon={MdAddShoppingCart}
                    />
                    <div className="group relative ">
                        <button className=" flex items-center gap-3 text-base font-medium px-4 py-2 mt-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 group">
                            Pages <MdExpandLess className="text-2xl rotate-180 group-hover:rotate-0 w-full group-hover:visible" />
                        </button>
                        <div className="transition transform translate-y-8 ease-in-out invisible absolute group-hover:visible top-0 left-32 w-full h-auto text-white group-hover:translate-y-5 bg-base-300 pb-5">
                            <NavLink
                                to='about'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium px-4 py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                             ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FcAbout className="w-5 h-8 mr-1 " />}</span>
                                About
                            </NavLink>
                            <NavLink
                                to='contact'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium px-4 py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                             ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FcContacts className="w-5 h-8 mr-1 " />}</span>
                                Contact
                            </NavLink>
                            <NavLink
                                to='blog'
                                className={({ isActive }) => ` flex items-center text-purple-500 font-medium px-4 py-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 
                            ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500' : 'text-purple-500'}`} >
                                <span>{<FaBlog className="w-5 h-8 mr-1 " />}</span>
                                Blog
                            </NavLink>
                        </div>
                    </div>
                    {
                        user?.email ? <div className="flex gap-3 mt-5">
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button "
                                    className="btn btn-ghost btn-circle avatar ring ring-white"
                                >
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
                                    className="mt-3 -mr-32 z-[1] p-2 shadow menu bg-white menu-sm dropdown-content  rounded-box w-52"
                                >
                                    <li><a>Dashboard</a></li>
                                    <li><a>Profile</a></li>
                                    <li
                                        onClick={handleLogout}
                                    >
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 -z-10 "
                            >
                                <span><FaSignOutAlt /></span>
                                Logout
                            </button>
                        </div> :
                            <>
                                <ManuList
                                    address={'login'}
                                    linkTitle={"Login"}
                                    icon={MdLogin}
                                />
                            </>
                    }
                </ul>
            </div>
        </>
    );
};

export default Sidebar;