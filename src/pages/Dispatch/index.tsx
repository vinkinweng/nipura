import style from "./dispatch.module.css"
import React, { useState } from 'react';
import ContentHeader from "@/component/contentHeader";
import Status from '@/component/status';
import { WarnIcon, TaskIcon, CheckIcon } from "@/component/MyIcon"
import { Form, Select, DatePicker, Input, Button } from 'antd';
import jaJP from 'antd/es/date-picker/locale/ja_JP';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
interface DispatchCase {
    id: string;
    customer: string;
    title: string;
    assignee: string;
    status: string;
    priority: string;
    amount: number;
    date: string;
    time: string;
    preferredVisit?: string;
}

interface Assignment {
    assignee: string;
    date: string;
    time: string;
    note: string;
}

interface AssignmentFields {
    assignee: string;
    visit: Dayjs;
    note?: string;
}
const initialCases: DispatchCase[] = [
    { id: 'NP-261024', customer: '東京中央医療センター', title: '空調設備の異音・停止', assignee: '未割当', status: '受付済み', priority: '高', amount: 248000, date: '', time: '', preferredVisit: '2026-11-24T09:30', },
    { id: 'NP-261023', customer: '大阪みなみ病院', title: '給湯設備の温度異常', assignee: '未割当', status: '受付済み', priority: '中', amount: 96000, date: '', time: '', },
    { id: 'NP-261022', customer: '名古屋市立大学病院', title: '定期点検・部品交換', assignee: '鈴木 由紀', status: '作業手配済み', priority: '低', amount: 182000, date: '2026-11-25', time: '13:30', },
];
const staff = ['佐藤 美咲', '高橋 健', '鈴木 由紀', '田中 翔'];

const money = (amount: number | string) => `¥${Number(amount).toLocaleString('ja-JP')}`;
function Dispatch() {
    const [cases, setCases] = useState<DispatchCase[]>(initialCases);
    const pending = cases.filter(c => c.status === '受付済み' || c.assignee === '未割当');
    const [picked, setPicked] = useState(initialCases[0]?.id ?? '');

    const onAssign = (caseId: string, assignment: Assignment) => {
        setCases(currentCases =>
            currentCases.map(item =>
                item.id === caseId
                    ? { ...item, ...assignment, status: '作業手配済み' }
                    : item
            )
        );
    };

    return (
        <>
            <ContentHeader title="作業手配" description="案件の状況と次の対応を確認できます" />
            <div className={style.dispath_layout}>
                <div className={style.panel}>
                    <div className={style.panel_heading}>
                        <div>
                            <h2>手配待ち案件</h2>
                            <p>担当者・訪問予定を設定するデモ画面</p>
                        </div>
                        <span className={style.counter}>{pending.length} 件</span></div>
                    <div className={style.dispatch_list}>{(pending.length ? pending : cases).map(c => <button key={c.id}
                        className={`${style.dispatch_row} ${picked === c.id ? style.chosen : ''}`}
                        onClick={() => setPicked(c.id)}>
                        <div className={style.dispatch_priority}>{c.priority === '高' ? <WarnIcon size={17} /> :
                            <TaskIcon size={17} />}</div>
                        <div className={style.dispatch_info}>
                            <b>{c.customer}</b><span>{c.title}</span><small>{c.id} · {money(c.amount)}</small>
                        </div>
                        <Status value={c.status} /></button>)}</div>
                </div>
                <div className={`${style.panel} ${style.assignment}`}>
                    <div className={style.panel_heading}>
                        <div>
                            <h2>作業手配</h2>
                            <p>選択した案件の担当情報</p>
                        </div>
                    </div>
                    <div className={style.assignment_body}>{(() => {
                        const c = cases.find(x => x.id === picked);
                        if (!c) return <div className={style.empty}>案件を選択してください</div>;

                        const visit = c.date && c.time ? c.date + 'T' + c.time : c.preferredVisit;
                        const initialVisit = visit ? dayjs(visit) : undefined;

                        return <>
                            <div className={style.assignment_summary}>
                                <small>{c.id}</small>
                                <b>{c.customer}</b>
                                <span>{c.title}</span>
                                <Status value={c.status} />
                            </div>
                            <Form<AssignmentFields> key={c.id} layout="vertical"
                                initialValues={{
                                    assignee: staff.includes(c.assignee) ? c.assignee : undefined,
                                    visit: initialVisit?.isValid() ? initialVisit : undefined
                                }}
                                onFinish={({ assignee, visit, note }) => onAssign(c.id, {
                                    assignee,
                                    date: visit.format('YYYY-MM-DD'),
                                    time: visit.format('HH:mm'),
                                    note: note?.trim() ?? ''
                                })}>
                                <Form.Item name="assignee" label="担当社員"
                                    rules={[{ required: true, message: '担当社員を選択してください。' }]}>
                                    <Select placeholder="担当者を選択"
                                        options={Array.from(new Set(staff), name => ({ value: name, label: name }))} />
                                </Form.Item>
                                <Form.Item name="visit" label="訪問日時"
                                    rules={[{ required: true, message: '訪問日時を選択してください。' }]}>
                                    <DatePicker locale={jaJP} showTime={{ format: 'HH:mm' }} format="YYYY/MM/DD HH:mm"
                                        placeholder="訪問日時を選択" style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item name="note" label="作業メモ">
                                    <Input.TextArea rows={3} placeholder="必要部品、訪問時の注意事項" />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" block icon={<CheckIcon size={16} />}>
                                    手配を確定
                                </Button>
                            </Form>
                        </>;
                    })()}</div>
                </div>
            </div>
        </>
    );
}

export default Dispatch;