import React, { useEffect, useState } from "react";
import { getCourses, addCourse, deleteCourse ,updateCourse } from '../../services/learningApi';


const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    mentor_name: "",
  });

  // Lấy danh sách khóa học khi load trang
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Danh sách khóa học</h2>

      {/* Form thêm khóa học */}
      <div className="mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Tên khóa học"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Mô tả"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />
        <input
          className="border p-2 mr-2"
          placeholder="Giảng viên"
          value={newCourse.mentor_name}
          onChange={(e) =>
            setNewCourse({ ...newCourse, mentor_name: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Thêm
        </button>
      </div>

      {/* Danh sách */}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Tên khóa học</th>
            <th className="p-2 border">Mô tả</th>
            <th className="p-2 border">Giảng viên</th>
            <th className="p-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.description}</td>
              <td className="border p-2">{c.mentor_name}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleDelete(c.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
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
