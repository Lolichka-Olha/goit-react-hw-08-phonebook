import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from './App.styled';
import NavBar from '../NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from '../../pages/HomePage';
import ContactsPage from '../../pages/ContactsPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
// const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />

            <Route path="/register" restricted element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route path="/login" restricted element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/contacts" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};
