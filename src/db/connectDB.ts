import { env } from '@/lib/env';
import { connect, connection } from 'mongoose';
import connectOptions from './connectOptions';

const conn = {
  isConnected: 99,
};

export async function connectDB() {
  if (conn.isConnected === 1) return;

  const db = await connect(env.MONGO_URL, connectOptions);
  console.log(`Database: ${db.connection.db.databaseName}`);
  conn.isConnected = db.connections[0].readyState;
}

connection.on('opened', () => {
  console.log('MongoDB connected...');
});

connection.on('error', (err: Error) => {
  console.error(err);
});
