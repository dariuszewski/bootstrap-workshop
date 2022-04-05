const staticCacheName = "uek-site-static";
const assets = [
    "/",
    "/index.html",
    "/buzzer.html",
    "/map.html",
    "/js/buzzer.js",
    "/js/app.js",
    "/static/logo.png",
    "/static/finance640x480.JPG",
    "/static/library640x450.jpg",
    "/static/main640x450.JPG",
    "/static/style.css",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Source+Code+Pro&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
    "https://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css",
    "https://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"
];


// install worker
self.addEventListener("install", installEvent => {
    installEvent.waitUntil( // wait untill my parameter is resolved
        caches.open(staticCacheName).then(cache => {
            console.log("Caching shell assets.");
            cache.addAll(assets)
        })
    )
})

// activate event (reainstallation)
self.addEventListener("activate", activateEvent => {
    console.log("Service Worker activated.")
})

// fetch event
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})