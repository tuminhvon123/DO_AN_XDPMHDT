// src/pages/learner/Payment.jsx
import React from 'react';
import { CreditCard, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Payment = () => {
  const transactions = [
    { id: 'TX001', date: '15/10/2025', amount: '299.000đ', status: 'success', package: 'Gói 1 tháng' },
    { id: 'TX002', date: '10/09/2025', amount: '799.000đ', status: 'success', package: 'Gói 3 tháng' },
    { id: 'TX003', date: '05/09/2025', amount: '299.000đ', status: 'pending', package: 'Gói 1 tháng' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'pending': return <Clock className="w-5 h-5 text-amber-400" />;
      default: return <AlertCircle className="w-5 h-5 text-red-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'bg-emerald-500/10 text-emerald-400';
      case 'pending': return 'bg-amber-500/10 text-amber-400';
      default: return 'bg-red-500/10 text-red-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Lịch sử thanh toán</h2>
        <button className="btn-primary flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Nạp gói mới
        </button>
      </div>

      {/* Current Package */}
      <div className="stat-card bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Gói hiện tại</p>
            <h3 className="text-2xl font-bold text-white mt-1">Premium 1 tháng</h3>
            <p className="text-blue-200 text-sm mt-2">Hết hạn: 15/11/2025</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">299.000đ</p>
            <p className="text-blue-200 text-sm">/tháng</p>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="dashboard-card">
        <h3 className="text-lg font-semibold text-white mb-4">Giao dịch gần đây</h3>
        <div className="overflow-x-auto">
          <table className="dashboard-table w-full">
            <thead>
              <tr>
                <th>Mã GD</th>
                <th>Ngày</th>
                <th>Gói</th>
                <th>Số tiền</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="font-mono text-sm">{tx.id}</td>
                  <td>{tx.date}</td>
                  <td>{tx.package}</td>
                  <td className="font-semibold">{tx.amount}</td>
                  <td>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                      {getStatusIcon(tx.status)}
                      {tx.status === 'success' ? 'Thành công' : 'Chờ xử lý'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="stat-card text-center p-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <CreditCard className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="font-semibold text-white">Thẻ tín dụng</h4>
          <p className="text-sm text-gray-400 mt-1">Visa, MasterCard</p>
        </div>
        <div className="stat-card text-center p-6">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 4.48 10.04 10 10.04S22 22.55 22 17V7l-10-5z"/>
            </svg>
          </div>
          <h4 className="font-semibold text-white">Momo</h4>
          <p className="text-sm text-gray-400 mt-1">Ví điện tử</p>
        </div>
        <div className="stat-card text-center p-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4V4m2 2v12h12V6H6z"/>
            </svg>
          </div>
          <h4 className="font-semibold text-white">Chuyển khoản</h4>
          <p className="text-sm text-gray-400 mt-1">Ngân hàng</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;