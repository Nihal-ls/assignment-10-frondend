import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home";
import Allhabits from "../Page/Allhabits";
import Register from "../Page/Register";
import Login from "../Page/Login";
import Viewdetails from "../Page/Viewdetails";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/featuredHabits'),
                Component: Home,

            },
            {
                path: '/all-habits',
                loader: () => fetch('http://localhost:3000/Habits'),
                Component: Allhabits,

            },
            {
                path: '/register',
                Component: Register,

            },
            {
                path: '/login',
                Component: Login,

            },
            {
                path: '/login',
                Component: Login,

            },
            {
                path: '/view-details/:id',
                loader: () => fetch('http://localhost:3000/Habits'),
                Component: Viewdetails,

            },
        ]
    }
])
export default Router