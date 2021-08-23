import React from 'react';
import { Router } from '@reach/router';

import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

// Pages
import { Home } from './pages/Home';
import { Details } from './pages/Details';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
      </Router>
    </>
  );
};

export default App;
