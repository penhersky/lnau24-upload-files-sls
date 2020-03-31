import { uploadZip } from './../../upload';
import { verifyKry } from './../../middleware';
import { logError } from '../../logging';

export const image = {
  uploadZipFile: async (parent: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };

      const zipFile = await args.zipFile;
      const result = await uploadZip(zipFile);
      return {
        path: result.Location,
        key: result.Key,
      };
    } catch (error) {
      logError(error.message);
      return { message: 'Server error' };
    }
  },
  uploadImages: async (parent: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };

      const zipFiles = await args.zipFiles;
      return zipFiles.map(async (zipFile: any) => {
        const result = await uploadZip(zipFile);
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
