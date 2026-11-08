import "./caseTable.css"

import Status from "@/component/status";
interface CaseRecord {
    id: string;
    customer: string;
    title: string;
    region: string;
    facility: string;
    assignee: string;
    status: string;
    priority: string;
    date: string;
    time: string;
    amount: number;
    kind: string;
    images?: Array<{ name: string; url: string }>;
}

interface CaseTableProps {
    cases: CaseRecord[];
    money: (amount: number | string) => string;
    open?: (item: CaseRecord) => void;
}
const CaseTable: React.FC<CaseTableProps> = ({ cases, money, open }) => {

    return (
        <div className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>案件</th>
                        <th>施設・地域</th>
                        <th>担当者</th>
                        <th>ステータス</th>
                        <th>見積金額（概算）</th>
                        <th>優先度</th>
                    </tr>
                </thead>
                <tbody>{cases.map(c => <tr key={c.id} onClick={() => open?.(c)}>
                    <td><b className="case-title">{c.title}</b><small>{c.id} · {c.customer}</small></td>
                    <td>{c.facility}<small>{c.region}エリア</small></td>
                    <td><span className="person"><i>{c.assignee[0]}</i>{c.assignee}</span></td>
                    <td><Status value={c.status} /></td>
                    <td>{money(c.amount)}</td>
                    <td><span
                        className={`priority ${c.priority === '高' ? 'high' : c.priority === '中' ? 'medium' : 'low'}`}>{c.priority}</span>
                    </td>
                </tr>)}</tbody>
            </table>

            {cases.length === 0 && (
                <div className="empty">該当する案件はありません</div>
            )}
        </div>
    );
};

export default CaseTable;
