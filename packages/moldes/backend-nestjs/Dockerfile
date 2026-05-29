# DOCKERFILE SCAFFOLD — @molde/backend (NestJS)
# Propósito: Imagen base para contenerizar el backend NestJS del monorepo.
# Este es un placeholder mínimo válido. Implementar multi-stage build cuando
# el backend tenga lógica de negocio completa y se configure el registry Docker.
#
# Para producción se recomienda:
#   - Etapa 1 (builder): instalar deps + compilar TypeScript → dist/
#   - Etapa 2 (runner):  imagen alpine limpia, copiar solo dist/ y node_modules de producción

FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar artefactos compilados (generados por `pnpm run build` en CI)
COPY dist/ ./dist/
COPY package.json ./

# Puerto expuesto por el servidor NestJS (configurable via variable PORT)
EXPOSE 3000

# Comando de arranque — apunta al entry point compilado
CMD ["node", "dist/main.js"]
