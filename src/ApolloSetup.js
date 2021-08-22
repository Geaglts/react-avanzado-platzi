import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://petgram-server-geaglts.vercel.app/graphql',
});

export { client, ApolloProvider };
