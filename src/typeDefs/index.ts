import { concatenateTypeDefs } from 'apollo-server-lambda';

import { types } from './types';
import { mutation } from './mutation';

export const typeDefs = concatenateTypeDefs([types, mutation]);
