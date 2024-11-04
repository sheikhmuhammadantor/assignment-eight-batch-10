import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AllProduct from "../pages/AllProduct";
// import FilterProduct from "../components/Products/FilterProduct";
import ProductDetails from "../pages/ProductDetails";
import Products from "../components/Products/Products";
import FilterProduct from "../components/Products/FilterProduct";


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