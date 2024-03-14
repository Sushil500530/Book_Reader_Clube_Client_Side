import { FaSearch } from "react-icons/fa";
// import image from '../../assets/image/banner/banner-image.jpg'
// import image from '../../assets/image/AgeE.gif'
import image from '../../assets/image/banner5.gif'
const Banner = () => {
    return (
        <div className='w-full -z-40 h-screen'>
             <div className="w-full h-full absolute top-0 left-0 bg-black  opacity-90 ">
                <img src={image} className="w-full h-full opacity-70" alt="banner-image" />
            </div>
            <div className="absolute top-[43%] w-full space-y-3">
                <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center absolute -top-32 left-0 right-0">Your New Collection <br />is Ready</h1>
                <h1 className="text-xl font-medium text-center text-white">Search Your Fevourite Furniture Here.....</h1>
                <form className="lg:w-1/3 w-2/3 mx-auto flex items-center justify-center gap-4 bg-gray-800 shadow-lg py-3 pl-8 pr-3 rounded-full">
                    <input type="search" name="search" id="search" className="input bg-transparent text-white border border-blue-500 w-full focus:border-fuchsia-500" />
                    <button type="submit" className="btn border-none bg-transparent hover:text-blue-500 hover:bg-transparent text-2xl pl-0 text-white"><FaSearch /></button>
                </form>
            </div> 
        </div>
    );
};

export default Banner;