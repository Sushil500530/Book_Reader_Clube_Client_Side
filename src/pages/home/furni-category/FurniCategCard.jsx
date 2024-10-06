/* eslint-disable react/prop-types */

import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const FurniCategCard = ({ category }) => {
    // console.log(category);
    return (
        <div>
            <div className="m-5 cursor-pointer w-auto h-[280px] md:h-[320px] lg:h-[350px] relative group rounded-lg hover:rounded-lg overflow-hidden">
                <figure>
                    <img src={category?.image} className='w-full h-[280px] md:h-[320px] lg:h-[350px] ' alt="category-image" />
                </figure>
                <div className='bg-color z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white transition duration-200 ease-in-out group'>
                    <div className='relative w-full h-auto  top-[30%] flex flex-col items-center justify-center z-40'>
                        <Link to={`/category/${category?.category}`}>
                            <button className='btn custom-bg-color px-8 flex items-center justify-center rounded-full text-[18px] font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl border-none mt-5 group-hover:text-[#e9e6f8]' >View Products</button>
                        </Link>
                        <button className='btn custom-bg-color px-8 flex items-center justify-center rounded-full text-[18px] font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl border-none mt-5 group-hover:text-[#e9e6f8] ' >Share Now <span><IoMdShare className="w-8 h-8" /></span></button>
                    </div>
                </div>
            </div>
            <h1 className="text-xl font-extrabold text-center mt-5">{category?.category}</h1>
        </div>
    );
};

export default FurniCategCard;