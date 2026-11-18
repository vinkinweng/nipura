import React from 'react';

interface StatusProps {
    value: string
}
const statusLabels: Record<string, string> = {
    Received: "受付済み",
    progress: "対応中",
    completion: "完了",
};
const statusColors: Record<string, string> = {
    Received: "amber",
    progress: "blue",
    completion: "green",
};
const Status: React.FC<StatusProps> = ({ value }) => {
    // 获取日语状态
    const label = statusLabels[value] ?? value;
    // 获取状态颜色
    const cls = statusColors[value] ?? "gray";
    return <span className={`status ${cls}`}><i />{label}</span>
};

export default Status;
