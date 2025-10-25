import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../../services/auth';
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const MentorLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', path: '/mentor' },
    { icon: UserGroupIcon, label: 'Phản Hồi', path: '/mentor/feedback' },
    { icon: DocumentTextIcon, label: 'Tài Nguyên', path: '/mentor/resources' },
    { icon: CogIcon, label: 'Cài Đặt', path: '/mentor/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-gradient-to-b from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="p-6 border-b border-purple-500/30">
          <h1 className="text-2xl font-bold">👨‍🏫 Mentor</h1>
          <p className="text-purple-100 mt-1">{user?.role}</p>
        </div>
        
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-purple-100 rounded-lg hover:bg-white/20 transition duration-200 mb-2"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-6 w-full px-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition duration-200"
          >
            <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MentorLayout;