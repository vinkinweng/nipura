import { createBrowserRouter, Navigate, } from "react-router-dom";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import AuthGuard from "./AuthGuard";
import BasicLayout from "@/pages/BasicLayout";

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
        element: <AuthGuard />,
        children: [
            {
                element: <BasicLayout />,
                children: [
                    {
                        index: true,  //默认子路由
                        element: <Navigate to="/dashboard" replace />
                    },
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])