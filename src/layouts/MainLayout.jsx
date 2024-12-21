import Header from "../components/header/Header";
import { useState, useEffect } from 'react';
import Preloader from "../components/preloder/Preloader";

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const stackTime = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }
        stackTime()
    }, [])
    return (

        <div>
            {
                isLoading ?
                   <Preloader/> :
                    <Header />
            }
        </div>
    );
};

export default MainLayout;