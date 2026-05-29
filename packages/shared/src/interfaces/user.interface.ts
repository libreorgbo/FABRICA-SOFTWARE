// INTERFAZ USUARIO — CONTRATO DE TIPADO PARA TODOS LOS TIPOS DE USUARIO
// Propósito: Define los roles y estructura de usuarios en el sistema
// Roles: SuperAdmin (dueño plataforma), TenantAdmin (dueño sitio),
//        Vendor (vendedor marketplace), Customer (cliente final), ApiKey (integración)
// Importar en todas las capas del monorepo

export type RolUsuario = 'SUPERADMIN' | 'TENANT_ADMIN' | 'VENDOR' | 'CUSTOMER' | 'API_KEY';

export interface IUsuario {
  id: string;
  email: string;
  rol: RolUsuario;
  tenantId?: string;          // Nulo si es SuperAdmin (gobierna toda la plataforma)
  idiomaPreferido?: string;   // Idioma preferido del usuario (ej: "es", "en")
  createdAt: Date;
}
