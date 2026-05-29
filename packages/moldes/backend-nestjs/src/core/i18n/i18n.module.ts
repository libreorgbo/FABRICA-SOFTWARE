// MÓDULO i18n DEL BACKEND
// Propósito: Detecta el idioma del usuario/tenant desde el header Accept-Language
// o desde la configuración del Tenant en base de datos.
// Devuelve el contenido dinámico (productos, descripciones) en el idioma correcto.
// Usa el formato JSON multilingüe en PostgreSQL: { "es": "...", "en": "...", "fr": "..." }
// Sin lógica implementada — scaffold preparado para next-intl o nestjs-i18n

import { Module } from '@nestjs/common';
import { I18nMiddleware } from './i18n.middleware.js';

@Module({
  // TODO: Registrar nestjs-i18n con los diccionarios de @shared/contracts/locales/
  providers: [],
  exports: [],
})
export class I18nModule {}
