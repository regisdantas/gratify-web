import React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../assets/logo.png';

interface IHeaderProps {
  title: string;
  topPhrase: string;
  bottomPhrase: string;
}

const Header: React.FC<IHeaderProps> = ({ title, topPhrase, bottomPhrase }: IHeaderProps) => {
  return (
    <HeaderContainer>
        <div className='topbar'></div>
        <p>{topPhrase}</p>
        <div><img src={logo} />
        <h1>{title}</h1></div>
        <p>{bottomPhrase}</p>
    </HeaderContainer>
  );
};

export default Header;
