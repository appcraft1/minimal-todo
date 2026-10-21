importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

self.addEventListener("push", event => {
  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = { title: "Pengingat Minimal Todo", body: event.data.text() };
  }
  const title = data.notification?.title || data.title || "Minimal Todo";
  const options = {
    body: data.notification?.body || data.body || "Waktunya mengecek target disiplin Anda!",
    icon: "logo.svg",
    badge: "logo.svg",
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
