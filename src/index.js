import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { client, ApolloProvider } from './ApolloSetup';
import Context from './Context';

render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root')
);
