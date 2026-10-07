/**
 * ==============================================================================
 * MINIMAL TODO — MASTER GOOGLE APPS SCRIPT BACKEND (v2.1)
 * Database Engine, Auto-Setup, Cloud OTA, Two-Way Sync & Firebase Push Notifications
 * ==============================================================================
 *
 * CARA PAKAI:
 * 1. Buka Spreadsheet Google Anda di https://sheets.new (atau spreadsheet yang sudah ada).
 * 2. Buka menu: Extensions > Apps Script (Ekstensi > Apps Script).
 * 3. Hapus seluruh isi Code.gs, lalu PASTE SELURUH KODE DI BAWAH INI.
 * 4. Pada dropdown fungsi di atas toolbar, pilih "setupDatabase" lalu klik "Run".
 *    -> Script akan OTOMATIS membuat/memperbarui seluruh tab, kolom jadwal tanggal, warna bento, dll!
 * 5. Klik tombol biru "Deploy" > "New deployment" > pilih jenis "Web app".
 *    - Description: Minimal Todo API v2.1
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja)  <-- WAJIB PILIH "ANYONE" AGAR BISA DIAKSES APK!
 * 6. Salin "Web app URL" (format: https://script.google.com/macros/s/.../exec)
 *    dan masukkan ke menu Setelan Cloud di aplikasi Minimal Todo.
 * ==============================================================================
 */

// KONFIGURASI GLOBAL
const APP_NAME = "Minimal Todo";
const CURRENT_VERSION = "1.0.0";
const CURRENT_VERSION_CODE = 1;

/**
 * 1. SETUP / UPGRADE OTOMATIS DATABASE GOOGLE SHEETS
 * Jalankan fungsi ini SEKALI di Apps Script. Tidak perlu membuat sheet manual!
 * Jika sudah ada sheet sebelumnya, fungsi ini akan menjaga data lama dan menambahkan kolom jadwal baru.
 */
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Format Warna Bento Premium
  const HEADER_BG = "#121316";      // Dark Bento Matte
  const HEADER_TEXT = "#FDE047";    // Lemon Yellow
  
  // Definisi Seluruh Tab Beserta Kolomnya (Termasuk ScheduleType, TargetDate, Reminder)
  const schemas = [
    {
      name: "DB_Habits",
      columns: [
        "ID", "Title", "Subtitle", "CardType", "CurrentProgress", 
        "TargetGoal", "Unit", "ColorTheme", "IconSvgKey", "Completed", 
        "Streak", "ScheduleType", "TargetDate", "ReminderEnabled", "ReminderTime", "LastUpdated"
      ],
      widths: [130, 200, 240, 110, 110, 100, 80, 120, 100, 90, 80, 120, 120, 120, 100, 180],
      starters: []
    },
    {
      name: "DB_History",
      columns: ["Date", "CompletedCount", "TotalHabits", "Percentage", "DisciplineScore", "HabitIDsLog", "Timestamp"],
      widths: [120, 120, 100, 100, 130, 280, 180],
      starters: []
    },
    {
      name: "DB_Journal",
      columns: ["ID", "Date", "ReflectionText", "MoodKey", "MoodLabel", "CreatedAt"],
      widths: [130, 120, 360, 90, 110, 180],
      starters: []
    },
    {
      name: "DB_Tokens",
      columns: ["Token", "DevicePlatform", "SubscribedAt", "IsActive"],
      widths: [300, 130, 180, 90],
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
          "Rilis Minimal Todo v2.1: Sinkronisasi Google Sheets dua arah, integrasi kalender tanggal tertentu, dan Bento Card premium."
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
      // Jika tab sudah ada, periksa apakah ada kolom baru yang perlu ditambahkan (misal ScheduleType, TargetDate)
      const existingHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
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

  Logger.log("✅ Database Minimal Todo v2.1 siap digunakan dengan dukungan jadwal tanggal tertentu!");
  return "Database Setup & Migration Selesai!";
}

/**
 * 2. ENDPOINT REST API (doGet)
 * Dipanggil oleh APK untuk cek versi, download habits (pull data), atau membaca journal & history.
 */
function doGet(e) {
  const params = e ? e.parameter : {};
  const action = params.action || "get_all";
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  try {
    // Pastikan struktur kolom up to date
    ensureHabitColumns(ss);

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

    // B. Ambil Seluruh Data Habits, Journal, & History (PULL DARI GOOGLE SHEET KE APK)
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

          for (let i = 1; i < rows.length; i++) {
            const r = rows[i];
            const rawId = (idxId >= 0 && r[idxId]) ? String(r[idxId]).trim() : ("habit_sheet_" + i);
            const rawTitle = (idxTitle >= 0 && r[idxTitle]) ? String(r[idxTitle]).trim() : "";

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
                lastUpdated: (idxLastUpdated >= 0 && r[idxLastUpdated]) ? formatDateCell(r[idxLastUpdated]) : new Date().toISOString()
              });
            }
          }
        }
      }

      // Ambil juga data jurnal jika ada
      const journalSheet = ss.getSheetByName("DB_Journal");
      const journalList = [];
      if (journalSheet) {
        const jRows = journalSheet.getDataRange().getValues();
        for (let j = 1; j < jRows.length; j++) {
          const jr = jRows[j];
          if (jr[0] || jr[2]) {
            journalList.push({
              id: String(jr[0] || ("j_" + j)),
              date: formatDateCell(jr[1]) || "Hari Ini",
              reflectionText: String(jr[2] || ""),
              moodKey: String(jr[3] || "smile"),
              moodLabel: String(jr[4] || "Bersyukur"),
              createdAt: formatDateCell(jr[5])
            });
          }
        }
      }

      return jsonResponse({
        success: true,
        habits: habits,
        journal: journalList,
        count: habits.length,
        timestamp: new Date().toISOString()
      });
    }

    return jsonResponse({ success: true, message: "Minimal Todo API v2.1 siap digunakan." });
  } catch (err) {
    return jsonResponse({ error: err.toString() });
  }
}

