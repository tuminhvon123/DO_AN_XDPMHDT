import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../services/userApi'; // ✅ Import getCurrentUser

const Navbar = () => {
  const user = getCurrentUser(); // ✅ Sử dụng getCurrentUser
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl font-bold">
            <Link to="/">🎓 Học Tiếng Anh AI</Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Đăng nhập
                </Link>
                <Link 
                  to="/register" 
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Đăng ký
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/learner" 
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-lg transition duration-300"
                >
                  Học tập
                </Link>
                {user.role === 'mentor' || user.role === 'admin' && (
                  <Link 
                    to="/mentor" 
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-lg transition duration-300"
                  >
                    Mentor
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-lg transition duration-300"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;