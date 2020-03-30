import { concatenateTypeDefs } from 'apollo-server-lambda';

import { types } from './types';

export const typeDefs = concatenateTypeDefs([types]);
