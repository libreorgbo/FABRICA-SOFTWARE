// MÓDULO NestJS: ReviewsReputationModule
// Propósito: Sistema de reseñas — calificaciones, moderación y respuestas del vendedor
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { ReviewsReputationService } from './reviews-reputation.service.js';

@Module({
  providers: [ReviewsReputationService],
  exports: [ReviewsReputationService],
})
export class ReviewsReputationModule {}
