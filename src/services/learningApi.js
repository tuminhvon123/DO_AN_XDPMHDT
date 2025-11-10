// src/services/courseApi.js
import axios from "axios";

const API_URL = "http://localhost:5002/api/courses"; // ✅ Port backend learning-service

// Lấy danh sách khóa học
export const getAllCourses = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi lấy danh sách khóa học:", err);
    throw err;
  }
};

// Thêm khóa học mới
export const addCourse = async (course) => {
  try {
    const res = await axios.post(API_URL, course);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi thêm khóa học:", err);
    throw err;
  }
};
