import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/learningApi";
import { enrollCourse, getMyEnrollments } from "../../services/learningApi";


// 👉 Giả sử bạn đã có context/auth, tạm hard-code user
const CURRENT_USER_ID = "user_001";

export default function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [enrolledMap, setEnrolledMap] = useState({}); // { [courseId]: true }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [list, myEnrolls] = await Promise.all([
        getCourses(),
        getMyEnrollments(CURRENT_USER_ID),
      ]);
      setCourses(list || []);
      const map = {};
      (myEnrolls || []).forEach((e) => (map[e.course_id] = true));
      setEnrolledMap(map);
    } finally {
      setLoading(false);
    }
  }

  async function handleEnroll(courseId) {
    try {
      await enrollCourse(courseId, CURRENT_USER_ID);
      setEnrolledMap((m) => ({ ...m, [courseId]: true })); // optimistic update
      alert("Đăng ký thành công!");
    } catch (e) {
      alert(e.message || "Đăng ký thất bại");
    }
  }

  return (
    <div className="course-container">
      <h2 className="course-title">Khóa học dành cho bạn</h2>

      {loading && <p>Đang tải...</p>}

      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khóa học</th>
            <th>Mô tả</th>
            <th>Giảng viên</th>
            <th>Đăng ký</th>
          </tr>
        </thead>
        <tbody>
          {(courses || []).map((c) => {
            const enrolled = !!enrolledMap[c.id];
            return (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>{c.mentor_name}</td>
                <td>
                  <button
                    className={`${
                      enrolled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
                    } text-white px-3 py-1 rounded`}
                    onClick={() => !enrolled && handleEnroll(c.id)}
                    disabled={enrolled}
                  >
                    {enrolled ? "Đã đăng ký" : "Đăng ký"}
                  </button>
                </td>
              </tr>
            );
          })}
          {(!courses || courses.length === 0) && (
            <tr>
              <td colSpan="5" style={{ padding: 12, textAlign: "center" }}>
                Chưa có khóa học nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
