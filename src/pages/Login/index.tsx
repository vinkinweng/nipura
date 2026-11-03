import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./Login.css";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

function Login() {
    const onFinish = () => {
        console.log("login")
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
                        <Input prefix={<LockOutlined />} size="large" placeholder="Bパスワードを入力" />
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