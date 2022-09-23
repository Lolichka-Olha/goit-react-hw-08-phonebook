import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(151, 235, 285);
  width: 400px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 30px;
  margin: 0 auto;
  margin-top: 30px;
  h1 {
    font-size: 35px;
    text-shadow: 2px 2px 2px gray;
    margin: 0;
  }
  h2 {
    font-size: 25px;
    text-shadow: 2px 2px 2px gray;
    margin: 0;
  }
`;

export const HomeContainer = styled.div`
  text-align: center;
  padding: 30px;
  margin: 0 auto;
  margin-top: 30px;
  h1 {
    font-size: 35px;
    text-shadow: 2px 2px 2px gray;
    margin: 0;
  }
`;
