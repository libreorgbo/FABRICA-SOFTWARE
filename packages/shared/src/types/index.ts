// TIPOS COMPARTIDOS — Tipados estrictos usados en todo el monorepo
// Propósito: Tipos TypeScript utilitarios que no son interfaces de dominio
// Ejemplos: tipos de respuesta API, paginación, errores tipados

// Respuesta genérica de la API (usada en backend y frontend)
export interface RespuestaApi<T> {
  data: T;
  mensaje?: string;
  exito: boolean;
  codigo: number;
}

// Paginación estándar para listados
export interface Paginacion {
  pagina: number;         // Página actual (empieza en 1)
  porPagina: number;      // Items por página
  total: number;          // Total de registros
  totalPaginas: number;   // Total de páginas
}

// Error tipado del sistema
export interface ErrorSistema {
  codigo: string;         // Ej: "TENANT_NO_ENCONTRADO", "TOKEN_EXPIRADO"
  mensaje: string;        // Mensaje legible para el usuario
  detalle?: string;       // Detalle técnico (solo en desarrollo)
}
