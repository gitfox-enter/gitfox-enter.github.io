// GitFox Blog Service Worker v6
const CACHE_NAME = 'gitfox-blog-v6';
const STATIC_ASSETS = [
  '/favicon/favicon.ico',
  '/favicon/favicon-32x32.png',
  '/favicon/android-chrome-192x192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
      .catch(err => console.log('[SW] Cache install error:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = event.request.headers.get('Accept')?.includes('text/html');
  const isStatic = /\.(js|css|png|jpg|jpeg|gif|avif|webp|svg|ico|woff2?)$/i.test(url.pathname);

  if (isHTML) {
    // Network-first with cache fallback, tolerate opaque responses
    event.respondWith(
      fetch(event.request).then(res => {
        // Cache successful responses - be lenient with response type
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone).catch(() => {});
          });
        }
        return res;
      }).catch(() => {
        // Network failed - try cache, then offline page, then let browser handle
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          return caches.match('/offline.html').then(offline => {
            if (offline) return offline;
            // If even offline.html is not cached, let the browser handle it natively
            return fetch(event.request);
          });
        });
      })
    );
  } else if (isStatic) {
    // Cache-first for static assets
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(res => {
          if (res.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()).catch(() => {}));
          }
          return res;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
  // Non-HTML, non-static requests are not intercepted - let browser handle natively
});
