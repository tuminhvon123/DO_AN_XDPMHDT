import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5001'; // Flask user-service

// Hàm đăng nhập
export const login = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
      role,
    });

    const { token, user } = response.data;

    // ✅ Lưu token + thông tin user vào localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    // Xử lý lỗi
    if (error.response) {
      throw new Error(error.response.data.message || 'Đăng nhập thất bại');
    } else {
      throw new Error('Không thể kết nối đến máy chủ');
    }
  }
};

// ✅ THÊM HÀM GET CURRENT USER
export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// ✅ THÊM HÀM LOGOUT
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  // Có thể thêm redirect hoặc cleanup khác nếu cần
};

// ✅ THÊM HÀM KIỂM TRA TOKEN (tùy chọn)
export const getToken = () => {
  return localStorage.getItem('token');
};

// ✅ THÊM HÀM ĐĂNG KÝ (nếu cần)
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Đăng ký thất bại');
    } else {
      throw new Error('Không thể kết nối đến máy chủ');
    }
  }
};