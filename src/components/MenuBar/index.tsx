import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuBarContainer, Disabled } from './styles';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';
import {User} from 'firebase/auth'
import userImg from '../../assets/user.png';

interface IMenuBarProps {
  user: User;
  backPath?: string;
  handleLogout?: any;
}

const MenuBar: React.FC<IMenuBarProps> = ({
  user,
  backPath,
  handleLogout,
}: IMenuBarProps) => {
  return (
    <MenuBarContainer>
      {backPath !== '' ? (
        <NavLink to={backPath?backPath:""}>
          <FiArrowLeft size={30} />
        </NavLink>
      ) : (
        <Disabled>
          <FiArrowLeft size={30} />
        </Disabled>
      )}
      <img src={user.photoURL?user.photoURL:userImg} onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src=userImg;
      }} alt="User photograph"/>
      <FiLogOut size={30} onClick={() => handleLogout()} />
    </MenuBarContainer>
  );
};

export default MenuBar;
