(() => {
  const e = ["/"];
  self.addEventListener("install", (n) => {
    n.waitUntil(
      caches.open("site-static-v1").then((n) => {
        console.log("caching shell assets"), n.addAll(e);
      })
    );
  }),
    self.addEventListener("fetch", (e) => {
      navigator.onLine
        ? console.log("You currently online!")
        : console.log("Your are Offline now!");
    });
})();
