import request from "./request";

interface LoginParams {
    username: string;
    password: string;
}
interface LoginUser {
    id: number;
    username: string;
    name: string;
    roles: string[];
}
interface LoginResponse {
    code: number;
    message: string;
    data: {
        token: string;
        user: LoginUser;
    }
}
export function api_login(parmas: LoginParams) {
    return request.post<unknown, LoginResponse>("/auth/login", parmas)
}