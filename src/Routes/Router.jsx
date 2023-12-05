import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage />,
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            }
        ]
    }
])

export default Router;