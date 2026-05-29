// MÓDULO NestJS: NewsJournalModule
// Propósito: Periódico digital — artículos, múltiples autores y flujos de aprobación editorial
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { NewsJournalService } from './news-journal.service.js';

@Module({
  providers: [NewsJournalService],
  exports: [NewsJournalService],
})
export class NewsJournalModule {}
