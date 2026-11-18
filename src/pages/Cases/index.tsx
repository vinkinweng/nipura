import style from "./cases.module.css";
import { useState } from "react";
import { Input, Button } from 'antd';

import { SearchOutlined } from "@ant-design/icons"
import ContentHeader from "@/component/contentHeader";
import CaseTable from "@/component/caseTable";

import { FilterIcon } from "@/component/MyIcon";
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
function Cases() {
    const initialCases: CaseRecord[] = [
        { id: 'NP-261024', customer: '東京中央医療センター', title: '空調設備の異音・停止', region: '関東', facility: '東京都文京区', assignee: '佐藤 美咲', status: 'completion', priority: '高', date: '2026-10-29', time: '09:30', amount: 248000, kind: '修理' },
        { id: 'NP-261023', customer: '大阪みなみ病院', title: '給湯設備の温度異常', region: '関西', facility: '大阪府大阪市', assignee: '高橋 健', status: 'Received', priority: '中', date: '2026-10-29', time: '11:00', amount: 96000, kind: '修理' },
        { id: 'NP-261022', customer: '名古屋市立大学病院', title: '定期点検・部品交換', region: '中部', facility: '愛知県名古屋市', assignee: '鈴木 由紀', status: 'progress', priority: '中', date: '2026-10-29', time: '13:30', amount: 182000, kind: '点検' },
        { id: 'NP-261021', customer: '横浜北部クリニック', title: 'ポンプからの水漏れ', region: '関東', facility: '神奈川県横浜市', assignee: '田中 翔', status: 'progress', priority: '中', date: '2026-10-29', time: '15:00', amount: 134000, kind: '修理' },
        { id: 'NP-261020', customer: '京都リハビリテーション病院', title: '換気設備の定期点検', region: '関西', facility: '京都府京都市', assignee: '佐藤 美咲', status: 'completion', priority: '低', date: '2026-10-28', time: '10:00', amount: 72000, kind: '点検' },
    ];
    const [status, setStatus] = useState<string>("all");
    const statusCases = initialCases.filter(c => status === "all" || c.status === status).slice(0, 4);

    return (
        <>
            <ContentHeader title="案件一覧" description="案件の状況と次の対応を確認できます。" />
            <div className={style.toolbar}>
                <Input className={style.search_input} size="medium" placeholder="案件名・施設・受付番号" prefix={<SearchOutlined />} />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>すべてのステータス</option>
                    <option>受付済み</option>
                    <option>対応中</option>
                    <option>完了</option>
                </select>
                <Button type="primary" className={style.search_button} icon={<FilterIcon size={15} />}> 絞り込み</Button>
            </div>
            <div className={style.panel}>
                <CaseTable cases={statusCases} money={(initialCases) => `¥${Number(initialCases).toLocaleString('ja-JP')}`} />
            </div>
        </>
    );
}

export default Cases;