// UTILIDAD DE DOMINIOS PERSONALIZADOS
// Propósito: Resuelve dominios personalizados apuntados al servidor de vuelta
// a su registro Tenant en la base de datos.
// Ej: "www.mi-tienda.com" → Tenant{ id: "...", subdominio: "mitienda", ... }
// Funciona con dominios que el cliente apunta vía CNAME/A record a nuestro servidor.
// Sin lógica implementada — scaffold preparado

// resolverDominioPropio(dominio: string, prisma: PrismaService): Promise<Tenant | null>
// → Busca en la tabla tenants por el campo dominioPropio
// → Retorna el Tenant completo o null si el dominio no está registrado
// → Se recomienda cachear el resultado en Redis (TTL: 5 minutos)

export {};
