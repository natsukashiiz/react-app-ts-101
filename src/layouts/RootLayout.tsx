import { Outlet } from "react-router-dom";
import MFooter from "../components/MFooter";
import MHeader from "../components/MHeader";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

export default function RootLayout() {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <MHeader />
            <Content style={{ margin: 'auto', padding: '0 50px', width: '70%' }}>
                <div style={{ margin: '16px 0', padding: 24, minHeight: '50vh', background: colorBgContainer }}><Outlet /></div>
            </Content>
            <MFooter />
        </Layout>
    );
}