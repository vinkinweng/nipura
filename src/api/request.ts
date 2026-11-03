import axios from "axios";
import { message } from "antd";
import { useAuthStore } from "@/stores/authStore";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        if (token) {
            config.headers.set("Authorization", `Bearer ${token}`)
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        console.log(response)
        return response.data;
    },
    (error) => {
        // 获取 HTTP 状态码
        const status = error.response?.status;
        switch (status) {
            case 400:
                message.error("请求参数错误");
                break;

            case 401:
                useAuthStore.getState().logout();
                message.error("登录已过期，请重新登录");
                window.location.href = "/login";
                break;

            case 403:
                message.error("没有权限访问该资源");
                break;

            case 404:
                message.error("请求的资源不存在");
                break;

            case 500:
                message.error("服务器内部错误");
                break;

            default:
                if (!error.response) {
                    message.error("网络连接失败，请检查网络");
                } else {
                    message.error("请求失败，请稍后重试");
                }
        }
        return Promise.reject(error);
    }
);

export default request;