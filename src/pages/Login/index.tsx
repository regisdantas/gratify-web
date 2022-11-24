import React, { useEffect } from "react";
import { BodyContainer, CustomButton } from "../../styles/global";
import Status from "../../components/Status";
import { useStatus } from "../../hooks/useStatus";
import {BsFacebook, BsGoogle} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {UserAuth} from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const {user, signInWithGoogle} = UserAuth();
  const [inputStatus, setInputStatus] = useStatus(null);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try{
      await signInWithGoogle();
    } catch (error)  {
      console.log(error);
      setInputStatus({type: "error", fields: "email", message: (error instanceof Error)?error.message:"Unknown error"});
    }
  }

  useEffect(() => {
    if (user !== null && user.displayName !== undefined) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <BodyContainer>
      <Status status={inputStatus} />
      <CustomButton color={"#DB4437"} onClick={handleGoogleSignIn}>
        <BsGoogle size={20}/> Sign in using Google Account
      </CustomButton>
      <CustomButton color={"#3b5998"} onClick={handleGoogleSignIn}>
        <BsFacebook size={20}/> Sign in using Facebook Account
      </CustomButton>
    </BodyContainer>
  );
};

export default Login;
