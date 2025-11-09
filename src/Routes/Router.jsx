import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home";
import Allhabits from "../Page/Allhabits";
import Register from "../Page/Register";
import Login from "../Page/Login";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: '/all-habits',
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
        ]
    }
])
export default Router