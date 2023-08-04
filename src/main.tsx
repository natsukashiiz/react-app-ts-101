import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import theme from './config/theme';
import { App } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider theme={theme}>
        <App>
            <RouterProvider router={router} />
        </App>
    </ConfigProvider>
);
