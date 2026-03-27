const CACHE_NAME = 'darts-club-v1';
// Liste des fichiers à rendre disponibles hors ligne
const ASSETS = [
  './',
  './index.html',
  './menu.html',
  './game.html', // Ajoutez ici le nom de vos fichiers de jeu
  './icon.png',
  './manifest.json'
];

// Installation : Mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activation : Nettoyage des vieux caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Stratégie : Répondre avec le cache, sinon chercher sur le réseau
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});