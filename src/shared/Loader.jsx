import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <div className="w-full h-[35vh] flex item-center justify-center relative">
                <h1 className='text-2xl font-extrabold text-center animate-pulse absolute right-0 left-0 top-40 '>Loading.....</h1>
                <ThreeDots
                    height="200"
                    width="200"
                    radius="9"
                    color="#ff0fdb"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </>
    );
};

export default Loader;