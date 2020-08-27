self.addEventListener('periodicsync', function(event) {
  if (event.registration.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
  else {
    event.registration.unregister();
  }
});