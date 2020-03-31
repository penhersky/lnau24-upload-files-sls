import { verifyKry } from './../../middleware';
import { deleteObject } from '../../upload';
import { logError } from '../../logging';

export const deleteFile = {
  deleteObject: async (_: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };

      return await deleteObject(args.kes);
    } catch (error) {
      logError(error.message);
      return false;
    }
  },
  deleteObjects: async (_: any, args: any, context: any) => {
    try {
      const access = verifyKry(context);
      if (!access) return { message: 'Access denied!' };
      args.keys.map(async (key: any) => deleteObject(key));
      return true;
    } catch (error) {
      logError(error.message);
      return false;
    }
  },
};
