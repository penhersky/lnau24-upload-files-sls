import { AWS_ACCESS_KEY, ACCESS_KEY, AWS_REGION } from './../config';

export const resolvers = {
  Query: {
    hello: () => `${AWS_ACCESS_KEY} ${AWS_REGION} ${ACCESS_KEY}`,
  },
};
