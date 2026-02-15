import { Info, Plus } from 'lucide-react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { courses, activities, termChartData } from '../data/mockData';
import { useTranslation } from '../i18n/LanguageContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

export default function TermPage() {
    const t = useTranslation();

    const lineData = {
        labels: termChartData.labels,
        datasets: termChartData.datasets.map((ds) => ({
            label: ds.label,
            data: ds.data,
            borderColor: ds.color,
            backgroundColor: ds.color + '20',
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 6,
            borderWidth: 2,
            fill: false,
        })),
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: '#1E293B', cornerRadius: 8, padding: 10 },
        },
        scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#94A3B8' } },
            y: { grid: { color: '#F1F5F9' }, ticks: { font: { size: 10 }, color: '#94A3B8' } },
        },
    };

    const activityValues = activities.map((a) => parseFloat(a.studied.replace('h', '').replace('m', '').split(' ')[0]));
    const activityColors = ['#3B82F6', '#8B5CF6', '#F59E0B', '#06B6D4', '#EC4899', '#EF4444', '#10B981'];

    const donutData = {
        labels: activities.map((a) => a.name),
        datasets: [
            {
                data: activityValues,
                backgroundColor: activityColors,
                borderWidth: 0,
                hoverOffset: 6,
            },
        ],
    };

    const donutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: '#1E293B', cornerRadius: 8, padding: 10 },
        },
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    {t.termPage.title}
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📈 741h/784h (95%) {t.termPage.studyProgress}</span>
                    <span className="stat-item">📚 53h 40m {t.termPage.avgCourse}</span>
                    <span className="stat-item">🎯 43h 36m {t.termPage.avgActivity}</span>
                    <span className="stat-item">🏁 784h/851h {t.termPage.goal}</span>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* COURSES CHART */}
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">{t.termPage.courses} · {courses.length}</span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="filter-btn">📊 {t.termPage.compareGoals}</button>
                            <button className="filter-btn" style={{ background: '#3B82F6', color: 'white', borderColor: '#3B82F6' }}>
                                <Plus size={12} /> {t.termPage.createCourse}
                            </button>
                        </div>
                    </div>

                    {/* Course Legend */}
                    <div className="course-legend" style={{ marginBottom: '12px' }}>
                        {courses.map((c) => (
                            <div key={c.id} className="legend-item">
                                <div className="legend-dot" style={{ background: c.color }} />
                                <span>{c.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="chart-container" style={{ height: '250px' }}>
                        <Line data={lineData} options={lineOptions} />
                    </div>

                    {/* Course Table */}
                    <table className="data-table" style={{ marginTop: '16px' }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>{t.termPage.course}</th>
                                <th>{t.termPage.exam}</th>
                                <th>{t.termPage.studied}</th>
                                <th>{t.termPage.progress}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>
                                        <span style={{ color: course.color }}>▸</span>
                                    </td>
                                    <td>
                                        <span style={{ color: course.color, fontWeight: 600 }}>{course.name}</span>
                                    </td>
                                    <td style={{ fontSize: '12px', color: '#94A3B8' }}>{course.exam || '–'}</td>
                                    <td style={{ fontSize: '13px' }}>{course.studied}/{course.goal}</td>
                                    <td style={{ width: '200px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div className="progress-bar" style={{ flex: 1 }}>
                                                <div
                                                    className="progress-bar-fill"
                                                    style={{ width: `${Math.min(course.progress, 100)}%`, background: course.color }}
                                                />
                                            </div>
                                            <span style={{ fontSize: '12px', fontWeight: 600, minWidth: '36px' }}>{course.progress}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="action-menu">···</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ACTIVITIES */}
                <div className="card">
                    <div className="card-header">
                        <span className="card-title">{t.termPage.activities} · {activities.length}</span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="filter-btn">📥 {t.termPage.import}</button>
                            <button className="filter-btn" style={{ background: '#3B82F6', color: 'white', borderColor: '#3B82F6' }}>
                                <Plus size={12} /> {t.termPage.createActivity}
                            </button>
                        </div>
                    </div>

                    <div className="chart-container" style={{ height: '250px' }}>
                        <Doughnut data={donutData} options={donutOptions} />
                    </div>

                    <table className="data-table" style={{ marginTop: '16px' }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>{t.termPage.activity}</th>
                                <th>▲ {t.termPage.studied}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity) => (
                                <tr key={activity.id}>
                                    <td>▸</td>
                                    <td>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                                            {activity.icon} {activity.name}
                                        </span>
                                    </td>
                                    <td style={{ fontSize: '13px' }}>{activity.studied}</td>
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
    );
}
