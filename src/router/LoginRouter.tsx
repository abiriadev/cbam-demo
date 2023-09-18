import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from '../route/AuthRoute';
import Login from '../pages/login/Login';

export function LoginRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute redirectPath="/login">
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthRoute redirectPath="/" isAnonymousPage={true}>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="*"
        element={
          <AuthRoute redirectPath="/" isAnonymousPage={true}>
            <Login />
          </AuthRoute>
        }
      />
    </Routes>
  );
}

export default LoginRouter;
