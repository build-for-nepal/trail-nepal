import dotenv from 'dotenv';
dotenv.config();

const required = [
  'DATABASE_URL',
  'PORT',
  'BACKEND_URL',
  'FRONTEND_URLS',
  'BETTER_AUTH_URL',
  'BETTER_AUTH_SECRET',
] as const;

for (const key of required) {
  if (process.env[key] === undefined || process.env[key] === '') {
    throw new Error(`Missing env var: ${key}`);
  }
}

if (process.env['BETTER_AUTH_SECRET']!.length < 32) {
  throw new Error('BETTER_AUTH_SECRET must be at least 32 characters');
}

const port = Number(process.env['PORT']);
const isProd = process.env['NODE_ENV'] === 'production';
const smtpHost = process.env['SMTP_HOST'] || undefined;

if (isProd && !smtpHost) {
  throw new Error('SMTP_HOST is required in production to send auth emails');
}

function oauth(prefix: 'GOOGLE' | 'GITHUB') {
  const clientId = process.env[`${prefix}_CLIENT_ID`];
  const clientSecret = process.env[`${prefix}_CLIENT_SECRET`];
  return clientId && clientSecret ? { clientId, clientSecret } : undefined;
}

export const env = {
  port,
  backendUrl: process.env['BACKEND_URL']!.replace(/\/+$/, ''),
  databaseUrl: process.env['DATABASE_URL']!,
  frontendUrls: process.env['FRONTEND_URLS']!.split(',')
    .map((url) => url.trim())
    .filter(Boolean),
  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  isProd,
  auth: {
    // Public base URL Better Auth builds OAuth callbacks and emailed links from.
    baseUrl: process.env['BETTER_AUTH_URL']!.replace(/\/+$/, ''),
    secret: process.env['BETTER_AUTH_SECRET']!,
    cookieDomain: process.env['AUTH_COOKIE_DOMAIN'] || undefined,
    crossSiteCookies: process.env['AUTH_CROSS_SITE_COOKIES'] === 'true',
    google: oauth('GOOGLE'),
    github: oauth('GITHUB'),
  },
  mail: {
    from: process.env['MAIL_FROM'] || 'mailaddress@gmail.com',
    smtp: smtpHost
      ? {
          host: smtpHost,
          port: Number(process.env['SMTP_PORT'] ?? 587),
          user: process.env['SMTP_USER'] || undefined,
          pass: process.env['SMTP_PASS'] || undefined,
        }
      : undefined,
  },
};
