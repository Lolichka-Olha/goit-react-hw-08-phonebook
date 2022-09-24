import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Link } from './Navigation.styled';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.isAuth);

  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link>
        {isLogin && <Link to="/contacts">Contacts</Link>} */}

        {isLogin ? (
          <Link to="/contacts">Contacts</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
      </nav>
    </div>
  );
}
