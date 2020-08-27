self.addEventListener('periodicsync', function(event) {
  if (event.registration.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
  else {
    event.registration.unregister();
  }
});
navigator.serviceWorker.ready.then(function(registration) {
  registration.periodicSync.permissionState().then(function(state) {
    if (state == 'prompt') showSyncRegisterUI();
  });
});