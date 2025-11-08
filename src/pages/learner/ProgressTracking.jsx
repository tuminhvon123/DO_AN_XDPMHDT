import React from 'react';

const ProgressTracking = () => {
  return (
    <div className="space-y-8 p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="mr-3">📊</span>
          Theo Dõi Tiến Độ
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <div className="text-6xl font-bold text-blue-600 mb-4">87%</div>
            <p className="text-gray-600 font-semibold">Tiến độ tổng thể</p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-6">✅ Kỹ năng đã hoàn thành</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium text-gray-700">Luyện nói cơ bản</span>
                  <span className="text-sm font-semibold text-green-600">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;