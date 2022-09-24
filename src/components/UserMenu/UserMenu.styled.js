import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Btn = styled.button`
  margin-left: 20px;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 500;
  background-color: #3f51b5;
  border: none;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
  }
`;
