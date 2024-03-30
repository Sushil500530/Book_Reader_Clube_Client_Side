import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="w-full h-[100vh]">
            <div className='w-full h-[70vh] flex items-center justify-center relative'>
                <ThreeDots
                    height="220"
                    className="relative"
                    width="200"
                    radius="9"
                    color="#ff0fdb"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                  <h1 className='text-2xl font-extrabold text-center animate-pulse absolute bottom-64 '>Loading.....</h1>
            </div>
        </div>
    );
};

export default Loader;