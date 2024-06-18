import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import CoursesPage from "../Pages/CoursesPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Courses",
                element: <CoursesPage />,
            },
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/Register",
                element: <Register />,
            },
        ]
    },
]);