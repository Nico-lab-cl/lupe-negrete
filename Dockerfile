# syntax=docker/dockerfile:1

# Se usa Debian slim en lugar de Alpine: el binario nativo de Tailwind v4
# (oxide) cae al build de wasm sobre musl y `npm ci` se vuelve inestable.
ARG NODE_IMAGE=node:24-bookworm-slim

# ---------- base ----------
# Redes con inspección TLS (antivirus o proxy corporativo) rompen `npm ci`
# dentro del contenedor con UNABLE_TO_VERIFY_LEAF_SIGNATURE: el certificado que
# ve npm lo firma el interceptor, y esa CA no está en la imagen. Solución: dejar
# el certificado raíz en ./certs/*.crt y se instala aquí.
# Si la carpeta no existe el build sigue igual — package.json solo está en el
# COPY para que nunca falle por falta de coincidencias.
FROM ${NODE_IMAGE} AS base
WORKDIR /app
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
COPY package.json certs*/ /tmp/ca/
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates \
 && rm -rf /var/lib/apt/lists/* \
 && mkdir -p /usr/local/share/ca-certificates \
 && find /tmp/ca -name '*.crt' -exec cp {} /usr/local/share/ca-certificates/ \; \
 && update-ca-certificates \
 && rm -rf /tmp/ca
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt

# ---------- deps ----------
# `npm ci` exige que el lockfile describa el árbol exacto, y ahí hay un
# problema que no se puede resolver desde el repositorio: npm en Windows omite
# las dependencias de pares del binario wasm de Tailwind (@emnapi/*) que npm en
# Linux sí necesita. Cualquier `npm install` hecho desde una máquina Windows
# deja el lockfile inválido para este build y lo rompe.
#
# Por eso se intenta primero la instalación reproducible y, solo si el lockfile
# está desincronizado, se resuelve el árbol de cero. El aviso queda visible en
# el log del build: si aparece, hay que regenerar el lockfile en Linux
# (instrucciones en el README).
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund \
 || (echo ">>> AVISO: lockfile desincronizado con Linux, resolviendo el árbol de cero" \
     && npm install --no-audit --no-fund)

# ---------- build ----------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# El cliente de Prisma se genera antes del build porque las rutas de servidor
# lo importan en tiempo de compilación.
RUN npx prisma generate
RUN npm run build

# ---------- producción ----------
FROM base AS runner
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Solo dependencias de producción, más el cliente de Prisma ya generado.
COPY package.json package-lock.json ./
RUN (npm ci --omit=dev --no-audit --no-fund \
     || (echo ">>> AVISO: lockfile desincronizado con Linux, resolviendo el árbol de cero" \
         && npm install --omit=dev --no-audit --no-fund)) \
 && npm cache clean --force
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=build /app/dist ./dist
COPY prisma ./prisma

# El proceso no corre como root.
USER node

EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
