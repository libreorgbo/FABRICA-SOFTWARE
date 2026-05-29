// MÓDULO NestJS: MultiVendorWalletModule
// Propósito: Billetera virtual interna para vendedores — saldo, retiros y transacciones
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { MultiVendorWalletService } from './multi-vendor-wallet.service.js';

@Module({
  providers: [MultiVendorWalletService],
  exports: [MultiVendorWalletService],
})
export class MultiVendorWalletModule {}
