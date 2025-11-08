import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/userApi';
import '../../pages/common/auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(username, password, role);
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login', { replace: true });
    } catch (err) {
      setError(err.message || 'Đăng ký thất bại.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter' && !loading && username && password) {
        handleSubmit(e);
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [username, password, role, loading]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Đăng ký tài khoản</h2>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-form-row">
            <div className="auth-input-group">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth-input"
                placeholder="Tên đăng nhập"
                disabled={loading}
              />
            </div>

            <div className="auth-input-group">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                placeholder="Mật khẩu"
                disabled={loading}
              />
            </div>

            <div className="auth-input-group">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="auth-select"
                disabled={loading}
              >
                <option value="learner">Học viên</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="auth-spinner"></div>
                <span>Đang đăng ký...</span>
              </div>
            ) : (
              'Đăng ký'
            )}
          </button>
        </form>

        <div className="auth-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;