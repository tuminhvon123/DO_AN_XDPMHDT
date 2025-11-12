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
// 👉 Giả sử bạn có biến BASE_URL và đã dùng fetch/axios
// Ví dụ endpoint (bạn đổi theo backend của nhóm):
// POST  /enrollments         { user_id, course_id }
// GET   /enrollments?user_id=xxx
// GET   /enrollments/check?user_id=xxx&course_id=yyy  -> { enrolled: true/false }

export async function enrollCourse(courseId, userId) {
  const res = await fetch(`${BASE_URL}/enrollments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ course_id: courseId, user_id: userId }),
  });
  if (!res.ok) throw new Error("Đăng ký thất bại");
  return res.json();
}

export async function getMyEnrollments(userId) {
  const res = await fetch(`${BASE_URL}/enrollments?user_id=${userId}`);
  if (!res.ok) throw new Error("Không lấy được danh sách đã đăng ký");
  return res.json(); // trả về mảng [{id, course_id, user_id, ...}]
}

export async function checkEnrolled(courseId, userId) {
  const res = await fetch(`${BASE_URL}/enrollments/check?user_id=${userId}&course_id=${courseId}`);
  if (!res.ok) throw new Error("Không kiểm tra được trạng thái");
  return res.json(); // { enrolled: true/false }
}
