import { createBrowserRouter, Navigate, } from "react-router-dom";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/dashboard" replace />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <NotFound />
    }
])