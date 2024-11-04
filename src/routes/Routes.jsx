import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AllProduct from "../pages/AllProduct";
import ProductDetails from "../components/Products/ProductDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',

                    }
                ]
            },
            {
                path: '/products',
                element: <AllProduct></AllProduct>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/products/:productId',
                element: <ProductDetails></ProductDetails>
            },
        ]
    },
])

export default routes