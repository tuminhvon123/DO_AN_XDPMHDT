import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../../services/userApi';
import { Home, MessageSquare, BookOpen, Settings, LogOut, Menu, X } from 'lucide-react';
import '../../assets/css/dashboard.css';

const MentorLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/mentor' },
    { icon: MessageSquare, label: 'Phản hồi', path: '/mentor/feedback' },
    { icon: BookOpen, label: 'Tài nguyên', path: '/mentor/resources' },
    { icon: Settings, label: 'Cài đặt', path: '/mentor/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="dashboard-root">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-logo">
          <h2 className="flex items-center gap-2">Mentor Hub</h2>
          <p className="text-sm text-emerald-300 mt-1">{user?.username || 'Mentor'}</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="sidebar-link w-full justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <LogOut />
            Đăng xuất
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <button className="menu-toggle lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <h1 className="dashboard-title">
            {menuItems.find(i => i.path === location.pathname)?.label || 'Mentor'}
          </h1>
          <div className="dashboard-user">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
              {user?.username?.[0]?.toUpperCase() || 'M'}
            </div>
            <div>
              <p className="font-medium">{user?.username || 'Mentor'}</p>
              <p className="text-sm text-emerald-300">Giảng viên</p>
            </div>
          </div>
        </header>
        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MentorLayout;