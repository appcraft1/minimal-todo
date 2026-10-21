self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "TRIGGER_NOTIFICATION") {
    const title = event.data.title || "Pengingat Minimal Todo";
    const options = {
      body: event.data.body || "Waktunya mengecek target habit Anda!",
      icon: "logo.svg",
      badge: "logo.svg",
      vibrate: [200, 100, 200, 100, 300]
    };
    self.registration.showNotification(title, options);
  }
});
