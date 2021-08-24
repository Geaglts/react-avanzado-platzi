import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

import { Context } from './Context';

import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisterUser } from './pages/NotRegisterUser';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
        <NotRegisterUser path="/login" />
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/profile" to="/login" />}
        <Favs path="/favs" />
        <User path="/profile" />
      </Router>
      <NavBar />
    </>
  );
};

export default App;
