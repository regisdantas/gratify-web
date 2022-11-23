import React from 'react';
import { FooterContainer } from './styles';

interface IFooterProps {
  footPhrase: string;
}

const Footer: React.FC<IFooterProps> = ({ footPhrase }: IFooterProps) => {
  return (
    <FooterContainer>
        <p>{footPhrase}</p>
        <div className='bottombar'></div>
    </FooterContainer>
  );
};

export default Footer;
