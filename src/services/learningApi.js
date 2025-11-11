// src/services/learningApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5002/api/courses'; // Đúng với backend learning-service

// 📘 Lấy tất cả khóa học
export const getCourses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// ➕ Thêm khóa học
export const addCourse = async (courseData) => {
  const res = await axios.post(API_URL, courseData);
  return res.data;
};

// 🗑️ Xóa khóa học (hàm này bị thiếu trong code của bạn)
export const deleteCourse = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

// ✏️ Cập nhật khóa học
export const updateCourse = async (id, courseData) => {
  const res = await axios.put(`${API_URL}/${id}`, courseData);
  return res.data;
};
