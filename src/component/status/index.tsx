import React from 'react';

interface StatusProps {
    value: string
}

const Status: React.FC<StatusProps> = ({ value }) => {
    let cls = value === '完了' ? 'green' : value === '対応中' ? 'blue' : value === '受付済み' ? 'amber' : value === '作業手配済み' ? 'purple' : 'gray';
    return <span className={`status ${cls}`}><i />{value}</span>
};

export default Status;
