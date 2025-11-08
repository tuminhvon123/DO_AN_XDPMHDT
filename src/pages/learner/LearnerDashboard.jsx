import React from 'react';

const LearnerDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">🎯 Dashboard Học Tập</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-2xl font-bold">42</div>
            <div className="mt-2 text-sm opacity-90">Buổi học</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-xl">
            <div className="text-2xl font-bold">87%</div>
            <div className="mt-2 text-sm opacity-90">Tiến độ</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-violet-600 text-white p-6 rounded-xl">
            <div className="text-2xl font-bold">156</div>
            <div className="mt-2 text-sm opacity-90">Câu hỏi</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-xl">
            <div className="text-2xl font-bold">4.7</div>
            <div className="mt-2 text-sm opacity-90">Điểm AI</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">📈 Tiến độ tuần này</h2>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Biểu đồ tiến độ (sẽ implement sau)</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-8">
            <h3 className="font-semibold text-gray-900 mb-4">💡 Gợi ý hôm nay</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">"What did you do yesterday?"</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">"My favorite food is..."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;