// MÓDULO NestJS: InventoryWarehousesModule
// Propósito: Control de stock multi-almacén — movimientos, alertas de mínimos y trazabilidad
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { InventoryWarehousesService } from './inventory-warehouses.service.js';

@Module({
  providers: [InventoryWarehousesService],
  exports: [InventoryWarehousesService],
})
export class InventoryWarehousesModule {}
