
const PREFIX = "pocket-tab:%2FPocket-TAB%2F:";
const CACHE = PREFIX + "mwi22x14";
const BASE = "/Pocket-TAB/";
const INDEX = BASE + 'index.html';
const FILES = ["/Pocket-TAB/index.html","/Pocket-TAB/assets/index-D4HLIsRf.css","/Pocket-TAB/assets/index-OfGH8mEc.js","/Pocket-TAB/assets/pdf-A823PgsV.js","/Pocket-TAB/assets/beat.worker-EOiireXm.js","/Pocket-TAB/assets/ort-wasm-simd-threaded-DN_1uOdW.mjs","/Pocket-TAB/assets/ort-wasm-simd-threaded-qh98TCA_.wasm","/Pocket-TAB/assets/separate.worker-D4kaDnnC.js","/Pocket-TAB/manifest.webmanifest","/Pocket-TAB/icon.svg","/Pocket-TAB/icon-192.png","/Pocket-TAB/icon-512.png","/Pocket-TAB/apple-touch-icon.png","/Pocket-TAB/privacy.html","/Pocket-TAB/stem-licenses.txt"];
const LAZY = FILES.filter(url => /(?:separate\.worker-|ort-wasm-)/.test(url));
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      await cache.addAll(FILES.filter(url => !LAZY.includes(url)).map(url => new Request(url, { cache: 'reload' })));
    } catch (error) { await caches.delete(CACHE); throw error; }
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE') event.waitUntil(self.skipWaiting());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const navigation = request.mode === 'navigate' && (url.pathname === BASE || url.pathname === INDEX);
  if (!navigation && !FILES.includes(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(navigation ? INDEX : url.pathname);
    if (cached) return cached;
    const response = await fetch(request);
    if (LAZY.includes(url.pathname) && response.ok) {
      try { await cache.put(url.pathname, response.clone()); } catch { /* Optional AI assets may exceed storage quota. */ }
    }
    return response;
  })());
});
