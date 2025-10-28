import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// COMMON PAGES
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import Home from './pages/common/Home';
import About from './pages/common/About';

// LEARNER LAYOUT & PAGES
import LearnerLayout from './pages/learner/LearnerLayout';
import LearnerDashboard from './pages/learner/LearnerDashboard';
import SpeakingPractice from './pages/learner/SpeakingPractice';
import ProgressTracking from './pages/learner/ProgressTracking';
import Settings from './pages/learner/Settings';

// MENTOR LAYOUT & PAGES
import MentorLayout from './pages/mentor/MentorLayout';
import MentorDashboard from './pages/mentor/MentorDashboard';
import LearnerFeedback from './pages/mentor/LearnerFeedback';
import ResourceManagement from './pages/mentor/ResourceManagement';

// ADMIN LAYOUT & PAGES
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import PackageManagement from './pages/admin/PackageManagement';
import Reports from './pages/admin/Reports';
import AdminSettings from './pages/admin/SettingsAdmin';

// PROTECTED ROUTE
import ProtectedRoute from './routes/ProtectedRoute';

// ✅ LAYOUT FULLSCREEN (KHÔNG NAVBAR + FOOTER)
const FullscreenLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-indigo-900/20">
    {children}
  </div>
);

// ✅ LAYOUT DEFAULT (CÓ NAVBAR + FOOTER)
const DefaultLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 FULLSCREEN PAGES - KHÔNG NAVBAR/FOOTER */}
        <Route 
          path="/" 
          element={
            <FullscreenLayout>
              <Home />
            </FullscreenLayout>
          } 
        />
        <Route 
          path="/login" 
          element={
            <FullscreenLayout>
              <Login />
            </FullscreenLayout>
          } 
        />
        <Route 
          path="/register" 
          element={
            <FullscreenLayout>
              <Register />
            </FullscreenLayout>
          } 
        />

        {/* 🌐 DEFAULT PAGES - CÓ NAVBAR/FOOTER */}
        <Route 
          path="/about" 
          element={
            <FullscreenLayout>
              <About />
            </FullscreenLayout>
          } 
        />

        {/* 👨‍🎓 LEARNER ROUTES */}
        <Route 
          path="/learner/*" 
          element={
            <ProtectedRoute roles={['learner', 'mentor', 'admin']}>
              <LearnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<LearnerDashboard />} />
          <Route path="speaking" element={<SpeakingPractice />} />
          <Route path="progress" element={<ProgressTracking />} />
          <Route path="settings" element={<Settings />} />
          {/* ❌ XÓA DUPLICATE ROUTE */}
        </Route>

        {/* 👨‍🏫 MENTOR ROUTES */}
        <Route 
          path="/mentor/*" 
          element={
            <ProtectedRoute roles={['mentor', 'admin']}>
              <MentorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<MentorDashboard />} />
          <Route path="feedback" element={<LearnerFeedback />} />
          <Route path="resources" element={<ResourceManagement />} />
        </Route>

        {/* 🛡️ ADMIN ROUTES */}
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute roles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="packages" element={<PackageManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;