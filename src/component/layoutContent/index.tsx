import "./layoutContent.css"
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";


const { Content } = Layout;
const LayoutContent: React.FC = () => {
    const { token } = theme.useToken();
    return (
        <Content style={{ borderRadius: token.borderRadiusLG, }} className="layout-content">
            <Outlet />
        </Content>
    );
};

export default LayoutContent;