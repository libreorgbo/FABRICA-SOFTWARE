// MÓDULO NestJS: WholesaleB2bModule
// Propósito: Mayorista B2B — precios escalonados por volumen, pedidos mínimos y catálogo privado
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { WholesaleB2bService } from './wholesale-b2b.service.js';

@Module({
  providers: [WholesaleB2bService],
  exports: [WholesaleB2bService],
})
export class WholesaleB2bModule {}
