import React from 'react';
import { GlobalStyles } from './styles/global';
import { HashRouter } from 'react-router-dom';
import { Router } from './routes'
import {User} from 'firebase/auth';
import Header from './components/Header';
import { AppContainer } from "./styles/global";
import Footer from './components/Footer';

function App() {
  const [user, setUser] = React.useState<User>({} as User);
  return (
    <AppContainer>
      <Header title="Gratify" topPhrase="Grateful" bottomPhrase="Everyday"/>
      <HashRouter>
        <Router user={user} login={setUser}/>
      </HashRouter>
      <Footer footPhrase="by Regis Dantas"></Footer>
      <GlobalStyles />
    </AppContainer>
  );
}

export default App;
