import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/admin/Admin";
import User from "../pages/admin/User";
import AdminLayout from "../layouts/AdminLayout";
import SignIn from "../pages/SignIn";
import FetchInfinity from "../pages/FetchInfinity";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "sign-in",
                element: <SignIn />,
            },
            {
                path: "sign-up",
                element: <SignUp />,
            },
            {
                path: "fetch-infinity",
                element: <FetchInfinity />,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Admin />,
            },
            {
                path: "user",
                element: <User />,
            }
        ]
    }
]
);

export default router;
