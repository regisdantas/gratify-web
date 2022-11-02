import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 64px;
      margin-right: 10px;
      border-radius: 0%;
    }
  }
  p {
    font-size: 12px;
    margin-left: 200px;
  }
    h1 {
      margin-left: 20px;
      font-size: 3em;
      font-weight: bolder;
    }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
      font-weight: bolder;
    }
  }
`;
