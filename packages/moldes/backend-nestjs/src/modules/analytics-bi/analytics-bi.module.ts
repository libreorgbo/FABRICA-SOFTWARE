// MÓDULO NestJS: AnalyticsBiModule
// Propósito: Reportes gráficos y métricas de retención — dashboards, embudo de conversión y auditoría
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { AnalyticsBiService } from './analytics-bi.service.js';

@Module({
  providers: [AnalyticsBiService],
  exports: [AnalyticsBiService],
})
export class AnalyticsBiModule {}
