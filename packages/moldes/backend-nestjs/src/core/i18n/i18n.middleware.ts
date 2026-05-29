// MIDDLEWARE DE DETECCIÓN DE IDIOMA
// Propósito: Lee el header Accept-Language del request HTTP
// Determina el idioma activo del usuario y lo inyecta en el contexto de la petición
// Prioridad: 1) Preferencia guardada del Tenant, 2) Header del navegador, 3) Español por defecto
// Sin lógica implementada — scaffold preparado

import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class I18nMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction): void {
    // TODO: Leer Accept-Language header
    // TODO: Consultar configuración de idioma del Tenant desde BD/Redis
    // TODO: Inyectar idioma resuelto en req['idioma']
    next();
  }
}
