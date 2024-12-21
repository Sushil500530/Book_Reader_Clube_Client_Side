import Image3 from "../../assets/image/bouncing-ball.svg";

const Preloader = () => {
    return (
        <div className="w-full h-screen bg-color-b flex items-center justify-center flex-col">
            <div className="w-1/2 h-[50vh] mx-auto relative">
                <img src={Image3} alt="loader" className="bg-transparent w-full h-full" />
                <h1 className="text-white absolute bottom-7 left-0 right-0 text-center text-3xl lg:text-7xl animate-pulse font-bold">Loading.....</h1>
            </div>
        </div>
    );
};

export default Preloader;