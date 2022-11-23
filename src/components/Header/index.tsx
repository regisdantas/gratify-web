import React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../assets/logo.png';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} />
        <h1>{title}</h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
