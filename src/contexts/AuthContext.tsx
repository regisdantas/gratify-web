import {useContext, createContext, useEffect, useState} from 'react';
import {GoogleAuthProvider,
        signInWithPopup,
        signOut,
        onAuthStateChanged,
        User} from 'firebase/auth';
import {auth} from '../services/firebase';

interface IAuthContext {
  user: User;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;

}

const AuthContext = createContext({} as IAuthContext);

interface IAuthProps {
  children: JSX.Element;
}

export const AuthContextProvider = ({children}: IAuthProps) => {
  const [user, setUser] = useState<User>({} as User);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser as User);
    });
    return () => {unsubscribe();}
  }, []);

  return (
    <AuthContext.Provider value={{user, signInWithGoogle, logOut} as IAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
