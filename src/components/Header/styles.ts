import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align:center;
  background: #f0f0f5;
  p {
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #04D361;
    padding: 6px;
    font-weight: bolder;
    border-radius: -10px;
  }
  h1 {
    font-family: cursive;
    font-size: 3em;
    font-weight: bolder;
    text-transform: lowercase;
  }
  div {
    display: flex;
    width: 100%;
    align-items: top;
    justify-content: flex-start;
    flex-direction: row;
    h1 {
      width: 70%;
    }
  }

  .topbar{
    background-color: black !important;
    height: 16px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2em;
    }
  }

  img {
      height: 56px;
      border-radius: 0%;
      margin: 10px;
      margin-left: 30px;
  }
`;
