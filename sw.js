// GitFox Blog Service Worker
const CACHE_NAME = 'gitfox-blog-v2';
const CACHE_URLS = [
  '/gold-bear-blog/',
  '/gold-bear-blog/blog',
  '/gold-bear-blog/about',
  '/gold-bear-blog/projects',
  '/gold-bear-blog/links',
  '/gold-bear-blog/favicon/favicon.ico',
  '/gold-bear-blog/favicon/favicon-32x32.png',
  '/gold-bear-blog/favicon/android-chrome-192x192.png'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching core assets');
        return cache.addAll(CACHE_URLS);
      })
      .catch(err => console.log('[SW] Cache install error:', err))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first strategy
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith('/gold-bear-blog/')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          fetch(event.request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, networkResponse.clone());
                });
              }
            })
            .catch(() => {});
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          })
          .catch(() => {
            if (event.request.destination === 'document') {
              return caches.match('/gold-bear-blog/');
            }
          });
      })
  );
});
