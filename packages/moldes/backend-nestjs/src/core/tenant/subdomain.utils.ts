// UTILIDAD DE SUBDOMINIOS VIRTUALES
// Propósito: Extrae el subdominio virtual del header Host.
// Ej: "tienda1.fabrica.com" → "tienda1"
// Ej: "www.fabrica.com" → null (dominio raíz, sin subdominio de cliente)
// Usado por el TenantMiddleware para identificar qué Tenant sirve cada request.
// Sin lógica implementada — scaffold preparado

// extraerSubdominio(host: string, dominioBase: string): string | null
// → dominioBase = "fabrica.com" (valor desde variable de entorno DOMAIN_BASE)
// → Retorna el slug del subdominio o null si es el dominio raíz

export {};
