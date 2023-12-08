import { FaSearch } from "react-icons/fa";
import image from '../../assets/image/banner/banner-image.jpg'
const Banner = () => {
    return (
        <div className='w-full -z-40 h-[80vh] text-white'>
            <div className="w-full h-full absolute top-0 left-0 bg-black ">
                <img src={image} className="w-full h-full opacity-50" alt="" />
            </div>
            <div className="absolute top-[40%] w-full space-y-3">
                <h1 className="text-xl font-medium text-center text-white">Search Your Fevourite Books Here.....</h1>
                <form className="lg:w-1/3 w-2/3 mx-auto flex items-center justify-center gap-4 bg-gray-800 shadow-lg py-3 pl-8 pr-3 rounded-full">
                    <input type="search" name="search" id="search" className="input bg-transparent text-white border border-blue-500 w-full focus:border-fuchsia-500" />
                    <button type="submit" className="btn border-none bg-transparent hover:text-blue-500 hover:bg-transparent text-2xl pl-0 text-white"><FaSearch /></button>
                </form>
            </div>
        </div>
    );
};

export default Banner;