import { concatenateTypeDefs } from 'apollo-server-lambda';

import { types } from './types';
import { mutation } from './mutation';
import { query } from './query';

export const typeDefs = concatenateTypeDefs([types, mutation, query]);
