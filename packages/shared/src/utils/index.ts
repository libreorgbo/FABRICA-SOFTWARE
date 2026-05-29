// UTILIDADES COMPARTIDAS — Helpers usados en todo el monorepo
// Propósito: Funciones puras de validación, criptografía y SEO
// Sin lógica implementada — scaffold con documentación de intención

// ─── VALIDACIÓN ────────────────────────────────────────────────────────────
// validarEmail(email: string): boolean
// → Valida formato de correo electrónico

// validarSubdominio(sub: string): boolean
// → Valida que un subdominio sea válido (solo letras, números y guiones)

// ─── CRIPTOGRAFÍA ──────────────────────────────────────────────────────────
// generarTokenSeguro(bytes?: number): string
// → Genera un token aleatorio criptográficamente seguro para JWT/API Keys

// hashContrasena(contrasena: string): Promise<string>
// → Hashea una contraseña usando bcrypt (nunca guardar contraseñas en texto plano)

// ─── SEO ───────────────────────────────────────────────────────────────────
// generarSlug(texto: string, idioma?: string): string
// → Convierte texto a slug URL-amigable considerando caracteres del idioma
// → Ej: "Camiseta Negra" → "camiseta-negra"

// generarMetaTags(pagina: object, idioma: string): object
// → Genera metatags SEO (title, description, og:tags) para un subdominio

// ─── i18n UTILS ────────────────────────────────────────────────────────────
// extraerTextoIdioma(contenido: ContenidoMultilingue, idioma: string): string
// → Extrae el texto en el idioma solicitado del campo multilingüe de PostgreSQL
// → Ej: extraerTextoIdioma({"es":"Hola","en":"Hello"}, "en") → "Hello"
// → Si el idioma no existe, hace fallback al español

export {};
