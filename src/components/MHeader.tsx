import { Button, Dropdown, Menu, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/vite.svg';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function MHeader() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [token, setToken] = useState<string | null>(localStorage.getItem("token") || null);

    type MenuItem = Required<MenuProps>['items'][number];

    type MenuItemWithAuth = MenuItem & {
        auth?: boolean;
        mobile?: boolean;
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
        },
        {
            key: '/none/tech',
            label: 'Tech',
            children: [
                {
                    key: '/none/vite',
                    label: (
                        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
                    ),
                },
                {
                    key: '/none/react',
                    label: (
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
                    ),
                },
                {
                    key: '/none/ts',
                    label: (
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>

                    ),
                },
                {
                    key: '/none/antd',
                    label: (
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Ant Design</a>
                    ),
                }
            ]
        },
        {
            key: '/a',
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
        },
        {
            key: '/none/sign-out',
            label: 'Sign Out',
            auth: true,
            onClick: onLogout,
        },
        {
            key: '/sign-in',
            label: 'Sign In',
            mobile: true,
        },
        {
            key: '/sign-up',
            label: 'Sign Up',
            mobile: true,
        }
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key.startsWith('/none')) return;
        navigate(e.key);
    };

    function onLogout() {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/sign-in');
    }

    const menuFilter = menuItem.filter(item => !item.auth || token);
    const menuMobile = menuFilter.filter(item => !item.mobile || token);

    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            borderBottom: '1px solid #f0f0f0',
        }}>
            {/* {!isMobile && <img src={logo} alt="logo" />} */}
            {isMobile
                ? <Dropdown.Button menu={{ items: menuFilter, onClick: onClick }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    {token ? 'ADMIN' : 'MENU'}
                </Dropdown.Button>
                : <Menu
                    mode="horizontal"
                    items={menuMobile}
                    selectedKeys={[pathname]}
                    onClick={onClick}
                    style={{
                        width: '469px',
                    }}
                />}
            {
                !isMobile ? token
                    ? <Button type="default" onClick={onLogout}>Logout</Button>
                    : <Space>
                        <Button type="default" onClick={() => navigate('/sign-in')}>Sign In</Button>
                        <Button type="primary" onClick={() => navigate('/sign-up')}>Create account</Button>
                    </Space>
                    : ''
            }
        </Header>
    );
}