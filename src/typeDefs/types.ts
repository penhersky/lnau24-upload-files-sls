import { gql } from 'apollo-server-lambda';

export const types = gql`
  type File {
    path: String!
    key: String!
  }
  union return = File | String
`;
