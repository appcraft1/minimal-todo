/**
 * Minimal Todo — Cloud OTA Live Update Engine
 * Memeriksa pembaruan revisi web/APK langsung dari Cloud.
 */
const CloudUpdater = {
  localVersion: "1.0.4",
  localVersionCode: 5,

  async checkForUpdates(cloudEndpoint) {
    if (!cloudEndpoint) return;
    try {
      const response = await fetch(cloudEndpoint + "?action=check_version&app=MinimalTodo", {
        method: "GET",
        headers: { "Accept": "application/json" }
      });
      const remote = await response.json();
      
      if (remote && remote.versionCode > this.localVersionCode) {
        this.promptUpdate(remote);
      }
    } catch (e) {
      console.log("[Updater] Berjalan dalam mode offline atau cloud belum dikonfigurasi.");
    }
  },

  promptUpdate(remote) {
    const banner = document.createElement("div");
    banner.className = "cloud-update-banner";
    banner.innerHTML = `
      <div class="update-content">
        <div class="update-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FDE047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5"/></svg>
        </div>
        <div class="update-text">
          <strong>Pembaruan Tersedia (${remote.version})</strong>
          <p>${remote.changeLog || "Peningkatan performa dan perbaikan antarmuka."}</p>
        </div>
      </div>
      <div class="update-actions">
        ${remote.apkUrl ? `<a href="${remote.apkUrl}" target="_blank" class="btn-update-apk">Unduh APK</a>` : ""}
        <button class="btn-update-apply" onclick="location.reload(true)">Terapkan</button>
      </div>
    `;
    document.body.appendChild(banner);
  }
};
