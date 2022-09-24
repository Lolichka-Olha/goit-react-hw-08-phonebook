import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  margin-top: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 6px;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Btn = styled.button`
  width: 100px;
  margin-top: 10px;
  background-color: #3f51b5;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  &:hover {
    color: black;
  }
`;
