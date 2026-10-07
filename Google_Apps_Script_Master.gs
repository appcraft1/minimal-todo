/**
 * ==============================================================================
 * MINIMAL TODO — MASTER GOOGLE APPS SCRIPT BACKEND (v2.2)
 * Database Engine, Multi-User Cloud Isolation, Auto-Setup, Cloud OTA & Firebase
 * ==============================================================================
 *
 * FITUR MULTI-USER CLOUD (v2.2):
 * 1. Satu Google Sheet untuk semua pengguna aplikasi.
 * 2. Data terisolasi otomatis berdasarkan Username masing-masing.
 * 3. Menjaga dan TIDAK MENGHAPUS data lama yang sudah pernah diinput sebelumnya.
 * 4. Endpoint Web App permanen untuk seluruh instalasi APK tanpa perlu sinkron ulang.
 *
 * CARA PAKAI:
 * 1. Buka Spreadsheet Google Anda di https://sheets.new (atau spreadsheet yang sudah ada).
 * 2. Buka menu: Extensions > Apps Script (Ekstensi > Apps Script).
 * 3. Hapus seluruh isi Code.gs, lalu PASTE SELURUH KODE DI BAWAH INI.
 * 4. Pada dropdown fungsi di atas toolbar, pilih "setupDatabase" lalu klik "Run".
 *    -> Script akan OTOMATIS membuat/memperbarui seluruh tab & kolom Username tanpa menghapus data!
 * 5. Klik tombol biru "Deploy" > "Manage deployments" (atau "New deployment") > Web app:
 *    - Description: Minimal Todo API v2.2 Multi-User
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja)  <-- WAJIB PILIH "ANYONE"!
 * ==============================================================================
 */

// KONFIGURASI GLOBAL
const APP_NAME = "Minimal Todo";
const CURRENT_VERSION = "1.0.4";
const CURRENT_VERSION_CODE = 5;

