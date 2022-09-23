import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 6px 12px;
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &.active {
    color: #3f51b5;
  }

  &:hover,
  &:focus {
    color: #3f51b5;
  }
  &:not(:last-of-type) {
    margin-right: 50px;
  }
`;
