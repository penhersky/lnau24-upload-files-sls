import { ACCESS_KEY } from './config';

export const verifyKry = (context: any) => {
  const key = context.event.body.headers['access-key'];
  return key.toString() === ACCESS_KEY;
};
