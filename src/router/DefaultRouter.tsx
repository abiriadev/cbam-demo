import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import AuthRoute from '../route/AuthRoute';
import Default from '../pages/default/Default';

export function DefaultRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <AuthRoute redirectPath="/" isAnonymousPage={false}>
              <Default />
            </AuthRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default DefaultRouter;
