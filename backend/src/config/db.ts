import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from './env.js';

const adapter = new PrismaPg({ connectionString: env.databaseUrl });
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: env.isProd ? ['error'] : ['query', 'error', 'warn'],
  });

if (!env.isProd) globalForPrisma.prisma = db;
