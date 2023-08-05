import { Outlet, useLocation } from "react-router-dom";
import MFooter from "../components/MFooter";
import MHeader from "../components/MHeader";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function RootLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Layout>
            <MHeader />
            <Content style={{ margin: 'auto', padding: '0 50px', width: isMobile ? '100%' : '70%' }}>
                <div style={{ margin: '16px 0' }}>
                    <Outlet />
                </div>
            </Content>
            <MFooter />
        </Layout>
    );
}