const CACHE_NAME = 'darts-club-v1';
// Liste des fichiers à sauvegarder pour le mode hors-ligne
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './menu.html',
  './manifest.json',
  './icon.png'
];

// Installation du Service Worker et mise en cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Stratégie : Répondre avec le cache, sinon chercher sur le réseau
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});