// MÓDULO NestJS: MediaManagerModule
// Propósito: Gestión de archivos y CDN — subida, compresión automática a .webp y entrega optimizada
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { MediaManagerService } from './media-manager.service.js';

@Module({
  providers: [MediaManagerService],
  exports: [MediaManagerService],
})
export class MediaManagerModule {}
