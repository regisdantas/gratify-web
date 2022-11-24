import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const CardContainer = styled.div`
  /* max-width: 400px; */
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #eee;
  border-radius: 5px;
  border-left: 3px dashed lightgray;

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin: 0;
    background: #fff;

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        margin: 10px;
        cursor: pointer;
      }
    }
    strong {
      color: darkgray;
      width: 100%;
      padding: 10px;
    }

    span {
      border: 0px;
      padding: 10px;
      width: 100%;
      text-align: justify;
    }

    span:empty::before {
      content: attr(data-placeholder);
      color: lightgray;
    }

    span:focus {
      outline: none;
    }

    .ActionContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 4px;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        * {
          margin-right: 5px;
        }
      }
    }
  }
`;