/**
 * 1. SETUP / UPGRADE OTOMATIS DATABASE GOOGLE SHEETS
 * Aman dijalankan berulang kali: Menjaga data lama dan hanya menambahkan kolom yang belum ada!
 */
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Format Warna Bento Premium
  const HEADER_BG = "#121316";      // Dark Bento Matte
  const HEADER_TEXT = "#FDE047";    // Lemon Yellow
  
  // Definisi Seluruh Tab Beserta Kolomnya (Termasuk Multi-User kolom Username)
  const schemas = [
    {
      name: "DB_Users",
      columns: ["Username", "FullName", "Pin", "CreatedAt", "LastLogin", "TotalHabits"],
      widths: [150, 220, 100, 180, 180, 110],
      starters: []
    },
    {
      name: "DB_Habits",
      columns: [
        "ID", "Title", "Subtitle", "CardType", "CurrentProgress", 
        "TargetGoal", "Unit", "ColorTheme", "IconSvgKey", "Completed", 
        "Streak", "ScheduleType", "TargetDate", "ReminderEnabled", "ReminderTime", "LastUpdated", "Username"
      ],
      widths: [130, 200, 240, 110, 110, 100, 80, 120, 100, 90, 80, 120, 120, 120, 100, 180, 150],
      starters: []
    },
    {
      name: "DB_History",
      columns: ["Date", "CompletedCount", "TotalHabits", "Percentage", "DisciplineScore", "HabitIDsLog", "Timestamp", "Username"],
      widths: [120, 120, 100, 100, 130, 280, 180, 150],
      starters: []
    },
    {
      name: "DB_Journal",
      columns: ["ID", "Date", "ReflectionText", "MoodKey", "MoodLabel", "CreatedAt", "Username"],
      widths: [130, 120, 360, 90, 110, 180, 150],
      starters: []
    },
    {
      name: "DB_Tokens",
      columns: ["Token", "DevicePlatform", "SubscribedAt", "IsActive", "Username"],
      widths: [300, 130, 180, 90, 150],
      starters: []
    },
    {
      name: "DB_Settings",
      columns: ["ConfigKey", "ConfigValue", "Description", "LastUpdated"],
      widths: [160, 220, 280, 180],
      starters: [
        ["APP_NAME", APP_NAME, "Nama Resmi Aplikasi", new Date().toISOString()],
        ["REMINDER_MORNING_TIME", "07:00", "Jadwal push notifikasi pagi (WIB)", new Date().toISOString()],
        ["REMINDER_EVENING_TIME", "20:00", "Jadwal push notifikasi evaluasi malam (WIB)", new Date().toISOString()],
        ["FCM_SERVER_KEY", "", "Firebase Server Key / OAuth token untuk notifikasi", new Date().toISOString()]
      ]
    },
    {
      name: "App_Versions",
      columns: ["AppName", "VersionCode", "VersionName", "ReleaseDate", "ApkDownloadUrl", "ChangeLog"],
      widths: [130, 100, 100, 120, 300, 350],
      starters: [
        [
          APP_NAME, CURRENT_VERSION_CODE, CURRENT_VERSION, 
          getTodayDateString(), "", 
          "Rilis Minimal Todo v2.2: Multi-User Cloud Google Sheets! Pemisahan data per username dan form autentikasi Bento premium."
        ]
      ]
    }
  ];

  schemas.forEach(schema => {
    let sheet = ss.getSheetByName(schema.name);
    if (!sheet) {
      sheet = ss.insertSheet(schema.name);
      // Tulis Header Baru
      const headerRange = sheet.getRange(1, 1, 1, schema.columns.length);
      headerRange.setValues([schema.columns]);
      headerRange.setBackground(HEADER_BG);
      headerRange.setFontColor(HEADER_TEXT);
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 36);
      sheet.setFrozenRows(1);

      schema.columns.forEach((col, idx) => {
        sheet.setColumnWidth(idx + 1, schema.widths[idx] || 120);
      });

      if (schema.starters && schema.starters.length > 0) {
        const dataRange = sheet.getRange(2, 1, schema.starters.length, schema.columns.length);
        dataRange.setValues(schema.starters);
        dataRange.setVerticalAlignment("middle");
      }
    } else {
      // Jika tab sudah ada, pertahankan seluruh data dan tambahkan kolom baru jika belum ada
      const lastCol = Math.max(sheet.getLastColumn(), 1);
      const existingHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
      const existingHeaderMap = existingHeaders.map(h => String(h).trim().toLowerCase());

      schema.columns.forEach((colName, idx) => {
        if (!existingHeaderMap.includes(colName.toLowerCase())) {
          const newColIdx = sheet.getLastColumn() + 1;
          sheet.getRange(1, newColIdx).setValue(colName)
            .setBackground(HEADER_BG)
            .setFontColor(HEADER_TEXT)
            .setFontWeight("bold")
            .setHorizontalAlignment("center")
            .setVerticalAlignment("middle");
          sheet.setColumnWidth(newColIdx, schema.widths[idx] || 120);
        }
      });
      sheet.setRowHeight(1, 36);
      sheet.setFrozenRows(1);
    }
  });

  // Hapus "Sheet1" default bawaan Google Sheets jika masih ada
  const defaultSheet = ss.getSheetByName("Sheet1");
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }

  Logger.log("✅ Database Minimal Todo v2.2 Multi-User siap digunakan!");
  return "Database Setup & Migration Selesai!";
}

/**
 * 2. ENDPOINT REST API (doGet)
 * Dipanggil oleh APK untuk cek versi, download habits sesuai user, atau membaca journal & history.
 */
