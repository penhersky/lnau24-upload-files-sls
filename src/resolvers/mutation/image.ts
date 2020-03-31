import { uploadPng } from './../../upload';
import { verifyKry } from './../../middleware';
import { logError } from '../../logging';

export const image = {
  uploadImage: async (_: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };

      const image = await args.image;
      const result = await uploadPng(image);
      return {
        path: result.Location,
        key: result.Key,
      };
    } catch (error) {
      logError(error.message);
      return { message: 'Server error' };
    }
  },
  uploadImages: async (_: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };

      const images = await args.images;
      return images.map(async (image: any) => {
        const result = await uploadPng(image);
        return {
          path: result.Location,
          key: result.Key,
        };
      });
    } catch (error) {
      logError(error.message);
      return { message: 'Server error' };
    }
  },
};
