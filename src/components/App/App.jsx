import React, {Suspense, lazy, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Layout} from "../Layout/Layout";
import {getProfileThunk} from "../../redux/auth/thunks";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LogInPage = lazy(() => import("../../pages/LoginPage/LogInPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) return;

    dispatch(getProfileThunk());
  });

  return (
    <Layout>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Routes>
        <ToastContainer/>
      </Suspense>
    </Layout>

  );
}
