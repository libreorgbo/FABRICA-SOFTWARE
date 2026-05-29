// INTERFAZ i18n — CONTRATOS DE TIPADO PARA MULTI-IDIOMA
// Propósito: Define los tipos TypeScript que garantizan consistencia del i18n
// en todas las capas del monorepo (Backend, Dashboard, Frontend Web)
// Importar en: @molde/backend, @molde/dashboard, @molde/web

// Idiomas soportados por el sistema (agregar aquí al expandir)
// es = Español (base), en = Inglés, fr = Francés, pt = Portugués, etc.
export type IdiomaCode = 'es' | 'en' | 'fr' | 'pt' | 'de' | 'it' | 'zh' | 'ar';

// Contenido multilingüe guardado en PostgreSQL (para productos, descripciones, etc.)
// Ejemplo: { "es": "Camiseta Negra", "en": "Black T-Shirt", "fr": "T-shirt Noir" }
export type ContenidoMultilingue = Partial<Record<IdiomaCode, string>>;

// Configuración de idioma por Tenant
// Cada cliente de la plataforma puede tener su propio idioma por defecto
export interface TenantIdiomaConfig {
  idiomaDefecto: IdiomaCode;        // Idioma base del sitio del cliente
  idiomasHabilitados: IdiomaCode[]; // Idiomas que el cliente ha activado
  autoDetectar: boolean;            // Si detecta automáticamente el idioma del visitante
}

// Estructura del diccionario de traducción cargado en runtime
export interface DiccionarioTraducciones {
  [seccion: string]: {
    [clave: string]: string;
  };
}
