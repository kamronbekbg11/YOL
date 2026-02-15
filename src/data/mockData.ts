// ===== COURSE & ACTIVITY COLORS =====
export const courseColors: Record<string, string> = {
  'Personal Development': '#3B82F6',
  'Gesundheit': '#10B981',
  'Kreativität': '#8B5CF6',
  'Kultur': '#F59E0B',
  'Meta-Skills': '#EC4899',
  'Spiritualität': '#EF4444',
  'Unterhaltung': '#06B6D4',
  'Yol': '#1E40AF',
};

// ===== COURSES =====
export interface Course {
  id: string;
  name: string;
  color: string;
  exam?: string;
  studied: string;
  goal: string;
  progress: number;
}

export const courses: Course[] = [
  { id: '1', name: 'Yol', color: '#1E40AF', studied: '38h', goal: '52h', progress: 68 },
  { id: '2', name: 'Gesundheit', color: '#10B981', exam: '15.01.25', studied: '160h', goal: '170h', progress: 91 },
  { id: '3', name: 'Kreativität', color: '#8B5CF6', studied: '14h', goal: '52h', progress: 29 },
  { id: '4', name: 'Kultur', color: '#F59E0B', studied: '80h', goal: '100h', progress: 80 },
  { id: '5', name: 'Meta-Skills', color: '#EC4899', studied: '26h', goal: '13h', progress: 18 },
  { id: '6', name: 'Personal Development', color: '#3B82F6', studied: '310h', goal: '350h', progress: 88 },
  { id: '7', name: 'Spiritualität', color: '#EF4444', studied: '85h', goal: '100h', progress: 85 },
  { id: '8', name: 'Unterhaltung', color: '#06B6D4', studied: '68h', goal: '80h', progress: 86 },
];

// ===== ACTIVITIES =====
export interface Activity {
  id: string;
  name: string;
  icon: string;
  studied: string;
}

export const activities: Activity[] = [
  { id: '1', name: 'Lesen', icon: '📖', studied: '456h 5m' },
  { id: '2', name: 'Spazieren gehen', icon: '🚶', studied: '110h 8m' },
  { id: '3', name: 'Museum besuchen', icon: '🏛️', studied: '50h 20m' },
  { id: '4', name: 'Programmieren', icon: '💻', studied: '58h 43m' },
  { id: '5', name: 'Trainieren', icon: '🏋️', studied: '23h 15m' },
  { id: '6', name: 'Meditieren', icon: '🧘', studied: '22h 10m' },
  { id: '7', name: 'Schreiben', icon: '✍️', studied: '18h 30m' },
];

// ===== SESSIONS =====
export interface Session {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  course: string;
  courseColor: string;
  activity: string;
  activityIcon: string;
  note: string;
}

