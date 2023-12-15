/* eslint-disable react/prop-types */

import { IoMdShare } from "react-icons/io";

const FurniCategCard = ({ category }) => {
    console.log(category);
    return (
        <div>
            <div className="m-5 cursor-pointer w-auto h-[400px] relative group rounded-lg hover:rounded-lg overflow-hidden">
                <figure>
                    <img src={category?.image} className='w-full h-[400px]' alt="" />
                </figure>
                <div className='bg-gradient-to-b from-[#2241b0] to-[#000000] z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out'>
                    <div
                        className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                        <button className='btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#e9e6f8] hover:ease-in-out' >View Products</button>
                        <button className='btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#e9e6f8] hover:ease-in-out ' >Share Now <span><IoMdShare className="w-8 h-8" /></span></button>
                    </div>
                </div>
            </div>
            <h1 className="text-xl font-extrabold text-center mt-5">{category?.category}</h1>
        </div>
    );
};

export default FurniCategCard;