import { client } from './client';

export const dbConnect = async (): Promise<void> => {
  client
    .connect()
    .then(() => console.log('db-connected'.white.bgGreen.bold))
    .catch((err) => {
      console.error('connection error'.red.underline, err.stack);
    });
};
