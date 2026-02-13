import { useState } from 'react';
import { Info } from 'lucide-react';
import { dataRoomMatrix } from '../data/mockData';

export default function DataRoomPage() {
    const [activeTab, setActiveTab] = useState(2); // Courses × Months
    const matrix = dataRoomMatrix.coursesMonths;

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Data Room
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📈 741h/784h (95%) study progress</span>
                    <span className="stat-item">⏱️ 278/366 (76%) time progress</span>
                    <span className="stat-item">📐 27m ø session</span>
                    <span className="stat-item">🏠 2h 40m ø study day</span>
                    <span className="stat-item">📚 53h 40m ø course</span>
                </div>
            </div>

            {/* TABS */}
            <div className="tabs">
                {dataRoomMatrix.tabs.map((tab, i) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === i ? 'active' : ''}`}
                        onClick={() => setActiveTab(i)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* MATRIX TABLE */}
            <div className="card" style={{ padding: 0, overflow: 'auto' }}>
                <table className="matrix-table">
                    <thead>
                        <tr>
                            {matrix.headers.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {matrix.rows.map((row) => (
                            <tr key={row.course}>
                                <td>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '2px',
                                                background: row.color,
                                            }}
                                        />
                                        <span style={{ color: row.color }}>{row.course}</span>
                                    </span>
                                </td>
                                {row.values.map((val, i) => (
                                    <td key={i} style={{ color: val === '-' ? '#CBD5E1' : '#0F172A' }}>
                                        {val}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* TOTALS ROW */}
                        <tr>
                            <td style={{ fontWeight: 700 }}>Total</td>
                            {matrix.totals.map((val, i) => (
                                <td key={i} style={{ fontWeight: 700 }}>{val}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '12px' }}>
                <button className="filter-btn">Sessions ▼</button>
            </div>
        </div>
    );
}
