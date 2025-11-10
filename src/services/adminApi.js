import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/auth';

export const adminApi = {
  // Lấy danh sách users
  getUsers: async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  // Xóa user
  deleteUser: async (userId) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_BASE_URL}/admin/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};