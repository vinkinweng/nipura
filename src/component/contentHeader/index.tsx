import "./contentHeader.css"
import React from 'react';
import { Button } from 'antd';
import { AddIcon } from "@/component/MyIcon"

interface PageHeaderProps {
    title: string;
    description: string;
    createCaseButton?: boolean;
}

const contentHeader: React.FC<PageHeaderProps> = ({ title, description, createCaseButton = false }) => {

    return (
        <div className="page-heading">
            <div>
                <div className="eyebrow">SERVICE OPERATIONS</div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {createCaseButton && <Button type="primary" icon={<AddIcon />}> 案件を登録</Button>}
        </div>
    );
};

export default contentHeader;
