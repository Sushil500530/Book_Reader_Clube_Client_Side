import { FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import banner from "../../assets/image/animat/Animation - 1711627710121.json";

const Banner = () => {
    return (
        <div className="w-full lg:h-screen h-auto bg-[url('https://i.ibb.co/wh2Vr39/banner5.gif')] bg-no-repeat bg-cover">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
            <div className="flex items-start justify-start pt-32 flex-col lg:flex-row gap-12 lg:px-24 p-5">
                <div className="w-full lg:w-1/2 h-[60vh] flex items-start justify-center flex-col z-10">
                    <h1 className="font-extrabold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-start">Explopre Our New Furniture Collections.....! </h1>
                    <p className="text-start mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos ducimus dolorum et minus, vero culpa optio doloremque hic inventore veritatis iusto. Perferendis atque vitae eius quidem obcaecati fuga libero.</p>
                    <div className="flex items-center justify-center gap-5 my-10">
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> Read More<FaSearch /></button>
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> Explore<FaSearch /></button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-auto lg:h-[600px] opacity-90 overflow-hidden ">
                <Lottie animationData={banner} className="h-[500px] w-full cursor-pointer" ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Banner;