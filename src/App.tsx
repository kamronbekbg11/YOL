import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SessionsPage from './pages/SessionsPage';
import CalendarPage from './pages/CalendarPage';
import TermPage from './pages/TermPage';
import CoursesPage from './pages/CoursesPage';
import DataRoomPage from './pages/DataRoomPage';
import AchievementsPage from './pages/AchievementsPage';
import TermConfigPage from './pages/TermConfigPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="sessions" element={<SessionsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="term" element={<TermPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="data-room" element={<DataRoomPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="term-config" element={<TermConfigPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
