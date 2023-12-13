import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const TOKEN = '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';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;

