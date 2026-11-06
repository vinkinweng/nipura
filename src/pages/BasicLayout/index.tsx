import "./basiclayout.css"
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';


import LayoutContent from "@/component/layoutContent";
import LayoutSider from "@/component/layoutSider";
import LayoutHeader from "@/component/layoutheader";

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout >
            {/**breakpoint:响应式布局出发宽度 
             * collapsed:侧边栏是否显示折叠状态
             * collapsedWidth：侧边栏收起状态的宽度
             * 
            */}
            <Sider trigger={null} breakpoint="md" collapsedWidth="0" collapsed={false} >
                <LayoutSider />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className="menu_button" />
                    <LayoutHeader />
                </Header>
                <Content style={{ background: colorBgContainer, borderRadius: borderRadiusLG, }}>
                    <LayoutContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;