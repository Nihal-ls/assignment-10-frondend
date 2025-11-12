import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home";
import Allhabits from "../Page/Allhabits";
import Register from "../Page/Register";
import Login from "../Page/Login";
import Viewdetails from "../Page/Viewdetails";
import PrivateRouter from "./PrivateRouter";
import Addhabits from "../Page/Addhabits";
import Myhabits from "../Page/Myhabits";
import UpdateHabit from "../Page/UpdateHabit";
import ErrorPage from "../Page/ErrorPage";
import Spinner from "../Components/Spinner";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/featuredHabits'),
                Component: Home,

            },
            {
                path: '/all-habits',
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits'),
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
                path: '/view-details/:id',
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits'),
                element: <PrivateRouter>
                    <Viewdetails />
                </PrivateRouter>
            },
            {
                path: '/addhabit',
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits'),
                element: <PrivateRouter>
                    <Addhabits />
                </PrivateRouter>
            },
            {
                path: '/myhabits',
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits'),
                element: <PrivateRouter>
                    <Myhabits />
                </PrivateRouter>
            },
            {
                path: '/updatehabit/:id',
                loader: () => fetch('https://assignment-10-server-nihal-ls-nihal-ls-projects.vercel.app/Habits'),
                element: <PrivateRouter>
                    <UpdateHabit></UpdateHabit>
                </PrivateRouter>
            },
        ],

    },
    {
        path: '/*',
        Component: ErrorPage

    }
])
export default Router