// CONFIGURACIÓN i18n — DASHBOARD ADMIN (@molde/dashboard)
// Propósito: Configura next-intl para los 3 paneles (SuperAdmin, Tenant, Vendor)
// Lee los mismos diccionarios centrales de @shared/contracts/locales/
// El idioma puede cambiar por rol: SuperAdmin en español, Tenant en su idioma configurado
// Sin lógica implementada — scaffold preparado para next-intl

// Ejemplo de configuración (descomentarizar al instalar next-intl):
//
// Panel SuperAdmin: siempre en español (idioma de operación interna)
// Panel Tenant: en el idioma configurado por el tenant en su perfil
// Panel Vendor: hereda el idioma del tenant al que pertenece

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
