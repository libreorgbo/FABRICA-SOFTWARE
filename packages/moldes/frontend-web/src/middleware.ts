// MIDDLEWARE DE SUBDOMINIOS Y DOMINIOS PERSONALIZADOS — Next.js Edge Runtime
// Propósito: Intercepta cada request HTTP antes de que llegue a las páginas.
// Detecta subdominios virtuales (tienda1.fabrica.com) y dominios propios (www.mi-tienda.com)
// en tiempo real usando el Edge Runtime de Next.js (sin cold start, < 1ms latencia).
// También propaga el idioma activo para i18n por subdominio.
// Sin lógica implementada — scaffold preparado

import { type NextRequest, NextResponse } from 'next/server';

export function middleware(_request: NextRequest): NextResponse {
  // TODO: Extraer subdominio del header Host
  // TODO: Resolver dominio propio consultando el backend (con caché Edge)
  // TODO: Reescribir la ruta para servir el tenant correcto
  // TODO: Inyectar el idioma del tenant en las cookies/headers
  return NextResponse.next();
}

export const config = {
  // Aplica el middleware a todas las rutas excepto archivos estáticos y API interna
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/health).*)'],
};
