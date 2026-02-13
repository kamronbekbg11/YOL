import { useState } from 'react';
import { Plus, X, Clock, BookOpen, BarChart3, Target } from 'lucide-react';

interface HeaderProps {
    sidebarCollapsed: boolean;
}

export default function Header({ sidebarCollapsed }: HeaderProps) {
    const [timerActive, setTimerActive] = useState(true);
    const [timerTime, _setTimerTime] = useState('00:06');

    return (
        <header className={`header ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <div className="header-left">
                <span className="header-date">04.10.24 • WEEK 40 •</span>
                <span style={{ fontSize: '12px', color: '#64748B' }}>🎓 ZEITTRACKING 2024</span>
                <div className="header-meta">
                    <span><BarChart3 size={12} /> 38m/2h 0m (32%) studied today</span>
                    <span><Target size={12} /> 741h/784h (95%) study progress</span>
                    <span><Clock size={12} /> 278/366 (76%) time progress</span>
                    <span><BookOpen size={12} /> 1,640 sessions</span>
                    <span>📐 27m ø session</span>
                    <span>🏁 784h/851h goal (study days/courses)</span>
                </div>
            </div>

            <div className="header-right">
                <button className="btn-session">
                    <Plus size={14} />
                    Session ...
                </button>

                {timerActive && (
                    <div className="timer-badge">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%', display: 'inline-block' }} />
                            Athenify
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '1px 8px', borderRadius: '10px', fontSize: '11px' }}>
                            {timerTime}
                        </span>
                        <button className="timer-close" onClick={() => setTimerActive(false)}>
                            <X size={12} />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
