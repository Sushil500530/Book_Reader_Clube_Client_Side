import Container from "../../shared/container/Container";

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ok boss!')
    }
    return (
        <Container>
            <div className="relative w-full h-[50vh] flex items-center justify-center bg-black opacity-80">
                <img src="https://i.ibb.co/Np7DR2P/3585405.webp" alt="image" className="w-full h-full absolute opacity-50 z-10" />
                <div className="z-10 flex items-center justify-center gap-6 w-full">
                    <div className="w-full lg:1/2">
                        <h1 className="text-3xl text-black font-bold">Subscribe to our monthly newsletter</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full lg:1/2 relative">
                        <input className='w-full px-4 py-4 rounded-full text-gray-800 border border-blue-400 ' name='email' id='email' type='email' placeholder='Enter your email' required />
                        <button type="submit" className="uppercase btn px-10 absolute top-2 right-2 rounded-full text-[18px] text-center font-medium hover:text-white transition duration-200 shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black ">subscribe</button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default NewsLetter;