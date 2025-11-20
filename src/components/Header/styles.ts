import styled from 'styled-components';


export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align:center;
  background: #f0f0f5;
  .topbar{
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: bolder;
    border-radius: -10px;
    background-color: black !important;
    color: white !important;
    height: 24px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 6px;
  }

  .titlebar h1 {
    width: 100px;
    font-family: Holiday;
    font-size: 36px;
    font-weight: bolder;
    text-transform: lowercase;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .titlebar {
    display: flex;
    width: 100%;
    height: 70px;
    background: #04D361;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    img {
      width: auto;
      height: 40px;
      border-radius: 50%;
      margin-left: auto;
    }

    svg {
      cursor: pointer;
    }
  }

  img {
      height: 56px;
      border-radius: 0%;
      margin: 10px;
      margin-left: 30px;
  }
`;

export const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
    margin: 0 10px 0 10px;
    width: 20px;
  }
  input {
    background: #e0e0e5;
  }
`;