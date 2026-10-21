# PANDUAN DEPLOY CLOUD & UPDATE OTOMATIS APK (OVER-THE-AIR)
> **Solusi Cerdas:** Cukup bagikan file APK ke pengguna **1 KALI SAJA**. Setiap ada revisi desain, fitur baru, atau perbaikan bug, aplikasi di HP pengguna akan **otomatis ter-update sendiri** secara instan lewat Cloud tanpa perlu kirim ulang file APK.

---

## 1. Mengapa Deploy Cloud Jauh Lebih Baik?

Saat ini, aplikasi Android Anda berjalan menggunakan file internal yang tertanam di dalam APK (`file:///android_asset/index.html`). 
- **Kelemahan Model APK Biasa:** Setiap ada perubahan sekecil apa pun (warna, tata letak, teks, atau penambahan fitur), Anda harus mengompilasi ulang APK dan meminta semua pengguna untuk mengunduh dan menginstal ulang APK baru. Hal ini sangat melelahkan dan rawan ditolak pengguna.
- **Keunggulan Model Cloud-Hosted APK (Rekomendasi Terbaik):**
  1. **Zero-Reinstall (0x Instal Ulang):** APK di HP pengguna berfungsi sebagai "cangkang resmi" (menangani ikon HP, getaran, splash screen, dan notifikasi Android).
  2. Isi tampilan dan fiturnya dimuat langsung dari URL Cloud yang aman (HTTPS).
  3. Saat Anda mengedit kode di laptop dan melakukan deploy ke Cloud (hanya butuh waktu ~10 detik), **semua pengguna APK di mana pun langsung melihat tampilan dan fitur terbaru saat mereka membuka aplikasi**.

---

## 2. Tabel Perbandingan

| Fitur | Model Kirim APK Berulang Kali | Model Deploy Cloud (OTA Update) |
| :--- | :--- | :--- |
| **Penyebaran Update** | Manual kirim file `.apk` lewat WhatsApp / Google Drive | **Otomatis 100%** saat aplikasi dibuka |
| **Tindakan Pengguna** | Wajib uninstall / install ulang APK baru | **Tidak perlu apa-apa** (langsung menikmati update) |
| **Waktu Rilis Revisi** | 10–30 menit (Build APK + Upload + Kirim) | **10–30 detik** (Langsung live ke seluruh dunia) |
| **Penyimpanan HP** | Sampah file APK menumpuk di memori HP | Memori HP tetap bersih dan ringan |
| **Notifikasi & Ikon HP** | Tetap berjalan normal | **Tetap berjalan normal** via bridge native Android |
| **Koneksi Database** | Google Sheets / LocalStorage | **Google Sheets / LocalStorage tetap sama persis** |

---

## 3. Pilihan Platform Cloud Hosting Gratis & Terbaik

Semua platform berikut **100% Gratis**, menyediakan **SSL/HTTPS otomatis**, dan memiliki kecepatan server tingkat global:

### A. Vercel (Sangat Direkomendasikan ⭐⭐⭐⭐⭐)
- **Kelebihan:** Sangat cepat, setup paling mudah (cukup drag-and-drop folder proyek atau sambungkan ke GitHub), gratis selamanya.
- **Domain yang didapat:** `https://nama-proyek-anda.vercel.app` (Bisa juga pakai domain pribadi jika punya).

### B. Cloudflare Pages
- **Kelebihan:** Kecepatan akses tanpa batas (unlimited bandwidth gratis), latency sangat rendah di Indonesia.
- **Domain yang didapat:** `https://nama-proyek-anda.pages.dev`.

### C. GitHub Pages
- **Kelebihan:** Gratis terintegrasi langsung dengan repository GitHub Anda.
- **Domain yang didapat:** `https://username.github.io/nama-repo`.

---

## 4. Panduan Praktis Deploy ke Vercel (Hanya 3 Menit)

### Cara 1: Lewat Web Browser (Paling Mudah, Tanpa Install Apapun)
1. Buka situs [vercel.com](https://vercel.com) lalu Login / Daftar menggunakan akun Google atau GitHub.
2. Di dashboard Vercel, pilih **Add New...** > **Project**.
3. Jika proyek Anda sudah di-upload ke GitHub, tinggal klik **Import**.
4. Jika belum di GitHub, Anda bisa menginstal **Vercel CLI** di komputer sekali saja:
   ```powershell
   npm install -g vercel
   ```
5. Buka terminal di folder proyek ini (`01-minimal-todo`), lalu ketik:
   ```powershell
   vercel --prod
   ```
6. Ikuti petunjuk di layar (tekan Enter untuk pilihan default). Dalam hitungan detik, Anda akan mendapatkan URL live, misalnya:
   `https://minimal-todo-craft.vercel.app`

---

## 5. Cara Menghubungkan APK ke URL Cloud

Setelah mendapatkan URL Cloud Anda (misal `https://minimal-todo-craft.vercel.app`), Anda hanya perlu **mengatur 1 variabel saja** di file native Android:

Buka file:
[`android/app/src/main/java/com/appcraft/minimaltodo/MainActivity.java`](file:///c:/Users/Asep/OneDrive/Dokumen/A.%20App%20Craft/1.%20Minimal%20Todo/01-minimal-todo/android/app/src/main/java/com/appcraft/minimaltodo/MainActivity.java)

Cari baris variabel:
```java
// Masukkan URL Cloud Anda di sini agar APK otomatis update tanpa instal ulang:
public static final String CLOUD_WEB_URL = "https://minimal-todo-craft.vercel.app";
```

Aplikasi Android sudah dilengkapi dengan **Smart Fallback System**:
- Saat HP pengguna memiliki internet: APK otomatis memuat versi terbaru dari Cloud.
- Jika HP pengguna sedang offline / mode pesawat: APK otomatis membuka file cadangan lokal internal (`file:///android_asset/index.html`) sehingga aplikasi tidak pernah crash atau blank.

---

## 6. Alur Kerja Harian Setelah Menggunakan Cloud (Sangat Nyaman)

Setelah langkah di atas selesai dan Anda membagikan file APK ke pengguna:

1. Anda ingin mengubah tampilan, menambah fitur, atau mengganti warna.
2. Cukup edit file `index.html`, `style.css`, atau `app.js` di laptop Anda.
3. Jalankan `vercel --prod` (atau push ke GitHub jika terhubung).
4. **Selesai!** Dalam 10 detik, semua pengguna yang membuka APK di HP mereka langsung melihat perubahan terbaru Anda secara otomatis. **Tidak perlu membuat dan membagikan file APK lagi!**

---
*Dokumen ini dibuat otomatis untuk dokumentasi arsitektur proyek Minimal Todo (v1.0.0).*
