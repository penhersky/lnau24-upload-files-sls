export const query = {
  Query: {
    test: () => {
      return `Server oll ready for upload files!
      mutation{
        uploadImage(image: Upload!): return
        uploadImages(images: [Upload!]!): [File]
        uploadZipFile(zipFile: Upload!): [File]
        uploadZipFiles(zipFiles: [Upload!]!): [File]
        deleteObject(key: String!): String
        deleteObjects(keys: [String]): String
      }
    `;
    },
  },
};
