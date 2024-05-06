import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../../pages/Home";
import ErrorPage from "../../pages/ErrorPage";
import About from "../../pages/About";
import Logements from "../../pages/Logements";


function routing () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: Home,
            errorElement: <ErrorPage />,
        },
        {
            path: "/",
            element: ErrorPage,
            errorElement: <ErrorPage />,
        },
        {
            path: "/",
            element: About,
            errorElement: <ErrorPage />,
        },
        {
            path: "/",
            element: Logements,
            errorElement: <ErrorPage />,
        }
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <RouterProvider router={router}/>
        </React.StrictMode>
    )
}

export default routing;