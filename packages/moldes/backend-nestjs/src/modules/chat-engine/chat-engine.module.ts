// MÓDULO NestJS: ChatEngineModule
// Propósito: Motor de chat en tiempo real — WebSockets entre compradores y vendedores por tenant
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { ChatEngineService } from './chat-engine.service.js';

@Module({
  providers: [ChatEngineService],
  exports: [ChatEngineService],
})
export class ChatEngineModule {}
