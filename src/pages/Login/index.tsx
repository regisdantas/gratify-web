import React from "react";
import { BodyContainer } from "../../styles/global";
import Status from "../../components/Status";
import { useStatus } from "../../hooks/useStatus";
import { FcGoogle } from 'react-icons/fc';
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import {auth} from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

interface ILoginProps {
  login: (user: User) => void;
}

const Login: React.FC<ILoginProps> = ({login}:ILoginProps) => {
  const [inputStatus, setInputStatus] = useStatus(null);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        login(result.user);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        setInputStatus({type: "error", fields: "email", message: error.message});
      });
  }

  return (
    <BodyContainer>
      <Status status={inputStatus} />
      <button onClick={handleGoogleSignIn}><FcGoogle/>Sign in using Google Account</button>
    </BodyContainer>
  );
};

export default Login;
