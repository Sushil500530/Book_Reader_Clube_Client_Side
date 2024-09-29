import Lottie from "lottie-react";
import { MdOutlineExplore, MdOutlineReadMore } from "react-icons/md";
import banner from "../../assets/image/animat/Animation - 1711627710121.json";

const Banner = () => {
    return (
        <div className="w-full lg:h-screen h-auto bg-[url('https://i.ibb.co/wh2Vr39/banner5.gif')] bg-no-repeat bg-cover">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
            <div className="flex items-center justify-center pt-32 flex-col lg:flex-row gap-12 lg:px-24 p-5">
                <div className="w-full lg:w-1/2 flex items-start justify-center flex-col z-10">
                    <h1 className="font-extrabold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text leading-normal bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-start">
                        Explopre Our New Furniture Collections.....!
                    </h1>
                    <p className="text-start mt-12 text-gray-300">
                        Discover our latest furniture collections: a fusion of style and functionality. Elevate your space with timeless pieces crafted for modern living. Explore sophistication and comfort in every corner of your home. Redefine your interior with our curated selection today.
                    </p>
                    <div className="flex items-center justify-center gap-5 my-10">
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                            Read More<MdOutlineReadMore className="text-2xl" />
                        </button>
                        <button className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-white rounded flex gap-2 items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                            Explore<MdOutlineExplore className="text-2xl" />
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-auto opacity-90 lg:block hidden overflow-hidden">
                    <Lottie
                        animationData={banner}
                        className="h-[500px] w-full cursor-pointer"
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Banner;