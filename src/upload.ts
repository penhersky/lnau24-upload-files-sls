import aws from 'aws-sdk';

import { logError } from './logging';

import {
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
} from './config';

const generatePath = (fileType: string): string => {
  const date = new Date();
  const folder = `${fileType}/${date.getFullYear()}/${date.getMonth()}`;
  return `${folder}/${Date.now().toString()}`;
};

export const uploadFileParams = (
  file: any,
  fileType: string,
  path = generatePath,
) => {
  return {
    Bucket: AWS_BUCKET_NAME,
    Key: `${path(fileType)}.${fileType}`,
    Body: file,
    ACL: 'public-read',
  };
};

export const uploadFile = async (
  file: any,
  fileType: string,
  path: (typeFile: string) => string,
) => {
  try {
    const s3 = new aws.S3({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    const url = await s3
      .upload(uploadFileParams(file, fileType, path))
      .promise();
    return url.Location;
  } catch (error) {
    logError(error.name);
  }
};

export const uploadPng = async (image: any) => {
  return uploadFile(image, 'png', generatePath);
};

export const uploadZip = async (zipFile: any) => {
  return uploadFile(zipFile, 'zip', generatePath);
};
