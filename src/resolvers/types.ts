export const types = {
  return: {
    __resolveType(obj: any): string | null {
      if (obj.path || obj.key) {
        return 'File';
      }

      if (obj.message) {
        return 'Error';
      }

      return null;
    },
  },
};
