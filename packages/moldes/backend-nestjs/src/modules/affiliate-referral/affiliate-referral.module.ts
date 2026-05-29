// MÓDULO NestJS: AffiliateReferralModule
// Propósito: Sistema de afiliados y comisiones por referidos — enlaces, conversiones y pagos
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service.js';

@Module({
  providers: [AffiliateReferralService],
  exports: [AffiliateReferralService],
})
export class AffiliateReferralModule {}
