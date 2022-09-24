import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({ restricted }) {
  const isLogin = useSelector(authSelectors.isAuth);
  return isLogin ? <Navigate to="/contacts" /> : <Outlet />;
}
