import { useNavigate } from "react-router-dom";
import { Button, Form, Input, App, Card } from 'antd';
import { useState } from "react";


export default function SignUp() {
    const navigate = useNavigate();
    const { message } = App.useApp();
    const key = 'updatable';

    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (form: ISignUp) => {
        setLoading(true);
        message.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            if (form.password !== form.repassword) {
                message.open({
                    key,
                    type: 'error',
                    content: "Password and Repassword is not match",
                    duration: 2
                });
                setLoading(false);
            } else {
                message.open({
                    key,
                    type: 'success',
                    content: "Create account success",
                    duration: 1
                });
                setLoading(false);
                navigate("/sign-in");
            }
        }, 1000);
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <center>
            <Card title="Create account" style={{ maxWidth: 500 }}>
                <Form
                    name="basic"
                    style={{ maxWidth: 300 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    disabled={loading}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please enter username' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter password' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Reenter Password"
                        name="repassword"
                        rules={[{ required: true, message: 'Please re-enter password' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item >
                        <Button loading={loading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </center>
    );
}