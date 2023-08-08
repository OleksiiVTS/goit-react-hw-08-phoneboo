import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useContacts } from 'redux/useContacts';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const Register = lazy(() => import('../pages/Register.jsx'));

export const App = () => {
  const { getNewUser, getContacts, isToken, isLoading } = useContacts();

  useEffect(() => {
    isToken && getNewUser() && getContacts();
  }, [getContacts, getNewUser, isToken]);

  return (
    <Routes>
      {!isLoading && (
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
};
