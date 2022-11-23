import React from 'react';
import { MenuBarContainer } from './styles';
import { FiLogOut } from 'react-icons/fi';
import {User} from 'firebase/auth'
import userImg from '../../assets/user.png';

interface IMenuBarProps {
  user: User;
  handleLogout?: any;
}

const MenuBar: React.FC<IMenuBarProps> = ({
  user,
  handleLogout,
}: IMenuBarProps) => {
  return (
    <MenuBarContainer>
      <img src={user.photoURL?user.photoURL:userImg} onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src=userImg;
      }} alt="User photograph"/>
      <FiLogOut size={30} onClick={() => handleLogout()} />
    </MenuBarContainer>
  );
};

export default MenuBar;
