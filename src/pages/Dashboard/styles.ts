import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input, button {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    height: 50px;
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
