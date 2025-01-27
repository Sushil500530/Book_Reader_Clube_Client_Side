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
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

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
                    className=' hover: bg-blue-50 px-4 rounded [transition:0.3s] py-2 w-auto h-full relative top-3 bg-transparent hover:text-white border-none outline-none mobile-menu-button focus:outline-none dark:text-white'> {
                        isActive === true ?
                            <IoMenuOutline size={28} color="#000" /> :
                            <RxCross1 size={28} color="#000" />
                    }
                </button>
            </div>
            <div className="flex w-auto h-full  bg-[#f2f4f7] ">
                <div className={`z-[999] fixed flex flex-col justify-between pb-12 shadow  bg-[#f2f4f7] overflow-x-hidden w-64 h-screen px-2 inset-y-0 left-0 transform ${isActive && '-translate-x-full '} lg:translate-x-0 transition duration-200 ease-in-out sidebar`}>
                    <div className="">
                        <div className="mb-12 pt-2 px-4">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <NavLink
                            to='/dashboard'
                            onClick={handleReverse}
                            className={({ isActive }) =>
                                ` flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  
                         ${isActive ? 'text-blue-500 ' : ''
                                }`} >
                            <span>
                                <MdDashboardCustomize className="w-5 h-8 mr-1 " />
                            </span>
                            Dashboard
                        </NavLink>
                        {
                            users?.role === 'guest' &&
                            <GuestManu
                                setIsActive={setIsActive}
                            />
                        }
                        {
                            users?.role === 'manager' &&
                            <ManagerManu
                                setIsActive={setIsActive}
                            />
                        }
                        {
                            users?.role === 'admin' &&
                            <AdminManu
                                setIsActive={setIsActive}
                            />
                        }
                    </div>
                    <div>
                        <FooterManu
                            setIsActive={setIsActive}
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="z-10 fixed top-0 pt-1  bg-[#f2f4f7] shadow-xl text-white right-0 flex items-center justify-end h-16 w-full lg:w-[calc(100%-256px)] px-5">
                        <div className="dropdown dropdown-end">
                            <div
                                abIndex={0}
                                role="button "
                                className="btn btn-ghost btn-circle avatar ring ring-fuchsia-500">
                                <div className="rounded-full">
                                    <img
                                        src={user?.photoURL}
                                        alt="profile"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            {/* add here  text  */}
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setIsActive(true)}
                    className="ml-0 md:ml-0 lg:ml-[260px] w-full h-full min-h-[calc(100vh-80px)] px-5 bg-[#f2f4f7]  text:bg-zinc-800 mt-20"
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;