/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../logo/Logo";
import NavLinkManu from "./NavLinkManu";
import { useState } from "react";
import { RxCross1 } from 'react-icons/rx';

const Navbar = ({ children }) => {
    const [active, setActive] = useState(true);
    const handleToggle = () => {
        setActive(!active)
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle text-white" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar flex items-center justify-between lg:flex-row flex-row-reverse fixed z-10">
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
                    <NavLinkManu handleToggle={handleToggle} />
                </div>
                {children}
            </div>
            <Sidebar handleToggle={handleToggle} />
            <div className={`z-10 fixed pb-6 pt-6 bg-blue-50 -overflow-y-hidden hidden md:block lg:block md:w-[50%] lg:w-[28%] h-screen px-2 inset-y-0 right-0 transform ${active && 'translate-x-full'} dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                <div className="flex items-center justify-between">
                    <button onClick={handleToggle} className="btn outline-none border-none bg-transparent"><RxCross1 className="text-2xl" /></button>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;