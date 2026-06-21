// GitFox Blog Service Worker v7
const CACHE_NAME = 'gitfox-blog-v7';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Clean up all old caches
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

  // Only cache static assets - NEVER intercept HTML navigation
  const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|avif|webp|svg|ico|woff2?|ttf|otf|eot)$/i.test(url.pathname);

  if (!isStaticAsset) return; // Let browser handle HTML and other requests natively

  // Stale-while-revalidate for static assets
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          if (response.ok) {
            cache.put(event.request, response.clone()).catch(() => {});
          }
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    )
  );
});