function doGet(e) {
  const params = e ? e.parameter : {};
  const action = params.action || "get_all";
  const targetUsername = String(params.username || params.userId || "").trim().toLowerCase();
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  try {
    // Pastikan struktur kolom up to date
    ensureDatabaseColumns(ss);

    // A. Cek Versi OTA
    if (action === "check_version") {
      const sheet = ss.getSheetByName("App_Versions");
      if (!sheet) return jsonResponse({ error: "Tab App_Versions belum dibuat" });
      const data = sheet.getDataRange().getValues();
      if (data.length > 1) {
        const lastRow = data[data.length - 1];
        return jsonResponse({
          appName: lastRow[0],
          versionCode: Number(lastRow[1]),
          version: lastRow[2],
          releaseDate: formatDateCell(lastRow[3]),
          apkUrl: lastRow[4],
          changeLog: lastRow[5]
        });
      }
      return jsonResponse({ versionCode: CURRENT_VERSION_CODE, version: CURRENT_VERSION });
    }

    // B. Cek Ketersediaan / Profil User
    if (action === "check_user") {
      const sheet = ss.getSheetByName("DB_Users");
      if (!sheet || !targetUsername) {
        return jsonResponse({ exists: false });
      }
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]).trim().toLowerCase() === targetUsername) {
          return jsonResponse({
            exists: true,
            username: String(data[i][0]).trim(),
            fullName: String(data[i][1] || data[i][0]).trim(),
            hasPin: Boolean(data[i][2])
          });
        }
      }
      return jsonResponse({ exists: false });
    }

    // C. Ambil Seluruh Data Habits, Journal, & History (TERISOLASI PER USERNAME)
    if (action === "get_habits" || action === "get_all") {
      const sheet = ss.getSheetByName("DB_Habits");
      const habits = [];

      if (sheet) {
        const rows = sheet.getDataRange().getValues();
        if (rows.length > 1) {
          const headerRow = rows[0].map(h => String(h).trim().toLowerCase());
          const colIndex = name => headerRow.indexOf(name.toLowerCase());

          const idxId = colIndex("id");
          const idxTitle = colIndex("title");
          const idxSubtitle = colIndex("subtitle");
          const idxCardType = colIndex("cardtype");
          const idxProgress = colIndex("currentprogress");
          const idxTarget = colIndex("targetgoal");
          const idxUnit = colIndex("unit");
          const idxTheme = colIndex("colortheme");
          const idxIcon = colIndex("iconsvgkey");
          const idxCompleted = colIndex("completed");
          const idxStreak = colIndex("streak");
          const idxScheduleType = colIndex("scheduletype");
          const idxTargetDate = colIndex("targetdate");
          const idxReminderEnabled = colIndex("reminderenabled");
          const idxReminderTime = colIndex("remindertime");
          const idxLastUpdated = colIndex("lastupdated");
          const idxUsername = colIndex("username");

          for (let i = 1; i < rows.length; i++) {
            const r = rows[i];
            const rawId = (idxId >= 0 && r[idxId]) ? String(r[idxId]).trim() : ("habit_sheet_" + i);
            const rawTitle = (idxTitle >= 0 && r[idxTitle]) ? String(r[idxTitle]).trim() : "";
            const rawUser = (idxUsername >= 0 && r[idxUsername]) ? String(r[idxUsername]).trim().toLowerCase() : "";

            // ISOLASI DATA MULTI-USER:
            // Jika ada targetUsername, hanya ambil baris yang username-nya cocok (atau baris warisan lama tanpa username jika user adalah akun pertama)
            if (targetUsername) {
              if (rawUser && rawUser !== targetUsername) {
                continue; // Milik user lain, abaikan!
              }
            }

            // Hanya proses baris yang memiliki judul / id
            if (rawTitle || rawId) {
              const rawDate = idxTargetDate >= 0 ? formatDateCell(r[idxTargetDate]) : null;
              let rawSchedule = (idxScheduleType >= 0 && r[idxScheduleType]) ? String(r[idxScheduleType]).trim().toLowerCase() : "";
              if (!rawSchedule) {
                rawSchedule = rawDate ? "specific" : "daily";
              }

              const rawCompleted = (idxCompleted >= 0 && r[idxCompleted]) ? String(r[idxCompleted]).toUpperCase() : "NO";
              const rawReminderEnabled = (idxReminderEnabled >= 0 && r[idxReminderEnabled]) ? String(r[idxReminderEnabled]).toUpperCase() : "NO";

              habits.push({
                id: rawId,
                title: rawTitle || "Target Tanpa Judul",
                subtitle: (idxSubtitle >= 0 && r[idxSubtitle]) ? String(r[idxSubtitle]).trim() : "",
                cardType: (idxCardType >= 0 && r[idxCardType]) ? String(r[idxCardType]).trim().toLowerCase() : "checklist",
                currentProgress: (idxProgress >= 0 && !isNaN(Number(r[idxProgress]))) ? Number(r[idxProgress]) : 0,
                targetGoal: (idxTarget >= 0 && !isNaN(Number(r[idxTarget])) && Number(r[idxTarget]) > 0) ? Number(r[idxTarget]) : 1,
                unit: (idxUnit >= 0 && r[idxUnit]) ? String(r[idxUnit]).trim() : "",
                theme: (idxTheme >= 0 && r[idxTheme]) ? String(r[idxTheme]).trim() : "theme-yellow",
                iconSvgKey: (idxIcon >= 0 && r[idxIcon]) ? String(r[idxIcon]).trim() : "sun",
                completed: rawCompleted === "YES" || rawCompleted === "TRUE" || rawCompleted === "1",
                streak: (idxStreak >= 0 && !isNaN(Number(r[idxStreak]))) ? Number(r[idxStreak]) : 0,
                scheduleType: rawSchedule,
                targetDate: rawDate,
                reminderEnabled: rawReminderEnabled === "YES" || rawReminderEnabled === "TRUE" || rawReminderEnabled === "1",
                reminderTime: (idxReminderTime >= 0 && r[idxReminderTime]) ? String(r[idxReminderTime]).trim() : "20:30",
                lastUpdated: (idxLastUpdated >= 0 && r[idxLastUpdated]) ? formatDateCell(r[idxLastUpdated]) : new Date().toISOString(),
                username: rawUser || targetUsername || ""
              });
            }
          }
        }
      }

      // Ambil juga data jurnal terisolasi sesuai user
      const journalSheet = ss.getSheetByName("DB_Journal");
      const journalList = [];
      if (journalSheet) {
        const jRows = journalSheet.getDataRange().getValues();
        const jHeader = jRows.length > 0 ? jRows[0].map(h => String(h).trim().toLowerCase()) : [];
        const idxJUser = jHeader.indexOf("username");

        for (let j = 1; j < jRows.length; j++) {
          const jr = jRows[j];
          const rawJUser = (idxJUser >= 0 && jr[idxJUser]) ? String(jr[idxJUser]).trim().toLowerCase() : "";

          if (targetUsername && rawJUser && rawJUser !== targetUsername) {
            continue; // Jurnal milik user lain
          }

          if (jr[0] || jr[2]) {
            journalList.push({
              id: String(jr[0] || ("j_" + j)),
              date: formatDateCell(jr[1]) || "Hari Ini",
              reflectionText: String(jr[2] || ""),
              moodKey: String(jr[3] || "smile"),
              moodLabel: String(jr[4] || "Bersyukur"),
              createdAt: formatDateCell(jr[5]),
              username: rawJUser || targetUsername || ""
            });
          }
        }
      }

      return jsonResponse({
        success: true,
        username: targetUsername,
        habits: habits,
        journal: journalList,
        count: habits.length,
        timestamp: new Date().toISOString()
      });
    }

    return jsonResponse({ success: true, message: "Minimal Todo API v2.2 Multi-User siap digunakan." });
  } catch (err) {
    return jsonResponse({ error: err.toString() });
  }
}

