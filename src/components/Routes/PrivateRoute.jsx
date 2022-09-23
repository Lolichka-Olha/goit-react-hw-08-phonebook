import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isLogin = useSelector(authSelectors.isAuth);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
