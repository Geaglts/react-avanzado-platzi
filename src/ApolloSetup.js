import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('TOKEN');
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError((networkError) => {
  const errors = {
    'user does not exist': true,
    'you must be logged in to perform this action': true,
  };
  if (networkError && errors[networkError.response.errors[0].message]) {
    window.sessionStorage.removeItem('TOKEN');
    window.location = '/';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-geaglts.vercel.app/graphql',
    }),
  ]),
});

export { client, ApolloProvider };
