import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/auth';
import '../../pages/common/auth.css';

const Login = () => {
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
      const user = await login(username, password, role);
      // Redirect theo role
      const redirectPath = role === 'admin' ? '/admin' : 
                          role === 'mentor' ? '/mentor' : 
                          '/learner';
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  // Nhấn Enter để submit
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
        <h2 className="auth-title">Đăng nhập</h2>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

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
                <span>Đang đăng nhập...</span>
              </div>
            ) : (
              'Đăng nhập'
            )}
          </button>
        </form>

        <div className="auth-link">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;