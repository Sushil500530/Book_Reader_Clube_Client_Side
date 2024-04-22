

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ok boss!')
    }
    return (
        <div className="lg:max-w-[2520px] h-auto mx-auto xl:px-20 w-full mt-12">
            <div className="relative w-full h-[60vh] lg:h-[40vh] flex items-center justify-center bg-white lg:p-12 p-5">
                <img src="https://i.ibb.co/Np7DR2P/3585405.webp" alt="image" className="w-full h-full absolute opacity-50 z-10" />
                <div className="z-10 flex items-center justify-between gap-16 lg:gap-6 w-full flex-col lg:flex-row">
                    <div className="w-full lg:1/2">
                        <h1 className="text-3xl text-black font-bold">Subscribe to our monthly newsletter</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full lg:1/2 relative">
                        <input className='w-full px-4 py-5 rounded-full text-gray-800 border border-blue-400 shadow-xl ' name='email' id='email' type='email' placeholder='Enter your email' required />
                            <button type="submit" className="absolute top-2 right-2 inline uppercase btn px-4 md:px-10 lg:px-10 rounded-full text-base lg:text-[18px] text-center font-medium hover:text-white transition shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black ">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;