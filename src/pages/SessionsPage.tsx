import { useState } from 'react';
import { Info, Filter, Search, Check } from 'lucide-react';
import { sessions } from '../data/mockData';
import { useTranslation } from '../i18n/LanguageContext';

export default function SessionsPage() {
    const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
    const [showPanel] = useState(true);
    const t = useTranslation();

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    {t.sessionsPage.title}
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📊 38m/2h 0m (32%) {t.sessionsPage.studiedToday}</span>
                    <span className="stat-item">📈 741h/784h (95%) {t.sessionsPage.studyProgress}</span>
                    <span className="stat-item">📚 1,640 {t.sessionsPage.sessions}</span>
                    <span className="stat-item">📐 27m {t.sessionsPage.avgSession}</span>
                    <span className="stat-item">🏁 784h/851h {t.sessionsPage.goal}</span>
                </div>
            </div>

            <div className="sessions-layout">
                {/* CREATE SESSION PANEL */}
                {showPanel && (
                    <div className="session-panel">
                        <h3>{t.sessionsPage.createNew}</h3>
                        <div className="form-group">
                            <label>{t.sessionsPage.date} *</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input type="text" defaultValue="04.10.24" style={{ flex: 1 }} />
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>◀</button>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>▶</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t.sessionsPage.start} *</label>
                                <input type="text" defaultValue="17:34" />
                            </div>
                            <div className="form-group">
                                <label>{t.sessionsPage.end} *</label>
                                <input type="text" defaultValue="17:34" />
                            </div>
                            <div className="form-group">
                                <label>{t.sessionsPage.break}</label>
                                <input type="text" defaultValue="0" />
                            </div>
                        </div>
                        <div className="duration-display">{t.sessionsPage.duration}: –</div>
                        <div className="form-group">
                            <label>{t.sessionsPage.course} *</label>
                            <input type="text" placeholder="e.g. MAT 401" />
                        </div>
                        <div className="form-group">
                            <label>{t.sessionsPage.activity}</label>
                            <input type="text" placeholder="e.g. Learn by heart" />
                        </div>
                        <div className="form-group">
                            <label>{t.sessionsPage.note}</label>
                            <textarea placeholder="e.g. repeat lecture 1: Slides 1-20" />
                        </div>
                        <button className="create-btn">
                            <Check size={14} />
                            {t.sessionsPage.create}
                        </button>
                    </div>
                )}

                {/* SESSIONS TABLE */}
                <div className="sessions-main">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700 }}>{t.sessionsPage.title} · {sessions.length.toLocaleString()}</h3>
                        <div className="view-toggle">
                            <button className={viewMode === 'table' ? 'active' : ''} onClick={() => setViewMode('table')}>{t.sessionsPage.table}</button>
                            <button className={viewMode === 'cards' ? 'active' : ''} onClick={() => setViewMode('cards')}>{t.sessionsPage.cards}</button>
                        </div>
                    </div>

                    <div className="filter-bar">
                        <button className="filter-btn active">
                            <Filter size={12} />
                            {t.sessionsPage.filter}
                        </button>
                        <button className="filter-btn">📅 {t.sessionsPage.period}</button>
                        <button className="filter-btn">📚 {t.sessionsPage.coursesFilter} (8)</button>
                        <button className="filter-btn">🎯 {t.sessionsPage.activitiesFilter} (17)</button>
                        <div className="search-input">
                            <Search size={12} />
                            <input type="text" placeholder={t.sessionsPage.search} />
                        </div>
                        <button className="filter-btn">{t.sessionsPage.others} ▼</button>
                    </div>

                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '36px' }}><input type="checkbox" className="checkbox" /></th>
                                    <th>{t.sessionsPage.date}</th>
                                    <th>{t.sessionsPage.time}</th>
                                    <th>{t.sessionsPage.duration}</th>
                                    <th>{t.sessionsPage.course}</th>
                                    <th>{t.sessionsPage.activity}</th>
                                    <th>{t.sessionsPage.note}</th>
                                    <th style={{ width: '40px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {sessions.map((session) => (
                                    <tr key={session.id}>
                                        <td><input type="checkbox" className="checkbox" /></td>
                                        <td>
                                            <span style={{ color: session.courseColor, fontWeight: 600, fontSize: '13px' }}>
                                                {session.date}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: '13px' }}>{session.startTime}–{session.endTime}</td>
                                        <td style={{ fontSize: '13px', fontWeight: 600 }}>{session.duration}</td>
                                        <td>
                                            <span
                                                className="badge"
                                                style={{
                                                    background: `${session.courseColor}15`,
                                                    color: session.courseColor,
                                                }}
                                            >
                                                {session.course}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: '13px' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                {session.activityIcon} {session.activity}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: '12.5px', color: '#64748B', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {session.note}
                                        </td>
                                        <td>
                                            <button className="action-menu">···</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
