/**
 * Lee una variable de entorno del servidor.
 *
 * Hay que mirar en los dos sitios a propósito:
 * - `process.env` es lo que existe en producción (contenedor, PaaS) y se
 *   resuelve en tiempo de ejecución, así que un cambio de secreto no obliga a
 *   reconstruir la imagen.
 * - `import.meta.env` es lo que Vite rellena desde el archivo `.env` durante
 *   `astro dev`, donde `process.env` no trae nada.
 */
export function serverEnv(name: string): string | undefined {
  const fromProcess = typeof process !== 'undefined' ? process.env?.[name] : undefined;
  if (fromProcess) return fromProcess;

  const fromVite = (import.meta.env as Record<string, unknown>)[name];
  return typeof fromVite === 'string' && fromVite ? fromVite : undefined;
}
