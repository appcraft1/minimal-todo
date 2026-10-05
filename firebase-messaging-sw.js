// Firebase Cloud Messaging (FCM) Service Worker — Minimal Todo
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || "Jangan lupa selesaikan habit harianmu hari ini!",
      icon: "logo.svg",
      badge: "logo.svg",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        { action: 'open', title: 'Buka Todo' },
        { action: 'close', title: 'Tutup' }
      ]
    };
    event.waitUntil(
      self.registration.showNotification(data.title || "Minimal Todo Reminder", options)
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
