import { MdOutlineFavorite } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { Link, NavLink, Outlet } from "react-router-dom";

const UserHome = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  border-b-2">
                <NavLink
                    to={'/dashboard/favorites'}
                    className={({ isActive }) =>
                        ` flex items-center justify-center text-[18px] font-medium px-4 py-2 transform hover:text-blue-500 transition-all ease-in  ${isActive ? 'text-blue-500' : ''
                        }`} >
                    <div className="">
                        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">Favorite<MdOutlineFavorite className="text-fuchsia-600 w-7 h-7" /> Products </h1>
                    </div>
                </NavLink>
                <NavLink
                    to={'/dashboard/buy-products'}
                    className={({ isActive }) =>
                        ` flex items-center justify-center text-[18px] font-medium px-4 py-2 transform hover:text-blue-500 transition-all ease-in  ${isActive ? 'text-blue-500' : ''
                        }`} >
                    <div className="">
                        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">Buy Products <MdDateRange className="text-fuchsia-600 w-7 h-7" /></h1>
                    </div>
                </NavLink>

                <div className="">
                    <h1 className="text-[17px] font-bold flex items-center justify-center gap-2">Do You Want to Sell Your Products?</h1>
                    <Link to='/dashboard/create-shop'>
                        <p className="text-blue-500 hover:link-hover text-center mt-2">Please Click Here</p>
                    </Link>
                </div>
                <NavLink
                    to={'/dashboard/profile'}
                    className={({ isActive }) =>
                        ` flex items-center justify-center text-[18px] font-medium px-4 py-2 transform hover:text-blue-500 transition-all ease-in  ${isActive ? 'text-blue-500' : ''
                        }`} >
                    <div className="">
                        <h1 className="text-2xl font-bold flex items-center justify-center gap-2  ">Your Profile<FcManager className="text-fuchsia-600 w-7 h-7" /></h1>
                    </div>
                </NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserHome;