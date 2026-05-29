// INTERFAZ TENANT — CONTRATO CENTRAL DEL SISTEMA MULTI-TENANT
// Propósito: Define la estructura de un Tenant (cliente de la plataforma)
// Un Tenant es dueño de un subdominio/dominio propio con su tienda/sitio
// Importar en: @molde/backend, @molde/dashboard, @molde/web, @molde/extension

export type TenantPlan = 'FREE' | 'PRO' | 'BUSINESS' | 'ENTERPRISE';
export type TenantEstado = 'ACTIVO' | 'SUSPENDIDO' | 'ELIMINADO';

export interface ITenant {
  id: string;
  subdominio: string;       // Ej: "mitienda" → mitienda.fabrica.com
  dominioPropio?: string;   // Ej: "www.mi-tienda.com" (dominio apuntado)
  nombre: string;           // Nombre del negocio del cliente
  plan: TenantPlan;         // Plan de suscripción activo
  estado: TenantEstado;     // Estado actual del tenant
  idiomaConfig: {           // Configuración multi-idioma del tenant
    defecto: string;        // Ej: "es", "en", "fr"
    habilitados: string[];  // Idiomas activos para este sitio
  };
  createdAt: Date;
  updatedAt: Date;
}
