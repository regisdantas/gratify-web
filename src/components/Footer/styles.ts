
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #04D361;
    padding: 6px;
    font-weight: bolder;
    text-align: center;
    width: 100%;
  }
  .bottombar{
    width: 100%;
    background-color: black !important;
    height: 16px;
  }
`;
