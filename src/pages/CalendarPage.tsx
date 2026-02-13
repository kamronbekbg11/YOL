import { useState } from 'react';
import { Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { calendarData, courseColors } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CalendarPage() {
    const [activeView, setActiveView] = useState('Monthly view');
    const [activeTab, setActiveTab] = useState('Overview');
    const cal = calendarData;

    const allCourses = Array.from(
        new Set(cal.dailyData.flatMap((d) => Object.keys(d.courses)))
    );

    const barData = {
        labels: cal.dailyData.map((d) => d.day.toString()),
        datasets: allCourses.map((course) => ({
            label: course,
            data: cal.dailyData.map((d) => (d.courses as unknown as Record<string, number>)[course] || 0),
            backgroundColor: courseColors[course] || '#94A3B8',
            borderRadius: 3,
            barPercentage: 0.8,
            categoryPercentage: 0.7,
        })),
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1E293B',
                cornerRadius: 8,
                padding: 10,
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: { font: { size: 10 }, color: '#94A3B8' },
            },
            y: {
                stacked: true,
                grid: { color: '#F1F5F9' },
                ticks: { font: { size: 10 }, color: '#94A3B8', callback: (v: any) => `${v}h` },
            },
        },
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Calendar
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">↔ 01.01.24–31.12.24 Term</span>
                    <span className="stat-item">📈 741h/784h (95%) study progress</span>
                    <span className="stat-item">⏱️ 278/366 (76%) time progress</span>
                    <span className="stat-item">🏠 2h 40m ø study day</span>
                    <span className="stat-item">🏁 784h/851h goal (study days/courses)</span>
                </div>
            </div>

            {/* VIEW TABS */}
            <div className="tabs">
                {['Daily view', 'Weekly view', 'Monthly view'].map((v) => (
                    <button
                        key={v}
                        className={`tab ${activeView === v ? 'active' : ''}`}
                        onClick={() => setActiveView(v)}
                    >
                        {v}
                    </button>
                ))}
                <div style={{ flex: 1 }} />
                <button className="filter-btn" style={{ margin: '4px 0' }}>🔧 Change goals...</button>
            </div>

            <div className="calendar-layout">
                {/* SIDEBAR */}
                <div className="calendar-sidebar">
                    {/* Month Selector */}
                    <div className="card">
                        <div className="month-selector">
                            <span className="month-label">Months · {cal.monthIndex}/{cal.totalMonths}</span>
                            <button className="current-btn">Select current month</button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 600 }}>{cal.month}</span>
                            <span style={{ fontSize: '13px', color: '#94A3B8' }}>▼</span>
                            <div className="month-nav">
                                <button><ChevronLeft size={12} /></button>
                                <button><ChevronRight size={12} /></button>
                            </div>
                        </div>
                    </div>

                    {/* Sub-tabs */}
                    <div className="tabs" style={{ marginBottom: '0' }}>
                        {['Overview', 'Courses', 'Activities'].map((t) => (
                            <button
                                key={t}
                                className={`tab ${activeTab === t ? 'active' : ''}`}
                                onClick={() => setActiveTab(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Goals */}
                    <div className="card">
                        <div className="card-title" style={{ marginBottom: '12px' }}>Goals</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#10B981' }}>{cal.goals.studied}</div>
                                <div style={{ fontSize: '10px', color: '#94A3B8' }}>STUDIED</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '16px', fontWeight: 700 }}>{cal.goals.goal}</div>
                                <div style={{ fontSize: '10px', color: '#94A3B8' }}>GOAL</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '16px', fontWeight: 700 }}>{cal.goals.sessions}</div>
                                <div style={{ fontSize: '10px', color: '#94A3B8' }}>SESSIONS</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '8px' }}>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: `${Math.min(cal.goals.percentage, 100)}%`, background: '#10B981' }} />
                            </div>
                            <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                                {cal.goals.percentage}% · Study goal achieved
                            </div>
                        </div>
                    </div>

                    {/* Insights */}
                    <div className="card">
                        <div className="card-title" style={{ marginBottom: '12px' }}>Insights</div>
                        <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#64748B' }}>🎯 0 Exams</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#64748B' }}>✓ {cal.insights.activeDays} active days ({cal.insights.activeDaysPercent}%)</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#64748B' }}>✓ {cal.insights.daysOver100} days with {'>'} 100% goal ({cal.insights.daysOver100Percent}%)</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#3B82F6' }}>⊘ {cal.insights.dailyAvg} ø daily (active days)</span>
                                <span style={{ color: '#10B981', fontSize: '11px' }}>+daily ↑</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#EF4444' }}>⊘ 0h 21m ø daily (all days)</span>
                                <span style={{ color: '#10B981', fontSize: '11px' }}>+daily ↑</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#64748B' }}>📈 {cal.insights.deltaSharePrice} delta share price ({cal.insights.deltaPercent})</span>
                            </div>
                        </div>
                    </div>

                    {/* Medals */}
                    <div className="card">
                        <div className="card-title" style={{ marginBottom: '12px' }}>Medals</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '20px' }}>🥇</span>
                                <span style={{ fontWeight: 700 }}>61</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '20px' }}>🥈</span>
                                <span style={{ fontWeight: 700 }}>9</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '20px' }}>🥉</span>
                                <span style={{ fontWeight: 700 }}>10</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CHART AREA */}
                <div className="calendar-main">
                    {/* Course Legend */}
                    <div className="course-legend">
                        {allCourses.map((course) => (
                            <div key={course} className="legend-item">
                                <div className="legend-dot" style={{ background: courseColors[course] || '#94A3B8' }} />
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>

                    <div className="card">
                        <div className="chart-container" style={{ height: '400px' }}>
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
