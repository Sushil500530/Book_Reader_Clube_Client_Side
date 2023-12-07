/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../logo/Logo";
import NavLinkManu from "./NavLinkManu";

const Navbar = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle text-white" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar flex items-center justify-between lg:flex-row flex-row-reverse fixed z-10 text-gray-400 ">
                    <div className="absolute w-full h-full bg-black opacity-10 -z-40 inset-0"></div>
                    <div className="flex-none lg:hidden text-white">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <NavLinkManu />
                </div>
                {children}
            </div>
            <Sidebar />
        </div>
    );
};

export default Navbar;