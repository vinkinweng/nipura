import { createBrowserRouter, Navigate, } from "react-router-dom";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import AuthGuard from "./AuthGuard";
import BasicLayout from "@/pages/BasicLayout";
import Cases from "@/pages/Cases";
import CalendarPage from "@/pages/CalendarPage"
import Repair from "@/pages/Repair"
import Dispatch from "@/pages/Dispatch"
import Employees from "@/pages/Employees"

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
                    },
                    {
                        path: "/cases",
                        element: <Cases />
                    },
                    {
                        path: "/calendar",
                        element: <CalendarPage />,
                    },
                    {
                        path: "/repair",
                        element: <Repair />
                    },
                    {
                        path: "/dispatch",
                        element: <Dispatch />
                    },
                    {
                        path: "/employees",
                        element: <Employees />
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