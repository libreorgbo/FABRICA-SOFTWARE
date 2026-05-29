// MÓDULO NestJS: CrmModule
// Propósito: CRM y Helpdesk — tickets de soporte, embudos de venta y seguimiento de clientes por tenant
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { CrmService } from './crm.service.js';

@Module({
  providers: [CrmService],
  exports: [CrmService],
})
export class CrmModule {}
