import React from "react";
import { HeaderContainer} from "./styles";


interface IHeaderProps {
  title?: string;
  topPhrase?: string;
  logo?: string;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const [portalElements, setPortalElements] = React.useState<React.ReactNode>(null);
  return (
    <HeaderContainer>
      <p className="topbar">{props.topPhrase}</p>
      <div id="header-portal" className="titlebar">
        <span className="logo-title">
          <img src={props.logo} />
          <h1>{props.title}</h1>
        </span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