/**
 * 3. ENDPOINT REST API (doPost)
 * Dipanggil oleh APK untuk pendaftaran/login user, sinkronisasi habits, simpan jurnal, simpan history.
 */
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let payload = {};

  try {
    if (e && e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      payload = e.parameter;
    }
  } catch (err) {
    return jsonResponse({ error: "Payload JSON tidak valid: " + err.toString() });
  }

  const action = payload.action || "sync_habits";
  const targetUsername = String(payload.username || payload.userId || "").trim().toLowerCase();

  try {
    ensureDatabaseColumns(ss);

    // ==========================================
    // A. PENDAFTARAN & LOGIN USER MULTI-USER
    // ==========================================
    if (action === "register_user") {
      const sheet = ss.getSheetByName("DB_Users");
      if (!sheet) return jsonResponse({ error: "Tab DB_Users tidak ditemukan" });

      const uname = String(payload.username || "").trim().toLowerCase();
      const fname = String(payload.fullName || payload.name || uname).trim();
      const pin = String(payload.pin || "").trim();

      if (!uname) return jsonResponse({ success: false, message: "Username wajib diisi" });

      const users = sheet.getDataRange().getValues();
      let foundIndex = -1;
      for (let u = 1; u < users.length; u++) {
        if (String(users[u][0]).trim().toLowerCase() === uname) {
          foundIndex = u + 1;
          break;
        }
      }

      const nowStr = new Date().toISOString();
      if (foundIndex > 0) {
        // Username sudah terdaftar sebelumnya: perbarui data login
        const existingPin = String(users[foundIndex - 1][2] || "").trim();
        if (existingPin && pin && existingPin !== pin) {
          return jsonResponse({ success: false, message: "Username ini sudah terdaftar dengan PIN berbeda. Silakan masuk (Login)." });
        }
        sheet.getRange(foundIndex, 2).setValue(fname);
        if (pin) sheet.getRange(foundIndex, 3).setValue(pin);
        sheet.getRange(foundIndex, 5).setValue(nowStr);
        return jsonResponse({ success: true, message: "Akun siap digunakan!", isNew: false, user: { username: uname, fullName: fname } });
      } else {
        // Buat user baru di DB_Users
        sheet.appendRow([uname, fname, pin, nowStr, nowStr, 0]);
        return jsonResponse({ success: true, message: "Akun baru berhasil didaftarkan!", isNew: true, user: { username: uname, fullName: fname } });
      }
    }

    if (action === "login_user") {
      const sheet = ss.getSheetByName("DB_Users");
      if (!sheet) return jsonResponse({ error: "Tab DB_Users tidak ditemukan" });

      const uname = String(payload.username || "").trim().toLowerCase();
      const pin = String(payload.pin || "").trim();

      if (!uname) return jsonResponse({ success: false, message: "Username wajib diisi" });

      const users = sheet.getDataRange().getValues();
      let matched = null;
      let matchedRow = -1;

      for (let u = 1; u < users.length; u++) {
        if (String(users[u][0]).trim().toLowerCase() === uname) {
          matched = users[u];
          matchedRow = u + 1;
          break;
        }
      }

      if (!matched) {
        // Jika belum ada di list users tapi login, buat otomatis agar seamless
        const fname = String(payload.fullName || uname).trim();
        const nowStr = new Date().toISOString();
        sheet.appendRow([uname, fname, pin, nowStr, nowStr, 0]);
        return jsonResponse({ success: true, message: "Selamat datang! Akun Anda aktif.", user: { username: uname, fullName: fname } });
      }

      // Validasi PIN jika disetel
      const existingPin = String(matched[2] || "").trim();
      if (existingPin && pin && existingPin !== pin) {
        return jsonResponse({ success: false, message: "PIN yang Anda masukkan salah." });
      }

      // Perbarui waktu login
      sheet.getRange(matchedRow, 5).setValue(new Date().toISOString());
      return jsonResponse({
        success: true,
        message: "Login berhasil!",
        user: { username: uname, fullName: String(matched[1] || uname).trim() }
      });
    }

    // ==========================================
    // B. SINKRONISASI HABITS (TERISOLASI USER)
    // ==========================================
    if (action === "sync_habits" || action === "upsert_habit") {
      const sheet = ss.getSheetByName("DB_Habits");
      if (!sheet) return jsonResponse({ error: "Tab DB_Habits tidak ditemukan" });

      const habitsList = payload.habits || (payload.habit ? [payload.habit] : []);
      const existingData = sheet.getDataRange().getValues();
      const headerRow = existingData.length > 0 ? existingData[0].map(h => String(h).trim().toLowerCase()) : [];
      
      const colIndex = name => headerRow.indexOf(name.toLowerCase());
      const idxId = colIndex("id");
      const idxTitle = colIndex("title");
      const idxSubtitle = colIndex("subtitle");
      const idxCardType = colIndex("cardtype");
      const idxProgress = colIndex("currentprogress");
      const idxTarget = colIndex("targetgoal");
      const idxUnit = colIndex("unit");
      const idxTheme = colIndex("colortheme");
      const idxIcon = colIndex("iconsvgkey");
      const idxCompleted = colIndex("completed");
      const idxStreak = colIndex("streak");
      const idxScheduleType = colIndex("scheduletype");
      const idxTargetDate = colIndex("targetdate");
      const idxReminderEnabled = colIndex("reminderenabled");
      const idxReminderTime = colIndex("remindertime");
      const idxLastUpdated = colIndex("lastupdated");
      const idxUsername = colIndex("username");

      habitsList.forEach(h => {
        let foundRow = -1;
        const itemUser = String(h.username || targetUsername || "").trim().toLowerCase();

        for (let r = 1; r < existingData.length; r++) {
          const rowId = idxId >= 0 ? String(existingData[r][idxId]).trim() : "";
          const rowUser = idxUsername >= 0 ? String(existingData[r][idxUsername]).trim().toLowerCase() : "";

          // Cocok jika ID sama DAN (User sama atau baris belum memiliki Username)
          if (rowId === String(h.id).trim()) {
            if (!rowUser || !itemUser || rowUser === itemUser) {
              foundRow = r + 1;
              break;
            }
          }
        }

        const numCols = Math.max(headerRow.length, 17);
        const rowValues = new Array(numCols).fill("");

        // Petakan tiap kolom secara presisi berdasarkan posisi header riil di Google Sheet
        if (idxId >= 0) rowValues[idxId] = h.id || ("habit_" + Date.now());
        if (idxTitle >= 0) rowValues[idxTitle] = h.title || "";
        if (idxSubtitle >= 0) rowValues[idxSubtitle] = h.subtitle || "";
        if (idxCardType >= 0) rowValues[idxCardType] = h.cardType || "checklist";
        if (idxProgress >= 0) rowValues[idxProgress] = (h.currentProgress !== undefined && !isNaN(Number(h.currentProgress))) ? Number(h.currentProgress) : 0;
        if (idxTarget >= 0) rowValues[idxTarget] = (h.targetGoal !== undefined && !isNaN(Number(h.targetGoal))) ? Number(h.targetGoal) : 1;
        if (idxUnit >= 0) rowValues[idxUnit] = h.unit || "";
        if (idxTheme >= 0) rowValues[idxTheme] = h.theme || "theme-yellow";
        if (idxIcon >= 0) rowValues[idxIcon] = h.iconSvgKey || "sun";
        if (idxCompleted >= 0) rowValues[idxCompleted] = h.completed ? "YES" : "NO";
        if (idxStreak >= 0) rowValues[idxStreak] = (h.streak !== undefined && !isNaN(Number(h.streak))) ? Number(h.streak) : 0;
        if (idxScheduleType >= 0) rowValues[idxScheduleType] = h.scheduleType || "daily";
        if (idxTargetDate >= 0) rowValues[idxTargetDate] = h.targetDate || "";
        if (idxReminderEnabled >= 0) rowValues[idxReminderEnabled] = h.reminderEnabled ? "YES" : "NO";
        if (idxReminderTime >= 0) rowValues[idxReminderTime] = h.reminderTime || "20:30";
        if (idxLastUpdated >= 0) rowValues[idxLastUpdated] = new Date().toISOString();
        if (idxUsername >= 0) rowValues[idxUsername] = itemUser || targetUsername || "";

        if (foundRow > 0) {
          sheet.getRange(foundRow, 1, 1, rowValues.length).setValues([rowValues]);
        } else {
          sheet.appendRow(rowValues);
        }
      });

      // Update counter total habits di DB_Users
      if (targetUsername) {
        updateUserHabitCount(ss, targetUsername, habitsList.length);
      }

      return jsonResponse({ success: true, count: habitsList.length, username: targetUsername, message: "Sinkronisasi berhasil disimpan di Google Sheet!" });
    }

    // ==========================================
    // C. UPDATE PROGRES SPESIFIK
    // ==========================================
    if (action === "update_progress") {
      const sheet = ss.getSheetByName("DB_Habits");
      if (!sheet) return jsonResponse({ error: "Tab DB_Habits tidak ditemukan" });

      const targetId = String(payload.id || "").trim();
      const progressVal = Number(payload.currentProgress);
      const isCompleted = payload.completed ? "YES" : "NO";

      const existingData = sheet.getDataRange().getValues();
      const headerRow = existingData.length > 0 ? existingData[0].map(h => String(h).trim().toLowerCase()) : [];
      const colIndex = name => headerRow.indexOf(name.toLowerCase());
      const idxId = colIndex("id");
      const idxProgress = colIndex("currentprogress");
      const idxCompleted = colIndex("completed");
      const idxLastUpdated = colIndex("lastupdated");
      const idxUsername = colIndex("username");

      if (idxId >= 0 && idxProgress >= 0 && targetId) {
        for (let r = 1; r < existingData.length; r++) {
          const rowId = String(existingData[r][idxId]).trim();
          const rowUser = idxUsername >= 0 ? String(existingData[r][idxUsername]).trim().toLowerCase() : "";

          if (rowId === targetId && (!targetUsername || !rowUser || rowUser === targetUsername)) {
            sheet.getRange(r + 1, idxProgress + 1).setValue(isNaN(progressVal) ? 0 : progressVal);
            if (idxCompleted >= 0) sheet.getRange(r + 1, idxCompleted + 1).setValue(isCompleted);
            if (idxLastUpdated >= 0) sheet.getRange(r + 1, idxLastUpdated + 1).setValue(new Date().toISOString());
            return jsonResponse({ success: true, message: "Progres kartu berhasil diperbarui!" });
          }
        }
      }
      return jsonResponse({ success: false, message: "ID kartu tidak ditemukan di spreadsheet" });
    }

    // ==========================================
    // D. SIMPAN REFLEKSI JURNAL HARIAN
    // ==========================================
    if (action === "save_journal") {
      const sheet = ss.getSheetByName("DB_Journal");
      if (!sheet) return jsonResponse({ error: "Tab DB_Journal tidak ditemukan" });

      const j = payload.journal || {};
      sheet.appendRow([
        j.id || ("journal_" + Date.now()),
        j.date || getTodayDateString(),
        j.reflectionText || "",
        j.moodKey || "smile",
        j.moodLabel || "Bahagia",
        new Date().toISOString(),
        targetUsername || ""
      ]);
      return jsonResponse({ success: true, message: "Jurnal tersimpan!" });
    }

    // ==========================================
    // E. SIMPAN RIWAYAT STREAK HARIAN
    // ==========================================
    if (action === "log_history") {
      const sheet = ss.getSheetByName("DB_History");
      if (sheet && payload.history) {
        const hist = payload.history;
        sheet.appendRow([
          hist.date || getTodayDateString(),
          hist.completedCount || 0,
          hist.totalHabits || 0,
          hist.percentage || "0%",
          hist.disciplineScore || "0%",
          hist.habitIDsLog || "",
          new Date().toISOString(),
          targetUsername || ""
        ]);
      }
      return jsonResponse({ success: true, message: "History tercatat!" });
    }

    // ==========================================
    // F. REGISTRASI TOKEN PUSH NOTIFIKASI FCM
    // ==========================================
    if (action === "register_fcm_token") {
      const sheet = ss.getSheetByName("DB_Tokens");
      if (sheet && payload.token) {
        const tokens = sheet.getDataRange().getValues();
        let exists = false;
        for (let i = 1; i < tokens.length; i++) {
          if (tokens[i][0] === payload.token) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          sheet.appendRow([payload.token, payload.platform || "Android", new Date().toISOString(), "YES", targetUsername || ""]);
        }
      }
      return jsonResponse({ success: true, message: "Token FCM tersimpan!" });
    }

    return jsonResponse({ success: false, message: "Action tidak dikenal: " + action });
  } catch (err) {
    return jsonResponse({ error: err.toString() });
  }
}

