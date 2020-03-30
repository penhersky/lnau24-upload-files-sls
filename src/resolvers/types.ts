export const types = {
  return: {
    __resolveType(obj: any): string | null {
      if (obj.path || obj.key) {
        return 'File';
      }

      if (obj.error) {
        return 'Error';
      }

      return null;
    },
  },
};
