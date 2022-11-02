import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
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

  @media (max-width: 400px) {
    h1 {
      font-size: 2.5em;
      font-weight: bolder;
    }
  }
`;
