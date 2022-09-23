import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer, Header } from './NavBar.styled';
import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation';
import UserMenue from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Loader from '../Loader/Loader';

export default function NavBar() {
  const isLogin = useSelector(authSelectors.isAuth);
  return (
    <div>
      <HeaderContainer>
        <Header>
          <Navigation />
          {isLogin ? <UserMenue /> : <AuthNav />}
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </HeaderContainer>
    </div>
  );
}
