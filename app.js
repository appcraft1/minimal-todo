/**
 * ==============================================================================
 * MINIMAL TODO — MASTER APPLICATION ENGINE (v2.0)
 * Visual Habit, Focus & Mindful Goals
 * 100% Premium Inline SVGs | Zero Browser Native Dialogs | Confetti & Sound FX
 * ==============================================================================
 */

// 1. MASTER SVG LIBRARY (36+ VEKTOR TAJAM MURNI TANPA EMOJI)
const SVG_ICONS = {
  // 1. Kebugaran & Olahraga (Fitness)
  dumbbell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`,
  run: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="4" r="2"/><path d="m15 8-4.5 4.5 2.5 4.5 3.5-1"/><path d="m10.5 12.5-3.5 1-2.5-3"/><path d="m13 17-2.5 4.5-4-2"/></svg>`,
  walk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 6.5 9 9.5 9H11l2.5 7h4.5a2 2 0 0 1 2 2v2H4v-4z"/><circle cx="12" cy="5" r="2"/></svg>`,
  bike: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h3"/></svg>`,
  swim: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18c1.5 1.5 3.5 1.5 5 0 1.5-1.5 3.5-1.5 5 0 1.5 1.5 3.5 1.5 5 0 1.5-1.5 3.5-1.5 5 0"/><path d="M2 14c1.5 1.5 3.5 1.5 5 0 1.5-1.5 3.5-1.5 5 0 1.5 1.5 3.5 1.5 5 0 1.5-1.5 3.5-1.5 5 0"/><circle cx="17" cy="6" r="2"/><path d="m7 10 5-2 3 2 3-1"/></svg>`,
  meditate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v6"/><path d="M7 11l5 2.5 5-2.5"/><path d="M6 19l6-2 6 2"/><path d="M9 14.5l-3 4.5"/><path d="M15 14.5l3 4.5"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,

  // 2. Nutrisi & Istirahat (Health)
  water: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2"/><path d="M7 14v8"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/></svg>`,
  nojunk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#EF4444" stroke-width="2"/></svg>`,
  smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,

  // 3. Produktivitas & Kerja (Work)
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,

  // 4. Gaya Hidup & Rumah (Life)
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13a11 11 0 0 1 16-9 7 7 0 0 1-7 16Z"/><path d="M4 20l7-7"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  phone_off: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5c0-.6.2-1.1.5-1.5"/><path d="M16.5 5H17a2 2 0 0 1 2 2v8"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  calm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,

  // UI Support
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  play: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  plus: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  cloudCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="8 14 11 17 16 12"/></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
};

const ICON_CATALOG = [
  // Fitness
  { key: "dumbbell", label: "Angkat Beban", cat: "fitness" },
  { key: "run", label: "Lari Pagi/Sore", cat: "fitness" },
  { key: "walk", label: "Jalan Kaki", cat: "fitness" },
  { key: "bike", label: "Bersepeda", cat: "fitness" },
  { key: "swim", label: "Berenang", cat: "fitness" },
  { key: "meditate", label: "Yoga / Meditasi", cat: "fitness" },
  { key: "heart", label: "Kardio Sehat", cat: "fitness" },
  { key: "flame", label: "Bakar Kalori", cat: "fitness" },
  { key: "pill", label: "Vitamin / Suplemen", cat: "fitness" },

  // Health
  { key: "water", label: "Minum Air Putih", cat: "health" },
  { key: "coffee", label: "Kopi / Teh", cat: "health" },
  { key: "apple", label: "Makan Buah/Sehat", cat: "health" },
  { key: "utensils", label: "Makan Teratur", cat: "health" },
  { key: "sun", label: "Bangun Pagi", cat: "health" },
  { key: "moon", label: "Tidur 8 Jam", cat: "health" },
  { key: "battery", label: "Istirahat Cukup", cat: "health" },
  { key: "nojunk", label: "Stop Junkfood", cat: "health" },
  { key: "smile", label: "Mood Bahagia", cat: "health" },

  // Work
  { key: "book", label: "Membaca Buku", cat: "work" },
  { key: "code", label: "Koding / IT", cat: "work" },
  { key: "pencil", label: "Menulis Jurnal", cat: "work" },
  { key: "laptop", label: "Bekerja / Skripsi", cat: "work" },
  { key: "clock", label: "Manajemen Waktu", cat: "work" },
  { key: "target", label: "Fokus Target", cat: "work" },
  { key: "wallet", label: "Menabung Finansial", cat: "work" },
  { key: "brain", label: "Asah Otak / Belajar", cat: "work" },
  { key: "briefcase", label: "Tugas Kantor", cat: "work" },

  // Life
  { key: "sparkles", label: "Bereskan Kamar", cat: "life" },
  { key: "leaf", label: "Siram Tanaman", cat: "life" },
  { key: "music", label: "Latihan Musik", cat: "life" },
  { key: "palette", label: "Melukis / Seni", cat: "life" },
  { key: "phone_off", label: "Detoks Medsos", cat: "life" },
  { key: "chat", label: "Kabar Keluarga", cat: "life" },
  { key: "camera", label: "Foto Kenangan", cat: "life" },
  { key: "compass", label: "Petualangan", cat: "life" },
  { key: "star", label: "Prestasi Spesial", cat: "life" }
];

// DEFAULT ENDPOINT GOOGLE APPS SCRIPT WEB APP (AUTO-CONNECT)
const DEFAULT_GAS_URL = "https://script.google.com/macros/s/AKfycbwrH5ou-7ZP5xzPNBT3fm_1QUo0YuM0AzGbwTko_Ggt73FgxQFx3c_dmwmDrc1i_iKPVQ/exec";

