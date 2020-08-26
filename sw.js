self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["https://pwa.sandrolinux.com/", "https://pwa.sandrolinux.com/mainpage.html", "https://pwa.sandrolinux.com/sandrolinux.css", "https://pwa.sandrolinux.com/privacypolicy.html", "https://pwa.sandrolinux.com/news/allstories.html", "https://pwa.sandrolinux.com/myplaylist.html"]);
    })
    );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
    );
});
