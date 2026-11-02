import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main style={{ padding: 40, textAlign: "center" }}>
            <h1>404</h1>
            <p>抱歉，找不到这个页面。</p>
            <Link to="/dashboard">返回工作台</Link>
        </main>
    );
}

export default NotFound;