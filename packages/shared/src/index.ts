// @shared/contracts — PUNTO DE ENTRADA CENTRAL DEL MONOREPO
// Propósito: Exporta todas las interfaces, tipos y utilidades compartidas
// Todos los paquetes del monorepo importan desde aquí:
//   import { ITenant, IUsuario } from '@shared/contracts'
//   import { IdiomaCode } from '@shared/contracts'

// ─── INTERFACES ────────────────────────────────────────────────────────────
export * from './interfaces/i18n.interface.js';        // Tipos para multi-idioma
export * from './interfaces/tenant.interface.js';      // Estructura del Tenant (cliente plataforma)
export * from './interfaces/user.interface.js';        // Roles y estructura de usuarios
export * from './interfaces/marketplace.interface.js'; // Multi-vendedor y comisiones

// ─── DICCIONARIOS i18n ─────────────────────────────────────────────────────
// Los diccionarios JSON se consumen directamente por next-intl e i18next
// Ver: packages/shared/src/locales/

// ─── TIPOS ─────────────────────────────────────────────────────────────────
export * from './types/index.js';

// ─── UTILIDADES ────────────────────────────────────────────────────────────
export * from './utils/index.js';
