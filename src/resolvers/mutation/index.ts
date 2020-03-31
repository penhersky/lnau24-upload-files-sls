import { image } from './image';
import { deleteFile } from './delete';
import { zipFile } from './zipFile';

export const mutation = {
  Mutation: {
    ...image,
    ...deleteFile,
    ...zipFile,
  },
};
