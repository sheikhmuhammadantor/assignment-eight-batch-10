import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AllProduct from "../pages/AllProduct";
import ProductDetails from "../pages/ProductDetails";
import Products from "../components/Products/Products";
import FilterProduct from "../components/Products/FilterProduct";
import Carts from "../components/Dashboard/Carts";
import WishLists from "../components/Dashboard/WishLists";


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
                        path: "/",
                        element: <Products></Products>
                    },
                    {
                        path: "/:categoryName",
                        element: <FilterProduct></FilterProduct>
                    },
                ]
            },
            {
                path: '/products',
                element: <AllProduct></AllProduct>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Carts></Carts>
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <WishLists></WishLists>
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
            }

        ]
    },
])

export default routes