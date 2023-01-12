const staticCacheName = "site-static-v1";
const assets = ["/", "/pages/checkout.js"];

// install event
self.addEventListener("install", (evt) => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (navigator.onLine) {
    console.log("You currently online!");
  } else {
    console.log("Your are Offline now!");
  }
});
