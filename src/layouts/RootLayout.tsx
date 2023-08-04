import { Outlet } from "react-router-dom";
import MFooter from "../components/MFooter";
import MHeader from "../components/MHeader";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function RootLayout() {
    return (
        <Layout>
            <MHeader />
            <Content style={{ margin: 'auto', padding: '0 50px', width: '70%' }}>
                <div style={{ margin: '16px 0' }}>
                    <Outlet />
                </div>
            </Content>
            <MFooter />
        </Layout>
    );
}