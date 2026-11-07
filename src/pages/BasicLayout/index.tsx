import "./basiclayout.css"
import { useState } from "react";
import { Layout } from 'antd';


import LayoutContent from "@/component/layoutContent";
import LayoutSider from "@/component/layoutSider";
import LayoutHeader from "@/component/layoutheader";


const BasicLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout >
            <LayoutSider collapsed={collapsed} />
            <Layout>
                <LayoutHeader collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
                <LayoutContent />
            </Layout>
        </Layout>
    );
};

export default BasicLayout;