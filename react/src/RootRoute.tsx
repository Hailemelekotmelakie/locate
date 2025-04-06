import React from 'react';

import { HashRouter  as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
 import ProtectedRoute from './auth/ProtectedRoute';
 import { AuthProvider } from './auth/AuthContext';
 import App from './pages/App';

function RootRoute() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
     </AuthProvider>
  );
}

export default RootRoute;
 