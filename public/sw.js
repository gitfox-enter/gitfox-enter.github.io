// GitFox Blog Service Worker v5
const CACHE_NAME = 'gitfox-blog-v5';
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
    event.respondWith(
      fetch(event.request).then(res => {
        if (res.ok && res.type === 'basic') {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
        }
        return res;
      }).catch(() => caches.match(event.request).then(r => r || caches.match('/offline.html')))
    );
  } else if (isStatic) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(res => {
          if (res.ok && res.type === 'basic') caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
          return res;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});
