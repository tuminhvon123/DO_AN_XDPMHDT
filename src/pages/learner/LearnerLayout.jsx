import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../../services/auth';
import {
  HomeIcon,
  MicrophoneIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const LearnerLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', path: '/learner' },
    { icon: MicrophoneIcon, label: 'Luyện Nói', path: '/learner/speaking' },
    { icon: ChartBarIcon, label: 'Tiến Độ', path: '/learner/progress' },
    { icon: CogIcon, label: 'Cài Đặt', path: '/learner/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">👨‍🎓 Học Viên</h1>
          <p className="text-sm text-gray-500 mt-1">{user?.role}</p>
        </div>
        
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200 mb-2"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-6 w-full px-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition duration-200"
          >
            <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default LearnerLayout;