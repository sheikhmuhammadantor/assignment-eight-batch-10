import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, Statistics, Dashboard, ErrorPage, ProductDetails, Products, FilterProduct, Carts, WishLists } from '../components/components'
import MostPopular from "../pages/MostPopular";


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
                        element: <Products></Products>
                    },
                    {
                        path: "/home",
                        element: <Products></Products>
                    },
                    {
                        path: "/home/all",
                        element: <Products></Products>
                    },
                    {
                        path: "/home/:categoryName",
                        element: <FilterProduct></FilterProduct>
                    },
                ]
            },
            {
                path: '/popular',
                element: <MostPopular></MostPopular>,
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
                        path: "/dashboard/carts",
                        element: <Carts></Carts>
                    },
                    {
                        path: "wishlists",
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