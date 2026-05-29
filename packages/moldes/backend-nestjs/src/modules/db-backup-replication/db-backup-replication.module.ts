// MÓDULO NestJS: DbBackupReplicationModule
// Propósito: Backups diarios automáticos a la nube — programación, retención y restauración
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { DbBackupReplicationService } from './db-backup-replication.service.js';

@Module({
  providers: [DbBackupReplicationService],
  exports: [DbBackupReplicationService],
})
export class DbBackupReplicationModule {}
