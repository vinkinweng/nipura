import style from "./calendarPage.module.css"
import React, { useState } from "react";
import ContentHeader from "@/component/contentHeader";
import { ArrowRightIcon, ArrowLeftIcon } from "@/component/MyIcon";
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);
function CalendarPage() {
    const [view, setView] = useState('week');
    interface CaseRecord {
        id: string;
        customer: string;
        title: string;
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
    const initialCases: CaseRecord[] = [
        { id: 'NP-261024', customer: '東京中央医療センター', title: '空調設備の異音・停止', facility: '東京都文京区', assignee: '佐藤 美咲', status: '作業手配済み', priority: '高', date: '2026-11-21', time: '09:30', amount: 248000, kind: '修理' },
        { id: 'NP-261023', customer: '大阪みなみ病院', title: '給湯設備の温度異常', facility: '大阪府大阪市', assignee: '高橋 健', status: '受付済み', priority: '中', date: '2026-11-16', time: '11:00', amount: 96000, kind: '修理' },
        { id: 'NP-261022', customer: '名古屋市立大学病院', title: '定期点検・部品交換', facility: '愛知県名古屋市', assignee: '鈴木 由紀', status: '対応中', priority: '中', date: '2026-11-18', time: '13:30', amount: 182000, kind: '点検' },
        { id: 'NP-261021', customer: '横浜北部クリニック', title: 'ポンプからの水漏れ', facility: '神奈川県横浜市', assignee: '田中 翔', status: '部品確認中', priority: '高', date: '2026-11-18', time: '15:00', amount: 134000, kind: '修理' },
        { id: 'NP-261020', customer: '京都リハビリテーション病院', title: '換気設備の定期点検', facility: '京都府京都市', assignee: '佐藤 美咲', status: '完了', priority: '低', date: '2026-11-21', time: '10:00', amount: 72000, kind: '点検' },
    ];

    const keyOf = (date: Dayjs) => date.format('YYYY-MM-DD');
    const [anchor, setAnchor] = useState(dayjs());
    const weekNames = ['月', '火', '水', '木', '金', '土', '日'];
    const weekStart = anchor.startOf('isoWeek'); //找到 anchor 所在周的周一。isoWeek 需要先启用 Day.js 的 isoWeek 插件
    const weekEnd = weekStart.add(6, 'day');  //找到周日。从周一往后加 6 天，得到同一周的周日。
    const weekDates = Array.from({ length: 7 }, (_, index) => weekStart.add(index, 'day')); //// 从周一开始生成 7 个日期。index 是 0 到 6，_ 是未使用的参数。
    const firstDate = keyOf(weekStart);// 把周一和周日转成与案件日期相同的字符串格式。
    const lastDate = keyOf(weekEnd);
    // 筛出本周的案件，包含周一和周日。
    const entries = initialCases
        .filter(item => item.date >= firstDate && item.date <= lastDate)
        .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

    const scheduledHours = entries.filter(item => item.time).map(item => Number(item.time.slice(0, 2)));
    const firstHour = Math.min(9, ...scheduledHours);
    const lastHour = Math.max(18, ...scheduledHours);

    // 生成周视图的小时行，例如 [9, 10, ..., 18]。
    const hours = Array.from({ length: lastHour - firstHour + 1 }, (_, index) => firstHour + index);
    const isToday = (date: Dayjs) => date.isSame(dayjs(), 'day');
    const getEvents = (date: Dayjs) => {
        const dateKey = keyOf(date);
        return initialCases.filter(item => item.date === dateKey).sort((a, b) => a.time.localeCompare(b.time));
    };
    return (
        <>
            <ContentHeader title="スケジュール表" description="案件の状況と次の対応を確認できます" />
            <div className={style.calendar_toolbar}>
                <div className={style.calendar_switch}>
                    <button className={style.icon_btn} ><ArrowLeftIcon size={16} /></button>
                    <button className={style.icon_btn}><ArrowRightIcon size={16} /></button>
                    <b>2026年10月26日 – 11月1日</b>
                    <button className={style.small}>今日</button>
                </div>
                <div className={style.view_switch}>
                    <button className={view === 'week' ? style.active : ''} onClick={() => setView('week')}>週</button>
                    <button className={view === 'month' ? style.active : ''} onClick={() => setView('month')}>月</button>
                    <button className={view === 'list' ? style.active : ''} onClick={() => setView('list')}>リスト</button>
                </div>
            </div >

            {view === 'week' &&
                <div className={style.week_grid} style={{ gridTemplateRows: `54px repeat(${hours.length}, minmax(78px, auto))` }}>
                    <div className={style.time_label}>GMT+9</div>
                    {weekDates.map((day, index) =>
                        <div className={`${style.day_head} ${isToday(day) ? style.today : ''}`} key={keyOf(day)}>
                            <small>{weekNames[index]}</small>
                            <b>{day.date()}</b>
                        </div>)
                    }
                    {hours.map(hour =>
                        <React.Fragment key={hour}>
                            <div className={style.time_label}>
                                {String(hour).padStart(2, '0')}:00
                            </div>
                            {weekDates.map(d =>
                                <div className={style.calendar_cell} key={`${hour}-${keyOf(d)}`}>{getEvents(d).filter(c => Number(c.time.slice(0, 2)) === hour).map(event =>
                                    <button key={event.id} className={`${style.calendar_event} ${event.priority === '高' ? style.urgent : ''} ${event.status === '完了' ? style.event_done : ''}`} onClick={() => setModal(event.id)}>
                                        <b>{event.time} · {event.customer}</b>
                                        <span>{event.title}</span>
                                        <small>{event.assignee}</small>
                                    </button>)}
                                </div>)}
                        </React.Fragment>)}
                </div>
            }
            {/* {view === 'month' && <MonthView />}
            {view === 'list' && <ListView />} */}
            <div className={style.calendar_note}>
                <span>
                    <i className={`${style.dot} ${style.green_dot}`} />訪問・作業予定
                </span>
                <span>
                    <i className={`${style.dot} ${style.gray_dot}`} />完了
                </span>
                <span>
                    <i className={`${style.dot} ${style.red_dot}`} />高優先度
                </span>
            </div>
        </>
    );
}

export default CalendarPage;