import style from "./calendarPage.module.css"
import React, { useState } from 'react';
import ContentHeader from "@/component/contentHeader"

import { ArrowRightIcon, ArrowLeftIcon } from "@/component/MyIcon";
function CalendarPage() {
    const [view, setView] = useState('week');
    return (
        <>
            <ContentHeader title="スケジュール表" description="案件の状況と次の対応を確認できます" />
            <div className={style.calendar_toolbar}>
                <div className={style.calendar_switch}>
                    <button className="icon-btn"><ArrowLeftIcon size={16} />
                    </button>
                    <button className="icon-btn"><ArrowRightIcon size={16} />
                    </button>
                    <b>2026年10月26日 – 11月1日</b>
                    <button className="button small" >今日</button>
                </div>
                <div className={style.view_switch}>
                    <button className={view === 'week' ? style.active : ''} onClick={() => setView('week')}>週</button>
                    <button className={view === 'month' ? style.active : ''} onClick={() => setView('month')}>月</button>
                    <button className={view === 'list' ? style.active : ''} onClick={() => setView('list')}>リスト</button>
                </div>
            </div>
            {view === 'week' && <div >week</div>}
            {view === 'month' && <div>month</div>}
            {view === 'list' && <div>list</div>}
        </>
    );
}

export default CalendarPage;