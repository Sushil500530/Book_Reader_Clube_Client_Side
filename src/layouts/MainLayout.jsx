import Header from "../components/header/Header";
import { useState, useEffect } from 'react';

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const stackTime = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
        stackTime()
    }, [])
    return (

        <div>
            {
                isLoading ?
                    <div className='w-full h-screen flex items-center justify-center'>
                        <h2 className='text-5xl font-bold text-center'>Loading.....</h2>
                    </div> :
                    <Header />
            }
        </div>
    );
};

export default MainLayout;