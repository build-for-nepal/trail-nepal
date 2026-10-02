import dotenv from 'dotenv';
dotenv.config();

const required = ['DATABASE_URL', 'PORT', 'FRONTEND_URLS'] as const;

for (const key of required) {
  if (process.env[key] === undefined || process.env[key] === '') {
    throw new Error(`Missing env var: ${key}`);
  }
}

export const env = {
  port: Number(process.env['PORT']),
  databaseUrl: process.env['DATABASE_URL']!,
  frontendUrls: process.env['FRONTEND_URLS']!.split(',')
    .map((url) => url.trim())
    .filter(Boolean),
  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  isProd: process.env['NODE_ENV'] === 'production',
};
