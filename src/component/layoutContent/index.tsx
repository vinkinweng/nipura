import "./layoutContent.css"
import { Layout, theme } from "antd";


const { Content } = Layout;
const LayoutContent: React.FC = () => {
    const { token } = theme.useToken();
    return (
        <Content style={{ background: token.colorBgContainer, borderRadius: token.borderRadiusLG, }}>
            content
        </Content>
    );
};

export default LayoutContent;