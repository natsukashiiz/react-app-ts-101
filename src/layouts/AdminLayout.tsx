import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MFooter from "../components/MFooter";
import { useEffect } from 'react';
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MHeader from "../components/MHeader";

export default function AdminLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const tokenStore = localStorage.getItem("token");
        if (!tokenStore) {
            console.log("token not found");
            navigate("/sign-in");
        }
    }, [navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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