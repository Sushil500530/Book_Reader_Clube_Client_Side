import './logo.css'
const Logo = () => {
    return (
        <div className='flex items-center gap-5'>
            <div className='w-[60px] h-[60px] origin-center rotate-45 bg-gradient-to-r from-[#1c45d9] to-[#fe0fda]'> 
            </div>
            <h1 className="gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center "><span className='gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center '>Book</span> <br /> <span className='mt[-5] gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center '>Reader</span> <br /> <span className='gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center '>Clube</span></h1>   
            {/* <h1 className="gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center "><span>Book</span> <br /> <span className='mt[-5]'>Reader</span> <br /> <span>Clube</span></h1>   
            <h1 className="gradient-text capitalize text-2xl md:text-3xl lg:text-4xl font-extrabold text-center "><span>Book</span> <br /> <span className='mt[-5]'>Reader</span> <br /> <span>Clube</span></h1>    */}
        </div>
    );
};

export default Logo;