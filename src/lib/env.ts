import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().min(1).default('3000'),
  NODE_ENV: z.string().min(1).default('development'),
  MONGO_USERNAME: z.string().min(1),
  MONGO_PASSWORD: z.string().min(1),
  MONGO_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
