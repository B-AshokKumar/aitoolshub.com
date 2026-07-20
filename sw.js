const CACHE_NAME = "ai-tools-cache-v1.16";

const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html",
  "/manifest.json",

  "/icon-192.png",
  "/icon-512.png",
  "/how-to-use.html",

  "/about.html",
  "/privacy-policy.html",
  "/terms.html",
  "/disclaimer.html"
];

// Install
self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
  urlsToCache.map(url =>
    cache.add(url).catch(err =>
      console.warn("Failed to cache:", url, err)
    )
  )
)
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

  if (event.request.method !== "GET") return;
  
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
