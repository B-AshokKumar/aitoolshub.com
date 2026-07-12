const CACHE_NAME = "ai-tools-cache-v1.16";

const urlsToCache = [
  "/",
  "/index.html"
];

// Install
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request).then(cachedResponse => {

      const networkFetch = fetch(event.request)

        .then(networkResponse => {

          if (
            networkResponse &&
            networkResponse.status === 200 &&
            event.request.method === "GET"
          ) {

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });

          }

          return networkResponse;

        })

        .catch(() => {

          return cachedResponse || caches.match("/offline.html");

        });

      return cachedResponse || networkFetch;

    })

  );

});
