import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";


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
                        
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
        ]
    },
])

export default routes