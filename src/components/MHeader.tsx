import { Button, Menu, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/vite.svg';
import { useState } from 'react';

export default function MHeader() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [token] = useState<string | null>(localStorage.getItem("token") || null);

    type MenuItem = Required<MenuProps>['items'][number];

    type MenuItemWithAuth = MenuItem & {
        auth?: boolean;
        children?: MenuItemWithAuth[];
    };

    const menuItem: MenuItemWithAuth[] = [
        {
            key: '/',
            label: 'Home',
        },
        {
            key: '/about',
            label: 'About',
        },
        {
            key: '/contact',
            label: 'Contact',
        },
        {
            key: '/fetch-infinity',
            label: 'Fetch Infinity',
            auth: true,
        },
        {
            key: '/tech',
            label: 'Tech',
            children: [
                {
                    key: 'tech/vite',
                    label: (
                        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
                    ),
                },
                {
                    key: 'tech/react',
                    label: (
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
                    ),
                },
                {
                    key: 'tech/ts',
                    label: (
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>

                    ),
                },
                {
                    key: 'tech/antd',
                    label: (
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Ant Design</a>
                    ),
                }
            ]
        },
        {
            key: '/admin',
            label: 'Admin',
            auth: true,
            children: [
                {
                    key: '/admin',
                    label: 'Home',
                }, {
                    key: '/admin/user',
                    label: 'User',
                }
            ]
        }
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key.startsWith('tech/')) return;
        navigate(e.key);
    };

    function onLogout() {
        localStorage.removeItem('token');
        // navigate('/sign-in');
        window.location.href = '/sign-in';
    }

    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#fff',
        }}>
            <img src={logo} alt="logo" />
            <Menu
                mode="horizontal"
                items={menuItem.filter(item => !item.auth || token)}
                selectedKeys={[pathname]}
                onClick={onClick}
            />
            {token ?
                <Button type="default" onClick={onLogout}>Logout</Button> :
                <Space>
                    <Button type="default" onClick={() => navigate('/sign-in')}>Sign In</Button>
                    <Button type="primary" onClick={() => navigate('/sign-up')}>Create account</Button>
                </Space>
            }
        </Header>
    );
}