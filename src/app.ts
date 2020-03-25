import express from 'express';
import awsExpress from 'aws-serverless-express/middleware';

const PORT = 4000;

const app = express();

app.use(awsExpress.eventContext());

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

export default app;
