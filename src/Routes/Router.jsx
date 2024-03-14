import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from './../pages/about/About';
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import PrivetRoute from "./PrivetRoute";
import CreateShop from "../pages/create shop/CreateShop";
import SubFurniHome from "../pages/sub-furniture-home/SubFurniHome";
import FurniDetails from "../pages/sub-furniture-home/furni details/FurniDetails";
import MyCart from "../pages/my cart/MyCart";
import DashboardLayout from "../layouts/DashboardLayout";
import DCreateShop from "../layouts/dashboard/user/create shop/DCreateShop";
import PaymentDetails from "../layouts/dashboard/payment details/PaymentDetails";
import Promotion from "../layouts/dashboard/promotion/Promotion";
import Setting from "../layouts/dashboard/setting/Setting";
import ManageAccount from "../layouts/dashboard/manage account/ManageAccount";
import PaymentSection from "../pages/checkout/PaymentSection";
import UserHome from "../layouts/dashboard/user/UserHome";
import AddProducts from "../pages/add-product/AddProducts";
import ManageProduct from './../layouts/dashboard/manager/manage product/ManageProduct';
import MyProduct from "../layouts/dashboard/manager/my product/MyProduct";
import SaleProduct from "../layouts/dashboard/manager/sale product/SaleProduct";
import SaleSummary from "../layouts/dashboard/manager/sale product/SaleSummary";
import FavoriteProduct from "../layouts/dashboard/user/favorite/FavoriteProduct";


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
                element:<my-product />
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
            },
            {
                path:'checkout',
                element: <PrivetRoute><PaymentSection /></PrivetRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element:<PrivetRoute><UserHome /></PrivetRoute>
            },
            // general user dashboard 
            {
                path: 'create-shop',
                element:<PrivetRoute><DCreateShop /></PrivetRoute>
            },
            {
                path: 'favorites',
                element:<PrivetRoute><FavoriteProduct /></PrivetRoute>
            },
            {
                path: 'payment-details',
                element: <PrivetRoute><PaymentDetails /></PrivetRoute>
            },
            {
                path: 'promotion',
                element: <PrivetRoute><Promotion /></PrivetRoute>
            },
            {
                path: 'settings',
                element: <PrivetRoute><Setting /></PrivetRoute>
            },
            {
                path: 'manage-account',
                element: <PrivetRoute><ManageAccount /></PrivetRoute>
            },
            // managers 
            {
                path: 'add-product',
                element: <PrivetRoute><AddProducts /></PrivetRoute>
            },
            {
                path: 'my-product',
                element: <PrivetRoute><MyProduct /></PrivetRoute>
            },
            {
                path: 'manage-product',
                element: <PrivetRoute><ManageProduct /></PrivetRoute>
            },
            {
                path: 'sales-product',
                element: <PrivetRoute><SaleProduct /></PrivetRoute>
            },
            {
                path: 'sale-summary',
                element: <PrivetRoute><SaleSummary /></PrivetRoute>
            },
        ]
    }
])

export default Router;