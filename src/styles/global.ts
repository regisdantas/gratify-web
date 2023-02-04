import styled, { css, createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}

body {
  align-self: center;
  background: #f0f0f5;
  -wekit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

#root {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
}

button {
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px;
  margin-bottom: 10px;
`

export const AppContainer = styled.div`
  min-height: 90vh;
  max-width: 900px;
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input, button {
    margin-left: auto;
    margin-right: auto;

    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    height: 50px;
    svg {
      font-size: 24px;
      margin-right: 7px;
    }
  }
  button {
    background: #04d361;
    justify-content: center;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

interface CustomButtonProps {
  color: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: block !important;
  svg {
    float: left;
    margin-left: 10px;
  }

  ${props =>
    props.color &&
    css`
      background-color: ${props.color} !important;
      &:hover {
        background-color: ${shade(0.2, props.color)} !important;
      }
    `}

`;

export const EntryList = styled.div`

`;
