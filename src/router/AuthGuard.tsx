//判断用户是否登录
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

function AuthGuard() {
    const token = useAuthStore(
        (state) => state.token
    );

    const location = useLocation();

    // 没有登录，跳转登录页面
    if (!token) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    // 已经登录，允许访问子路由
    return <Outlet />;
}

export default AuthGuard;