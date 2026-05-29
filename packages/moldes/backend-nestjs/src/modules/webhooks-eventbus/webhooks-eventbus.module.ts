// MÓDULO NestJS: WebhooksEventbusModule
// Propósito: Webhooks salientes hacia Make, Zapier y sistemas externos — cola de eventos
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { WebhooksEventbusService } from './webhooks-eventbus.service.js';

@Module({
  providers: [WebhooksEventbusService],
  exports: [WebhooksEventbusService],
})
export class WebhooksEventbusModule {}
