// PUNTO DE ENTRADA DEL SERVIDOR NestJS
// Propósito: Arranca la aplicación en el puerto configurado por variable de entorno PORT.
// Configura: CORS, versionado de API por URI (/v1/), validación global de DTOs, Swagger UI.
// Usa Fastify como adaptador HTTP (más rápido que Express en alta concurrencia).

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.enableCors({ origin: process.env['ALLOWED_ORIGINS']?.split(',') ?? '*' });
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('FABRICA-SOFTWARE API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env['PORT'] ?? 3000;
  await app.listen(port, '0.0.0.0');
}

void bootstrap();
