// INTERFAZ MARKETPLACE — CONTRATOS DEL SISTEMA MULTI-VENDEDOR
// Propósito: Define tipos para la lógica de marketplace con múltiples vendedores
// Soporta: Comisiones, Split Payouts (Stripe Connect), Gestión de tiendas
// Importar en: @molde/backend (módulos marketplace y billing)

import type { ContenidoMultilingue } from './i18n.interface.js';

export interface IProducto {
  id: string;
  nombre: ContenidoMultilingueProducto; // Nombre en múltiples idiomas
  precio: number;
  moneda: string;                        // Ej: "USD", "EUR", "BOB"
  stock: number;
  vendedorId: string;
  tiendaId: string;
}

// Nombre del producto en múltiples idiomas (guardado en PostgreSQL como JSON)
export interface ContenidoMultilingueProducto {
  es?: string;  // Español
  en?: string;  // Inglés
  fr?: string;  // Francés
  pt?: string;  // Portugués
  [idioma: string]: string | undefined; // Extensible a cualquier idioma
}

export interface IComision {
  vendedorId: string;
  porcentaje: number;           // % que retiene la plataforma
  montoVenta: number;
  montoPagoVendedor: number;    // Lo que recibe el vendedor tras la comisión
  stripeAccountId?: string;     // Cuenta Stripe Connect del vendedor
}

// Re-exporta ContenidoMultilingue para conveniencia al importar desde este módulo
export type { ContenidoMultilingue };
