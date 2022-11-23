import React from 'react';
import { MenuBarContainer } from './styles';
import { FiLogOut } from 'react-icons/fi';
import userImg from '../../assets/user.png';
import { UserAuth } from '../../contexts/AuthContext';

const MenuBar: React.FC = () => {
  const {user, logOut} = UserAuth();

  const handleLogout = async () => {
    try{
      await logOut();
    } catch (error)  {
      console.log(error);
      // setInputStatus({type: "error", fields: "email", message: (error instanceof Error)?error.message:"Unknown error"});
    }
  }
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
