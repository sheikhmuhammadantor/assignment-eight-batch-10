import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, Statistics, Dashboard, ErrorPage, AllProduct, ProductDetails, Products, FilterProduct, Carts, WishLists } from '../components/components'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
                children: [
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
                        path: "wishlist",
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