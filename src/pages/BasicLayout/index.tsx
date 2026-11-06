import "./basiclayout.css"
import { Layout } from 'antd';


import LayoutContent from "@/component/layoutContent";
import LayoutSider from "@/component/layoutSider";
import LayoutHeader from "@/component/layoutheader";


const BasicLayout: React.FC = () => {

    return (
        <Layout >
            <LayoutSider />
            <Layout>
                <LayoutHeader />
                <LayoutContent />
            </Layout>
        </Layout>
    );
};

export default BasicLayout;