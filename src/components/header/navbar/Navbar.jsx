/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../logo/Logo";
import { FaSearch } from "react-icons/fa";
import NavLinkManu from "./NavLinkManu";

const Navbar = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="relative bg-[url('https://i.ibb.co/ZfyLJjp/school-season-welcome-new-students-923676.jpg')] w-full min-h-[80vh] bg-no-repeat bg-cover object-contain">
                    <div className="bg-black w-full h-full opacity-70 relative">
                    <div className="absolute top-[40%] w-full space-y-3">
                        <h1 className="text-xl font-medium text-center text-white">Search Your Fevourite Books Here.....</h1>
                        <form className="lg:w-1/3 w-2/3 mx-auto flex items-center justify-center gap-4 bg-gray-800 shadow-lg py-3 pl-8 pr-3 rounded-full">
                            <input type="search" name="search" id="search" className="input bg-transparent text-white border border-blue-500 w-full focus:border-fuchsia-500" />
                            <button type="submit" className="btn border-none bg-transparent hover:text-blue-500 hover:bg-transparent text-2xl pl-0 text-white"><FaSearch /></button>
                        </form>
                    </div>
                        <div className="w-full navbar flex items-center justify-between lg:flex-row flex-row-reverse">
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
                    </div>
                </div>
                {children}
            </div>
            <Sidebar />
        </div>
    );
};

export default Navbar;