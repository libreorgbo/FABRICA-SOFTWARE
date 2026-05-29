// MÓDULO NestJS: SaasSubscriptionModule
// Propósito: Planes SaaS — suscripciones, días de prueba, renovación y corte automático
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { SaasSubscriptionService } from './saas-subscription.service.js';

@Module({
  providers: [SaasSubscriptionService],
  exports: [SaasSubscriptionService],
})
export class SaasSubscriptionModule {}
