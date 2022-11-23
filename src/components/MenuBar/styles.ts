import styled from 'styled-components';

export const MenuBarContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 64px;
    border-radius: 50%;
    margin: 0px 80px 0px 80px;
  }
  svg {
    cursor: pointer;
  }
`;
