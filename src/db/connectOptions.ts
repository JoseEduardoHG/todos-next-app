import { env } from '@/lib/env';
import type { ConnectOptions } from 'mongoose';

const connectOptions: ConnectOptions = {
  auth: {
    password: env.MONGO_PASSWORD,
    username: env.MONGO_USERNAME,
  },
  dbName: env.MONGO_DATABASE,
};

export default connectOptions;
