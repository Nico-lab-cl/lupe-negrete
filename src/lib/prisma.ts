import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// Prisma 7 ya no toma la URL desde schema.prisma: el cliente recibe un driver
// adapter con la conexión. La URL solo se lee en el servidor.
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    'Falta DATABASE_URL. Copia .env.example a .env, o levanta el proyecto con docker compose.'
  );
}

// En desarrollo Vite recarga los módulos en caliente, así que hay que reusar el
// cliente: si no, cada recarga abre un pool nuevo y Postgres acaba rechazando
// conexiones.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
    log: import.meta.env.DEV ? ['warn', 'error'] : ['error']
  });

if (import.meta.env.DEV) globalForPrisma.prisma = prisma;
