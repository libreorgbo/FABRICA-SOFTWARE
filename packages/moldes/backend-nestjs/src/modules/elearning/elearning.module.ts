// MÓDULO NestJS: ElearningModule
// Propósito: Plataforma de cursos — lecciones, quizzes, progreso del alumno y certificados PDF multi-instructor
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { ElearningService } from './elearning.service.js';

@Module({
  providers: [ElearningService],
  exports: [ElearningService],
})
export class ElearningModule {}