/**
 * Pastikan kolom Username dan kolom jadwal ada di seluruh tab tanpa mengubah data lama
 */
function ensureDatabaseColumns(ss) {
  const HEADER_BG = "#121316";
  const HEADER_TEXT = "#FDE047";

  // 1. Pastikan tab DB_Users ada
  let userSheet = ss.getSheetByName("DB_Users");
  if (!userSheet) {
    userSheet = ss.insertSheet("DB_Users");
    const uHeaders = ["Username", "FullName", "Pin", "CreatedAt", "LastLogin", "TotalHabits"];
    userSheet.getRange(1, 1, 1, uHeaders.length).setValues([uHeaders])
      .setBackground(HEADER_BG).setFontColor(HEADER_TEXT).setFontWeight("bold").setHorizontalAlignment("center");
    userSheet.setRowHeight(1, 36);
    userSheet.setFrozenRows(1);
  }

  // 2. Periksa DB_Habits
  const habitSheet = ss.getSheetByName("DB_Habits");
  if (habitSheet) {
    const lastCol = habitSheet.getLastColumn();
    if (lastCol > 0) {
      const headerVals = habitSheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toLowerCase());
      const required = [
        { name: "ScheduleType", width: 120 },
        { name: "TargetDate", width: 120 },
        { name: "ReminderEnabled", width: 120 },
        { name: "ReminderTime", width: 100 },
        { name: "Username", width: 150 }
      ];

      required.forEach(req => {
        if (!headerVals.includes(req.name.toLowerCase())) {
          const newCol = habitSheet.getLastColumn() + 1;
          habitSheet.getRange(1, newCol).setValue(req.name)
            .setBackground(HEADER_BG)
            .setFontColor(HEADER_TEXT)
            .setFontWeight("bold")
            .setHorizontalAlignment("center")
            .setVerticalAlignment("middle");
          habitSheet.setColumnWidth(newCol, req.width);
        }
      });
    }
  }

  // 3. Periksa DB_Journal
  const journalSheet = ss.getSheetByName("DB_Journal");
  if (journalSheet) {
    const lastCol = journalSheet.getLastColumn();
    if (lastCol > 0) {
      const jHeaderVals = journalSheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toLowerCase());
      if (!jHeaderVals.includes("username")) {
        const newCol = journalSheet.getLastColumn() + 1;
        journalSheet.getRange(1, newCol).setValue("Username")
          .setBackground(HEADER_BG).setFontColor(HEADER_TEXT).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle");
        journalSheet.setColumnWidth(newCol, 150);
      }
    }
  }

  // 4. Periksa DB_History
  const histSheet = ss.getSheetByName("DB_History");
  if (histSheet) {
    const lastCol = histSheet.getLastColumn();
    if (lastCol > 0) {
      const hHeaderVals = histSheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toLowerCase());
      if (!hHeaderVals.includes("username")) {
        const newCol = histSheet.getLastColumn() + 1;
        histSheet.getRange(1, newCol).setValue("Username")
          .setBackground(HEADER_BG).setFontColor(HEADER_TEXT).setFontWeight("bold").setHorizontalAlignment("center").setVerticalAlignment("middle");
        histSheet.setColumnWidth(newCol, 150);
      }
    }
  }
}

// Helper: Perbarui total habits milik user di DB_Users
function updateUserHabitCount(ss, username, count) {
  try {
    const sheet = ss.getSheetByName("DB_Users");
    if (!sheet) return;
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][0]).trim().toLowerCase() === username.toLowerCase()) {
        sheet.getRange(i + 1, 6).setValue(count);
        break;
      }
    }
  } catch (e) {}
}

// Helper: Format Cell Tanggal ke YYYY-MM-DD
function formatDateCell(val) {
  if (!val) return "";
  if (val instanceof Date) {
    const y = val.getFullYear();
    const m = String(val.getMonth() + 1).padStart(2, '0');
    const d = String(val.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  return String(val).trim();
}

// Helper: Tanggal Hari Ini YYYY-MM-DD
function getTodayDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Helper: Format Output JSON dengan CORS Header
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
