import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";


function routing () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: Home,
        },
        {
            path: "/error",
            element: ErrorPage,
        },
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <RouterProvider router={router}/>
        </React.StrictMode>
    )
}

export default routing;