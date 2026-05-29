// REQUEST i18n para Dashboard Admin — Next.js App Router
// Propósito: Inyecta las traducciones en los Server Components de los 3 paneles
// (superadmin), (tenant) y (vendor) según el rol del usuario autenticado.
// Sin lógica implementada — scaffold preparado

// Ejemplo de implementación con next-intl:
//
// export default getRequestConfig(async ({ locale }) => {
//   // Cargar diccionario del idioma activo del usuario
//   const messages = await import(`@shared/contracts/locales/${locale}.json`);
//   return { messages: messages.default };
// });

export {};
