// MÓDULO NestJS: OmnichannelNotificationsModule
// Propósito: Central de notificaciones — Email, SMS, Push y WhatsApp desde un solo punto
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { OmnichannelNotificationsService } from './omnichannel-notifications.service.js';

@Module({
  providers: [OmnichannelNotificationsService],
  exports: [OmnichannelNotificationsService],
})
export class OmnichannelNotificationsModule {}
