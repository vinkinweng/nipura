import React from 'react';

import Stat from "@/component/stat"
import { TaskIcon, AddIcon, ClockIcon, WarnIcon, ArrowRightIcon } from "@/component/MyIcon"
import { Progress } from 'antd';

import CaseTable from "@/component/caseTable";

import "./dashboard.css"

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
const Dashboard: React.FC = () => {
    const initialCases: CaseRecord[] = [
        { id: 'NP-261024', customer: '東京中央医療センター', title: '空調設備の異音・停止', region: '関東', facility: '東京都文京区', assignee: '佐藤 美咲', status: '作業手配済み', priority: '高', date: '2026-10-29', time: '09:30', amount: 248000, kind: '修理' },
        { id: 'NP-261023', customer: '大阪みなみ病院', title: '給湯設備の温度異常', region: '関西', facility: '大阪府大阪市', assignee: '高橋 健', status: '受付済み', priority: '中', date: '2026-10-29', time: '11:00', amount: 96000, kind: '修理' },
        { id: 'NP-261022', customer: '名古屋市立大学病院', title: '定期点検・部品交換', region: '中部', facility: '愛知県名古屋市', assignee: '鈴木 由紀', status: '対応中', priority: '中', date: '2026-10-29', time: '13:30', amount: 182000, kind: '点検' },
        { id: 'NP-261021', customer: '横浜北部クリニック', title: 'ポンプからの水漏れ', region: '関東', facility: '神奈川県横浜市', assignee: '田中 翔', status: '部品確認中', priority: '中', date: '2026-10-29', time: '15:00', amount: 134000, kind: '修理' },
        { id: 'NP-261020', customer: '京都リハビリテーション病院', title: '換気設備の定期点検', region: '関西', facility: '京都府京都市', assignee: '佐藤 美咲', status: '完了', priority: '低', date: '2026-10-28', time: '10:00', amount: 72000, kind: '点検' },
    ];
    const priorityCases = initialCases.filter(c => c.priority === '高' || c.assignee === '未割当').slice(0, 4);
    return (
        < >
            <div className="stats-grid">
                <Stat Icon={TaskIcon} label="未対応案件" value="12" delta="担当者未設定 2 件" />
                <Stat Icon={AddIcon} label="本日の新規受付" value="6" delta="前日比 +2 件" />
                <Stat Icon={ClockIcon} label="対応中" value="24" delta="進行中の案件" tone="orange" />
                <Stat Icon={WarnIcon} label="期限超過" value="3" delta="早めの確認が必要" tone="red" />
            </div>
            <section className="panel">
                <div className="panel-heading">
                    <h2>本日の案件</h2>
                    <p>2026年10月29日（木） · 今日の対応状況</p>
                </div>
                <div className="today-number">
                    <strong>14</strong>
                    <span>件</span>
                    <small>予定案件のうち <b>9 件</b> 完了</small>
                </div>
                <Progress percent={64} className="daily-progress" showInfo={false} />
                <div className="status-row">
                    <span><i className="dot green" />完了 <b>9</b></span>
                    <span><i className="dot blue-dot" />対応中 <b>3</b></span>
                    <span><i className="dot gray-dot" />未着手 <b>2</b></span>
                </div>
                <button onClick={() => console.log("点击了日程表を開く按钮")}>
                    日程表を開く
                    <ArrowRightIcon size={15} />
                </button>
            </section>
            <section className="panel">
                <div className="panel-heading panel-heading1">
                    <div>
                        <h2>優先対応が必要な案件</h2>
                        <p>優先度が高い案件、または担当者未設定の案件</p>
                    </div>
                    <button className="text-button" onClick={() => console.log("点击了作業手配へ按钮")}>作業手配へ <ArrowRightIcon size={15} /></button></div>
                <CaseTable cases={priorityCases} money={(initialCases) => `¥${Number(initialCases).toLocaleString('ja-JP')}`} />
            </section>
        </>
    );
}

export default Dashboard;