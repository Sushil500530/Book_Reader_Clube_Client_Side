import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/login/LoginPage";
import CreateShop from "../pages/create shop/CreateShop";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage />,
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'about',
                element: <About />
            },
            {
                path:'login',
                element: <LoginPage />
            },
            {
                path:'signup',
                element: <SignupPage />
            },
            {
                path:'create-shop',
                element: <CreateShop />
            },
        ]
    }
])

export default Router;