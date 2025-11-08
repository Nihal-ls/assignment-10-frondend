import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home";
import Allhabits from "../Page/Allhabits";

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
        ]
    }
])
export default Router