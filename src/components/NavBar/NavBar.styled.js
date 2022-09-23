import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px 20px;
  background-color: white;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;
