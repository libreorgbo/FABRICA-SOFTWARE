// SERVICE WORKER BASE — PWA FABRICA-SOFTWARE
// Propósito: Habilita capacidades PWA (Progressive Web App) automáticas
// en todos los subdominios de clientes de la plataforma.
// Funciones: Cache offline de assets, sincronización en background, notificaciones push.
// Versionar el CACHE_NAME al desplegar cambios importantes para forzar actualización.
// Sin lógica implementada — scaffold preparado para Workbox o implementación manual

const CACHE_NAME = 'fabrica-sw-v1';

// Archivos críticos que se cachean en la instalación (App Shell)
const SHELL_ASSETS = [
  '/',
  '/offline.html',
];

self.addEventListener('install', (event) => {
  // TODO: Cachear assets del App Shell
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // TODO: Limpiar cachés antiguas de versiones anteriores
  self.clients.claim();
});

self.addEventListener('fetch', (_event) => {
  // TODO: Estrategia de caché (Cache First para assets, Network First para API)
});
