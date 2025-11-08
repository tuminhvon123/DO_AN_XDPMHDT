import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/userApi';

const ProtectedRoute = ({ children, roles }) => {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  
  if (roles && !roles.includes(currentUser.role)) {
    return <Navigate to="/learner" replace />;
  }
  
  return children;
};

export default ProtectedRoute;