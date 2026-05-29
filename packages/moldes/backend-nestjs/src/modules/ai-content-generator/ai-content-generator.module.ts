// MÓDULO NestJS: AiContentGeneratorModule
// Propósito: Generador de contenido con IA — descripciones de productos y artículos SEO
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { AiContentGeneratorService } from './ai-content-generator.service.js';

@Module({
  providers: [AiContentGeneratorService],
  exports: [AiContentGeneratorService],
})
export class AiContentGeneratorModule {}
