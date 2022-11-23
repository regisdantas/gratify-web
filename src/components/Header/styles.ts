import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align:center;
  p {
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #04D361;
    padding: 10px;
    font-weight: bolder;
  }
  h1 {
    font-size: 3em;
    font-weight: bolder;
    text-transform: lowercase;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .topbar{
    background-color: black !important;
    height: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }

  img {
      height: 64px;
      border-radius: 0%;
      margin: 10px;
  }
`;
