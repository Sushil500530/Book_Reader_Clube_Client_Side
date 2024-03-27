import { FaSearch } from "react-icons/fa";
import image from '../../assets/image/banner5.gif';

const Banner = () => {
    return (
        <div className="w-full lg:h-[85vh] h-auto bg-[url('https://i.ibb.co/wh2Vr39/banner5.gif')] bg-no-repeat bg-cover">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
            <div className="flex items-start justify-start gap-5 pt-32 flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2 pt-20 z-10">
                    <h1 className=" font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">
                        Explopre Our New Furniture Collections.....!
                    </h1>
                    <div className="flex items-center justify-center gap-5 mt-12">
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> Read More<FaSearch /></button>
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> Explore<FaSearch /></button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[600px] opacity-90 overflow-hidden ">
                    <img src={image} className="w-full h-full opacity-70 scale-105" alt="banner-image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;