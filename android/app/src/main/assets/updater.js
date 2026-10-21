// Minimal Todo OTA Updater
window.AppUpdater = {
  async checkForUpdates() {
    try {
      const res = await fetch("./version.json?_t=" + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      console.log("[Updater] Current version:", data.versionName);
    } catch (e) {
      console.warn("[Updater] Check failed:", e);
    }
  }
};