const App = {
  habits: [],
  journalList: [],
  history: {},
  gasEndpoint: "",
  currentUser: null, // { username, fullName, pin, loggedInAt }
  activeTimers: {},
  calendarViewDate: new Date(),
  formCalendarDate: new Date(),
  selectedDateKey: "",
  calendarModalSelectedDayKey: "",
  reminderInterval: null,
  audioCtx: null,
  longPressTimer: null,
  longPressTriggered: false,
  currentQuickCardId: null,
  debouncePushTimer: null,

  debouncedPushToGoogleSheets(delay = 1000) {
    if (!this.gasEndpoint) return;
    if (this.debouncePushTimer) {
      clearTimeout(this.debouncePushTimer);
    }
    this.updateSyncStatusLabel("Menyimpan perubahan ke Cloud...", true);
    this.debouncePushTimer = setTimeout(() => {
      this.pushToGoogleSheets(false);
    }, delay);
  },

  init() {
    this.showSplashScreen();
    this.loadData();
    this.selectedDateKey = this.getTodayKey();
    this.calendarModalSelectedDayKey = this.getTodayKey();
    this.updateUserProfileUI();
    this.renderHeaderAndLiveCalendar();
    this.populateIconPicker();
    this.populateMoodPicker();
    this.renderBentoCards();
    this.updateProgressRing();
    this.initConfetti();
    this.initReminderEngine();

    // Auto-connect ke Google Sheets terpusat & sambut user
    if (this.currentUser) {
      if (this.gasEndpoint) {
        setTimeout(() => this.pullFromGoogleSheets(false), 900);
      }
    } else {
      // Jika belum masuk akun pada instalasi baru, tampilkan dialog login setelah splash screen
      setTimeout(() => this.openAuthModal(), 1100);
    }
  },

  formatDateKey(date) {
    if (!date) return "";
    if (typeof date === "string" && !date.includes("T")) return date;
    const dObj = (date instanceof Date) ? date : new Date(date);
    const y = dObj.getFullYear();
    const m = String(dObj.getMonth() + 1).padStart(2, "0");
    const d = String(dObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  },

  getTodayKey() {
    return this.formatDateKey(new Date());
  },

  getHabitsForDate(dateKey) {
    if (!dateKey) dateKey = this.getTodayKey();
    return this.habits.filter(h => {
      const sched = h.scheduleType || "daily";
      if (sched === "daily") return true;
      if (sched === "specific") {
        return h.targetDate === dateKey;
      }
      return true;
    });
  },

  selectDate(dateInput) {
    let key = dateInput;
    if (dateInput instanceof Date) {
      key = this.formatDateKey(dateInput);
    } else if (typeof dateInput === "string" && dateInput.includes("T")) {
      key = this.formatDateKey(new Date(dateInput));
    }
    this.selectedDateKey = key;
    this.calendarModalSelectedDayKey = key;
    this.renderHeaderAndLiveCalendar();
    this.renderBentoCards();
    this.updateProgressRing();
  },

  selectToday() {
    this.selectDate(this.getTodayKey());
    this.showToast("Menampilkan target hari ini.", "info");
  },

  handleDayPillClick(dateInput) {
    this.selectDate(dateInput);
  },

  renderHeaderAndLiveCalendar() {
    const now = new Date();
    const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthsIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const isViewingToday = (this.selectedDateKey === this.getTodayKey());

    // Banner filter tanggal aktif
    const bannerEl = document.getElementById("active-date-view-banner");
    const bannerNameEl = document.getElementById("active-date-banner-name");
    if (bannerEl) {
      if (isViewingToday) {
        bannerEl.style.display = "none";
      } else {
        bannerEl.style.display = "flex";
        if (bannerNameEl) {
          const parts = this.selectedDateKey.split("-").map(Number);
          if (parts.length === 3) {
            const selDate = new Date(parts[0], parts[1] - 1, parts[2]);
            bannerNameEl.textContent = `${daysIndo[selDate.getDay()]}, ${parts[2]} ${monthsIndo[parts[1] - 1]} ${parts[0]}`;
          } else {
            bannerNameEl.textContent = this.selectedDateKey;
          }
        }
      }
    }

    // Header Live Date
    const liveDateEl = document.getElementById("greeting-live-date");
    if (liveDateEl) {
      liveDateEl.textContent = `${daysIndo[now.getDay()].toUpperCase()}, ${now.getDate()} ${monthsIndo[now.getMonth()].toUpperCase()}`;
    }

    // Dynamic Greeting by Hour
    const hour = now.getHours();
    const headingEl = document.getElementById("greeting-time-text");
    const quoteEl = document.getElementById("greeting-motivational-quote");

    if (headingEl) {
      const userGreetingName = this.currentUser ? (" " + (this.currentUser.fullName || this.currentUser.username).split(" ")[0]) : "";

      if (!isViewingToday) {
        headingEl.textContent = "Jadwal Terpilih";
        if (quoteEl) quoteEl.textContent = "Fokus menyelesaikan target pada tanggal yang Anda tentukan.";
      } else {
        if (hour >= 5 && hour < 12) {
          headingEl.textContent = `Selamat Pagi${userGreetingName}`;
          if (quoteEl) quoteEl.textContent = "Sinar matahari pagi meningkatkan produksi serotonin dan fokus.";
        } else if (hour >= 12 && hour < 16) {
          headingEl.textContent = `Selamat Siang${userGreetingName}`;
          if (quoteEl) quoteEl.textContent = "Tetap terhidrasi dan pertahankan momentum ritme harimu.";
        } else if (hour >= 16 && hour < 19) {
          headingEl.textContent = `Selamat Sore${userGreetingName}`;
          if (quoteEl) quoteEl.textContent = "Hampir selesai! Sempurnakan habitmu sebelum petang.";
        } else {
          headingEl.textContent = `Selamat Malam${userGreetingName}`;
          if (quoteEl) quoteEl.textContent = "Waktunya refleksi diri dan istirahat berkualitas.";
        }
      }
    }

    // Render Weekly Streak Bar (M T W T F S S) dengan angka tanggal
    const weeklyContainer = document.getElementById("weekly-days-container");
    if (!weeklyContainer) return;

    // Basis awal pekan: hitung Senin dari tanggal yang sedang dilihat atau hari ini
    let baseDate = now;
    if (this.selectedDateKey) {
      const parts = this.selectedDateKey.split("-").map(Number);
      if (parts.length === 3) baseDate = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    const currentDay = baseDate.getDay(); // 0 is Sunday, 1 is Monday...
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const mondayDate = new Date(baseDate);
    mondayDate.setDate(baseDate.getDate() + mondayOffset);

    const weekLetters = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
    let weekHtml = "";

    for (let i = 0; i < 7; i++) {
      const d = new Date(mondayDate);
      d.setDate(mondayDate.getDate() + i);
      const dayKey = this.formatDateKey(d);
      const isToday = (dayKey === this.getTodayKey());
      const isSelected = (dayKey === this.selectedDateKey);

      // Hitung apakah seluruh habit hari ini tuntas
      const dayHabits = this.getHabitsForDate(dayKey);
      let isCompleted = false;
      if (dayHabits.length > 0) {
        isCompleted = dayHabits.every(h => h.completed);
      } else {
        const rec = this.history[dayKey];
        isCompleted = Boolean(rec && rec.percentage === 100 && rec.totalHabits > 0);
      }

      weekHtml += `
        <div class="day-column" onclick="App.handleDayPillClick('${d.toISOString()}')" title="${daysIndo[d.getDay()]}, ${d.getDate()} ${monthsIndo[d.getMonth()]}">
          <span class="day-letter" style="${isSelected ? 'color:#FDE047; font-weight:800;' : ''}">${weekLetters[i]}</span>
          <span class="day-num" style="${isSelected ? 'color:#FDE047;' : ''}">${d.getDate()}</span>
          <div class="day-status-pill ${isCompleted ? 'completed' : ''} ${isToday ? 'active-today' : ''} ${isSelected ? 'selected-view-day' : ''}">
            ${isCompleted ? SVG_ICONS.check : ''}
          </div>
        </div>
      `;
    }
    weeklyContainer.innerHTML = weekHtml;
  },

  handleDayPillClick(dateIso) {
    const d = new Date(dateIso);
    this.selectDate(d);
  },

  // ==========================================================
  // 2. DATA LAYER (OFFLINE-FIRST + GOOGLE SHEETS SYNC)
  // ==========================================================
  loadData() {
    // 1. Muat profil user saat ini
    const savedUser = localStorage.getItem("minimal_todo_user");
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (e) {
        this.currentUser = null;
      }
    }

    // 2. Muat endpoint Google Apps Script (Default URL tertanam otomatis)
    const savedGasUrl = localStorage.getItem("minimal_todo_gas_url");
    this.gasEndpoint = (savedGasUrl && savedGasUrl.trim()) ? savedGasUrl.trim() : DEFAULT_GAS_URL;

    // 3. Muat habits dengan perlindungan data lama (Preservasi Data)
    const legacyHabits = localStorage.getItem("minimal_todo_habits_clean");
    let userHabitsKey = this.currentUser ? `minimal_todo_habits_${this.currentUser.username}` : "minimal_todo_habits_clean";
    let savedHabits = localStorage.getItem(userHabitsKey);

    // Jika user baru login tapi data user belum pernah tersimpan, wariskan data lama yang sudah diinput agar TIDAK HILANG!
    if (!savedHabits && legacyHabits) {
      savedHabits = legacyHabits;
      if (this.currentUser) {
        localStorage.setItem(userHabitsKey, legacyHabits);
      }
    }

    if (savedHabits) {
      try {
        this.habits = JSON.parse(savedHabits);
      } catch (e) {
        this.habits = [];
      }
    } else {
      this.habits = [];
    }

    // 4. Muat catatan syukur / jurnal
    const legacyJournal = localStorage.getItem("minimal_todo_journal_clean");
    let userJournalKey = this.currentUser ? `minimal_todo_journal_${this.currentUser.username}` : "minimal_todo_journal_clean";
    let savedJournal = localStorage.getItem(userJournalKey);

    if (!savedJournal && legacyJournal) {
      savedJournal = legacyJournal;
      if (this.currentUser) {
        localStorage.setItem(userJournalKey, legacyJournal);
      }
    }

    if (savedJournal) {
      try {
        this.journalList = JSON.parse(savedJournal);
      } catch (e) {
        this.journalList = [];
      }
    } else {
      this.journalList = [];
    }

    // 5. Muat history streak
    const legacyHistory = localStorage.getItem("minimal_todo_history_clean");
    let userHistKey = this.currentUser ? `minimal_todo_history_${this.currentUser.username}` : "minimal_todo_history_clean";
    let savedHistory = localStorage.getItem(userHistKey);

    if (!savedHistory && legacyHistory) {
      savedHistory = legacyHistory;
      if (this.currentUser) {
        localStorage.setItem(userHistKey, legacyHistory);
      }
    }

    if (savedHistory) {
      try {
        this.history = JSON.parse(savedHistory);
      } catch (e) {
        this.history = {};
      }
    } else {
      this.history = {};
    }
  },

  saveLocal() {
    const key = this.currentUser ? `minimal_todo_habits_${this.currentUser.username}` : "minimal_todo_habits_clean";
    localStorage.setItem(key, JSON.stringify(this.habits));
    // Cadangan aman agar tidak pernah hilang
    localStorage.setItem("minimal_todo_habits_clean", JSON.stringify(this.habits));
  },

  saveJournalLocal() {
    const key = this.currentUser ? `minimal_todo_journal_${this.currentUser.username}` : "minimal_todo_journal_clean";
    localStorage.setItem(key, JSON.stringify(this.journalList));
    localStorage.setItem("minimal_todo_journal_clean", JSON.stringify(this.journalList));
  },

  saveHistoryLocal() {
    const key = this.currentUser ? `minimal_todo_history_${this.currentUser.username}` : "minimal_todo_history_clean";
    localStorage.setItem(key, JSON.stringify(this.history));
    localStorage.setItem("minimal_todo_history_clean", JSON.stringify(this.history));
  },

  // ==========================================================
  // 3. RENDER BENTO GRID CARDS (4 TIPE KARTU + LONG PRESS)
  // ==========================================================
  renderBentoCards() {
    const container = document.getElementById("bento-grid-container");
    if (!container) return;

    let html = "";
    const isToday = (this.selectedDateKey === this.getTodayKey());

    // 1. Render Kartu Jurnal Mikro Paling Atas (Banner) jika melihat hari ini
    if (isToday) {
      const todayJournal = this.journalList[0];
      if (todayJournal) {
        html += `
          <div class="bento-card card-journal-banner" onclick="App.openJournalModal()">
            <div class="journal-banner-header">
              <span class="journal-banner-label">Refleksi Hari Ini</span>
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="color:#FDE047;">${SVG_ICONS[todayJournal.moodKey] || SVG_ICONS.smile}</span>
                <span style="font-size:10px; color:#9CA3AF;">${todayJournal.moodLabel || 'Bersyukur'}</span>
              </div>
            </div>
            <p class="journal-banner-text">"${todayJournal.reflectionText}"</p>
          </div>
        `;
      }
    }

    // Ambil hanya habit yang relevan dengan tanggal yang sedang aktif
    const visibleHabits = this.getHabitsForDate(this.selectedDateKey);

    // 2. Render Kartu-Kartu Bento atau Empty State
    if (visibleHabits.length === 0) {
      html += `
        <div class="empty-habits-container" onclick="App.openAddModal()" title="Mulai Tambah Target">
          <div class="empty-icon-wrap">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FDE047" stroke-width="2.2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
          <h3 class="empty-title">${isToday ? "Belum Ada Target Hari Ini" : "Tidak Ada Target di Tanggal Ini"}</h3>
          <p class="empty-desc">${isToday ? "Ruang fokusmu masih bersih. Ketuk di sini atau tombol '+' untuk membuat kartu bento pertamamu!" : "Belum ada jadwal khusus yang dicatat di tanggal ini. Ketuk untuk membuat target baru!"}</p>
          <button type="button" class="btn-empty-create" onclick="event.stopPropagation(); App.openAddModal()">+ Buat Target</button>
        </div>
      `;
    } else {
      visibleHabits.forEach(habit => {
        const iconSvg = SVG_ICONS[habit.iconSvgKey] || SVG_ICONS.sun;

        const scheduleBadge = (habit.scheduleType === 'specific' && habit.targetDate)
          ? `<span class="card-badge badge-specific" title="Jadwal Tanggal ${this.formatShortDate(habit.targetDate)}"><span class="badge-icon">${SVG_ICONS.calendar}</span><span>${this.formatShortDate(habit.targetDate)}</span></span>`
          : `<span class="card-badge badge-daily" title="Rutin Setiap Hari"><span class="badge-icon">${SVG_ICONS.repeat}</span><span>Harian</span></span>`;

        html += `
        <div class="bento-card ${habit.theme} ${habit.completed ? 'is-completed' : ''}" 
             id="card-${habit.id}"
             onpointerdown="App.handlePointerDown(event, '${habit.id}')"
             onpointerup="App.handlePointerUp(event, '${habit.id}')"
             onpointerleave="App.handlePointerCancel()">
          
          <div class="card-header-icon">
            <span class="icon-visual-svg">${iconSvg}</span>
            <div class="card-check-badge ${habit.completed ? 'checked' : ''}" 
                 onpointerdown="event.stopPropagation()"
                 onpointerup="event.stopPropagation()"
                 onclick="event.stopPropagation(); App.toggleChecklist('${habit.id}')"
                 title="${habit.completed ? 'Selesai' : 'Tandai Selesai'}">
              ${habit.completed ? SVG_ICONS.check : ''}
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">${habit.title}</h3>
            ${habit.subtitle ? `<p class="card-subtitle">${habit.subtitle}</p>` : ''}
            
            ${this.renderCardSpecificBody(habit)}
          </div>

          <div class="card-footer">
            <div class="card-footer-tags">
              ${scheduleBadge}
              ${habit.reminderEnabled && habit.reminderTime ? `
              <span class="card-badge badge-reminder" title="Alarm ${habit.reminderTime}">
                <span class="badge-icon">${SVG_ICONS.bell}</span>
                <span>${habit.reminderTime}</span>
              </span>` : ''}
            </div>
            <span class="card-type-tag">${habit.cardType}</span>
          </div>
        </div>
      `;
      });

      // 3. Slot Tambah Kartu Bento Baru (+)
      html += `
      <div class="bento-card card-add-new" onclick="App.openAddModal()" title="Tambah Kartu Bento">
        <span class="plus-symbol">+</span>
      </div>
    `;
    }

    container.innerHTML = html;
    this.updateProgressRing();
  },

  renderCardSpecificBody(habit) {
    // A. Progressive Goal (Stepper & Bar)
    if (habit.cardType === "progressive") {
      const pct = Math.min(100, Math.round((habit.currentProgress / habit.targetGoal) * 100));
      return `
        <div class="progressive-progress-wrap" 
             onpointerdown="event.stopPropagation()" 
             onpointerup="event.stopPropagation()" 
             onclick="event.stopPropagation()">
          <div class="progressive-bar-track">
            <div class="progressive-bar-fill" style="width: ${pct}%;"></div>
          </div>
          <div class="progressive-actions-row">
            <button type="button" class="stepper-btn" onclick="event.stopPropagation(); App.stepProgress('${habit.id}', -1)" title="Kurang">${SVG_ICONS.minus}</button>
            <span class="stepper-status-label">${habit.currentProgress} / ${habit.targetGoal} ${habit.unit}</span>
            <button type="button" class="stepper-btn" onclick="event.stopPropagation(); App.stepProgress('${habit.id}', 1)" title="Tambah">${SVG_ICONS.plus}</button>
          </div>
        </div>
      `;
    }

    // B. Bento Focus Timer (Bisa diatur sesuka hati & direset)
    if (habit.cardType === "focus") {
      const timer = this.activeTimers[habit.id];
      const isRunning = timer && timer.interval;
      const timeLeft = timer ? timer.remainingSec : habit.targetGoal * 60;
      const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const secs = String(timeLeft % 60).padStart(2, '0');

      return `
        <div class="focus-timer-content" onclick="event.stopPropagation()">
          <div class="timer-countdown-display" id="timer-display-${habit.id}">${mins}:${secs}</div>
          <div style="font-size:10px; opacity:0.8; margin-top:-2px; margin-bottom:6px;">Target: ${habit.targetGoal} Menit</div>
          <div style="display:flex; align-items:center; justify-content:center; gap:6px;">
            <button class="btn-timer-toggle" onclick="App.toggleFocusTimer('${habit.id}')">
              ${isRunning ? SVG_ICONS.pause : SVG_ICONS.play}
              <span>${isRunning ? 'Jeda' : 'Mulai Sesi'}</span>
            </button>
            <button class="btn-timer-toggle" onclick="App.resetFocusTimer('${habit.id}')" title="Reset Waktu" style="padding:6px 10px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
          </div>
        </div>
      `;
    }

    return "";
  },

  // ==========================================================
  // 4. LONG PRESS & GESTURE SYSTEM (ANTI-ACCIDENTAL CLICK)
  // ==========================================================
  handlePointerDown(e, id) {
    this.longPressTriggered = false;
    this.longPressTimer = setTimeout(() => {
      this.longPressTriggered = true;
      this.openQuickActionSheet(id);
    }, 500); // 500ms press & hold
  },

  handlePointerUp(e, id) {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
    }
    // Jika bukan long-press, perlakukan sebagai klik biasa
    if (!this.longPressTriggered) {
      const habit = this.habits.find(h => h.id === id);
      if (habit && habit.cardType === "checklist") {
        this.toggleChecklist(id);
      }
    }
  },

  handlePointerCancel() {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
    }
  },

  openQuickActionSheet(id) {
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;
    this.currentQuickCardId = id;

    const preview = document.getElementById("quick-action-preview");
    if (preview) {
      preview.textContent = `${habit.title} (${habit.cardType.toUpperCase()})`;
    }
    const adjustBtn = document.getElementById("btn-quick-adjust-progress");
    if (adjustBtn) {
      adjustBtn.style.display = habit.cardType === "progressive" ? "flex" : "none";
    }
    document.getElementById("modal-quick-action").classList.add("open");
  },

  promptSetQuickCardProgress() {
    const id = this.currentQuickCardId;
    this.closeModal("modal-quick-action");
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    const currentVal = habit.currentProgress || 0;
    const inputStr = prompt(`Masukkan angka progres baru untuk "${habit.title}" (Target: ${habit.targetGoal} ${habit.unit}):`, currentVal);
    if (inputStr === null) return;

    const parsed = parseInt(inputStr, 10);
    if (isNaN(parsed) || parsed < 0) {
      this.showToast("Angka progres tidak valid.", "warning");
      return;
    }

    habit.currentProgress = parsed;
    habit.updatedAt = Date.now();
    if (habit.currentProgress >= habit.targetGoal && !habit.completed) {
      habit.completed = true;
      habit.streak = (habit.streak || 0) + 1;
      this.playChime(true);
      this.showToast(`Target "${habit.title}" tercapai!`, "success");
    } else if (habit.currentProgress < habit.targetGoal && habit.completed) {
      habit.completed = false;
      habit.streak = Math.max(0, (habit.streak || 1) - 1);
    }

    this.saveLocal();
    this.renderBentoCards();
    this.checkAllCompletedCelebration();
    this.showToast(`Progres "${habit.title}" diubah menjadi ${habit.currentProgress} ${habit.unit}.`, "success");
    this.pushToGoogleSheets(false);
  },

  adjustCurrentProgressInput(delta) {
    const input = document.getElementById("habit-input-current-progress");
    if (!input) return;
    let val = (Number(input.value) || 0) + delta;
    if (val < 0) val = 0;
    input.value = val;
  },

  editCurrentQuickCard() {
    const id = this.currentQuickCardId;
    this.closeModal("modal-quick-action");
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    // Isi data modal edit
    document.getElementById("modal-habit-title-text").textContent = "Ubah Kartu Bento";
    document.getElementById("habit-edit-id").value = habit.id;
    document.getElementById("habit-input-title").value = habit.title;
    document.getElementById("habit-input-subtitle").value = habit.subtitle || "";
    
    // Schedule Type
    this.selectScheduleType(habit.scheduleType || "daily");
    if (habit.scheduleType === "specific" && habit.targetDate) {
      document.getElementById("habit-input-specific-date").value = habit.targetDate;
      const parts = habit.targetDate.split("-").map(Number);
      if (parts.length === 3) {
        this.formCalendarDate = new Date(parts[0], parts[1] - 1, parts[2]);
      }
      this.onSpecificDateChange(habit.targetDate);
    } else {
      this.formCalendarDate = new Date();
    }
    this.renderFormMiniCalendar();

    // Reminder & Notification
    const isRemind = !!habit.reminderEnabled;
    const reminderToggle = document.getElementById("habit-reminder-toggle");
    if (reminderToggle) reminderToggle.checked = isRemind;
    this.toggleReminderSection(isRemind);
    this.setReminderTime(habit.reminderTime || "20:30");

    this.selectCardType(habit.cardType);

    if (habit.cardType === "progressive") {
      const curProgInput = document.getElementById("habit-input-current-progress");
      if (curProgInput) curProgInput.value = habit.currentProgress || 0;
      document.getElementById("habit-input-target").value = habit.targetGoal;
      document.getElementById("habit-input-unit").value = habit.unit;
    } else if (habit.cardType === "focus") {
      this.selectTimerDuration(habit.targetGoal || 25);
    }

    // Color Theme Radio
    const themeColorMap = {
      "theme-yellow": "#FDE047",
      "theme-terracotta": "#7C2D12",
      "theme-softblue": "#93C5FD",
      "theme-emerald": "#059669",
      "theme-purple": "#8B5CF6"
    };
    const targetHex = themeColorMap[habit.theme] || "#FDE047";
    const radio = document.querySelector(`input[name="cardColor"][value="${targetHex}"]`);
    if (radio) radio.checked = true;
    this.updateColorLabel(targetHex);

    this.filterIconCategory("all", document.querySelector('.icon-cat-btn[data-cat="all"]'));
    this.selectIconKey(habit.iconSvgKey || "sun");
    document.getElementById("modal-add-habit").classList.add("open");
  },

  resetCurrentQuickCardProgress() {
    const id = this.currentQuickCardId;
    this.closeModal("modal-quick-action");
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    habit.completed = false;
    habit.currentProgress = 0;
    habit.updatedAt = Date.now();
    this.saveLocal();
    this.renderBentoCards();
    this.showToast(`Progres "${habit.title}" berhasil direset.`, "info");
    this.pushToGoogleSheets(false);
  },

  promptDeleteCurrentCard() {
    const id = this.currentQuickCardId;
    this.closeModal("modal-quick-action");
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    this.showConfirm(
      "Hapus Kartu Bento?",
      `Apakah Anda yakin ingin menghapus "${habit.title}" dari rutinitas harian?`,
      () => {
        this.habits = this.habits.filter(h => h.id !== id);
        this.saveLocal();
        this.renderBentoCards();
        this.showToast("Kartu berhasil dihapus.", "success");
        this.pushToGoogleSheets(false);
      }
    );
  },

  // ==========================================================
  // 5. INTERAKSI HABIT: CHECKLIST, STEPPER & FOCUS TIMER
  // ==========================================================
  toggleChecklist(id) {
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    habit.completed = !habit.completed;
    habit.updatedAt = Date.now();
    if (habit.completed) {
      habit.streak = (habit.streak || 0) + 1;
      this.playChime(true);
    } else {
      habit.streak = Math.max(0, (habit.streak || 1) - 1);
      this.playChime(false);
    }

    this.saveLocal();
    this.renderBentoCards();
    this.checkAllCompletedCelebration();
    this.debouncedPushToGoogleSheets();
  },

  stepProgress(id, amount) {
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    const stepSize = habit.targetGoal >= 1000 ? 250 : 1;
    habit.currentProgress = Math.max(0, habit.currentProgress + (amount * stepSize));
    habit.updatedAt = Date.now();
    
    // Otomatis tandai selesai jika mencapai target
    if (habit.currentProgress >= habit.targetGoal && !habit.completed) {
      habit.completed = true;
      habit.streak = (habit.streak || 0) + 1;
      this.playChime(true);
      this.showToast(`Target "${habit.title}" tercapai!`, "success");
    } else if (habit.currentProgress < habit.targetGoal && habit.completed) {
      habit.completed = false;
      habit.streak = Math.max(0, (habit.streak || 1) - 1);
    }

    this.saveLocal();
    this.renderBentoCards();
    this.checkAllCompletedCelebration();
    this.debouncedPushToGoogleSheets();
  },

  toggleFocusTimer(id) {
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;

    if (!this.activeTimers[id]) {
      this.activeTimers[id] = {
        remainingSec: habit.targetGoal * 60,
        interval: null
      };
    }

    const t = this.activeTimers[id];

    if (t.interval) {
      // Jeda
      clearInterval(t.interval);
      t.interval = null;
      this.renderBentoCards();
      this.showToast("Sesi fokus dijeda.", "info");
    } else {
      // Mulai
      this.showToast("Sesi fokus dimulai. Tetap rileks!", "success");
      t.interval = setInterval(() => {
        t.remainingSec--;
        const displayEl = document.getElementById(`timer-display-${id}`);
        if (displayEl) {
          const m = String(Math.floor(t.remainingSec / 60)).padStart(2, '0');
          const s = String(t.remainingSec % 60).padStart(2, '0');
          displayEl.textContent = `${m}:${s}`;
        }

        if (t.remainingSec <= 0) {
          clearInterval(t.interval);
          t.interval = null;
          habit.completed = true;
          habit.streak = (habit.streak || 0) + 1;
          habit.updatedAt = Date.now();
          this.playVictoryChord();
          this.showToast(`Sesi Fokus Selesai: "${habit.title}" tuntas!`, "success");
          this.saveLocal();
          this.renderBentoCards();
          this.checkAllCompletedCelebration();
          this.pushToGoogleSheets(false);
        }
      }, 1000);
      this.renderBentoCards();
    }
  },

  // ==========================================================
  // 6. PROGRESS RING & CELEBRATION CONFETTI
  // ==========================================================
  updateProgressRing() {
    const labelEl = document.getElementById("ring-percentage-label");
    const ringEl = document.getElementById("ring-fill-circle");
    const disciplineEl = document.getElementById("discipline-score-text");

    const currentHabits = this.getHabitsForDate(this.selectedDateKey);

    if (currentHabits.length === 0) {
      if (labelEl) labelEl.textContent = "0%";
      if (ringEl) ringEl.style.strokeDashoffset = 144.51;
      if (disciplineEl) disciplineEl.textContent = "0% Disiplin";
      return;
    }

    const completedCount = currentHabits.filter(h => h.completed).length;
    const pct = Math.round((completedCount / currentHabits.length) * 100);

    if (labelEl) labelEl.textContent = `${pct}%`;
    if (disciplineEl) disciplineEl.textContent = `${pct}% Disiplin`;

    if (ringEl) {
      // Circumference of r=23 is 2 * PI * 23 = 144.51
      const circumference = 144.51;
      const offset = circumference - (pct / 100) * circumference;
      ringEl.style.strokeDashoffset = offset;
    }

    // Catat riwayat ke state & storage jika sedang melihat hari ini
    if (this.selectedDateKey === this.getTodayKey()) {
      const todayKey = this.getTodayKey();
      this.history[todayKey] = {
        date: todayKey,
        completedCount: completedCount,
        totalHabits: currentHabits.length,
        percentage: pct,
        updatedAt: new Date().toISOString()
      };
      this.saveHistoryLocal();
    }
  },

  checkAllCompletedCelebration() {
    const allDone = this.habits.length > 0 && this.habits.every(h => h.completed);
    if (allDone) {
      this.playVictoryChord();
      this.triggerConfetti();
      this.showToast("Luar biasa! Seluruh target hari ini 100% tuntas!", "success");
    }
  },

  // ==========================================================
  // 7. BESPOKE AUDIO SYNTHESIZER (WEB AUDIO API MURNI)
  // ==========================================================
  getAudioContext() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  playChime(isDone) {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = "sine";
      if (isDone) {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else {
        osc.frequency.setValueAtTime(329.63, now); // E4
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
      osc.connect(gain);
      gain.connect(ctx.destination);
    } catch (e) {}
  },

  playVictoryChord() {
    try {
      const ctx = this.getAudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.16, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.5);
      });
    } catch (e) {}
  },

  // ==========================================================
  // 8. CANVAS CONFETTI PARTICLE SYSTEM
  // ==========================================================
  initConfetti() {
    this.confettiCanvas = document.getElementById("confetti-canvas");
    if (!this.confettiCanvas) return;
    this.confettiCtx = this.confettiCanvas.getContext("2d");
    this.resizeConfetti();
    window.addEventListener("resize", () => this.resizeConfetti());
  },

  resizeConfetti() {
    if (!this.confettiCanvas) return;
    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;
  },

  triggerConfetti() {
    if (!this.confettiCanvas) return;
    const particles = [];
    const colors = ["#FDE047", "#22C55E", "#3B82F6", "#EC4899", "#8B5CF6", "#F97316"];
    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 50,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 8,
        alpha: 1
      });
    }

    const animate = () => {
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravitasi
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          this.confettiCtx.save();
          this.confettiCtx.globalAlpha = p.alpha;
          this.confettiCtx.translate(p.x, p.y);
          this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
          this.confettiCtx.fillStyle = p.color;
          this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          this.confettiCtx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animate);
      } else {
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      }
    };
    requestAnimationFrame(animate);
  },

  // ==========================================================
  // 9. BESPOKE TOAST & CONFIRM (ZERO BROWSER DIALOGS)
  // ==========================================================
  showToast(message, type = "info", duration = 3000) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;

    let iconSvg = SVG_ICONS.sun;
    if (type === "success") iconSvg = SVG_ICONS.check;
    if (type === "warning") iconSvg = SVG_ICONS.zap;

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-20px)";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showConfirm(title, desc, onConfirm) {
    document.getElementById("confirm-title-text").textContent = title;
    document.getElementById("confirm-desc-text").textContent = desc;
    
    const confirmBtn = document.getElementById("btn-execute-confirm");
    confirmBtn.onclick = () => {
      this.closeModal("modal-confirm");
      if (typeof onConfirm === "function") onConfirm();
    };

    document.getElementById("modal-confirm").classList.add("open");
  },

  // ==========================================================
  // 10. MODAL FORM BUILDERS & HANDLERS
  // ==========================================================
  formatShortDate(dateStr) {
    if (!dateStr) return "Hari Ini";
    const parts = dateStr.split("-").map(Number);
    if (parts.length < 3) return dateStr;
    const [y, m, d] = parts;
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
    const target = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Hari Ini";
    if (diffDays === 1) return "Besok";
    if (diffDays === 2) return "Lusa";
    return `${d} ${months[m - 1]}`;
  },

  openAddModal(presetDateKey = null) {
    document.getElementById("modal-habit-title-text").textContent = "Buat Kartu Baru";
    document.getElementById("habit-edit-id").value = "";
    document.getElementById("form-create-habit").reset();
    const curProgInput = document.getElementById("habit-input-current-progress");
    if (curProgInput) curProgInput.value = 0;
    
    // Jika ada preset tanggal atau sedang melihat tanggal selain hari ini
    const targetDateToUse = presetDateKey || (this.selectedDateKey && this.selectedDateKey !== this.getTodayKey() ? this.selectedDateKey : null);

    if (targetDateToUse) {
      this.selectScheduleType("specific");
      const parts = targetDateToUse.split("-").map(Number);
      if (parts.length === 3) {
        this.formCalendarDate = new Date(parts[0], parts[1] - 1, parts[2]);
      } else {
        this.formCalendarDate = new Date();
      }
      const dateInput = document.getElementById("habit-input-specific-date");
      if (dateInput) dateInput.value = targetDateToUse;
      this.onSpecificDateChange(targetDateToUse);
      this.renderFormMiniCalendar();
    } else {
      this.selectScheduleType("daily");
      this.formCalendarDate = new Date();
      this.setTargetDateOffset(0, document.getElementById("chip-date-today"));
    }

    this.selectCardType("checklist");
    this.selectTimerDuration(25);
    
    // Reset Reminder Toggle
    const reminderToggle = document.getElementById("habit-reminder-toggle");
    if (reminderToggle) reminderToggle.checked = false;
    this.toggleReminderSection(false);
    this.setReminderTime("20:30");

    this.filterIconCategory("all", document.querySelector('.icon-cat-btn[data-cat="all"]'));
    this.selectIconKey("sun");
    this.updateColorLabel("#FDE047");
    document.getElementById("modal-add-habit").classList.add("open");
  },

  selectScheduleType(type) {
    document.getElementById("selected-schedule-type").value = type;
    const btnDaily = document.getElementById("sched-btn-daily");
    const btnSpecific = document.getElementById("sched-btn-specific");
    if (btnDaily) btnDaily.classList.toggle("active", type === "daily");
    if (btnSpecific) btnSpecific.classList.toggle("active", type === "specific");

    const box = document.getElementById("specific-date-box");
    if (box) {
      box.style.display = (type === "specific") ? "flex" : "none";
    }

    if (type === "specific") {
      const dateInput = document.getElementById("habit-input-specific-date");
      if (dateInput && !dateInput.value) {
        dateInput.value = this.getTodayKey();
      }
      this.onSpecificDateChange(dateInput.value);
      this.renderFormMiniCalendar();
    }
  },

  setTargetDateOffset(days, btnEl) {
    document.querySelectorAll(".btn-date-chip").forEach(c => c.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    const d = new Date();
    d.setDate(d.getDate() + days);
    const key = this.formatDateKey(d);
    const dateInput = document.getElementById("habit-input-specific-date");
    if (dateInput) dateInput.value = key;
    this.formCalendarDate = new Date(d);
    this.renderFormMiniCalendar();
  },

  onSpecificDateChange(val) {
    const today = this.getTodayKey();
    const dTom = new Date(); dTom.setDate(dTom.getDate() + 1); const tomKey = this.formatDateKey(dTom);
    const dDay = new Date(); dDay.setDate(dDay.getDate() + 2); const dayKey = this.formatDateKey(dDay);
    const dNw = new Date(); dNw.setDate(dNw.getDate() + 7); const nwKey = this.formatDateKey(dNw);

    const chipToday = document.getElementById("chip-date-today");
    const chipTom = document.getElementById("chip-date-tomorrow");
    const chipDayAfter = document.getElementById("chip-date-dayafter");
    const chipNextWeek = document.getElementById("chip-date-nextweek");

    if (chipToday) chipToday.classList.toggle("active", val === today);
    if (chipTom) chipTom.classList.toggle("active", val === tomKey);
    if (chipDayAfter) chipDayAfter.classList.toggle("active", val === dayKey);
    if (chipNextWeek) chipNextWeek.classList.toggle("active", val === nwKey);
  },

  // ==========================================================
  // BENTO MINI CALENDAR (ZERO BROWSER DATEPICKER)
  // ==========================================================
  renderFormMiniCalendar() {
    const container = document.getElementById("form-cal-days-grid");
    const monthLabel = document.getElementById("form-cal-month-label");
    const selectedLabel = document.getElementById("form-cal-selected-label");
    const hiddenInput = document.getElementById("habit-input-specific-date");
    if (!container || !monthLabel) return;

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const y = this.formCalendarDate.getFullYear();
    const m = this.formCalendarDate.getMonth();
    monthLabel.textContent = `${months[m]} ${y}`;

    let selectedKey = hiddenInput && hiddenInput.value ? hiddenInput.value : this.getTodayKey();

    // Update label konfirmasi tanggal
    if (selectedLabel) {
      const parts = selectedKey.split("-").map(Number);
      if (parts.length === 3) {
        const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
        selectedLabel.textContent = `Target: ${daysIndo[dObj.getDay()]}, ${parts[2]} ${months[parts[1] - 1]} ${parts[0]}`;
      }
    }

    const firstDayIndex = new Date(y, m, 1).getDay(); // 0 is Sunday
    const totalDays = new Date(y, m + 1, 0).getDate();
    const today = new Date();

    let html = "";

    // Padding hari kosong awal bulan
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="mini-cal-day-cell empty"></div>`;
    }

    // Hari 1..totalDays
    for (let day = 1; day <= totalDays; day++) {
      const cellDate = new Date(y, m, day);
      const cellKey = this.formatDateKey(cellDate);
      const isToday = (today.getFullYear() === y && today.getMonth() === m && today.getDate() === day);
      const isSelected = (cellKey === selectedKey);

      let classes = ["mini-cal-day-cell"];
      if (isToday) classes.push("is-today");
      if (isSelected) classes.push("selected");

      html += `
        <button type="button" class="${classes.join(' ')}" onclick="App.selectFormCalendarDate(${y}, ${m}, ${day})">
          ${day}
        </button>
      `;
    }

    container.innerHTML = html;
  },

  selectFormCalendarDate(y, m, d) {
    const dateObj = new Date(y, m, d);
    const key = this.formatDateKey(dateObj);
    const hiddenInput = document.getElementById("habit-input-specific-date");
    if (hiddenInput) hiddenInput.value = key;

    this.onSpecificDateChange(key);
    this.renderFormMiniCalendar();
  },

  changeFormCalendarMonth(offset) {
    this.formCalendarDate.setMonth(this.formCalendarDate.getMonth() + offset);
    this.renderFormMiniCalendar();
  },

  // ==========================================================
  // CUSTOM REMINDER TIME (PENGATUR JAM NOTIFIKASI)
  // ==========================================================
  toggleReminderSection(enabled) {
    const drawer = document.getElementById("reminder-time-drawer");
    if (drawer) {
      drawer.style.display = enabled ? "flex" : "none";
    }
  },

  setReminderTime(timeStr) {
    const hidden = document.getElementById("habit-reminder-time");
    if (hidden) hidden.value = timeStr;

    const [h, m] = timeStr.split(":");
    const hourInput = document.getElementById("reminder-hour-input");
    const minInput = document.getElementById("reminder-minute-input");
    if (hourInput) hourInput.value = h;
    if (minInput) minInput.value = m;

    document.querySelectorAll(".btn-time-chip").forEach(b => {
      b.classList.toggle("active", b.textContent.includes(timeStr));
    });

    const pill = document.getElementById("reminder-summary-pill");
    if (pill) pill.textContent = `🔔 Aktif: Jam ${timeStr}`;
  },

  adjustReminderHour(delta) {
    const hourInput = document.getElementById("reminder-hour-input");
    const minInput = document.getElementById("reminder-minute-input");
    let h = (Number(hourInput.value) || 0) + delta;
    if (h < 0) h = 23;
    if (h > 23) h = 0;
    const hStr = String(h).padStart(2, "0");
    hourInput.value = hStr;

    const mStr = minInput.value || "00";
    this.updateReminderTimeFromInputs(hStr, mStr);
  },

  adjustReminderMinute(delta) {
    const hourInput = document.getElementById("reminder-hour-input");
    const minInput = document.getElementById("reminder-minute-input");
    let m = (Number(minInput.value) || 0) + delta;
    if (m < 0) m = 55;
    if (m > 59) m = 0;
    const mStr = String(m).padStart(2, "0");
    minInput.value = mStr;

    const hStr = hourInput.value || "08";
    this.updateReminderTimeFromInputs(hStr, mStr);
  },

  onManualHourChange(val) {
    let h = parseInt(val, 10);
    if (isNaN(h) || h < 0) h = 0;
    if (h > 23) h = 23;
    const hStr = String(h).padStart(2, "0");
    document.getElementById("reminder-hour-input").value = hStr;
    const mStr = document.getElementById("reminder-minute-input").value || "00";
    this.updateReminderTimeFromInputs(hStr, mStr);
  },

  onManualMinuteChange(val) {
    let m = parseInt(val, 10);
    if (isNaN(m) || m < 0) m = 0;
    if (m > 59) m = 59;
    const mStr = String(m).padStart(2, "0");
    document.getElementById("reminder-minute-input").value = mStr;
    const hStr = document.getElementById("reminder-hour-input").value || "08";
    this.updateReminderTimeFromInputs(hStr, mStr);
  },

  updateReminderTimeFromInputs(hStr, mStr) {
    const timeStr = `${hStr}:${mStr}`;
    document.getElementById("habit-reminder-time").value = timeStr;
    const pill = document.getElementById("reminder-summary-pill");
    if (pill) pill.textContent = `🔔 Aktif: Jam ${timeStr}`;

    document.querySelectorAll(".btn-time-chip").forEach(b => {
      b.classList.toggle("active", b.textContent.includes(timeStr));
    });
  },

  testNotificationSound() {
    const timeStr = document.getElementById("habit-reminder-time").value || "20:30";
    
    // Minta izin Web Notification jika di browser
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }

    // Jalankan Native Alert via Android Bridge
    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.sendNotification === "function") {
      try {
        window.AndroidNativeNotification.sendNotification("Tes Pengingat Jam " + timeStr, "Alarm & getar notifikasi Minimal Todo siap berbunyi!");
      } catch (e) {
        console.warn("Native bridge notification error:", e);
      }
    }

    this.playVictoryChord();
    this.showToast(`🔔 Tes Notifikasi: Alarm jam ${timeStr} berbunyi & bergetar!`, "success", 4000);
  },

  // ==========================================================
  // BACKGROUND REMINDER ENGINE (CEK JADWAL OTOMATIS)
  // ==========================================================
  initReminderEngine() {
    if (this.reminderInterval) clearInterval(this.reminderInterval);
    // Jalankan interval per 20 detik
    this.reminderInterval = setInterval(() => this.checkScheduledReminders(), 20000);
    // Cek saat pertama buka aplikasi
    setTimeout(() => this.checkScheduledReminders(), 2500);
  },

  checkScheduledReminders() {
    const now = new Date();
    const curHour = String(now.getHours()).padStart(2, "0");
    const curMin = String(now.getMinutes()).padStart(2, "0");
    const currentHHMM = `${curHour}:${curMin}`;
    const todayKey = this.getTodayKey();

    this.habits.forEach(habit => {
      if (habit.reminderEnabled && habit.reminderTime === currentHHMM && !habit.completed) {
        if (habit.lastNotifiedDate !== todayKey) {
          habit.lastNotifiedDate = todayKey;
          this.triggerNotificationAlert(habit);
          this.saveLocal();
        }
      }
    });
  },

  triggerNotificationAlert(habit) {
    const title = `Pengingat: ${habit.title}`;
    const message = habit.subtitle || `Waktunya menyelesaikan target ${habit.title}! Jaga ritme disiplinmu hari ini.`;

    // 1. Android Native Notification Bridge
    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.sendNotification === "function") {
      try {
        window.AndroidNativeNotification.sendNotification(title, message);
      } catch (e) {}
    }

    // 2. Web Notification API (PWA / Browser)
    if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification(title, {
          body: message,
          icon: "logo.svg"
        });
      } catch (e) {}
    }

    // 3. Audio & In-App Toast
    this.playVictoryChord();
    this.showToast(`🔔 ${title}: ${message}`, "info", 5000);
  },

  selectCardType(type) {
    document.querySelectorAll(".segment-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-type") === type);
    });
    document.getElementById("selected-card-type").value = type;

    const badge = document.getElementById("bento-type-badge");
    if (badge) {
      if (type === "checklist") badge.textContent = "Checklist Sederhana";
      else if (type === "progressive") badge.textContent = "Target Bertahap";
      else if (type === "focus") badge.textContent = "Timer Pomodoro";
    }

    // Toggle fields
    document.getElementById("progressive-goal-fields").style.display = (type === "progressive") ? "block" : "none";
    document.getElementById("focus-timer-fields").style.display = (type === "focus") ? "block" : "none";
  },

  adjustTargetGoalInput(delta) {
    const input = document.getElementById("habit-input-target");
    if (!input) return;
    let val = (Number(input.value) || 1) + delta;
    if (val < 1) val = 1;
    input.value = val;
  },

  updateColorLabel(hex) {
    const names = {
      "#FDE047": "Kuning Lemon",
      "#7C2D12": "Terracotta",
      "#93C5FD": "Soft Blue",
      "#059669": "Emerald Green",
      "#8B5CF6": "Lavender Violet"
    };
    const el = document.getElementById("selected-color-name");
    if (el) el.textContent = names[hex] || "Kuning Lemon";
  },

  applyTargetPreset(target, unit, iconKey) {
    const targetInput = document.getElementById("habit-input-target");
    const unitInput = document.getElementById("habit-input-unit");
    const curProgInput = document.getElementById("habit-input-current-progress");
    if (targetInput) targetInput.value = target;
    if (unitInput) unitInput.value = unit;
    if (curProgInput) curProgInput.value = 0;
    if (iconKey) this.selectIconKey(iconKey);
    this.showToast(`Preset "${target} ${unit}" terpasang!`, "info");
  },

  selectTimerDuration(mins) {
    document.querySelectorAll(".btn-duration-choice").forEach(b => {
      b.classList.toggle("active", Number(b.getAttribute("data-min")) === mins);
    });
    document.getElementById("selected-timer-duration").value = mins;
    const customInput = document.getElementById("custom-timer-minutes-input");
    if (customInput) customInput.value = mins;
  },

  adjustCustomTimer(deltaMins) {
    const customInput = document.getElementById("custom-timer-minutes-input");
    let current = Number(customInput.value) || 25;
    current = Math.max(1, Math.min(360, current + deltaMins));
    customInput.value = current;
    document.getElementById("selected-timer-duration").value = current;

    document.querySelectorAll(".btn-duration-choice").forEach(b => {
      b.classList.toggle("active", Number(b.getAttribute("data-min")) === current);
    });
  },

  onCustomTimerInput(val) {
    let mins = Number(val);
    if (!mins || mins < 1) mins = 1;
    if (mins > 360) mins = 360;
    document.getElementById("selected-timer-duration").value = mins;

    document.querySelectorAll(".btn-duration-choice").forEach(b => {
      b.classList.toggle("active", Number(b.getAttribute("data-min")) === mins);
    });
  },

  resetFocusTimer(id) {
    const habit = this.habits.find(h => h.id === id);
    if (!habit) return;
    if (this.activeTimers[id]) {
      if (this.activeTimers[id].interval) {
        clearInterval(this.activeTimers[id].interval);
      }
      this.activeTimers[id] = null;
    }
    habit.completed = false;
    this.saveLocal();
    this.renderBentoCards();
    this.showToast(`Timer "${habit.title}" di-reset ke ${habit.targetGoal} menit.`, "info");
  },

  filterIconCategory(cat, btnEl) {
    document.querySelectorAll(".icon-cat-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    this.populateIconPicker(cat);
  },

  populateIconPicker(filterCat = "all") {
    const grid = document.getElementById("icon-selector-grid");
    if (!grid) return;
    const selectedKey = document.getElementById("selected-icon-key").value || "sun";

    const filtered = (filterCat === "all") 
      ? ICON_CATALOG 
      : ICON_CATALOG.filter(item => item.cat === filterCat);

    grid.innerHTML = filtered.map(item => `
      <button type="button" class="btn-svg-choice ${item.key === selectedKey ? 'active' : ''}" 
              data-key="${item.key}" 
              title="${item.label}" 
              onclick="App.selectIconKey('${item.key}')">
        ${SVG_ICONS[item.key]}
      </button>
    `).join("");
  },

  selectIconKey(key) {
    document.querySelectorAll(".btn-svg-choice").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-key") === key);
    });
    document.getElementById("selected-icon-key").value = key;
    
    const meta = ICON_CATALOG.find(i => i.key === key);
    const labelEl = document.getElementById("selected-icon-preview-label");
    if (labelEl && meta) {
      labelEl.textContent = meta.label;
    }
  },

  populateMoodPicker() {
    const grid = document.getElementById("mood-selector-grid");
    if (!grid) return;

    const moods = [
      { key: "smile", label: "Bahagia", icon: SVG_ICONS.smile },
      { key: "zap", label: "Produktif", icon: SVG_ICONS.zap },
      { key: "leaf", label: "Tenang / Zen", icon: SVG_ICONS.leaf },
      { key: "calm", label: "Lelah", icon: SVG_ICONS.calm }
    ];

    grid.innerHTML = moods.map(m => `
      <button type="button" class="btn-mood-choice ${m.key === 'smile' ? 'active' : ''}" data-mood="${m.key}" onclick="App.selectMood('${m.key}')">
        ${m.icon}
        <span>${m.label}</span>
      </button>
    `).join("");
  },

  selectMood(key) {
    document.querySelectorAll(".btn-mood-choice").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-mood") === key);
    });
    document.getElementById("selected-mood-key").value = key;
  },

  handleSaveHabit(e) {
    e.preventDefault();
    const editId = document.getElementById("habit-edit-id").value;
    const title = document.getElementById("habit-input-title").value.trim();
    const subtitle = document.getElementById("habit-input-subtitle").value.trim();
    const scheduleType = document.getElementById("selected-schedule-type").value || "daily";
    let targetDate = null;
    if (scheduleType === "specific") {
      targetDate = document.getElementById("habit-input-specific-date").value || this.getTodayKey();
    }

    const cardType = document.getElementById("selected-card-type").value || "checklist";
    const iconKey = document.getElementById("selected-icon-key").value || "sun";
    
    const colorRadio = document.querySelector('input[name="cardColor"]:checked');
    const colorVal = colorRadio ? colorRadio.value : "#FDE047";
    
    let themeClass = "theme-yellow";
    if (colorVal === "#7C2D12") themeClass = "theme-terracotta";
    if (colorVal === "#93C5FD") themeClass = "theme-softblue";
    if (colorVal === "#059669") themeClass = "theme-emerald";
    if (colorVal === "#8B5CF6") themeClass = "theme-purple";

    let targetGoal = 1;
    let unit = "kali";
    let curProgressVal = 0;

    if (cardType === "progressive") {
      targetGoal = Math.max(1, Number(document.getElementById("habit-input-target").value) || 8);
      unit = document.getElementById("habit-input-unit").value.trim() || "unit";
      const progInput = document.getElementById("habit-input-current-progress");
      curProgressVal = progInput ? Math.max(0, Number(progInput.value) || 0) : 0;
    } else if (cardType === "focus") {
      targetGoal = Number(document.getElementById("selected-timer-duration").value) || 25;
      unit = "menit";
    }

    // Reminder & Notification Setting
    const reminderToggle = document.getElementById("habit-reminder-toggle");
    const reminderEnabled = reminderToggle ? reminderToggle.checked : false;
    const reminderTime = document.getElementById("habit-reminder-time") ? document.getElementById("habit-reminder-time").value : "20:30";

    if (editId) {
      // Edit habit
      const h = this.habits.find(item => item.id === editId);
      if (h) {
        h.title = title;
        h.subtitle = subtitle;
        h.cardType = cardType;
        h.scheduleType = scheduleType;
        h.targetDate = targetDate;
        h.date = scheduleType === "specific" ? this.formatShortDate(targetDate) : "HARIAN";
        h.reminderEnabled = reminderEnabled;
        h.reminderTime = reminderTime;
        h.targetGoal = targetGoal;
        h.unit = unit;
        h.theme = themeClass;
        h.iconSvgKey = iconKey;
        h.updatedAt = Date.now();
        if (cardType === "progressive") {
          h.currentProgress = curProgressVal;
          h.completed = h.currentProgress >= h.targetGoal;
        }
        this.showToast(`Kartu "${title}" berhasil diubah!`, "success");
      }
    } else {
      // Tambah baru
      const newHabit = {
        id: "habit_" + Date.now(),
        title: title,
        subtitle: subtitle,
        cardType: cardType,
        scheduleType: scheduleType,
        targetDate: targetDate,
        reminderEnabled: reminderEnabled,
        reminderTime: reminderTime,
        lastNotifiedDate: null,
        currentProgress: cardType === "progressive" ? curProgressVal : 0,
        targetGoal: targetGoal,
        unit: unit,
        date: scheduleType === "specific" ? this.formatShortDate(targetDate) : "HARIAN",
        theme: themeClass,
        iconSvgKey: iconKey,
        completed: cardType === "progressive" ? (curProgressVal >= targetGoal) : false,
        streak: 0,
        updatedAt: Date.now()
      };
      this.habits.push(newHabit);
      this.showToast(`Kartu "${title}" berhasil ditambahkan!`, "success");
    }

    this.saveLocal();
    if (scheduleType === "specific" && targetDate) {
      this.selectedDateKey = targetDate;
      this.calendarModalSelectedDayKey = targetDate;
    }
    this.renderHeaderAndLiveCalendar();
    this.renderBentoCards();
    this.closeModal("modal-add-habit");
    this.pushToGoogleSheets(false);
  },

  // ==========================================================
  // 11. ONE-LINE MICRO JOURNAL
  // ==========================================================
  openJournalModal() {
    const todayJournal = this.journalList[0];
    const input = document.getElementById("journal-input-text");
    if (input && todayJournal) {
      input.value = todayJournal.reflectionText;
      document.getElementById("journal-char-count").textContent = `${input.value.length} / 140`;
    }
    document.getElementById("modal-journal").classList.add("open");
  },

  handleSaveJournal(e) {
    e.preventDefault();
    const text = document.getElementById("journal-input-text").value.trim();
    const moodKey = document.getElementById("selected-mood-key").value || "smile";
    const moodLabels = { smile: "Bahagia", zap: "Produktif", leaf: "Tenang", calm: "Lelah" };

    const entry = {
      id: "j_" + Date.now(),
      date: "Hari Ini",
      reflectionText: text,
      moodKey: moodKey,
      moodLabel: moodLabels[moodKey] || "Bersyukur"
    };

    this.journalList.unshift(entry);
    this.saveJournalLocal();
    this.renderBentoCards();
    this.closeModal("modal-journal");
    this.showToast("Refleksi harian berhasil disimpan!", "success");
    
    // Sync journal to Google Sheets
    if (this.gasEndpoint) {
      fetch(this.gasEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save_journal", journal: entry })
      }).catch(err => console.log(err));
    }
  },

  // ==========================================================
  // 12. BESPOKE CALENDAR MATRIX (ANTI-NATIVE DATE PICKER)
  // ==========================================================
  calculateRealStats() {
    // Hitung streak beruntun hari-hari yang 100% tuntas
    let streakCount = 0;
    const checkDate = new Date();
    const todayDone = this.habits.length > 0 && this.habits.every(h => h.completed);

    if (todayDone) {
      streakCount++;
    }

    // Telusuri hari-hari sebelumnya secara berurutan
    checkDate.setDate(checkDate.getDate() - 1);
    while (true) {
      const key = this.formatDateKey(checkDate);
      const rec = this.history[key];
      if (rec && rec.percentage === 100 && rec.totalHabits > 0) {
        streakCount++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Hitung tingkat disiplin (rata-rata persentase)
    let disciplineRate = 0;
    const entries = Object.values(this.history);
    if (entries.length > 0) {
      const sum = entries.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
      disciplineRate = Math.round(sum / entries.length);
    } else if (this.habits.length > 0) {
      const completedCount = this.habits.filter(h => h.completed).length;
      disciplineRate = Math.round((completedCount / this.habits.length) * 100);
    }

    // Penentuan level pencapaian
    let level = "Lvl 1";
    let levelTitle = "Langkah Awal";
    if (streakCount >= 21) {
      level = "Lvl 3";
      levelTitle = "Zen Achiever";
    } else if (streakCount >= 7) {
      level = "Lvl 2";
      levelTitle = "Ritme Terbentuk";
    }

    return { streakCount, disciplineRate, level, levelTitle };
  },

  openCalendarModal() {
    this.renderCalendarMonth();
    document.getElementById("modal-calendar").classList.add("open");
  },

  changeCalendarMonth(offset) {
    this.calendarViewDate.setMonth(this.calendarViewDate.getMonth() + offset);
    this.renderCalendarMonth();
  },

  renderCalendarMonth() {
    const container = document.getElementById("calendar-matrix-container");
    const label = document.getElementById("calendar-current-month-label");
    if (!container || !label) return;

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const y = this.calendarViewDate.getFullYear();
    const m = this.calendarViewDate.getMonth();
    label.textContent = `${months[m]} ${y}`;

    // Perbarui statistik riil
    const stats = this.calculateRealStats();
    const streakEl = document.getElementById("cal-stat-streak");
    const rateEl = document.getElementById("cal-stat-rate");
    const lvlEl = document.getElementById("cal-stat-level");
    const lvlTitleEl = document.getElementById("cal-stat-level-title");

    if (streakEl) streakEl.textContent = stats.streakCount;
    if (rateEl) rateEl.textContent = `${stats.disciplineRate}%`;
    if (lvlEl) lvlEl.textContent = stats.level;
    if (lvlTitleEl) lvlTitleEl.textContent = stats.levelTitle;

    // Hitung hari awal dan total hari
    const firstDayIndex = new Date(y, m, 1).getDay(); // 0 is Sun
    const totalDays = new Date(y, m + 1, 0).getDate();
    const today = new Date();

    const dayHeaders = ["M", "S", "S", "R", "K", "J", "S"];
    let html = `<div class="calendar-matrix-grid">`;

    // Header hari
    dayHeaders.forEach(dh => {
      html += `<div class="calendar-day-header">${dh}</div>`;
    });

    // Padding hari kosong di awal
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="calendar-day-cell empty"></div>`;
    }

    // Hari 1 s/d totalDays
    for (let day = 1; day <= totalDays; day++) {
      const isToday = (today.getFullYear() === y && today.getMonth() === m && today.getDate() === day);
      const dayDate = new Date(y, m, day);
      const dayKey = this.formatDateKey(dayDate);
      const isSelected = (this.calendarModalSelectedDayKey === dayKey);

      const dayHabits = this.getHabitsForDate(dayKey);
      const hasSpecific = this.habits.some(h => h.scheduleType === 'specific' && h.targetDate === dayKey);

      let statusClass = "";
      if (dayHabits.length > 0) {
        if (dayHabits.every(h => h.completed)) statusClass = "completed-full";
        else if (dayHabits.some(h => h.completed)) statusClass = "completed-partial";
      } else {
        const rec = this.history[dayKey];
        if (rec && rec.totalHabits > 0) {
          if (rec.percentage === 100) statusClass = "completed-full";
          else if (rec.percentage > 0) statusClass = "completed-partial";
        }
      }

      let dotHtml = "";
      if (dayHabits.length > 0) {
        const isDone = dayHabits.every(h => h.completed);
        dotHtml = `<span class="cal-dot-indicator ${hasSpecific ? 'is-specific' : ''} ${isDone ? 'is-completed' : ''}"></span>`;
      }

      let cellClasses = ["calendar-day-cell"];
      if (statusClass) cellClasses.push(statusClass);
      if (isToday) cellClasses.push("is-today");
      if (isSelected) cellClasses.push("selected-cal-day");

      html += `
        <div class="${cellClasses.join(' ')}" 
             onclick="App.selectCalendarModalDay(${y}, ${m}, ${day})"
             ondblclick="App.openSelectedCalendarDateOnBoard()">
          <span>${day}</span>
          ${dotHtml}
        </div>
      `;
    }
    html += `</div>`;
    container.innerHTML = html;

    // Render daftar agenda untuk tanggal yang dipilih di kalender
    this.renderCalendarModalAgenda();

    // Render Riwayat Jurnal
    const journalWrap = document.getElementById("journal-history-list");
    if (journalWrap) {
      if (this.journalList.length === 0) {
        journalWrap.innerHTML = `<div class="empty-journal-state" style="padding: 16px 0; text-align: center; color: #71717A; font-size: 13px;">Belum ada riwayat catatan refleksi.</div>`;
      } else {
        journalWrap.innerHTML = this.journalList.map(j => `
          <div class="journal-history-item">
            <div class="journal-item-meta">
              <span class="journal-item-date">${j.date}</span>
              <span class="journal-item-mood">${SVG_ICONS[j.moodKey] || SVG_ICONS.smile} ${j.moodLabel || ''}</span>
            </div>
            <p class="journal-item-text">"${j.reflectionText}"</p>
          </div>
        `).join("");
      }
    }
  },

  selectCalendarModalDay(y, m, day) {
    const d = new Date(y, m, day);
    this.calendarModalSelectedDayKey = this.formatDateKey(d);
    this.renderCalendarMonth();
  },

  renderCalendarModalAgenda() {
    const titleEl = document.getElementById("calendar-selected-agenda-title");
    const container = document.getElementById("calendar-agenda-items-container");
    if (!container) return;

    const parts = (this.calendarModalSelectedDayKey || this.getTodayKey()).split("-").map(Number);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    
    let dateLabel = this.calendarModalSelectedDayKey;
    if (parts.length === 3) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      dateLabel = `${daysIndo[d.getDay()]}, ${parts[2]} ${months[parts[1] - 1]}`;
    }

    const isToday = (this.calendarModalSelectedDayKey === this.getTodayKey());
    if (titleEl) {
      titleEl.textContent = isToday ? `Agenda Hari Ini (${dateLabel})` : `Agenda: ${dateLabel}`;
    }

    const dayHabits = this.getHabitsForDate(this.calendarModalSelectedDayKey);

    if (dayHabits.length === 0) {
      container.innerHTML = `
        <div class="agenda-empty-state">
          <span>Belum ada jadwal yang dicatat khusus tanggal ini.</span>
          <button type="button" class="btn-agenda-add-target" onclick="App.openAddModal('${this.calendarModalSelectedDayKey}'); App.closeModal('modal-calendar');">
            + Tambah Target Tanggal Ini
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = dayHabits.map(h => {
      const iconSvg = SVG_ICONS[h.iconSvgKey] || SVG_ICONS.sun;
      return `
        <div class="agenda-item-card ${h.completed ? 'is-done' : ''}">
          <div class="agenda-item-left">
            <span class="agenda-item-icon">${iconSvg}</span>
            <div class="agenda-item-details">
              <span class="agenda-item-title">${h.title}</span>
              <div class="agenda-item-meta">
                <span class="card-badge ${h.scheduleType === 'specific' ? 'badge-specific' : 'badge-daily'}">
                  <span class="badge-icon">${h.scheduleType === 'specific' ? SVG_ICONS.calendar : SVG_ICONS.repeat}</span>
                  <span>${h.scheduleType === 'specific' ? this.formatShortDate(h.targetDate) : 'Harian'}</span>
                </span>
                ${h.reminderEnabled && h.reminderTime ? `
                <span class="card-badge badge-reminder">
                  <span class="badge-icon">${SVG_ICONS.bell}</span>
                  <span>${h.reminderTime}</span>
                </span>` : ''}
              </div>
            </div>
          </div>
          <button type="button" class="agenda-item-check ${h.completed ? 'checked' : ''}" 
                  onclick="App.toggleChecklist('${h.id}'); App.renderCalendarModalAgenda();"
                  title="${h.completed ? 'Selesai' : 'Tandai Selesai'}">
            ${h.completed ? SVG_ICONS.check : ''}
          </button>
        </div>
      `;
    }).join("");
  },

  openSelectedCalendarDateOnBoard() {
    this.selectedDateKey = this.calendarModalSelectedDayKey;
    this.closeModal("modal-calendar");
    this.renderHeaderAndLiveCalendar();
    this.renderBentoCards();
    this.updateProgressRing();
    this.showToast(`Menampilkan jadwal untuk tanggal ${this.formatShortDate(this.selectedDateKey)}.`, "info");
  },

  // ==========================================================
  // 13. CLOUD GOOGLE SHEETS & FIREBASE SYNC (TWO-WAY ENGINE)
  // ==========================================================
  openSyncSettings() {
    document.getElementById("input-gas-url").value = this.gasEndpoint;
    this.updateSyncStatusLabel();
    document.getElementById("modal-settings").classList.add("open");
  },

  saveGasUrl() {
    const url = document.getElementById("input-gas-url").value.trim();
    this.gasEndpoint = url;
    localStorage.setItem("minimal_todo_gas_url", url);
    this.showToast("URL Google Apps Script tersimpan!", "success");
    this.syncWithGoogleSheets(true);
  },

  updateSyncStatusLabel(statusText = null, isSuccess = true) {
    const dot = document.getElementById("sync-dot-indicator");
    const label = document.getElementById("sync-status-label");
    const miniDot = document.getElementById("sync-mini-dot");
    const miniLabel = document.getElementById("sync-last-time-label");

    const text = statusText || (this.gasEndpoint ? "Google Sheets Terhubung" : "Lokal Aktif (Siap Sync)");
    if (label) label.textContent = text;
    if (dot) dot.style.background = isSuccess ? "#22C55E" : "#EF4444";
    if (miniDot) miniDot.style.background = isSuccess ? "#22C55E" : "#EF4444";
    if (miniLabel) miniLabel.textContent = text;
  },

  async pullFromGoogleSheets(showNotification = false) {
    if (!this.gasEndpoint) {
      if (showNotification) this.showToast("Masukkan URL Google Apps Script Web App terlebih dahulu.", "warning");
      return false;
    }

    this.updateSyncStatusLabel("Menarik data dari Google Sheets...", true);

    try {
      const url = new URL(this.gasEndpoint);
      url.searchParams.set("action", "get_all");
      if (this.currentUser && this.currentUser.username) {
        url.searchParams.set("username", this.currentUser.username);
        url.searchParams.set("userId", this.currentUser.username);
      }
      url.searchParams.set("_t", Date.now());

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();

      if (data && data.success && Array.isArray(data.habits)) {
        this.mergeHabitsFromRemote(data.habits);
        
        // Merge jurnal jika ada
        if (Array.isArray(data.journal) && data.journal.length > 0) {
          data.journal.forEach(remoteJ => {
            if (!this.journalList.some(localJ => localJ.id === remoteJ.id)) {
              this.journalList.push(remoteJ);
            }
          });
          this.saveJournalLocal();
        }

        this.saveLocal();
        this.renderBentoCards();
        this.updateProgressRing();
        this.renderHeaderAndLiveCalendar();
        this.updateProfileModalStats();

        const timeNow = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
        this.updateSyncStatusLabel(`Tersinkron: ${data.habits.length} target (${timeNow} WIB)`, true);

        if (showNotification) {
          const userGreet = this.currentUser ? ` untuk @${this.currentUser.username}` : "";
          this.showToast(`Berhasil menarik ${data.habits.length} target${userGreet} dari Cloud!`, "success");
        }
        return true;
      } else {
        throw new Error(data.error || "Format respon tidak valid");
      }
    } catch (e) {
      console.warn("Pull error:", e);
      this.updateSyncStatusLabel("Gagal koneksi ke Google Sheets", false);
      if (showNotification) {
        this.showToast("Gagal mengambil data: " + (e.message || "Cek URL/akses 'Anyone'"), "warning");
      }
      return false;
    }
  },

  async pushToGoogleSheets(showNotification = false) {
    if (!this.gasEndpoint) {
      if (showNotification) this.showToast("Masukkan URL Google Apps Script Web App terlebih dahulu.", "warning");
      return false;
    }

    this.updateSyncStatusLabel("Mengirim data ke Google Sheets...", true);

    try {
      const targetUser = this.currentUser ? this.currentUser.username : "";
      const taggedHabits = this.habits.map(h => ({
        ...h,
        username: h.username || targetUser
      }));

      await fetch(this.gasEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "sync_habits",
          username: targetUser,
          userId: targetUser,
          habits: taggedHabits
        })
      });

      const timeNow = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
      this.updateSyncStatusLabel(`Data terkirim ke Cloud (${timeNow} WIB)`, true);

      if (showNotification) {
        this.showToast("Data target berhasil dikirim ke Google Sheets!", "success");
      }
      return true;
    } catch (e) {
      console.warn("Push error:", e);
      this.updateSyncStatusLabel("Gagal kirim data ke Google Sheets", false);
      if (showNotification) {
        this.showToast("Gagal kirim ke Google Sheets: " + (e.message || "Offline"), "warning");
      }
      return false;
    }
  },

  async syncWithGoogleSheets(showNotification = false) {
    if (!this.gasEndpoint) {
      if (showNotification) this.showToast("Masukkan URL Google Apps Script Web App terlebih dahulu.", "warning");
      return;
    }

    if (showNotification) this.showToast("Menjalankan sinkronisasi...", "info");

    if (this.debouncePushTimer) {
      clearTimeout(this.debouncePushTimer);
      this.debouncePushTimer = null;
    }

    // 1. Kirim data lokal terbaru ke cloud terlebih dahulu
    const pushed = await this.pushToGoogleSheets(false);

    // 2. Tarik data dari cloud untuk sinkronisasi 2 arah
    const pulled = await this.pullFromGoogleSheets(false);

    if (pushed || pulled) {
      const timeNow = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
      this.updateSyncStatusLabel(`Sinkron 2 Arah Aktif (${timeNow} WIB)`, true);
      if (showNotification) {
        this.showToast("Sinkronisasi berhasil! Data APK dan Google Sheets telah sinkron.", "success");
      }
    } else {
      if (showNotification) {
        this.showToast("Sinkronisasi gagal. Pastikan izin Web App adalah 'Anyone'.", "warning");
      }
    }
  },

  mergeHabitsFromRemote(remoteHabits) {
    if (!Array.isArray(remoteHabits)) return;

    remoteHabits.forEach(rh => {
      const existing = this.habits.find(lh => lh.id === rh.id);
      if (existing) {
        // Jangan timpa jika data lokal baru saja diubah pengguna dalam 60 detik terakhir
        const isRecentlyEditedLocally = existing.updatedAt && (Date.now() - existing.updatedAt < 60000);

        existing.title = rh.title || existing.title;
        existing.subtitle = rh.subtitle !== undefined ? rh.subtitle : existing.subtitle;
        existing.cardType = rh.cardType || existing.cardType;
        existing.scheduleType = rh.scheduleType || existing.scheduleType;
        existing.targetDate = rh.targetDate !== undefined ? rh.targetDate : existing.targetDate;
        existing.date = existing.scheduleType === 'specific' ? this.formatShortDate(existing.targetDate) : "HARIAN";
        existing.theme = rh.theme || existing.theme;
        existing.iconSvgKey = rh.iconSvgKey || existing.iconSvgKey;
        
        if (!isRecentlyEditedLocally) {
          existing.currentProgress = (rh.currentProgress !== undefined && !isNaN(Number(rh.currentProgress))) ? Number(rh.currentProgress) : existing.currentProgress;
          existing.completed = Boolean(rh.completed !== undefined ? rh.completed : existing.completed);
        }
        existing.targetGoal = (rh.targetGoal !== undefined && !isNaN(Number(rh.targetGoal))) ? Number(rh.targetGoal) : existing.targetGoal;
        existing.unit = rh.unit !== undefined ? rh.unit : existing.unit;
        existing.streak = (rh.streak !== undefined && !isNaN(Number(rh.streak))) ? Number(rh.streak) : existing.streak;
        existing.reminderEnabled = Boolean(rh.reminderEnabled !== undefined ? rh.reminderEnabled : existing.reminderEnabled);
        existing.reminderTime = rh.reminderTime || existing.reminderTime;
      } else {
        // Habit baru dari Google Sheets
        this.habits.push({
          id: rh.id || ("habit_cloud_" + Date.now() + "_" + Math.floor(Math.random() * 1000)),
          title: rh.title || "Target Baru",
          subtitle: rh.subtitle || "",
          cardType: rh.cardType || "checklist",
          scheduleType: rh.scheduleType || (rh.targetDate ? "specific" : "daily"),
          targetDate: rh.targetDate || null,
          reminderEnabled: Boolean(rh.reminderEnabled),
          reminderTime: rh.reminderTime || "20:30",
          lastNotifiedDate: null,
          currentProgress: Number(rh.currentProgress) || 0,
          targetGoal: Number(rh.targetGoal) || 1,
          unit: rh.unit || "",
          date: (rh.scheduleType === 'specific' && rh.targetDate) ? this.formatShortDate(rh.targetDate) : "HARIAN",
          theme: rh.theme || "theme-yellow",
          iconSvgKey: rh.iconSvgKey || "sun",
          completed: Boolean(rh.completed),
          streak: Number(rh.streak) || 0,
          updatedAt: Date.now()
        });
      }
    });
  },

  togglePushNotifications(enabled) {
    if (enabled) {
      if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            this.showToast("Notifikasi aktif! Pengingat harian aktif pukul 07:00 & 20:00 WIB.", "success");
            // Daftarkan token ke Google Sheets jika ada
            if (this.gasEndpoint) {
              fetch(this.gasEndpoint, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  action: "register_fcm_token",
                  token: "fcm_device_token_" + Date.now(),
                  platform: "Android Native"
                })
              }).catch(err => console.log(err));
            }
          } else {
            this.showToast("Izin notifikasi tidak diberikan.", "warning");
          }
        });
      }
    }
  },

  closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
  },

  switchToGridView() {
    const mainArea = document.getElementById("main-scroll-area");
    if (mainArea) mainArea.scrollTo({ top: 0, behavior: "smooth" });
  },

  showSplashScreen() {
    const splash = document.getElementById("app-splash-screen");
    const fill = document.querySelector(".splash-loader-fill");
    const status = document.getElementById("splash-status");

    if (!splash) return;

    splash.classList.remove("hidden", "fade-out");
    splash.style.display = "flex";
    if (fill) {
      fill.style.animation = "none";
      void fill.offsetWidth; // trigger reflow
      fill.style.animation = "fillProgress 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    }

    if (status) status.textContent = "Menyiapkan ruang fokus...";

    setTimeout(() => {
      if (status) status.textContent = "Memuat target harian...";
    }, 700);

    setTimeout(() => {
      if (status) status.textContent = "Siap melangkah!";
    }, 1400);

    setTimeout(() => {
      splash.classList.add("fade-out");
      setTimeout(() => {
        splash.classList.add("hidden");
        splash.style.display = "none";
      }, 500);
    }, 1900);
  },

  // ==========================================================
  // 14. BENTO MULTI-USER CLOUD AUTHENTICATION & PROFILE ENGINE
  // ==========================================================
  openAuthModal() {
    const modal = document.getElementById("modal-auth");
    if (!modal) return;

    const loggedView = document.getElementById("auth-logged-view");
    const formView = document.getElementById("auth-form-view");

    if (this.currentUser) {
      if (loggedView) loggedView.style.display = "block";
      if (formView) formView.style.display = "none";
      this.updateProfileModalStats();
    } else {
      if (loggedView) loggedView.style.display = "none";
      if (formView) formView.style.display = "block";
      this.switchAuthTab("login");
    }

    modal.classList.add("open");
  },

  showSwitchAccountForm() {
    const loggedView = document.getElementById("auth-logged-view");
    const formView = document.getElementById("auth-form-view");
    if (loggedView) loggedView.style.display = "none";
    if (formView) formView.style.display = "block";
    this.switchAuthTab("login");
  },

  switchAuthTab(tab) {
    const btnLogin = document.getElementById("tab-btn-login");
    const btnReg = document.getElementById("tab-btn-register");
    const formLogin = document.getElementById("form-auth-login");
    const formReg = document.getElementById("form-auth-register");
    const hint = document.getElementById("auth-tab-hint");

    if (tab === "register") {
      if (btnLogin) btnLogin.classList.remove("active");
      if (btnReg) btnReg.classList.add("active");
      if (formLogin) formLogin.style.display = "none";
      if (formReg) formReg.style.display = "block";
      if (hint) hint.textContent = "Daftarkan username unik Anda untuk membuat ruang target pribadi yang tersimpan terpisah di Google Sheets.";
    } else {
      if (btnLogin) btnLogin.classList.add("active");
      if (btnReg) btnReg.classList.remove("active");
      if (formLogin) formLogin.style.display = "block";
      if (formReg) formReg.style.display = "none";
      if (hint) hint.textContent = "Masukkan username Anda untuk membuka target dan catatan harian pribadi yang tersinkron ke cloud.";
    }
  },

  async handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("login-username");
    const pinInput = document.getElementById("login-pin");
    if (!usernameInput) return;

    const rawUsername = usernameInput.value.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    const rawPin = pinInput ? pinInput.value.trim() : "";

    if (!rawUsername || rawUsername.length < 3) {
      this.showToast("Username minimal 3 karakter (huruf, angka, _)", "warning");
      return;
    }

    const submitBtn = document.getElementById("btn-submit-login");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
    }

    this.showToast("Menghubungkan ke profil @" + rawUsername + "...", "info");

    const userObj = {
      username: rawUsername,
      fullName: rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1),
      pin: rawPin,
      loggedInAt: new Date().toISOString()
    };

    // Migrasi aman: Jika user baru login dan belum ada file data terpisah, hubungkan data lokal yang ada agar TIDAK HILANG
    const userKey = `minimal_todo_habits_${rawUsername}`;
    const existingUserData = localStorage.getItem(userKey);
    if (!existingUserData && this.habits.length > 0) {
      this.habits.forEach(h => { h.username = rawUsername; });
      localStorage.setItem(userKey, JSON.stringify(this.habits));
    } else if (existingUserData) {
      try {
        this.habits = JSON.parse(existingUserData);
      } catch (e) {}
    }

    this.currentUser = userObj;
    localStorage.setItem("minimal_todo_user", JSON.stringify(userObj));

    this.updateUserProfileUI();
    this.closeModal("modal-auth");

    // Sinkronisasi otomatis ke Google Apps Script di background
    if (this.gasEndpoint) {
      try {
        fetch(this.gasEndpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "login_user",
            username: rawUsername,
            pin: rawPin,
            fullName: userObj.fullName
          })
        }).catch(() => {});
      } catch (e) {}

      await this.pullFromGoogleSheets(true);
    } else {
      this.showToast("Selamat datang, " + userObj.fullName + "!", "success");
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }

    this.renderBentoCards();
    this.updateProgressRing();
    this.renderHeaderAndLiveCalendar();
  },

  async handleRegister(event) {
    event.preventDefault();
    const nameInput = document.getElementById("reg-fullname");
    const usernameInput = document.getElementById("reg-username");
    const pinInput = document.getElementById("reg-pin");

    if (!usernameInput) return;

    const rawName = nameInput ? nameInput.value.trim() : "";
    const rawUsername = usernameInput.value.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    const rawPin = pinInput ? pinInput.value.trim() : "";

    if (!rawUsername || rawUsername.length < 3) {
      this.showToast("Username minimal 3 karakter (hanya huruf, angka, _)", "warning");
      return;
    }

    const submitBtn = document.getElementById("btn-submit-register");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
    }

    this.showToast("Mendaftarkan akun @" + rawUsername + "...", "info");

    const userObj = {
      username: rawUsername,
      fullName: rawName || (rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1)),
      pin: rawPin,
      registeredAt: new Date().toISOString()
    };

    // Migrasi aman: Hubungkan semua target lokal yang sudah dibuat ke akun baru ini agar TIDAK ADA YANG HILANG
    const userKey = `minimal_todo_habits_${rawUsername}`;
    this.habits.forEach(h => { h.username = rawUsername; });
    localStorage.setItem(userKey, JSON.stringify(this.habits));

    this.currentUser = userObj;
    localStorage.setItem("minimal_todo_user", JSON.stringify(userObj));

    this.updateUserProfileUI();
    this.closeModal("modal-auth");

    // Daftarkan ke Google Apps Script Cloud
    if (this.gasEndpoint) {
      try {
        await fetch(this.gasEndpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "register_user",
            username: rawUsername,
            fullName: userObj.fullName,
            pin: rawPin
          })
        });
      } catch (e) {}

      // Kirim habits yang sudah ada ke spreadsheet di bawah akun baru ini
      await this.pushToGoogleSheets(false);
      await this.pullFromGoogleSheets(false);
    }

    this.showToast("Akun @" + rawUsername + " aktif! Terhubung ke Google Sheet.", "success");

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }

    this.renderBentoCards();
    this.updateProgressRing();
    this.renderHeaderAndLiveCalendar();
  },

  handleLogout() {
    this.confirmAction(
      "Keluar dari Akun?",
      "Target pribadi Anda tetap tersimpan aman di Google Sheet dan HP ini. Anda bisa masuk kembali kapan saja.",
      () => {
        const oldUser = this.currentUser ? this.currentUser.username : "";
        if (oldUser) {
          localStorage.setItem(`minimal_todo_habits_${oldUser}`, JSON.stringify(this.habits));
        }
        this.currentUser = null;
        localStorage.removeItem("minimal_todo_user");

        this.updateUserProfileUI();
        this.closeModal("modal-auth");
        this.showToast("Berhasil keluar dari akun.", "info");

        // Buka form login lagi agar user berikutnya bisa masuk
        setTimeout(() => this.openAuthModal(), 400);
      }
    );
  },

  updateUserProfileUI() {
    const barName = document.getElementById("user-account-name");
    const barStatus = document.getElementById("user-account-status-pill");
    const avatarBadge = document.getElementById("user-avatar-badge");
    const settingsBadge = document.getElementById("settings-user-badge");
    const settingsName = document.getElementById("settings-account-name");
    const settingsHandle = document.getElementById("settings-account-handle");
    const settingsAvatar = document.getElementById("settings-avatar-badge");

    if (this.currentUser) {
      const initial = (this.currentUser.fullName || this.currentUser.username || "U").charAt(0).toUpperCase();
      const displayName = this.currentUser.fullName || this.currentUser.username;
      const handle = "@" + this.currentUser.username;

      if (barName) barName.textContent = `${displayName} (${handle})`;
      if (barStatus) {
        barStatus.textContent = "Aktif";
        barStatus.className = "user-account-status-pill logged-in";
      }
      if (avatarBadge) avatarBadge.textContent = initial;

      if (settingsBadge) settingsBadge.textContent = "Aktif";
      if (settingsName) settingsName.textContent = displayName;
      if (settingsHandle) settingsHandle.textContent = handle;
      if (settingsAvatar) settingsAvatar.textContent = initial;
    } else {
      if (barName) barName.textContent = "Masuk / Daftar Akun";
      if (barStatus) {
        barStatus.textContent = "Tamu";
        barStatus.className = "user-account-status-pill";
      }
      if (avatarBadge) {
        avatarBadge.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
      }

      if (settingsBadge) settingsBadge.textContent = "Tamu";
      if (settingsName) settingsName.textContent = "Belum Masuk Akun";
      if (settingsHandle) settingsHandle.textContent = "Klik untuk login atau daftar";
      if (settingsAvatar) {
        settingsAvatar.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
      }
    }
  },

  updateProfileModalStats() {
    if (!this.currentUser) return;
    const largeAvatar = document.getElementById("profile-large-avatar");
    const fullname = document.getElementById("profile-fullname");
    const handle = document.getElementById("profile-handle");
    const countEl = document.getElementById("profile-habit-count");

    const initial = (this.currentUser.fullName || this.currentUser.username || "U").charAt(0).toUpperCase();
    if (largeAvatar) largeAvatar.textContent = initial;
    if (fullname) fullname.textContent = this.currentUser.fullName || this.currentUser.username;
    if (handle) handle.textContent = "@" + this.currentUser.username;
    if (countEl) countEl.textContent = this.habits.length;
  }
};

// Auto Char Counter for Journal
document.addEventListener("input", e => {
  if (e.target && e.target.id === "journal-input-text") {
    const counter = document.getElementById("journal-char-count");
    if (counter) counter.textContent = `${e.target.value.length} / 140`;
  }
});

// Start Application on Load
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
