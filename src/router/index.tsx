import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 不需要登录的页面 */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* 根路径默认跳转 */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                {/* 未匹配的地址 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;