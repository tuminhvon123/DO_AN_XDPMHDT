// src/pages/learner/ProgressTracking.jsx
import React, { useEffect, useState } from "react";
import {
  getProgressByUser,
  addProgress,
  updateProgress,
  deleteProgress,
  incrementCompletedLessons,
  getUserProgressOverview
} from "../../services/progressApi";
import { getCurrentUser } from "../../services/userApi";

const ProgressTracking = () => {
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProgress, setNewProgress] = useState({
    course_id: "",
    completed_lessons: "",
    total_lessons: ""
  });

  const user = getCurrentUser();

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    try {
      setLoading(true);
      // Thử cả 2 cách nếu một trong số đó không hoạt động
      let data;
      try {
        data = await getUserProgressOverview(user.id);
      } catch (overviewError) {
        console.log("Fallback to getProgressByUser");
        data = await getProgressByUser(user.id);
      }
      setProgressList(data);
    } catch (error) {
      console.error("Lỗi khi tải tiến độ:", error);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your code remains the same
  const handleAddProgress = async (e) => {
    e.preventDefault();
    if (!newProgress.course_id || !newProgress.total_lessons) {
      return alert("Vui lòng nhập Course ID và tổng số bài học");
    }
    try {
      await addProgress({
        user_id: user.id,
        course_id: parseInt(newProgress.course_id),
        completed_lessons: parseInt(newProgress.completed_lessons) || 0,
        total_lessons: parseInt(newProgress.total_lessons)
      });
      setNewProgress({ course_id: "", completed_lessons: "", total_lessons: "" });
      fetchProgress();
      alert("✅ Đã thêm tiến độ thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm tiến độ:", error);
      alert("❌ Lỗi khi thêm tiến độ!");
    }
  };

  const handleIncrementLesson = async (courseId) => {
    try {
      await incrementCompletedLessons(user.id, courseId);
      fetchProgress();
    } catch (error) {
      console.error("Lỗi khi cập nhật bài học:", error);
      alert("❌ Lỗi khi cập nhật bài học!");
    }
  };

  const handleUpdate = async (id, currentProgress) => {
    const completed = prompt("Nhập số bài học đã hoàn thành:", currentProgress.completed_lessons);
    if (completed === null) return;
    
    const total = prompt("Nhập tổng số bài học:", currentProgress.total_lessons);
    if (total === null) return;

    try {
      await updateProgress(id, { 
        completed_lessons: parseInt(completed),
        total_lessons: parseInt(total)
      });
      fetchProgress();
      alert("✅ Đã cập nhật tiến độ!");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      alert("❌ Lỗi khi cập nhật!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tiến độ này không?")) {
      try {
        await deleteProgress(id);
        fetchProgress();
        alert("✅ Đã xóa tiến độ!");
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
        alert("❌ Lỗi khi xóa!");
      }
    }
  };

  const calculatePercentage = (completed, total) => {
    if (total === 0) return 0;
    return ((completed / total) * 100).toFixed(1);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        📊 Theo dõi tiến độ học tập
      </h2>

      {/* Form và table code giữ nguyên */}
      {/* ... */}
    </div>
  );
};

export default ProgressTracking;