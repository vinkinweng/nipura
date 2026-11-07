import { Breadcrumb, } from 'antd';
import { useLocation } from "react-router-dom";

const breadcrumbMap: Record<string, string[]> = {
    "/": ["概要"],
    "/dashboard": ["概要"],
    "/cases": ["案件一覧"],
    "/calendar": ["日程表"],
    "/cases/create": ["案件一覧", "作業作成"],
    "/employees": ["従業員管理"],
};
const LayoutBreadcrumb = () => {
    const location = useLocation();
    const names = breadcrumbMap[location.pathname] ?? [];

    const items = [
        { title: "ホーム" },
        ...names.map((name) => ({
            title: name,
        })),
    ];
    return (
        <Breadcrumb style={{ margin: '16px 0' }} items={items} />
    );
};

export default LayoutBreadcrumb;