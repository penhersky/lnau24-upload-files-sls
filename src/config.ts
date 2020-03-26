const env = process.env;

export const isProduction: boolean = process.env.NODE_ENV === 'prod';
export const isDevelopment: boolean = !isProduction;
export const ACCESS_KEY: string = env.ACCESS_KEY;
export const AWS_ACCESS_KEY: string = env.AWS_ACCESS_KEY;
export const AWS_SECRET_ACCESS_KEY: string = env.AWS_SECRET_ACCESS_KEY;
export const AWS_REGION: string = env.AWS_REGION;
export const AWS_BUCKET_NAME: string = env.AWS_BUCKET_NAME;
