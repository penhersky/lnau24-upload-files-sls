import { mutation } from './mutation';
import { types } from './types';
import { query } from './query';

export const resolvers = Object.assign({}, types, query, mutation);
