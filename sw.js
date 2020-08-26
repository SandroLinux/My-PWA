self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["https://pwa.sandrolinux.com/", "https://pwa.sandrolinux.com/mainpage.html", "https://pwa.sandrolinux.com/sandrolinux.css", "https://pwa.sandrolinux.com/privacypolicy.html", "https://pwa.sandrolinux.com/news/allstories.html", "https://www.sandrolinux.com/PWA%20Icon%20180.jpg", "https://pwa.sandrolinux.com/myplaylist.html"]);
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
swRegistration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: applicationServerKey
})
.then(function(subscription) {
  console.log('User is subscribed.');

  updateSubscriptionOnServer(subscription);

  isSubscribed = true;

  updateBtn();

})
.catch(function(err) {
  console.log('Failed to subscribe the user: ', err);
  updateBtn();
});
