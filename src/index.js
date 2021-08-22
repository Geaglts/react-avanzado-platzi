import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { client, ApolloProvider } from './ApolloSetup';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
