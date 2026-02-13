import { Info, Plus } from 'lucide-react';
import { courses, sessions } from '../data/mockData';

export default function CoursesPage() {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Courses
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">📈 741h/784h (95%) study progress</span>
                    <span className="stat-item">📚 53h 40m ø course</span>
                    <span className="stat-item">🎯 43h 36m ø activity</span>
                    <span className="stat-item">🏁 784h/851h goal (study days/courses)</span>
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '250px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Course
                                    <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#3B82F6',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Create course...
                                    </button>
                                </div>
                            </th>
                            <th>Sessions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => {
                            const courseSessions = sessions.filter((s) => s.course === course.name).slice(0, 3);
                            return (
                                <tr key={course.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: course.color }} />
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '13px' }}>{course.name}</div>
                                                <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                                                    {course.studied} studied · {course.progress}% of goal
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {courseSessions.length > 0 ? (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                {courseSessions.map((session) => (
                                                    <div
                                                        key={session.id}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px',
                                                            fontSize: '12px',
                                                            padding: '4px 8px',
                                                            background: '#F8FAFC',
                                                            borderRadius: '6px',
                                                        }}
                                                    >
                                                        <span style={{ color: course.color, fontWeight: 600 }}>{session.date}</span>
                                                        <span style={{ color: '#64748B' }}>{session.startTime}–{session.endTime}</span>
                                                        <span style={{ fontWeight: 600 }}>{session.duration}</span>
                                                        <span style={{ color: '#94A3B8' }}>{session.activityIcon} {session.activity}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <span style={{ color: '#94A3B8', fontSize: '12px' }}>No sessions yet</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
