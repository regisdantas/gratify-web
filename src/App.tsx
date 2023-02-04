import { GlobalStyles } from './styles/global';
import { HashRouter } from 'react-router-dom';
import { Router } from './routes'
import Header from './components/Header';
import { AppContainer } from "./styles/global";
import Footer from './components/Footer';
import {AuthContextProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <AppContainer>
      <Header title="Journaling" topPhrase="Recording" bottomPhrase="Everyday"/>
      <HashRouter>
        <Router/>
      </HashRouter>
      <Footer footPhrase="by Regis Dantas"></Footer>
      <GlobalStyles />
    </AppContainer>
    </AuthContextProvider>
  );
}

export default App;
