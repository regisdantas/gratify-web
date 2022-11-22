import React from "react";
import { AppContainer } from "../../styles/global";
import Header from "../../components/Header";
import Status from "../../components/Status";
import { useStatus } from "../../hooks/useStatus";
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
  const [inputStatus, setInputStatus] = useStatus(null);
  return (
    <>
      <Header title="Gratify" />
      <Status status={inputStatus} />
      <AppContainer>
        <button><FcGoogle/>Sign in using Google Account</button>
      </AppContainer>
    </>
  );
};

export default Login;
