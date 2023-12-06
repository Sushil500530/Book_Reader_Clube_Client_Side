import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

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
        ]
    }
])

export default Router;