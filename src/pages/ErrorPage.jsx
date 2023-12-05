import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full ">
            <div className="w-full h-screen">
                <img src='https://i.ibb.co/5G0832X/4641611401ecb508c625eebe448da663.gif' className="w-full h-full" alt="" />
            </div>
            <div className="absolute top-[75%] text-white text-center">
                <h2 className="text-3xl font-bold">Sorry,</h2>
                <p className="text-3xl font-bold">Page Not Found</p>
                <Link to="/">
                    <button className="btn border border-white px-8 py-1 btn-outline text-[18px] font-medium text-white mt-4 hover:bg-gradient-to-r from-indigo-400 to-blue-400 hover:text-black">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;