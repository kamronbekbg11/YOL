import { Info, TrendingUp, Flame } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { dashboardStats, courses } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

export default function DashboardPage() {
    const stats = dashboardStats;

    const sharePriceData = {
        labels: stats.sharePrice.labels,
        datasets: [
            {
                label: 'Share Price',
                data: stats.sharePrice.data,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1E293B',
                cornerRadius: 8,
                padding: 10,
                titleFont: { size: 12, weight: 600 as const },
                bodyFont: { size: 11 },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { font: { size: 10 }, color: '#94A3B8' },
            },
            y: {
                grid: { color: '#F1F5F9' },
                ticks: { font: { size: 10 }, color: '#94A3B8' },
            },
        },
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Dashboard
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📊 {stats.goals.studyTime.current} ({stats.goals.studyTime.percentage}%) study progress</span>
                    <span className="stat-item">⏱️ {stats.goals.timeProgress.current} ({stats.goals.timeProgress.percentage}%) time progress</span>
                    <span className="stat-item">📚 {stats.goals.sessionCount} sessions</span>
                    <span className="stat-item">📐 {stats.goals.avgSession} ø session</span>
                    <span className="stat-item">🏁 {stats.goals.goalDays} goal (study days/courses)</span>
                </div>
            </div>

            {/* STAT CARDS */}
            <div className="stat-cards">
                <div className="stat-card">
                    <div className="stat-card-label">Study Time</div>
                    <div className="stat-card-value">261h</div>
                    <div className="stat-card-sub">
                        <span>Total</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Total</div>
                    <div className="stat-card-value">{stats.total.hours}</div>
                    <div className="stat-card-sub">
                        <span>{stats.total.sessions} sessions</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Sessions</div>
                    <div className="stat-card-value">498</div>
                    <div className="stat-card-sub">
                        <span>Total sessions</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Avg Performance</div>
                    <div className="stat-card-value" style={{ color: '#10B981' }}>⬆ Outstanding performance</div>
                    <div className="stat-card-sub">
                        <span>▲ 114%</span>
                    </div>
                </div>
            </div>

            {/* GOALS ROW */}
            <div className="stat-cards" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '20px' }}>
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Goals</span>
                        <span className="card-subtitle">Total</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>261h</div>
                            <div style={{ fontSize: '11px', color: '#94A3B8' }}>Studied</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 800 }}>781h</div>
                            <div style={{ fontSize: '11px', color: '#94A3B8' }}>Goal</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 800 }}>498</div>
                            <div style={{ fontSize: '11px', color: '#94A3B8' }}>Sessions</div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Study days · {stats.studyDays.current}/{stats.studyDays.total}</span>
                        <span className="card-subtitle">▲ {stats.studyDays.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${Math.min(stats.studyDays.percentage, 100)}%`, background: '#3B82F6' }}
                        />
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '12px', color: '#94A3B8' }}>
                        Days with study activity this term
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Flame size={16} color="#EF4444" /> Streaks · {stats.streak.current} days
                        </span>
                    </div>
                    <div className="streak-value">
                        🔥 {stats.streak.current}
                    </div>
                    <div className="streak-label">Best: {stats.streak.best} days</div>
                </div>
            </div>

            {/* MAIN DASHBOARD GRID */}
            <div className="dashboard-grid">
                {/* SHARE PRICE CHART */}
                <div className="card">
                    <div className="card-header">
                        <div>
                            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <TrendingUp size={14} /> Share Price · {stats.sharePrice.current}
                            </span>
                            <span className="card-subtitle">{stats.sharePrice.trend} this term</span>
                        </div>
                    </div>
                    <div className="chart-container" style={{ height: '220px' }}>
                        <Line data={sharePriceData} options={chartOptions} />
                    </div>
                </div>

                {/* MEDALS */}
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">Medals</span>
                    </div>
                    <div className="medal-display">
                        <div className="medal-item">
                            <span className="medal-icon">🥇</span>
                            <span>{stats.medals.gold}</span>
                        </div>
                        <div className="medal-item">
                            <span className="medal-icon">🥈</span>
                            <span>{stats.medals.silver}</span>
                        </div>
                        <div className="medal-item">
                            <span className="medal-icon">🥉</span>
                            <span>{stats.medals.bronze}</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <div className="card-subtitle">next exam</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>
                            📅 09.03.25 (in 14 days)
                        </div>
                    </div>
                </div>

                {/* COURSES PROGRESS */}
                <div className="card full-width">
                    <div className="card-header">
                        <span className="card-title">Courses Progress</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                        {courses.map((course) => (
                            <div key={course.id} style={{ padding: '12px', background: '#F8FAFC', borderRadius: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: course.color }} />
                                    <span style={{ fontSize: '12.5px', fontWeight: 600 }}>{course.name}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94A3B8', marginBottom: '6px' }}>
                                    <span>{course.studied} / {course.goal}</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-bar-fill"
                                        style={{
                                            width: `${Math.min(course.progress, 100)}%`,
                                            background: course.color,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
