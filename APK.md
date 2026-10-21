# PROMPT TEMPLATE: BUILD APK DARI GOOGLE APPS SCRIPT ERP

> 💡 **TIPS TERBAIK (AUTO-UPDATE TANPA KIRIM APK BERULANG KALI):**  
> Jika tidak ingin terus-menerus mengirimkan file APK setiap ada revisi desain/fitur, baca panduan lengkap: [DEPLOY_CLOUD_DAN_UPDATE_OTOMATIS.md](file:///c:/Users/Asep/OneDrive/Dokumen/A.%20App%20Craft/1.%20Minimal%20Todo/01-minimal-todo/DEPLOY_CLOUD_DAN_UPDATE_OTOMATIS.md). APK cukup dikirim 1x ke pengguna, dan seluruh revisi web akan ter-update otomatis secara instan.

Gunakan prompt di bawah ini saat kamu membuka workspace proyek klien. Cukup isi 4 variabel di bagian `[VARIABEL PROYEK KLIEN]`, lalu kirimkan prompt ini ke AI.

---

```markdown
Halo AI, tolong buatkan struktur project Android Native lengkap (Wrapper WebView) untuk membungkus webapp ERP berbasis Google Apps Script milik klien saya menjadi file APK.

Berikut adalah detail konfigurasi proyek:
- NAMA_APLIKASI: [Isi Nama App, contoh: ERP Nusantara]
- NAMA_PACKAGE: [Isi Package ID, contoh: com.nusantara.erp]
- URL_WEBAPP_APPS_SCRIPT: [Isi URL Web App Apps Script, contoh: https://script.google.com/macros/s/.../exec]
- PESAN_NOTIFIKASI_EXIT: [Isi pesan notif saat app ditutup, contoh: Sesi ERP Anda telah disimpan. Terima kasih!]

Tolong generate seluruh file native Android yang dibutuhkan dengan spesifikasi teknis berikut:

1. ANDROID MANIFEST (AndroidManifest.xml):
   - Tambahkan izin: INTERNET, ACCESS_NETWORK_STATE.
   - Tambahkan izin notifikasi: POST_NOTIFICATIONS (wajib untuk Android 13+ / API 33) dan VIBRATE.
   - Tambahkan izin kamera & storage untuk upload dokumen/nota ERP: CAMERA, READ_MEDIA_IMAGES, dan READ_EXTERNAL_STORAGE (maxSdkVersion 32).
   - Daftarkan MainActivity dan background Service untuk exit notification.

2. MAIN ACTIVITY (MainActivity.java):
   - Inisialisasi WebView yang me-load URL_WEBAPP_APPS_SCRIPT.
   - Aktifkan `setJavaScriptEnabled(true)` dan `setDomStorageEnabled(true)` agar penyimpanan session login dan role divisi karyawan di localStorage tidak hilang saat aplikasi ditutup.
   - Pasang `WebChromeClient.onShowFileChooser` agar tombol upload foto bukti / nota (<input type="file">) di ERP bisa membuka kamera & galeri HP.
   - Buat NotificationChannel untuk Android 8.0+.
   - Pasang request runtime permission untuk `Manifest.permission.POST_NOTIFICATIONS` saat aplikasi pertama kali dibuka (Android 13+).
   - Trigger notifikasi saat user menekan tombol Back sampai keluar aplikasi (onBackPressed).

3. EXIT SERVICE (AppExitService.java):
   - Buat Service dengan method `onTaskRemoved()` agar notifikasi exit TETAP MUNCUL ketika aplikasi ditutup paksa / di-swipe dari Recent Apps.

4. BUILD GRADLE:
   - Buat konfigurasi `android/app/build.gradle` (compileSdk 34, minSdk 24, targetSdk 34) dengan dependency `androidx.core:core` dan `androidx.appcompat`.
   - Buat `android/build.gradle` dan `settings.gradle`.

5. OTOMASI BUILD (build-apk.bat):
   - Buat script Windows Batch 1-klik di root folder yang otomatis mendeteksi Android SDK & Java JDK di sistem, lalu menjalankan `gradlew assembleDebug` dan memindahkan file APK hasil compile ke root folder dengan nama "[NAMA_APLIKASI].apk".

6. REKOMENDASI APPS SCRIPT:
   - Berikan juga baris kode Apps Script (doGet) yang wajib ditambahkan di script Google Sheets (.setXFrameOptionsMode ALLOWALL) agar webapp tidak terblokir di WebView.

Tolong buatkan file-file tersebut langsung di direktori workspace ini.
```
