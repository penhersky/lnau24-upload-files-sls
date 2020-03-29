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

type uploadSuccess = Promise<aws.S3.ManagedUpload.SendData>;

export const uploadFile = async (
  file: any,
  fileType: string,
  path: (typeFile: string) => string,
): uploadSuccess | undefined => {
  try {
    const s3 = new aws.S3({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    return s3.upload(uploadFileParams(file, fileType, path)).promise();
  } catch (error) {
    logError(error.name);
  }
};

export const deleteObject = async (
  key: string,
): Promise<boolean | undefined> => {
  try {
    const s3 = new aws.S3({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    await s3
      .deleteObject({
        Bucket: AWS_BUCKET_NAME,
        Key: key,
      })
      .promise();
    return true;
  } catch (error) {
    logError(error.name);
  }
};

export const uploadPng = async (image: any): uploadSuccess | undefined => {
  return uploadFile(image, 'png', generatePath);
};

export const uploadZip = async (zipFile: any): uploadSuccess | undefined => {
  return uploadFile(zipFile, 'zip', generatePath);
};
