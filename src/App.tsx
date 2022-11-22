import React from 'react';
import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes'
import {User} from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState<User>({} as User);
  return (
    <>
      <BrowserRouter>
        <Router user={user} login={setUser}/>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
