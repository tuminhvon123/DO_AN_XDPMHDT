import React from 'react';

const LearnerSettings = () => {
  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">⚙️ Cài Đặt</h1>
            <p className="text-gray-600 mt-2">Quản lý thông tin cá nhân và cài đặt học tập</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-6 flex items-center">
              <span className="mr-3">👤</span>
              Thông tin cá nhân
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-3">Họ và tên</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-3">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue="user@example.com"
                />
              </div>
            </div>
          </div>

          {/* Learning Goals Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <h3 className="text-lg font-semibold text-green-800 mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Mục tiêu học tập
            </h3>
            <div className="space-y-4">
              <label className="flex items-center p-4 bg-white rounded-lg border-2 border-green-200 cursor-pointer hover:border-green-300 transition-colors">
                <input type="radio" name="goal" className="mr-4 text-green-600" defaultChecked />
                <span className="font-medium text-green-700">Cơ bản (3 tháng)</span>
              </label>
              <label className="flex items-center p-4 bg-white rounded-lg border-2 border-green-200 cursor-pointer hover:border-green-300 transition-colors">
                <input type="radio" name="goal" className="mr-4 text-green-600" />
                <span className="font-medium text-green-700">Trung cấp (6 tháng)</span>
              </label>
              <label className="flex items-center p-4 bg-white rounded-lg border-2 border-green-200 cursor-pointer hover:border-green-300 transition-colors">
                <input type="radio" name="goal" className="mr-4 text-green-600" />
                <span className="font-medium text-green-700">Nâng cao (12 tháng)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-8">
          <button className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 font-medium">
            Hủy
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 font-medium">
            💾 Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnerSettings;