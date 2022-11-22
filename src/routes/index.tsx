import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {User} from 'firebase/auth';

const Login = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "login" */ '../pages/Login'
    ),
);

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "dashboard" */ '../pages/Dashboard'
    ),
);

const checkAuth = (user: User): boolean => {
  return (user !== null && user.displayName !== undefined);
};

interface IProtectedRouteProps {
  children: JSX.Element;
  user: User;
  isAuthenticated: (user: User) => boolean;
}

export const ProtectedRoute = ({ children, user, isAuthenticated}: IProtectedRouteProps) => {
  return isAuthenticated(user) ? children : <Navigate to="/login" />;
};

interface IRouterProps {
  user: User;
  login: (user: User) => void;
}

export const Router: React.FC<IRouterProps> = ({user, login}: IRouterProps) => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Routes>
        <Route
          element={
            <ProtectedRoute user={user} isAuthenticated={checkAuth}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          }
          path="/"
        />
        <Route
          element={
            <ProtectedRoute user={user} isAuthenticated={checkAuth}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          }
          path="/dashboard"
        />
        <Route element={<Login login={(user: User) => {console.log("User", user.displayName); login(user) }}/>} path="/login" />
      </Routes>
    </React.Suspense>
  );
};
