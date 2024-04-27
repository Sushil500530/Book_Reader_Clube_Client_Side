/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        <div className='lg:max-w-[2520px] h-auto mx-auto xl:px-20 w-full mt-20'>
            {children}
        </div>
    );
};

export default Container;