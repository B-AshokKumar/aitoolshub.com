const CACHE_NAME = "ai-tools-cache-v1.16";

const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html",
  "/manifest.json",

  "/icon-192.png",
  "/icon-512.png",

  "/about.html",
  "/privacy-policy.html",
  "/terms.html",
  "/disclaimer.html"
];

// Install
self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );

  self.skipWaiting();

});

// Activate
self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames.map(cache => {

          if(cache !== CACHE_NAME){

            return caches.delete(cache);

          }

        })

      );

    })

  );

  self.clients.claim();

});

// Fetch
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request)
          .catch(() => {

            if (event.request.mode === "navigate") {
              return caches.match("/offline.html");
            }

            return Response.error();

          });

      })

  );

});
