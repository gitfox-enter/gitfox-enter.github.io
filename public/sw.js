// GitFox Blog Service Worker
const CACHE_NAME = 'gitfox-blog-v4';
const STATIC_ASSETS = [
  '/',
  '/blog/',
  '/about/',
  '/projects/',
  '/links/',
  '/favicon/favicon.ico',
  '/favicon/favicon-32x32.png',
  '/favicon/android-chrome-192x192.png'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching core assets');
        return cache.addAll(STATIC_ASSETS);
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

// Fetch: network-first for HTML, cache-first for static assets
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  const isHTML = event.request.headers.get('Accept')?.includes('text/html');
  const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|avif|webp|svg|ico|woff2?)$/i.test(url.pathname);

  if (isHTML) {
    // Network-first for HTML pages (users want fresh content)
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then(cachedResponse => {
            return cachedResponse || caches.match('/');
          });
        })
    );
  } else if (isStaticAsset) {
    // Cache-first for static assets (rarely change)
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          return fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          });
        })
    );
  }
});
