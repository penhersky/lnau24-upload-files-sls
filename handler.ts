import awsExpress from 'aws-serverless-express';
import 'source-map-support/register';

import app from './src/app';

const server = awsExpress.createServer(app);

export const lambda = (event, context) => {
  awsExpress.proxy(server, event, context);
};
