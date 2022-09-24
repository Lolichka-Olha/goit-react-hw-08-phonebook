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

  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
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
  padding: 20px;
  margin: 0 auto;

  h1 {
    font-size: 35px;
    text-shadow: 2px 2px 2px gray;
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  background-color: white;
  margin-top: 20px;
  /* border-radius: 20px; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  overflow: hidden;
  width: 60%;
  height: auto;
  object-fit: cover;
  object-position: 87% 50%;
`;
