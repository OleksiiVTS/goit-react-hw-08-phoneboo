import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import css from '../components/Loader/Loader.module.css';
import SharedLayout from './SharedLayout/SharedLayout';
import { usePhonebook } from 'redux/usePhonebook';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts.jsx'));
const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Login = lazy(() => import('../pages/Register/Login.jsx'));
const Register = lazy(() => import('../pages/Register/Register.jsx'));
const Update = lazy(() => import('../components/Update/Update.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export const App = () => {
  const { getNewUser, IsRefreshing } = usePhonebook();

  useEffect(() => {
    getNewUser();
  }, [getNewUser]);

  return IsRefreshing ? (
    <Circles height="80" width="80" color="#4d78a9" wrapperClass={css.loader} />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<Contacts />}>
            <Route path="update" element={<Update />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
