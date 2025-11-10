// src/pages/admin/UserManagement.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Lấy danh sách users từ API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5001/auth/admin/users");
      
      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (err) {
      console.error("Lỗi lấy danh sách users:", err);
      setError("Không thể tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Xóa user
  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Bạn có chắc muốn xóa user "${username}"?`)) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5001/auth/admin/users/${userId}`);
      fetchUsers();
      alert("Xóa user thành công!");
    } catch (err) {
      console.error("Lỗi xóa user:", err);
      alert("Lỗi khi xóa user");
    }
  };

  // Hiển thị role bằng màu sắc
  const getRoleColor = (role) => {
    switch (role) {
      case "admin": return "role-admin";
      case "mentor": return "role-mentor";
      case "learner": return "role-learner";
      default: return "role-default";
    }
  };

  // Đếm số lượng theo role
  const userStats = {
    total: users.length,
    learners: users.filter(user => user.role === "learner").length,
    mentors: users.filter(user => user.role === "mentor").length,
    admins: users.filter(user => user.role === "admin").length
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="user-management">
      <h1 className="page-title">Quản lý Người dùng</h1>

      {error && (
        <div className="error-alert">
          {error}
        </div>
      )}

      {/* Thống kê */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">{userStats.total}</div>
          <div className="stat-label">Tổng số</div>
        </div>
        <div className="stat-card">
          <div className="stat-number learner">{userStats.learners}</div>
          <div className="stat-label">Học viên</div>
        </div>
        <div className="stat-card">
          <div className="stat-number mentor">{userStats.mentors}</div>
          <div className="stat-label">Mentor</div>
        </div>
        <div className="stat-card">
          <div className="stat-number admin">{userStats.admins}</div>
          <div className="stat-label">Admin</div>
        </div>
      </div>

      {/* Bảng danh sách users */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Vai trò</th>
              <th>Ngày tạo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td className="username">{user.username}</td>
                <td>
                  <span className={`role-badge ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  {new Date(user.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td className="actions">
                  <button 
                    className="btn-edit"
                    onClick={() => alert("Tính năng đang phát triển")}
                  >
                    Sửa
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDeleteUser(user.id, user.username)}
                    disabled={user.role === "admin"}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && !loading && (
        <div className="empty-state">
          <h3>Không có người dùng nào</h3>
        </div>
      )}
    </div>
  );
};

export default UserManagement;