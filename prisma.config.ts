// Prisma 7 ya no lee la URL desde schema.prisma ni carga .env por su cuenta:
// la configuración de las herramientas (migrate, studio, introspección) vive aquí.
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// `prisma generate` no necesita conexión, y en el build de Docker no hay
// DATABASE_URL. Solo declaramos el datasource cuando la variable existe, para
// que generar el cliente funcione siempre y migrate falle con un mensaje claro.
const url = process.env.DATABASE_URL;

export default defineConfig({
  schema: 'prisma/schema.prisma',
  ...(url ? { datasource: { url } } : {})
});
