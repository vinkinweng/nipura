import type { ComponentType, ReactNode } from 'react';
import "./stat.css"
interface StatProps {
    Icon: ComponentType<{ size?: number }>;
    label: string;
    value: ReactNode;
    delta: ReactNode;
    tone?: 'orange' | 'red' | 'green';
}
const Stat: React.FC<StatProps> = ({ Icon, label, value, delta, tone = 'green' }) => {
    return (
        <div className="stat-card" >
            <div className={`stat-icon ${tone}`}><Icon size={18} /></div>
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-delta">{delta}</div>
        </div >
    )

};
export default Stat;

