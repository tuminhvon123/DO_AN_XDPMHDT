import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/learningApi";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCourses(data);
      } catch (error) {
        console.error("Lỗi khi tải khóa học:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <p>⏳ Đang tải danh sách khóa học...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">📘 Danh sách khóa học</h2>

      {courses.length === 0 ? (
        <p>Chưa có khóa học nào.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-blue-600 mb-2">{course.title}</h3>
              <p className="text-gray-700 text-sm mb-2">{course.description}</p>
              <p className="text-gray-500 text-sm">
                <strong>Giảng viên:</strong> {course.mentor_name || "Đang cập nhật"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
