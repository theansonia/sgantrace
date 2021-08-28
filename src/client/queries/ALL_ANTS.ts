import { gql } from '@apollo/client';
export const ALL_ANTS = gql`
  query AllAnts {
    ants {
      name
      color
      length
      weight
      odds @client
    }
  }
`;
