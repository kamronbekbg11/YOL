import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function AppLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="app-layout">
            <Sidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <div className={`main-wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                <Header sidebarCollapsed={sidebarCollapsed} />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
