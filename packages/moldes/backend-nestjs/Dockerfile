FROM node:20-alpine
# Imagen base del backend NestJS — Scaffold inicial sin build compilado
# En producción agregar: COPY dist/ ./dist/ después de ejecutar pnpm build
WORKDIR /app
COPY package.json ./
# RUN npm install --production
EXPOSE 3000
CMD ["node", "-e", "console.log('Backend NestJS - scaffold placeholder')"]
