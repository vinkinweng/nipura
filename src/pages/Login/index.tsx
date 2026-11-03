import { useNavigate, useLocation } from "react-router-dom";
import { Form, message, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { api_login } from "@/api/auth.ts"
import { useAuthStore } from "@/stores/authStore";
import "./Login.css";
interface FieldType {
    username: string;
    password: string;
};

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const login = useAuthStore(state => state.login)
    const onFinish = async (values: FieldType) => {
        try {
            const response = await api_login(values);
            login(response.data.token, response.data.user);
            // 1. 获取登录前想访问的页面
            const from = location.state?.from?.pathname || "/dashboard";

            // 2. 登录成功后跳转
            navigate(from, { replace: true });
            message.success("ログインしました");
        } catch (error) {
            console.error("登录失败：", error);
            message.error("ログインに失敗しました");
        }
    }
    return (
        <div className="login-page flex-center ">
            <div className="login-card">
                <h1 className="login-title flex-center ">
                    <img src="/nipura-logo-80.png" />
                    <p>業務支援システム</p>
                </h1>


                <Form
                    name="login"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <Form.Item<FieldType> label="アカウント" name="username" rules={[{ required: true, message: 'アカウントを入力してください' }]}>
                        <Input prefix={<UserOutlined />} size="large" placeholder="アカウントを入力" />
                    </Form.Item>
                    <Form.Item<FieldType> label="パスワード" name="password" rules={[{ required: true, message: 'パスワードを入力してください' }]}>
                        <Input prefix={<LockOutlined />} size="large" placeholder="パスワードを入力" />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button block type="primary" htmlType="submit">
                            ログイン
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
}

export default Login;