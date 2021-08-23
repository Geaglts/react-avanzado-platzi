import React from 'react';
import { Router } from '@reach/router';

import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

import Context from './Context';

import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisterUser } from './pages/NotRegisterUser';
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
      <Context.Consumer>
        {({ isAuth }) => {
          return isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/profile" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs" />
              <NotRegisterUser path="/profile" />
            </Router>
          );
        }}
      </Context.Consumer>
      <NavBar />
    </>
  );
};

export default App;
