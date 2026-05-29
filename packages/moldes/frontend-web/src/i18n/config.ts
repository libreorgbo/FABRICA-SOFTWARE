// CONFIGURACIÓN i18n — FRONTEND WEB (@molde/web)
// Propósito: Configura next-intl para el frontend público de los sitios de clientes
// Lee los diccionarios centrales desde @shared/contracts/locales/
// Detecta el idioma del visitante por: subdominio, cookie, o Accept-Language
// Idiomas soportados: es (defecto), en — Agregar más en packages/shared/src/locales/
// Sin lógica implementada — scaffold preparado para next-intl

// Ejemplo de configuración next-intl (descomentarizar al instalar next-intl):
//
// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';
// import es from '@shared/contracts/locales/es.json';
// import en from '@shared/contracts/locales/en.json';
//
// export const locales = ['es', 'en'] as const;
// export type Locale = (typeof locales)[number];
// export const defaultLocale: Locale = 'es';
//
// export const mensajes: Record<Locale, object> = { es, en };

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
