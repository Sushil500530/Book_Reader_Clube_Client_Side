/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import notImage from '../../../assets/image/product-not-fount.jpg'
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../logo/Logo";
import NavLinkManu from "./NavLinkManu";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';
import useSale from "../../../hooks/useSale";
import ForSaleData from './../../../layouts/dashboard/user/ForSaleData';

const Navbar = ({ children }) => {
    const [sales, refetch,] = useSale();
    // console.log(sales);
    // console.log(sales);
    const getPrice = sales?.reduce((total, currentItem) => total + (currentItem?.price), 0);
    // console.log(getPrice);
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
                    <NavLinkManu handleToggle={handleToggle} sales={sales} />
                </div>
                {children}
            </div>
            <Sidebar handleToggle={handleToggle} sales={sales} />
            <div className={`z-10 fixed pb-6 pt-6 bg-blue-50 -overflow-y-hidden hidden md:block lg:block md:w-[50%] lg:w-[28%] h-screen px-2 inset-y-0 right-0 transform ${active && 'translate-x-full'} dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                <div className="flex items-center justify-between">
                    <button onClick={handleToggle} className="btn outline-none border-none bg-transparent"><RxCross1 className="text-2xl" /></button>
                    <button></button>
                </div>
                <h1 className="text-xl font-bold my-5">Show Your Buy Products</h1>
                <hr className="w-[80%] h-[2px] bg-fuchsia-600 mx-auto mb-5" />
                {
                    sales?.length === 0 && <div className="flex flex-col w-full h-auto p-8 gap-5">
                        <h1 className="text-xl font-bold">Sorry! <br /> Your Product is not found</h1>
                        <img src={notImage} className="w-full h-[40vh]" alt="not-found-product" />
                    </div>
                }
                <div className="w-full h-[70vh] flex flex-col items-center justify-between">
                    <div>
                        {
                            sales?.length > 0 && sales?.map(sale => <ForSaleData key={sale?._id} sale={sale} refetch={refetch} />)
                        }
                    </div>
                    <div className=" flex items-center justify-center flex-col gap-5">
                        <div className="bg-clip-content mt-10 p-6 border-4 border-violet-300 border-dashed">
                            <h1 className="text-xl font-bold">Total Price : $ {getPrice}</h1>
                        </div>
                       <Link to='/checkout'>
                       <button onClick={() => handleToggle(!active)} disabled={sales?.length === 0} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb]  text-white text-xl hover:text-blue-300"><FaDollarSign className="text-2xl font-bold" />Checkout Now</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;