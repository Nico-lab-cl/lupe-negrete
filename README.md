# Lupe Negrete · Comisionado Precinto 4

Sitio de campaña de Guadalupe "Lupe" Negrete, candidato a Comisionado del Condado
por el Precinto 4 (Maverick County, Texas). Bilingüe español/inglés.

**Stack:** Astro 5 · Tailwind 4 · Prisma 7 · PostgreSQL 16 · Docker

---

## Cómo levantar el proyecto

### Con Docker (todo incluido)

```bash
cp .env.example .env
docker compose up -d --build
```

Eso levanta tres cosas: Postgres, un contenedor `migrate` que aplica las
migraciones y termina, y la aplicación en <http://localhost:4321>.

### Sin Docker (solo la app)

Necesitas un Postgres corriendo. El más fácil es el del compose:

```bash
cp .env.example .env
docker compose up -d db
npm install
npm run db:deploy     # aplica las migraciones
npm run dev           # http://localhost:4321
```

> `DATABASE_URL` en `.env` apunta a `localhost` porque sirve para este modo.
> Dentro de compose los contenedores usan el host `db`; si necesitas apuntarlos
> a otra base de datos, usa `APP_DATABASE_URL`.

---

## Arquitectura

Las páginas de campaña se **prerenderizan en el build**: siguen siendo HTML
estático y no tocan la base de datos. Solo las rutas que declaran
`export const prerender = false` corren en el servidor.

Hoy la única es `POST /api/leads`, que recibe los registros del formulario
"Súmate a la campaña" y los guarda en Postgres.

```
src/
  components/home/    La landing portada desde Claude Design (HomeLanding.astro)
  layouts/            LandingLayout (home) y BaseLayout (páginas interiores)
  lib/                prisma.ts (cliente), leads.ts (envío), i18n.ts, home-copy.ts
  pages/api/leads.ts  Endpoint de servidor
  scripts/            JS de la landing (reveal, mapa, .ics, menú)
prisma/
  schema.prisma       Modelo de datos
  migrations/         Migraciones versionadas
```

### Base de datos

Un solo modelo por ahora: `Lead`. Guarda nombre, correo, teléfono, código
postal, idioma, en qué formulario se registró y los UTM de origen.

La IP **no** se guarda en claro: se almacena un hash truncado (`ipHash`) que
sirve para detectar envíos repetidos sin conservar un dato personal
identificable. La sal se configura con `IP_HASH_SALT`.

### Comandos de base de datos

```bash
npm run db:migrate    # crear una migración nueva en desarrollo
npm run db:deploy     # aplicar migraciones (producción / CI)
npm run db:generate   # regenerar el cliente de Prisma
npm run db:studio     # explorador visual de los datos
```

---

## Notas de operación

### Si `npm ci` falla dentro de Docker con `UNABLE_TO_VERIFY_LEAF_SIGNATURE`

Tu red inspecciona el tráfico TLS — lo hacen los antivirus con "escaneo HTTPS"
(Avast, Kaspersky, ESET) y los proxies corporativos. El contenedor no conoce esa
CA, así que no puede validar el certificado de npm.

Exporta el certificado raíz del interceptor a `certs/` (la carpeta está en
`.gitignore`) y el `Dockerfile` lo instala solo:

```powershell
# Ejemplo en Windows, para el CA de Avast
$dir = "certs"; New-Item -ItemType Directory -Force -Path $dir | Out-Null
Get-ChildItem Cert:\LocalMachine\Root | Where-Object { $_.Subject -like "*Avast*" } | ForEach-Object {
  $b = [Convert]::ToBase64String($_.RawData, 'InsertLineBreaks')
  Set-Content "$dir\$($_.Thumbprint).crt" "-----BEGIN CERTIFICATE-----`n$b`n-----END CERTIFICATE-----" -Encoding ascii
}
```

La otra opción es desactivar el escaneo HTTPS del antivirus, o construir la
imagen en CI.

### El `package-lock.json` se genera en Linux

npm en Windows omite del lockfile las dependencias de pares del binario wasm de
Tailwind 4 (`@emnapi/core`, `@emnapi/wasi-threads`) que npm en Linux sí
necesita. Cualquier `npm install` hecho desde Windows deja el lockfile
inválido para el build del contenedor.

El `Dockerfile` lo tolera: intenta `npm ci` y, si el lockfile está
desincronizado, resuelve el árbol de cero mostrando este aviso en el log:

```
>>> AVISO: lockfile desincronizado con Linux, resolviendo el árbol de cero
```

Si ves ese aviso, el build funciona pero perdió la instalación reproducible.
Para recuperarla, regenera el lockfile en Linux y súbelo:

```bash
docker run --rm -v "${PWD}:/w" -w /w node:24-bookworm-slim npm install --package-lock-only
```

Hazlo cada vez que agregues o actualices una dependencia desde Windows.

---

## Pendientes de la campaña

Los datos marcados en `src/config/site.ts` siguen siendo de relleno y hay que
reemplazarlos antes de publicar: teléfono, correo oficial, número de WhatsApp,
dirección postal, página de Facebook y los identificadores de analítica.

Los tres bloques de video de la home son marcadores de posición: muestran una
foto con botón de play, todavía sin video real.
