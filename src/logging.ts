import winston from 'winston';
import winstonCloudWatch from 'winston-cloudwatch';
import aws from 'aws-sdk';
import {
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  LOG_GROUP_NAME,
  isDevelopment,
} from './config';

const prodStatus = isDevelopment ? 'dev' : 'prod';

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

const logParams = {
  logGroupName: LOG_GROUP_NAME,
  logStreamName: prodStatus,
  createLogGroup: true,
  createLogStream: true,
  formatLog: (item: any) =>
    `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`,
};

winston.add(new winstonCloudWatch(logParams));

export const logError = (message: string) => {
  return winston.log('error', message);
};

export const logWarning = (message: string) => {
  return winston.log('warning', message);
};

export const logInfo = (message: string) => {
  return winston.log('info', message);
};

export default winston;
