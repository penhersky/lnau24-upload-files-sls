const env = process.env;

export const isProduction: boolean = process.env.NODE_ENV === 'prod';
export const isDevelopment: boolean = !isProduction;
export const ACCESS_KEY: string = env.QUERY_ACCESS_KEY;
export const AWS_ACCESS_KEY: string = env.ACCESS_KEY;
export const AWS_SECRET_ACCESS_KEY: string = env.SECRET_ACCESS_KEY;
export const AWS_REGION: string = env.REGION;
export const AWS_BUCKET_NAME: string = env.BUCKET_NAME;
