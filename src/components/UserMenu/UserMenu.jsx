import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Wrapper, Btn } from './UserMenu.styled';

export default function UserMenue() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Wrapper>
      {name !== null && <p>{`Welcome,  ${name}`}</p>}

      <Btn type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Btn>
    </Wrapper>
  );
}
