import { useState } from 'react';
import { Info, Filter, Search, Check, MoreHorizontal } from 'lucide-react';
import { sessions } from '../data/mockData';

export default function SessionsPage() {
    const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
    const [showPanel, setShowPanel] = useState(true);

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Sessions
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📊 38m/2h 0m (32%) studied today</span>
                    <span className="stat-item">📈 741h/784h (95%) study progress</span>
                    <span className="stat-item">📚 1,640 sessions</span>
                    <span className="stat-item">📐 27m ø session</span>
                    <span className="stat-item">🏁 784h/851h goal (study days/courses)</span>
                </div>
            </div>

            <div className="sessions-layout">
                {/* CREATE SESSION PANEL */}
                {showPanel && (
                    <div className="session-panel">
                        <h3>Create new session</h3>
                        <div className="form-group">
                            <label>Date *</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input type="text" defaultValue="04.10.24" style={{ flex: 1 }} />
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>◀</button>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>▶</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Start *</label>
                                <input type="text" defaultValue="17:34" />
                            </div>
                            <div className="form-group">
                                <label>End *</label>
                                <input type="text" defaultValue="17:34" />
                            </div>
                            <div className="form-group">
                                <label>Break...</label>
                                <input type="text" defaultValue="0" />
                            </div>
                        </div>
                        <div className="duration-display">Duration: –</div>
                        <div className="form-group">
                            <label>Course *</label>
                            <input type="text" placeholder="e.g. MAT 401" />
                        </div>
                        <div className="form-group">
                            <label>Activity</label>
                            <input type="text" placeholder="e.g. Learn by heart" />
                        </div>
                        <div className="form-group">
                            <label>Note</label>
                            <textarea placeholder="e.g. repeat lecture 1: Slides 1-20" />
                        </div>
                        <button className="create-btn">
                            <Check size={14} />
                            Create
                        </button>
                    </div>
                )}

                {/* SESSIONS TABLE */}
                <div className="sessions-main">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700 }}>Sessions · {sessions.length.toLocaleString()}</h3>
                        <div className="view-toggle">
                            <button className={viewMode === 'table' ? 'active' : ''} onClick={() => setViewMode('table')}>Table</button>
                            <button className={viewMode === 'cards' ? 'active' : ''} onClick={() => setViewMode('cards')}>Cards</button>
                        </div>
                    </div>

                    <div className="filter-bar">
                        <button className="filter-btn active">
                            <Filter size={12} />
                            Filter
                        </button>
                        <button className="filter-btn">📅 Period</button>
                        <button className="filter-btn">📚 Courses (8)</button>
                        <button className="filter-btn">🎯 Activities (17)</button>
                        <div className="search-input">
                            <Search size={12} />
                            <input type="text" placeholder="Search" />
                        </div>
                        <button className="filter-btn">Others ▼</button>
                    </div>

                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '36px' }}><input type="checkbox" className="checkbox" /></th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Duration</th>
                                    <th>Course</th>
                                    <th>Activity</th>
                                    <th>Note</th>
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
