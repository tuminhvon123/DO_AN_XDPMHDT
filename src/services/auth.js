// src/services/auth.js

export const login = async (username, password, role) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Giả lập kiểm tra
      if (username && password) {
        const user = { username, role, id: Date.now() };
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Thông tin không hợp lệ'));
      }
    }, 1000);
  });
};

export const register = async (username, password, role) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        const user = { username, role, id: Date.now() };
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Vui lòng điền đầy đủ thông tin'));
      }
    }, 1000);
  });
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('user');
};