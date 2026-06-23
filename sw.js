self.addEventListener('fetch', function(event) {
    // Dieser Code hält die App auf dem Handy am Leben
    event.respondWith(fetch(event.request));
});
