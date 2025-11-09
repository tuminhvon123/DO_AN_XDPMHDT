// src/services/userApi.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5001';

// 🟢 Đăng nhập
export const login = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
      role,
    });

    const { token, user } = response.data;

    // ✅ Lưu token + user vào localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Đăng nhập thất bại');
    } else {
      throw new Error('Không thể kết nối đến máy chủ');
    }
  }
};

// 🟢 Đăng ký
export const register = async (username, password, role) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      username,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Đăng ký thất bại');
    } else {
      throw new Error('Không thể kết nối đến máy chủ');
    }
  }
};

// 🟢 Lấy user hiện tại
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

// 🟢 Đăng xuất
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
