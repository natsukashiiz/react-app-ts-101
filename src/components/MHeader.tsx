import { Button, Menu, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState<string>('');

    const menuItem: MenuProps['items'] = [
        {
            key: '',
            label: 'Home',
        },
        {
            key: 'about',
            label: 'About',
        },
        {
            key: 'contact',
            label: 'Contact',
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/${e.key}`);
    };

    useEffect(() => {
        const path = location.pathname;
        const key = path.replace('/', '');
        setCurrent(key);
    }, [location]);

    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={menuItem}
                selectedKeys={[current]}
                onClick={onClick}
            />
            <Space>
                <Button type="default" onClick={() => navigate('/sign-in')}>Sign In</Button>
                <Button type="primary" onClick={() => navigate('/sign-up')}>Create account</Button>
            </Space>
        </Header>
    );
}