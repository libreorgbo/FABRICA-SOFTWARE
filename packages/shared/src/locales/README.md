# 🌍 Sistema de Multi-idioma (i18n) — FABRICA-SOFTWARE

## ¿Para qué sirve esta carpeta?
Aquí viven los **DICCIONARIOS CENTRALES** de traducción.
Todos los textos fijos de la interfaz (botones, mensajes, etiquetas) se guardan aquí.
Tanto el Dashboard (Next.js) como el Frontend Web consumen estas traducciones.

## ¿Cómo agregar un nuevo idioma?
1. Crea un nuevo archivo: `fr.json` (francés), `pt.json` (portugués), `de.json` (alemán), etc.
2. Copia la estructura de `es.json`
3. Traduce los valores (puedes pedirle al Agente IA que lo haga automáticamente)
4. El sistema lo detectará automáticamente

## Archivos disponibles
- `es.json` → Español (idioma base del sistema)
- `en.json` → Inglés
- `[tu-idioma].json` → Agregar aquí

## ¿Cómo funciona el contenido dinámico (base de datos)?
Para textos guardados en PostgreSQL (nombres de productos, descripciones), se usa formato JSON multilingüe:
```json
{
  "es": "Camiseta Negra",
  "en": "Black T-Shirt",
  "fr": "T-shirt Noir"
}
```
NestJS lee el idioma del Tenant/Usuario y devuelve el texto correcto automáticamente.
