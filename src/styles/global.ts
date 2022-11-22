import styled, { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
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
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
}

button {
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}
`;

export const AppContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input, button {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    height: 50px;
    svg {
      font-size: 24px;
      margin-right: 7px;
    }
  }
  button {
    margin-top: 20px;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const EntryList = styled.div`
  max-width: 400px;
`;