/**
 * 3. ENDPOINT REST API (doPost)
 * Dipanggil oleh APK untuk sinkronisasi habits (PUSH), simpan jurnal, simpan history, dan FCM token.
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

  try {
    ensureHabitColumns(ss);

    // A. Sinkronisasi Habits (Upsert / Delete)
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

      habitsList.forEach(h => {
        let foundRow = -1;
        for (let r = 1; r < existingData.length; r++) {
          if (idxId >= 0 && String(existingData[r][idxId]).trim() === String(h.id).trim()) {
            foundRow = r + 1;
            break;
          }
        }

        const numCols = Math.max(headerRow.length, 16);
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

        if (foundRow > 0) {
          sheet.getRange(foundRow, 1, 1, rowValues.length).setValues([rowValues]);
        } else {
          sheet.appendRow(rowValues);
        }
      });

      return jsonResponse({ success: true, count: habitsList.length, message: "Sinkronisasi berhasil disimpan di Google Sheet!" });
    }

    // A2. Update Progres Spesifik (Aksi Cepat Stepper APK)
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

      if (idxId >= 0 && idxProgress >= 0 && targetId) {
        for (let r = 1; r < existingData.length; r++) {
          if (String(existingData[r][idxId]).trim() === targetId) {
            sheet.getRange(r + 1, idxProgress + 1).setValue(isNaN(progressVal) ? 0 : progressVal);
            if (idxCompleted >= 0) sheet.getRange(r + 1, idxCompleted + 1).setValue(isCompleted);
            if (idxLastUpdated >= 0) sheet.getRange(r + 1, idxLastUpdated + 1).setValue(new Date().toISOString());
            return jsonResponse({ success: true, message: "Progres kartu berhasil diperbarui!" });
          }
        }
      }
      return jsonResponse({ success: false, message: "ID kartu tidak ditemukan di spreadsheet" });
    }

    // B. Simpan Refleksi Jurnal Harian
    if (action === "save_journal") {
      const sheet = ss.getSheetByName("DB_Journal");
      if (!sheet) return jsonResponse({ error: "Tab DB_Journal tidak ditemukan" });

      const j = payload.journal;
      sheet.appendRow([
        j.id || ("journal_" + Date.now()),
        j.date || getTodayDateString(),
        j.reflectionText || "",
        j.moodKey || "smile",
        j.moodLabel || "Bahagia",
        new Date().toISOString()
      ]);
      return jsonResponse({ success: true, message: "Jurnal tersimpan!" });
    }

    // C. Simpan Riwayat Streak Harian
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
          new Date().toISOString()
        ]);
      }
      return jsonResponse({ success: true, message: "History tercatat!" });
    }

    // D. Registrasi Token Push Notifikasi FCM
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
          sheet.appendRow([payload.token, payload.platform || "Android", new Date().toISOString(), "YES"]);
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
 * Pastikan kolom DB_Habits memiliki kolom ScheduleType, TargetDate, ReminderEnabled, dll
 */
function ensureHabitColumns(ss) {
  const sheet = ss.getSheetByName("DB_Habits");
  if (!sheet) return;
  const lastCol = sheet.getLastColumn();
  if (lastCol === 0) return;
  const headerValues = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toLowerCase());
  
  const required = [
    { name: "ScheduleType", width: 120 },
    { name: "TargetDate", width: 120 },
    { name: "ReminderEnabled", width: 120 },
    { name: "ReminderTime", width: 100 }
  ];

  required.forEach(req => {
    if (!headerValues.includes(req.name.toLowerCase())) {
      const newCol = sheet.getLastColumn() + 1;
      sheet.getRange(1, newCol).setValue(req.name)
        .setBackground("#121316")
        .setFontColor("#FDE047")
        .setFontWeight("bold")
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");
      sheet.setColumnWidth(newCol, req.width);
    }
  });
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
