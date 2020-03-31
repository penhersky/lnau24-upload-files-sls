import { gql } from 'apollo-server-lambda';

export const types = gql`
  type File {
    path: String!
    key: String!
  }

  type Error {
    message: String!
  }

  union return = File | Error
`;
