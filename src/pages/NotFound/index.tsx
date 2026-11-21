import style from "./notFound.module.css"
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon } from "@/component/MyIcon";
import { Button } from 'antd';
function NotFound() {
    const navigate = useNavigate();
    return (
        <main className={`${style.not_found_page} ${style.not_found_simple_page}`}>
            <div className={style.not_found_simple}>
                <div className={style.not_found_simple_brand}>
                    <img src="/nipura-logo-80.png" alt="NIPURA" />
                    <span>
                        <b>株式会社ニプラ</b>
                        <small>業務支援システム</small>
                    </span>
                </div>
                <strong className={style.not_found_code}>404</strong>
                <h1>ページが見つかりません</h1>
                <p>URLをご確認いただくか、前のページへお戻りください。</p>
                <div className={style.not_found_simple_actions}>
                    <Button type="primary" icon={<HomeIcon size={16} />} onClick={() => navigate('/')}>トップページへ戻る</Button>
                    <Button icon={<ArrowLeftIcon size={16} />} onClick={() => navigate(-1)}>前のページへ戻る</Button>
                </div>
            </div>
            <footer className={style.not_found_footer}> © 株式会社ニプラ  · 業務支援システム</footer>
        </main>
    );
}

export default NotFound;