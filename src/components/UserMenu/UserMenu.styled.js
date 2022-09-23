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
  background-color: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 5px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #c2c2c2;
    color: #fff;
  }
`;
