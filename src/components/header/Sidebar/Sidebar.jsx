import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import ManuList from "../../../shared/manuItems/ManuList";
import {FaHome, FaSignOutAlt, FaUserPlus} from 'react-icons/fa';
import { MdLogin } from "react-icons/md";
const Sidebar = () => {
    const {user,logoutUser} = useAuth()
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }
    return (
        <>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-blue-50 flex items-center text-black">
                    {/* Sidebar content here */}
                    <ManuList address={'/'} linkTitle={"Home"} icon={FaHome} />
                    <ManuList address={'about'} linkTitle={"About"} icon={FaHome} />
                    {
                        user?.email ? <div className="flex gap-3 mt-5">
                            {/* <div className="avatar">
                                <div className="w-12 rounded-full ring ring-white ring-offset-base-100 ring-offset-1">
                                    <img src={user?.photoURL} alt="profile" />
                                </div>
                            </div> */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button " className="btn btn-ghost btn-circle avatar ring ring-white">
                                    <div className="rounded-full">
                                        <img src={user?.photoURL} alt="profile" className="w-full h-full" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 -mr-32 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>Dashboard</a></li>
                                    <li><a>Profile</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            <button onClick={handleLogout} className="bg-[#ef0d4d] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                <span><FaSignOutAlt /></span>
                                Logout
                            </button>
                        </div> :
                            <>
                                <ManuList address={'login'} linkTitle={"Login"} icon={MdLogin} />
                                <span className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] rounded-md text-white animate-bounce hover:animate-none mt-5">
                                    <ManuList address={'signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                                </span>
                            </>
                    }
                </ul>
            </div>
        </>
    );
};

export default Sidebar;