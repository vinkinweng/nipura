import "./layoutHeader.css"
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Layout, theme, Grid, Breadcrumb, Input, Badge, Dropdown, Avatar, } from 'antd';
import type { MenuProps } from 'antd';
import { BellIcon, PeopleIcon, SettingsIcon, SignOutIcon } from "@/component/MyIcon"

const { Header } = Layout;
const dropdownItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                個人情報
            </a>
        ),
        icon: <PeopleIcon />,
    },
    {
        key: '2',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                パスワード変更
            </a>
        ),
        icon: <SettingsIcon />,
    },
    {
        key: '3',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                ログアウト
            </a>
        ),
        icon: <SignOutIcon />,
    }
];
interface LayoutHeaderProps {
    collapsed: boolean;
    onToggle: () => void;
}
const LayoutHeader: React.FC<LayoutHeaderProps> = ({
    collapsed,
    onToggle,
}) => {
    const screens = Grid.useBreakpoint();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ background: colorBgContainer }} className="header" >
            <div className="left">
                {!screens.md && (
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={onToggle}
                        className="menu_button" />
                )}
                <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Workspace' }, { title: 'Bill' }]} />

            </div>
            <div className="right">
                <Input size="medium" placeholder="案件・施設を検索" prefix={<SearchOutlined />} className='header-serach' />
                <Badge count={5}>
                    <BellIcon />
                </Badge>


                <Dropdown menu={{ items: dropdownItems }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()} className="user-dropdown">

                        <div className="user-info">
                            <Avatar size={32} className="avatar"> 佐</Avatar>
                            <div className="user-text">
                                <span className="user-name">佐藤 美咲</span>
                                <span className="user-description">サービス部</span>
                            </div>
                        </div>
                        <DownOutlined className="user-arrow" />

                    </a>
                </Dropdown>
            </div>
        </Header>
    );
};

export default LayoutHeader;