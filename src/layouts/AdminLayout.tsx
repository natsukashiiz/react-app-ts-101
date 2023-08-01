import { Outlet, useNavigate } from "react-router-dom";
import ANav from "../components/ANav";
import MFooter from "../components/MFooter";
import { useEffect } from 'react';

export default function AdminLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        const tokenStore = localStorage.getItem("token");
        if (!tokenStore) {
            console.log("token not found");
            navigate("/sign-in");
        }
    }, [navigate]);

    return (
        <>
            <header>
                <ANav />
            </header>
            <main>
                <Outlet />
            </main>
            <MFooter />
        </>
    );
}