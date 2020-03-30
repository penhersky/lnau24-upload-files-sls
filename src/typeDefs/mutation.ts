import { gql } from 'apollo-server-lambda';

export const mutation = gql`
  type Mutation {
    uploadImage(image: Upload!): return
    uploadImages(images: [Upload!]!): [File]
    uploadZipFile(zipFile: Upload!): [File]
    uploadZipFiles(zipFiles: [Upload!]!): [File]
    deleteObject(key: String!): String
    deleteObjects(keys: [String]): String
  }
`;
