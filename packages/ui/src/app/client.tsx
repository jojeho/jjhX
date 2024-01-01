
// lib/apollo.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const HASURA_GRAPHQL_URL='http://localhost:8080/v1/graphql'
const client = new ApolloClient({

  link: new HttpLink({ uri: HASURA_GRAPHQL_URL }),
  cache: new InMemoryCache(),
});

export default client;