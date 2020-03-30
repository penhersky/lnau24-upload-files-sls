import { gql } from 'apollo-server-lambda';

export const types = gql`
  type File {
    path: String!
    key: String!
  }

  type Error {
    error: String!
  }

  union return = File | Error
`;
