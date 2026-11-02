import { useState } from "react";
import { message } from "antd";

import "./Login.css";

function Login() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);
    async function handleLogin() {
        if (!username.trim() || !password) {
            message.warning("请输入用户名和密码");
            return;
        }

        try {
            setLoading(true);

            const response = await loginApi({
                username,
                password,
            });

            const result = response.data;

            if (result.code !== 200) {
                message.error(result.message || "登录失败");
                return;
            }

            setLoginInfo(result.data.token, result.data.user);

            message.success("登录成功");
        } catch {
            message.error("登录请求失败，请检查 Mock 地址和接口配置");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-logo">N</div>

                <h1>Nexus</h1>
                <p>企业管理系统</p>

                <label className="login-label" htmlFor="username">
                    用户名
                </label>

                <input
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="请输入用户名"
                    autoComplete="username"
                />

                <label className="login-label" htmlFor="password">
                    密码
                </label>

                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="请输入密码"
                    autoComplete="current-password"
                />

                <button
                    type="button"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "登录中..." : "登录"}
                </button>
            </section>
        </main>
    );
}

export default Login;