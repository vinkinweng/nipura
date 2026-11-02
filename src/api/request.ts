import axios from "axios";
import { message } from "antd";
import { useAuthStore } from "@/stores/authStore";

interface ApiResponse<T = unknown> {
    code: number;
    message: string;
    data: T;
}

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
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return Promise.reject(response);
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;