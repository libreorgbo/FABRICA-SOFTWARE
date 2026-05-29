# 🌍 Sistema i18n Flutter — Archivos ARB

## ¿Para qué sirven los archivos .arb?
ARB (Application Resource Bundle) es el estándar de Google para traducciones en Flutter.
Flutter los lee y genera automáticamente las clases Dart de traducción.

## ¿Cómo agregar un idioma nuevo?
1. Crea `app_fr.arb` (francés), `app_pt.arb` (portugués), `app_de.arb` (alemán), etc.
2. Copia la estructura de `app_es.arb`
3. Traduce los valores
4. Ejecuta: `flutter gen-l10n`
5. Flutter detectará el idioma nativo del celular y cambiará la interfaz automáticamente

## Archivos disponibles
- `app_es.arb` → Español (idioma base)
- `app_en.arb` → Inglés

## Configuración en pubspec.yaml
```yaml
flutter:
  generate: true

flutter_localizations:
  sdk: flutter
```
