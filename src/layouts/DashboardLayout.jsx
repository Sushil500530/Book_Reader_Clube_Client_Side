import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../components/header/logo/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdDashboardCustomize } from "react-icons/md";
import FooterManu from "./dashboard/FooterManu";
import useRole from './../hooks/useRole';
import GuestManu from "./dashboard/manu/GuestManu";
import ManagerManu from "./dashboard/manu/ManagerManu";
import AdminManu from "./dashboard/manu/AdminManu";
import Loader from "../shared/Loader";
import { RiMenu3Line } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = () => {
    const [users, refetch, isLoading] = useRole();
    const [isActive, setIsActive] = useState(true);
    const { user, logoutUser } = useAuth();

    refetch();
    if (isLoading) {
        return <Loader />
    }
    // console.log(users);
    const handleReverse = () => {
        setIsActive(!isActive)
    }

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }

    // console.log(user)
    return (
        <div>
            {/* <h1 className="text-3xl font-bold text-center">Dashboard</h1> */}
            <div className='bg-white shadow-2xl z-10 fixed top-0 pt-1 text-gray-800 flex justify-between lg:hidden p-2 w-full'>
                <div className="w-auto">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <button
                    onClick={handleReverse}
                    className='btn w-auto h-full dark:bg-zinc-800 relative top-3 bg-transparent border-none outline-none mobile-menu-button focus:outline-none dark:text-white'> {
                        isActive === true ?
                            <IoMenuOutline className='h-8 w-8 font-bold text-black dark:text-white' /> :
                            <RxCross1 className='h-7 w-8 font-bold text-black  dark:text-white' />
                    }
                </button>
            </div>
            <div className="flex w-auto h-full bg-blue-50 ">
                <div className={`z-[1] fixed flex flex-col justify-between pb-12 shadow bg-blue-50 overflow-x-hidden w-64 h-screen px-2 inset-y-0 left-0 transform ${isActive && '-translate-x-full '} lg:translate-x-0 transition duration-200 ease-in-out`}>
                    <div className="">
                        <div className="mb-12 pt-2 px-4">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <NavLink to='/dashboard' className={({ isActive }) =>
                            ` flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${isActive ? 'text-blue-500 ' : ''
                            }`} >
                            <span>{<MdDashboardCustomize className="w-5 h-8 mr-1 " />}</span>
                            Dashboard
                        </NavLink>
                        {
                            users?.role === 'guest' && <GuestManu setIsActive={setIsActive} />
                        }
                        {
                            users?.role === 'manager' && <ManagerManu setIsActive={setIsActive} />
                        }
                        {
                            users?.role === 'admin' && <AdminManu setIsActive={setIsActive} />
                        }
                    </div>
                    <div>
                        <FooterManu setIsActive={setIsActive} />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="z-10 fixed top-0 pt-1 bg-blue-50 shadow-xl text-white right-0 flex items-center justify-end h-16 w-full lg:w-[calc(100%-256px)] px-5">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button " className="btn btn-ghost btn-circle avatar ring ring-fuchsia-500">
                                <div className="rounded-full">
                                    <img src={user?.photoURL} alt="profile" className="w-full h-full" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 space-y-2 shadow menu menu-sm dropdown-content !bg-white rounded-box w-52 text-[#d344ff]">
                                <h2 className="text-xl font-bold capitalize">{user?.displayName}</h2>
                                <h4 className="text-lg font-medium capitalize text-fuchsia-400">{users?.role}</h4>
                                <hr />
                                <Link to={'/dashboard/settings'} className="text-xl font-medium capitalize">Profile</Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 z-10">
                                    <span><FaSignOutAlt /></span>
                                    Logout
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div onClick={() => setIsActive(true)} className="ml-0 md:ml-0 lg:ml-[260px] w-full h-full min-h-[calc(100vh-80px)] px-5 bg-blue-50  text:bg-zinc-800 mt-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;