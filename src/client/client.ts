import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const link = new HttpLink({
  uri: `https://stark-brushlands-02126.herokuapp.com/https://sg-ants-server.herokuapp.com/graphql`,
});

const typeDefs = gql`
  extend type Ant {
    odds: Int
  }
`;
export const cache = new InMemoryCache({
  typePolicies: {
    Ant: {
      fields: {
        odds: {
          read(odds: number[]) {
            return odds;
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link,
  cache,
  typeDefs,
});

export default client;
