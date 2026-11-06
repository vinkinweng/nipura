import "./layoutSider.css"
import { Layout, } from 'antd';

const { Sider } = Layout;

const LayoutSider: React.FC = () => {
    return (
        < Sider trigger={null} breakpoint="md" collapsedWidth="0" collapsed={false} >
            <div>sider</div>
        </Sider >
    );
};

export default LayoutSider;