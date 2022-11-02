import styled, { css } from 'styled-components';

export const Form = styled.form`
  margin-top: 40px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    height: 50px;
  }
`;

export const EntryList = styled.ul`
  max-width: 700px;

  a {
    width: 100%;
    margin-right: 20px;
    border-right: 1px dotted lightgray;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8d3;
      margin-top: 4px;
    }
  }

  li {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    margin-top: 16px;

    &:hover {
      transform: translateX(6px);
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      cursor: pointer;
    }
  }
`;

export const Entry = styled.li``;
