import React, { useEffect, useState } from "react";
import { getCourses, addCourse, deleteCourse, updateCourse } from "../../services/learningApi";
import "./CourseList.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    mentor_name: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleAdd = async () => {
    if (!newCourse.title) return alert("Nhập tên khóa học!");
    await addCourse(newCourse);
    setNewCourse({ title: "", description: "", mentor_name: "" });
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  return (
    <div className="course-container">
      <h2 className="course-title">Danh sách khóa học</h2>

      <div className="course-form">
        <input
          placeholder="Tên khóa học"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          placeholder="Mô tả"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />
        <input
          placeholder="Giảng viên"
          value={newCourse.mentor_name}
          onChange={(e) =>
            setNewCourse({ ...newCourse, mentor_name: e.target.value })
          }
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>

      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khóa học</th>
            <th>Mô tả</th>
            <th>Giảng viên</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.mentor_name}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(c.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
