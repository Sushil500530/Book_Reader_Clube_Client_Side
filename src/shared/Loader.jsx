import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <div className="w-full h-[60vh] flex item-center justify-center">
                <ThreeDots
                    height="100"
                    width="100"
                    radius="9"
                    color="#4fa94d"
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