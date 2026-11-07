import "./layoutSider.css"
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { HomeIcon, TaskIcon, CalendarIcon, AddIcon, ToolIcon, PeopleIcon } from "../MyIcon";
import SiderLogo from "@/component/siderLogo"
const { Sider } = Layout;

const menuList: MenuProps['items'] = [
    {
        type: 'group',
        label: '業務メニュー',
        children: [
            { key: '/dashboard', icon: <HomeIcon />, label: '概要', },
            { key: '/cases', icon: <TaskIcon />, label: '案件一覧', },
            { key: '/calendar', icon: <CalendarIcon />, label: '日程表', },
        ],
    },
    {
        type: 'group',
        label: '修理・保守',
        children: [
            { key: '/repair', icon: <AddIcon />, label: '修理受付', },
            { key: '/dispatch', icon: <ToolIcon />, label: '作業手配', },
        ],
    },
    {
        type: 'group',
        label: '管理',
        children: [
            { key: '/employees', icon: <PeopleIcon />, label: '社員管理', },
        ],
    },
];
interface LayoutSiderProps {
    collapsed: boolean;
    onCollapse: (collapsed: boolean) => void;
}
const LayoutSider: React.FC<LayoutSiderProps> = ({
    collapsed,
    onCollapse
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    // 点击菜单时执行
    const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
        navigate(key);
    };

    return (
        < Sider trigger={null} breakpoint="md" collapsedWidth="0" collapsed={collapsed} onCollapse={onCollapse} className="layout-sider" width={238}>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            itemColor: "var(--font-color)",
                            itemBg: "var(--bg-color)",
                            itemSelectedColor: "var(--font-color)",
                            itemSelectedBg: "var(--bg1-color)",
                            itemHoverBg: "var(--bg1-color)",
                            itemActiveBg: 'var(--bg1-color)',
                            itemMarginInline: 0,

                        },
                    },
                }}
            >
                <SiderLogo />
                <Menu mode="inline"
                    defaultSelectedKeys={['/dashboard']}
                    items={menuList}
                    className="side_menu"
                    selectedKeys={[location.pathname]}
                    onClick={handleMenuClick}
                />
            </ConfigProvider>
        </Sider >
    );
};

export default LayoutSider;