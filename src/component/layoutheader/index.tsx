import "./layoutHeader.css"
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Button, Layout, theme, Grid } from 'antd';


const { Header } = Layout;

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
            {!screens.md && (

                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={onToggle}
                    className="menu_button" />
            )}
            <div>header</div>
        </Header>
    );
};

export default LayoutHeader;