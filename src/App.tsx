import React from 'react';
import { GlobalStyles } from './styles/global';
import { HashRouter } from 'react-router-dom';
import { Router } from './routes'
import {User} from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState<User>({} as User);
  return (
    <>
      <HashRouter>
        <Router user={user} login={setUser}/>
      </HashRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
