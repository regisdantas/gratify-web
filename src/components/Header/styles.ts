import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  user-select: none;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background: #f0f0f5;
  margin: 0;
  padding: 0;
  .topbar {
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

  .titlebar .logo-title {
    cursor: pointer;
    width: 100px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      margin: 0;
    }
  }

  .titlebar h1 {
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

  @media (max-width: 600px) {
    .titlebar h1 {
      display: none;
    }
  }

  .titlebar {
    display: flex;
    width: 100%;
    height: 56px;
    background: #04d361;
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
