const fakeUsers = {
  'user': { password: '123', role: 'learner' },
  'mentor': { password: '123', role: 'mentor' },
  'admin': { password: '123', role: 'admin' }
};

export const login = (username, password) => {
  const user = fakeUsers[username];
  if (user && user.password === password) {
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('role', user.role);
    return true;
  }
  return false;
};

export const register = (username, password, role) => {
  fakeUsers[username] = { password, role };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  return token ? { role } : null;
};