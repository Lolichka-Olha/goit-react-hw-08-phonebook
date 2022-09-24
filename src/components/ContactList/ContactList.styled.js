import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  width: 260px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Btn = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
  }
`;
