// CONFIGURACIÓN DE REQUEST i18n para Next.js App Router
// Propósito: Provee las traducciones correctas en cada request del servidor (RSC)
// Carga el diccionario del idioma activo desde locales/ en tiempo de ejecución
// Sin lógica implementada — scaffold preparado para next-intl

// Ejemplo de implementación con next-intl (descomentarizar al instalar):
//
// import { getRequestConfig } from 'next-intl/server';
// import { defaultLocale, locales, type Locale } from './config';
//
// export default getRequestConfig(async ({ locale }) => {
//   const resolvedLocale = locales.includes(locale as Locale) ? locale : defaultLocale;
//   const messages = (await import(`@shared/contracts/locales/${resolvedLocale}.json`)).default;
//   return { messages };
// });

export {};
