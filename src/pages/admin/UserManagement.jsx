import React from 'react';

const UserManagement = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Quản lý Người dùng</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600">Quản lý danh sách người dùng.</p>
        <ul className="list-disc list-inside text-gray-800 mt-2">
          <li>User (learner)</li>
          <li>Mentor</li>
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;