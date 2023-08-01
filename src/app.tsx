import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { App as Andt } from 'antd';

export default function App() {
    return (
        <Andt>
            <RouterProvider router={router} />
        </Andt>
    );
}