export const sessions: Session[] = [
  { id: '1', date: '04.10.24', startTime: '16:57', endTime: '17:09', duration: '11m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: 'Schmerzen' },
  { id: '2', date: '04.10.24', startTime: '14:06', endTime: '14:33', duration: '27m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: '14 in Line (96/70)' },
  { id: '3', date: '03.10.24', startTime: '20:38', endTime: '21:10', duration: '32m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: '20 in Line (36/64)' },
  { id: '4', date: '03.10.24', startTime: '14:25', endTime: '14:46', duration: '21m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: '22 in Funkenflug (131/53)' },
  { id: '5', date: '03.10.24', startTime: '13:20', endTime: '14:14', duration: '55m', course: 'Kultur', courseColor: '#F59E0B', activity: 'Museum besuchen', activityIcon: '🏛️', note: 'Lazaro Galdiano' },
  { id: '6', date: '03.10.24', startTime: '11:22', endTime: '12:01', duration: '40m', course: 'Kultur', courseColor: '#F59E0B', activity: 'Museum besuchen', activityIcon: '🏛️', note: 'Museo Nacional de Ciencias Nat...' },
  { id: '7', date: '02.10.24', startTime: '23:37', endTime: '00:00', duration: '23m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: '14 in Line (22/36)' },
  { id: '8', date: '02.10.24', startTime: '23:23', endTime: '23:32', duration: '10m', course: 'Spiritualität', courseColor: '#EF4444', activity: 'Meditieren', activityIcon: '🧘', note: 'Madrid' },
  { id: '9', date: '02.10.24', startTime: '22:03', endTime: '22:15', duration: '12m', course: 'Gesundheit', courseColor: '#10B981', activity: 'Trainieren', activityIcon: '🏋️', note: 'Madrid' },
  { id: '10', date: '02.10.24', startTime: '20:16', endTime: '20:30', duration: '14m', course: 'Gesundheit', courseColor: '#10B981', activity: 'Trainieren', activityIcon: '🏋️', note: 'Madrid' },
  { id: '11', date: '02.10.24', startTime: '15:45', endTime: '17:46', duration: '2h 1m', course: 'Kultur', courseColor: '#F59E0B', activity: 'Museum besuchen', activityIcon: '🏛️', note: 'Museo del Prado' },
  { id: '12', date: '02.10.24', startTime: '11:02', endTime: '13:40', duration: '2h 38m', course: 'Gesundheit', courseColor: '#10B981', activity: 'Spazieren gehen', activityIcon: '🚶', note: 'Free Walking Tour Madrid' },
  { id: '13', date: '01.10.24', startTime: '23:30', endTime: '00:00', duration: '29m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Lesen', activityIcon: '📖', note: '17 in Line (5/22)' },
  { id: '14', date: '01.10.24', startTime: '23:18', endTime: '23:31', duration: '13m', course: 'Gesundheit', courseColor: '#10B981', activity: 'Meditieren', activityIcon: '🧘', note: 'Madrid' },
  { id: '15', date: '30.09.24', startTime: '21:15', endTime: '22:30', duration: '1h 15m', course: 'Personal Development', courseColor: '#3B82F6', activity: 'Programmieren', activityIcon: '💻', note: 'React Components' },
  { id: '16', date: '30.09.24', startTime: '18:00', endTime: '19:30', duration: '1h 30m', course: 'Kreativität', courseColor: '#8B5CF6', activity: 'Schreiben', activityIcon: '✍️', note: 'Blog Article Draft' },
  { id: '17', date: '29.09.24', startTime: '10:00', endTime: '11:45', duration: '1h 45m', course: 'Meta-Skills', courseColor: '#EC4899', activity: 'Lesen', activityIcon: '📖', note: 'Atomic Habits Chapter 5-7' },
  { id: '18', date: '29.09.24', startTime: '14:00', endTime: '15:20', duration: '1h 20m', course: 'Unterhaltung', courseColor: '#06B6D4', activity: 'Museum besuchen', activityIcon: '🏛️', note: 'City Gallery' },
  { id: '19', date: '28.09.24', startTime: '09:30', endTime: '10:00', duration: '30m', course: 'Spiritualität', courseColor: '#EF4444', activity: 'Meditieren', activityIcon: '🧘', note: 'Morning Meditation' },
  { id: '20', date: '28.09.24', startTime: '16:00', endTime: '17:30', duration: '1h 30m', course: 'Gesundheit', courseColor: '#10B981', activity: 'Spazieren gehen', activityIcon: '🚶', note: 'Park Walk' },
];

// ===== DASHBOARD STATS =====
export const dashboardStats = {
  today: { hours: '2h 0m', sessions: 3, percentage: 32 },
  week: { hours: '26h', sessions: 48, percentage: 33 },
  month: { hours: '112', sessions: 365, percentage: 31 },
  total: { hours: '781h', sessions: 1641, percentage: 95 },
  streak: { current: 111, best: 111 },
  studyDays: { current: 112, total: 365, percentage: 114 },
  goals: {
    studyTime: { current: '741h/784h', percentage: 95 },
    timeProgress: { current: '278/366', percentage: 76 },
    avgSession: '27m',
    sessionCount: 1640,
    goalDays: '784h/851h',
  },
  medals: { gold: 61, silver: 9, bronze: 10 },
  sharePrice: {
    current: 226,
    trend: '+15%',
    data: [180, 185, 190, 188, 195, 200, 198, 205, 210, 208, 215, 218, 220, 215, 222, 226, 224, 228, 230, 226, 232, 235, 230, 228, 226],
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16', 'W17', 'W18', 'W19', 'W20', 'W21', 'W22', 'W23', 'W24', 'W25'],
  },
};

// ===== CALENDAR DATA =====
export const calendarData = {
  month: 'September 2024',
  monthIndex: 9,
  totalMonths: 12,
  goals: { studied: '70h 23m', goal: '64h 30m', sessions: 129, percentage: 109 },
  insights: {
    exams: 0,
    activeDays: '30/30',
    activeDaysPercent: 100,
    daysOver100: '11/30',
    daysOver100Percent: 37,
    dailyAvg: '2h 21m',
    dailyAvgActive: '2h 21m',
    deltaSharePrice: '+6h 53m',
    deltaPercent: '54%',
  },
  dailyData: [
    { day: 1, hours: 2.5, courses: { 'Personal Development': 1.2, 'Gesundheit': 0.8, 'Kultur': 0.5 } },
    { day: 2, hours: 3.0, courses: { 'Personal Development': 1.5, 'Spiritualität': 0.8, 'Unterhaltung': 0.7 } },
    { day: 3, hours: 1.8, courses: { 'Gesundheit': 1.0, 'Meta-Skills': 0.8 } },
    { day: 4, hours: 4.2, courses: { 'Personal Development': 2.0, 'Kultur': 1.2, 'Kreativität': 1.0 } },
    { day: 5, hours: 2.0, courses: { 'Gesundheit': 1.2, 'Spiritualität': 0.8 } },
    { day: 6, hours: 3.5, courses: { 'Personal Development': 1.5, 'Unterhaltung': 1.0, 'Meta-Skills': 1.0 } },
    { day: 7, hours: 1.5, courses: { 'Kultur': 1.0, 'Gesundheit': 0.5 } },
    { day: 8, hours: 2.8, courses: { 'Personal Development': 1.5, 'Kreativität': 1.3 } },
    { day: 9, hours: 3.2, courses: { 'Gesundheit': 1.5, 'Spiritualität': 1.0, 'Kultur': 0.7 } },
    { day: 10, hours: 2.1, courses: { 'Personal Development': 1.2, 'Meta-Skills': 0.9 } },
    { day: 11, hours: 4.5, courses: { 'Personal Development': 2.0, 'Gesundheit': 1.5, 'Unterhaltung': 1.0 } },
    { day: 12, hours: 1.0, courses: { 'Spiritualität': 0.5, 'Kreativität': 0.5 } },
    { day: 13, hours: 3.0, courses: { 'Personal Development': 1.5, 'Kultur': 1.0, 'Gesundheit': 0.5 } },
    { day: 14, hours: 2.5, courses: { 'Unterhaltung': 1.5, 'Meta-Skills': 1.0 } },
    { day: 15, hours: 3.8, courses: { 'Personal Development': 2.0, 'Gesundheit': 1.0, 'Spiritualität': 0.8 } },
    { day: 16, hours: 1.2, courses: { 'Kultur': 0.7, 'Kreativität': 0.5 } },
    { day: 17, hours: 2.0, courses: { 'Personal Development': 1.0, 'Gesundheit': 1.0 } },
    { day: 18, hours: 3.5, courses: { 'Personal Development': 1.5, 'Unterhaltung': 1.0, 'Spiritualität': 1.0 } },
    { day: 19, hours: 2.8, courses: { 'Gesundheit': 1.5, 'Meta-Skills': 0.8, 'Kultur': 0.5 } },
    { day: 20, hours: 1.5, courses: { 'Kreativität': 1.0, 'Personal Development': 0.5 } },
    { day: 21, hours: 4.0, courses: { 'Personal Development': 2.0, 'Gesundheit': 1.0, 'Spiritualität': 1.0 } },
    { day: 22, hours: 2.2, courses: { 'Kultur': 1.2, 'Unterhaltung': 1.0 } },
    { day: 23, hours: 3.0, courses: { 'Personal Development': 1.5, 'Gesundheit': 1.0, 'Meta-Skills': 0.5 } },
    { day: 24, hours: 1.8, courses: { 'Spiritualität': 1.0, 'Kreativität': 0.8 } },
    { day: 25, hours: 2.5, courses: { 'Personal Development': 1.5, 'Kultur': 1.0 } },
    { day: 26, hours: 3.2, courses: { 'Gesundheit': 1.5, 'Unterhaltung': 1.0, 'Spiritualität': 0.7 } },
    { day: 27, hours: 2.0, courses: { 'Personal Development': 1.0, 'Meta-Skills': 1.0 } },
    { day: 28, hours: 3.5, courses: { 'Personal Development': 1.5, 'Gesundheit': 1.0, 'Kultur': 1.0 } },
    { day: 29, hours: 2.8, courses: { 'Kreativität': 1.0, 'Spiritualität': 1.0, 'Unterhaltung': 0.8 } },
    { day: 30, hours: 1.5, courses: { 'Personal Development': 1.0, 'Gesundheit': 0.5 } },
  ],
};

// ===== DATA ROOM =====
export const dataRoomMatrix = {
  tabs: [
    'Activities × Courses',
    'Activities × Months',
    'Courses × Months',
    'Courses × Calendar Weeks',
    'Activities × Calendar Weeks',
  ],
  coursesMonths: {
    headers: ['Course', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Total'],
    rows: [
      { course: 'Yol', color: '#1E40AF', values: [0, 2, 2, '-', 4, 12, 16, 10, 0, 1, 62] },
      { course: 'Gesundheit', color: '#10B981', values: [25, 20, 35, 10, 12, 10, 27, 12, 17, 5, 244] },
      { course: 'Kreativität', color: '#8B5CF6', values: [0, 5, 1, 2, 1, 0, 3, 0, '-', '-', 31] },
      { course: 'Kultur', color: '#F59E0B', values: [1, 3, 5, 5, 8, 5, 3, '-', 6, '-', 46] },
      { course: 'Meta-Skills', color: '#EC4899', values: [5, 12, 5, 1, 7, 2, 6, '-', '-', '-', 54] },
      { course: 'Personal Development', color: '#3B82F6', values: [110, 82, 97, 105, 100, 101, 90, 54, 56, 8, 812] },
      { course: 'Spiritualität', color: '#EF4444', values: [20, 5, 10, 15, 10, 15, 10, 7, 1, 180] },
      { course: 'Unterhaltung', color: '#06B6D4', values: [23, 15, 3, 1, 7, 0, 15, 0, 5, '-', 106] },
    ],
    totals: [210, 155, 160, 201, 149, 155, 170, 100, 100, 15, 1641],
  },
};

// ===== ACHIEVEMENTS =====
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'gold' | 'silver' | 'bronze' | 'locked';
  earned: boolean;
  earnedDate?: string;
}

export const achievements: Achievement[] = [
  { id: '1', name: 'First Session', description: 'Complete your first study session', icon: '🎯', tier: 'gold', earned: true, earnedDate: '01.01.24' },
  { id: '2', name: 'Early Bird', description: 'Start studying before 7 AM', icon: '🌅', tier: 'gold', earned: true, earnedDate: '05.01.24' },
  { id: '3', name: 'Night Owl', description: 'Study past midnight', icon: '🦉', tier: 'gold', earned: true, earnedDate: '03.01.24' },
  { id: '4', name: 'Week Warrior', description: 'Study every day for a week', icon: '⚔️', tier: 'gold', earned: true, earnedDate: '08.01.24' },
  { id: '5', name: 'Month Master', description: 'Study every day for a month', icon: '👑', tier: 'gold', earned: true, earnedDate: '01.02.24' },
  { id: '6', name: '100 Sessions', description: 'Complete 100 study sessions', icon: '💯', tier: 'gold', earned: true, earnedDate: '15.02.24' },
  { id: '7', name: 'Marathon', description: 'Study for 4+ hours in a day', icon: '🏃', tier: 'gold', earned: true, earnedDate: '20.01.24' },
  { id: '8', name: 'Polymath', description: 'Study 5 different courses in one day', icon: '🎓', tier: 'silver', earned: true, earnedDate: '12.03.24' },
  { id: '9', name: 'Focus Master', description: 'Complete a 2-hour session without breaks', icon: '🔥', tier: 'silver', earned: true, earnedDate: '25.02.24' },
  { id: '10', name: 'Course Complete', description: 'Reach 100% goal on any course', icon: '✅', tier: 'silver', earned: true, earnedDate: '10.04.24' },
  { id: '11', name: 'Explorer', description: 'Try all activity types', icon: '🧭', tier: 'bronze', earned: true, earnedDate: '18.01.24' },
  { id: '12', name: 'Speed Reader', description: 'Log 50 hours of reading', icon: '📚', tier: 'bronze', earned: true, earnedDate: '01.03.24' },
  { id: '13', name: 'Centurion', description: 'Maintain a 100-day streak', icon: '🏆', tier: 'gold', earned: true, earnedDate: '10.04.24' },
  { id: '14', name: '500 Sessions', description: 'Complete 500 study sessions', icon: '🌟', tier: 'silver', earned: true, earnedDate: '01.05.24' },
  { id: '15', name: '1000 Sessions', description: 'Complete 1000 study sessions', icon: '💎', tier: 'gold', earned: true, earnedDate: '01.08.24' },
  { id: '16', name: 'Balanced', description: 'Study all courses in a single week', icon: '⚖️', tier: 'bronze', earned: true, earnedDate: '22.02.24' },
  { id: '17', name: 'Year Champion', description: 'Study every day for a year', icon: '🏅', tier: 'locked', earned: false },
  { id: '18', name: 'Grandmaster', description: 'Reach 1000 hours total study time', icon: '♟️', tier: 'locked', earned: false },
  { id: '19', name: '2000 Sessions', description: 'Complete 2000 study sessions', icon: '🚀', tier: 'locked', earned: false },
  { id: '20', name: 'Perfect Month', description: 'Hit 100% daily goal every day for a month', icon: '✨', tier: 'locked', earned: false },
];

// ===== TERM CHART DATA =====
export const termChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    { label: 'Personal Development', color: '#3B82F6', data: [45, 38, 42, 50, 44, 48, 40, 28, 30, 8] },
    { label: 'Gesundheit', color: '#10B981', data: [12, 10, 15, 8, 8, 6, 12, 8, 10, 5] },
    { label: 'Kultur', color: '#F59E0B', data: [2, 4, 6, 5, 8, 5, 3, 0, 6, 0] },
    { label: 'Spiritualität', color: '#EF4444', data: [8, 4, 6, 8, 5, 7, 5, 4, 2, 1] },
    { label: 'Unterhaltung', color: '#06B6D4', data: [10, 8, 2, 1, 5, 0, 8, 0, 4, 0] },
  ],
};
