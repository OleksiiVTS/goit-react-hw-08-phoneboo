import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { useContacts } from 'redux/useContacts';

const Contacts = lazy(() => import('../pages/Contacts/Contacts.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const Register = lazy(() => import('../pages/Register.jsx'));

export const App = () => {
  const { getNewUser, isToken } = useContacts();

  useEffect(() => {
    isToken && getNewUser();
  }, [getNewUser, isToken]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
