import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/login/LoginPage";
import CreateShop from "../pages/create shop/CreateShop";
import SubFurniHome from "../pages/sub-furniture-home/SubFurniHome";
import FurniDetails from "../pages/sub-furniture-home/furni details/FurniDetails";
import PrivetRoute from "./PrivetRoute";
import MyCart from "../pages/my cart/MyCart";
import DashboardLayout from "../layouts/DashboardLayout";
import DCreateShop from "../components/dashboard/create shop/DCreateShop";

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
                element: <PrivetRoute><CreateShop /></PrivetRoute>
            },
            {
                path:'category/:category',
                loader: ({params}) => fetch(`http://localhost:5000/furniture/${params?.category}`),
                element: <PrivetRoute><SubFurniHome /></PrivetRoute>
            },
            {
                path:'furni-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/furnitures/${params?.id}`),
                element: <PrivetRoute> <FurniDetails /></PrivetRoute>
            },
            {
                path:'furnitures/:id',
                loader: ({params}) => fetch(`http://localhost:5000/furnitures/${params?.id}`),
                element: <PrivetRoute><FurniDetails /></PrivetRoute>
            },
            {
                path:'my-cart',
                element: <PrivetRoute><MyCart /></PrivetRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: 'create-shop',
                element: <DCreateShop />
            }
        ]
    }
])

export default Router;