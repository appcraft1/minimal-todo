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
  settingsPassword: "1234",
  isSettingsUnlocked: false,
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
  selectedRepeatDays: [3], // default: 3 (Rabu)
  currentIgEntry: null,
  currentIgRatio: 'story', // 'story' (9:16) or 'square' (1:1)
  currentIgTheme: 'strava', // 'strava' | 'lemon' | 'dark' | 'emerald'
  currentIgMode: 'overlay', // 'overlay' (full photo overlay) | 'outside' (photo + components outside)
  customIgPhoto: null, // custom photo for IG Studio

  // Helper: Pembersih & Penstandar Format Jam (Anti-1899 Date bug)
  cleanTimeStr(val) {
    if (!val) return "20:30";
    if (val instanceof Date) {
      if (isNaN(val.getTime())) return "20:30";
      const hh = String(val.getHours()).padStart(2, "0");
      const mm = String(val.getMinutes()).padStart(2, "0");
      return `${hh}:${mm}`;
    }
    const str = String(val).trim();
    if (str.includes("1899") || str.includes("GMT") || str.includes(":") || str.includes(".")) {
      const match = str.match(/(\d{1,2})[:.](\d{2})/);
      if (match) {
        return `${match[1].padStart(2, "0")}:${match[2]}`;
      }
    }
    return str || "20:30";
  },

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
    this.loadData();
    this.selectedDateKey = this.getTodayKey();
    this.calendarModalSelectedDayKey = this.getTodayKey();

    // 1. Cek pergantian hari (Daily & Weekly Habits Reset Otomatis)
    const todayKey = this.getTodayKey();
    const lastActiveDate = localStorage.getItem("minimal_todo_last_active_date");
    if (lastActiveDate && lastActiveDate !== todayKey) {
      this.habits.forEach(h => {
        if (h.scheduleType === "daily" || h.scheduleType === "days") {
          h.completed = false;
          if (h.cardType === "progressive") h.currentProgress = 0;
        }
      });
      this.saveLocal();
    }
    localStorage.setItem("minimal_todo_last_active_date", todayKey);

    this.updateUserProfileUI();
    this.renderHeaderAndLiveCalendar();
    this.populateIconPicker();
    this.populateMoodPicker();
    this.renderBentoCards();
    this.updateProgressRing();
    this.initConfetti();
    this.initReminderEngine();
    this.initPullToRefresh();
    this.syncNativeWidgetAndNotification();

    // 2. Daftarkan Service Worker untuk notifikasi PWA/Webview
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }

    // 3. Listener Klik Luar Popup Aksi Menu
    document.addEventListener("click", e => {
      const popup = document.getElementById("dock-action-popup");
      const btn = document.getElementById("btn-dock-action");
      if (popup && popup.classList.contains("open")) {
        if (!popup.contains(e.target) && !btn.contains(e.target)) {
          this.closeDockActionPopup();
        }
      }
    });

    // Urutan Startup:
    if (!this.currentUser) {
      const splash = document.getElementById("app-splash-screen");
      if (splash) {
        splash.style.display = "none";
        splash.classList.add("hidden");
      }
      this.showFullPageAuth();
    } else {
      this.hideFullPageAuth();
      this.showSplashScreen();
      if (this.gasEndpoint) {
        setTimeout(() => this.pullFromGoogleSheets(false), 900);
      }
    }
  },

  // ==========================================================
  // DOCK ACTION POPUP (GABUNGAN BUAT KARTU & CATATAN SYUKUR)
  // ==========================================================
  toggleDockActionPopup(e) {
    if (e) e.stopPropagation();
    const popup = document.getElementById("dock-action-popup");
    const btn = document.getElementById("btn-dock-action");
    if (popup) {
      const isOpen = popup.classList.toggle("open");
      if (btn) btn.classList.toggle("is-open", isOpen);
    }
  },

  closeDockActionPopup() {
    const popup = document.getElementById("dock-action-popup");
    const btn = document.getElementById("btn-dock-action");
    if (popup) popup.classList.remove("open");
    if (btn) btn.classList.remove("is-open");
  },

  handlePopupAction(action) {
    this.closeDockActionPopup();
    if (action === "add") {
      this.openAddModal();
    } else if (action === "journal") {
      this.openJournalModal();
    }
  },

  formatDateKey(date) {
    if (!date) return "";
    if (date instanceof Date) {
      if (isNaN(date.getTime())) return "";
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    const str = String(date).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
    const dObj = new Date(str);
    if (!isNaN(dObj.getTime())) {
      const y = dObj.getFullYear();
      const m = String(dObj.getMonth() + 1).padStart(2, "0");
      const d = String(dObj.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    return str;
  },

  getTodayKey() {
    return this.formatDateKey(new Date());
  },

  getHabitsForDate(dateKey) {
    if (!dateKey) dateKey = this.getTodayKey();
    const targetDateObj = new Date(dateKey + "T00:00:00");
    const dayOfWeek = isNaN(targetDateObj.getTime()) ? (new Date()).getDay() : targetDateObj.getDay();

    return this.habits.filter(h => {
      const sched = h.scheduleType || "daily";
      if (sched === "daily") return true;
      if (sched === "specific") {
        return h.targetDate === dateKey;
      }
      if (sched === "days" || sched === "weekly") {
        if (Array.isArray(h.repeatDays) && h.repeatDays.length > 0) {
          return h.repeatDays.includes(dayOfWeek);
        }
        return true;
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

    // Bersihkan seluruh format reminderTime agar tidak ada bug 1899 yang tersisa
    this.habits.forEach(h => {
      if (h.reminderTime) h.reminderTime = this.cleanTimeStr(h.reminderTime);
    });

    // Muat password proteksi pengaturan (default: 1234)
    this.settingsPassword = localStorage.getItem("minimal_todo_settings_password") || "1234";
    this.isSettingsUnlocked = false;

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
        const rawList = JSON.parse(savedJournal);
        this.journalList = Array.isArray(rawList) ? rawList.map(j => this.normalizeJournalEntry(j)) : [];
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

  normalizeJournalEntry(j) {
    if (!j) return null;
    let dateKey = j.dateKey;
    
    const indonesianMonthMap = {
      januari: "01", jan: "01",
      februari: "02", feb: "02",
      maret: "03", mar: "03",
      april: "04", apr: "04",
      mei: "05", may: "05",
      juni: "06", jun: "06",
      juli: "07", jul: "07",
      agustus: "08", ags: "08", aug: "08",
      september: "09", sep: "09",
      oktober: "10", okt: "10", oct: "10",
      november: "11", nov: "11",
      desember: "12", des: "12", dec: "12"
    };

    const textToSearch = `${j.date || ""} ${j.fullDateLabel || ""} ${j.reflectionText || ""} ${j.id || ""}`.toLowerCase();

    // Check specifically if the record refers to 8 Oktober
    if (textToSearch.includes("8 oktober") || textToSearch.includes("08-10") || textToSearch.includes("10-08") || textToSearch.includes("2026-10-08")) {
      dateKey = "2026-10-08";
    }

    if (!dateKey || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
      if (j.createdAt) {
        if (typeof j.createdAt === "number" || (!isNaN(Number(j.createdAt)) && Number(j.createdAt) > 1600000000000)) {
          dateKey = this.formatDateKey(new Date(Number(j.createdAt)));
        } else if (typeof j.createdAt === "string" && /^\d{4}-\d{2}-\d{2}/.test(j.createdAt)) {
          dateKey = j.createdAt.substring(0, 10);
        } else {
          const parsed = new Date(j.createdAt);
          if (!isNaN(parsed.getTime())) {
            dateKey = this.formatDateKey(parsed);
          }
        }
      }

      if (!dateKey) {
        const match = textToSearch.match(/(\d{1,2})\s+([a-z]+)(?:\s+(20\d{2}))?/);
        if (match) {
          const dNum = String(match[1]).padStart(2, "0");
          const mName = match[2];
          const yNum = match[3] || "2026";
          if (indonesianMonthMap[mName]) {
            dateKey = `${yNum}-${indonesianMonthMap[mName]}-${dNum}`;
          }
        }
      }

      if (!dateKey && j.id && String(j.id).startsWith("j_")) {
        const rawTs = Number(String(j.id).replace("j_", ""));
        if (!isNaN(rawTs) && rawTs > 1600000000000) {
          dateKey = this.formatDateKey(new Date(rawTs));
        }
      }
    }

    if (!dateKey) {
      dateKey = this.getTodayKey();
    }

    const parts = dateKey.split("-").map(Number);
    const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthsIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let dayName = "Hari";
    let dateNum = parts[2];
    let monthName = "Bulan";
    let yearNum = parts[0];

    if (parts.length === 3) {
      const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
      dayName = daysIndo[dObj.getDay()];
      monthName = monthsIndo[parts[1] - 1];
    }

    return {
      ...j,
      dateKey: dateKey,
      date: `${dayName}, ${dateNum} ${monthName}`,
      fullDateLabel: `${dayName}, ${dateNum} ${monthName} ${yearNum}`
    };
  },

  saveLocal() {
    const key = this.currentUser ? `minimal_todo_habits_${this.currentUser.username}` : "minimal_todo_habits_clean";
    localStorage.setItem(key, JSON.stringify(this.habits));
    // Cadangan aman agar tidak pernah hilang
    localStorage.setItem("minimal_todo_habits_clean", JSON.stringify(this.habits));
    this.syncNativeWidgetAndNotification();
  },

  saveJournalLocal() {
    if (Array.isArray(this.journalList)) {
      this.journalList = this.journalList.map(j => this.normalizeJournalEntry(j));
    }
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

    // 1. Render Kartu Jurnal Mikro Paling Atas (Banner) HANYA jika ada catatan di tanggal yang sedang aktif
    const activeJournal = this.journalList.find(j => {
      const norm = this.normalizeJournalEntry(j);
      return norm && norm.dateKey === this.selectedDateKey;
    });

    if (activeJournal) {
      html += `
        <div class="bento-card card-journal-banner" onclick="App.openJournalModal()">
          <div class="journal-banner-header">
            <span class="journal-banner-label">Refleksi ${isToday ? 'Hari Ini' : this.formatShortDate(this.selectedDateKey)}</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="color:#FDE047;">${SVG_ICONS[activeJournal.moodKey] || SVG_ICONS.smile}</span>
              <span style="font-size:10px; color:#9CA3AF;">${activeJournal.moodLabel || 'Bersyukur'}</span>
            </div>
          </div>
          <p class="journal-banner-text">"${activeJournal.reflectionText}"</p>
        </div>
      `;
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

        let scheduleBadge = "";
        if (habit.scheduleType === 'specific' && habit.targetDate) {
          scheduleBadge = `<span class="card-badge badge-specific" title="Jadwal Tanggal ${this.formatShortDate(habit.targetDate)}"><span class="badge-icon">${SVG_ICONS.calendar}</span><span>${this.formatShortDate(habit.targetDate)}</span></span>`;
        } else if (habit.scheduleType === 'days') {
          scheduleBadge = `<span class="card-badge badge-days" title="${habit.date || 'Hari Tertentu'}"><span class="badge-icon">${SVG_ICONS.repeat}</span><span>${habit.date || 'Hari Tertentu'}</span></span>`;
        } else {
          scheduleBadge = `<span class="card-badge badge-daily" title="Rutin Setiap Hari"><span class="badge-icon">${SVG_ICONS.repeat}</span><span>Harian</span></span>`;
        }

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
              <span class="card-badge badge-reminder" title="Alarm ${this.cleanTimeStr(habit.reminderTime)}">
                <span class="badge-icon">${SVG_ICONS.bell}</span>
                <span>${this.cleanTimeStr(habit.reminderTime)}</span>
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
    const sched = habit.scheduleType || "daily";
    if (sched === "days") {
      this.selectedRepeatDays = Array.isArray(habit.repeatDays) && habit.repeatDays.length > 0 ? [...habit.repeatDays] : [3];
      this.selectScheduleType("days");
    } else if (sched === "specific" && habit.targetDate) {
      this.selectScheduleType("specific");
      document.getElementById("habit-input-specific-date").value = habit.targetDate;
      const parts = habit.targetDate.split("-").map(Number);
      if (parts.length === 3) {
        this.formCalendarDate = new Date(parts[0], parts[1] - 1, parts[2]);
      }
      this.onSpecificDateChange(habit.targetDate);
    } else {
      this.selectScheduleType("daily");
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
    this.updateProgressRing();
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
    this.updateProgressRing();
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
          this.updateProgressRing();
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
    } else {
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
    }

    // Refresh statistik riil ke elemen kalender & memori
    const stats = this.calculateRealStats();
    const streakEl = document.getElementById("cal-stat-streak");
    const rateEl = document.getElementById("cal-stat-rate");
    const lvlEl = document.getElementById("cal-stat-level");
    const lvlTitleEl = document.getElementById("cal-stat-level-title");
    if (streakEl) streakEl.textContent = stats.streakCount;
    if (rateEl) rateEl.textContent = `${stats.disciplineRate}%`;
    if (lvlEl) lvlEl.textContent = stats.level;
    if (lvlTitleEl) lvlTitleEl.textContent = stats.levelTitle;

    // Refresh statistik panel memori jika ada di layar
    const memTotal = document.getElementById("mem-stat-completed-total");
    const memStreak = document.getElementById("mem-stat-streak");
    const memRate = document.getElementById("mem-stat-rate");
    const memLvl = document.getElementById("mem-stat-level");
    const memLvlTitle = document.getElementById("mem-stat-level-title");
    if (memTotal) memTotal.textContent = stats.totalCompletedAllTime;
    if (memStreak) memStreak.textContent = stats.streakCount;
    if (memRate) memRate.textContent = `${stats.disciplineRate}%`;
    if (memLvl) memLvl.textContent = stats.level;
    if (memLvlTitle) memLvlTitle.textContent = stats.levelTitle;
  },

  checkAllCompletedCelebration() {
    const todayHabits = this.getHabitsForDate(this.getTodayKey());
    const allDone = todayHabits.length > 0 && todayHabits.every(h => h.completed);
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
    
    // Reset repeat days (default: Rabu / 3)
    this.selectedRepeatDays = [3];
    this.updateRepeatDaysUI();

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
    const btnDays = document.getElementById("sched-btn-days");
    const btnSpecific = document.getElementById("sched-btn-specific");
    if (btnDaily) btnDaily.classList.toggle("active", type === "daily");
    if (btnDays) btnDays.classList.toggle("active", type === "days");
    if (btnSpecific) btnSpecific.classList.toggle("active", type === "specific");

    const daysBox = document.getElementById("custom-days-box");
    if (daysBox) {
      daysBox.style.display = (type === "days") ? "block" : "none";
    }

    const specificBox = document.getElementById("specific-date-box");
    if (specificBox) {
      specificBox.style.display = (type === "specific") ? "flex" : "none";
    }

    if (type === "days") {
      this.updateRepeatDaysUI();
    } else if (type === "specific") {
      const dateInput = document.getElementById("habit-input-specific-date");
      if (dateInput && !dateInput.value) {
        dateInput.value = this.getTodayKey();
      }
      this.onSpecificDateChange(dateInput.value);
      this.renderFormMiniCalendar();
    }
  },

  toggleRepeatDay(dayIndex) {
    if (!Array.isArray(this.selectedRepeatDays)) this.selectedRepeatDays = [];
    const idx = this.selectedRepeatDays.indexOf(dayIndex);
    if (idx > -1) {
      if (this.selectedRepeatDays.length > 1) {
        this.selectedRepeatDays.splice(idx, 1);
      } else {
        this.showToast("Pilih minimal 1 hari aktif", "warning");
      }
    } else {
      this.selectedRepeatDays.push(dayIndex);
      this.selectedRepeatDays.sort((a, b) => a - b);
    }
    this.updateRepeatDaysUI();
  },

  setRepeatDaysPreset(preset) {
    if (preset === 'weekdays') {
      this.selectedRepeatDays = [1, 2, 3, 4, 5];
    } else if (preset === 'weekend') {
      this.selectedRepeatDays = [6, 0];
    } else if (preset === 'today') {
      this.selectedRepeatDays = [(new Date()).getDay()];
    }
    this.updateRepeatDaysUI();
  },

  getRepeatDaysLabel(daysArr) {
    if (!Array.isArray(daysArr) || daysArr.length === 0) return "Hari Tertentu";
    if (daysArr.length === 7) return "Setiap Hari";
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const fullNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    if (daysArr.length === 5 && [1, 2, 3, 4, 5].every(d => daysArr.includes(d))) return "Senin - Jumat";
    if (daysArr.length === 2 && [0, 6].every(d => daysArr.includes(d))) return "Sabtu & Minggu";
    if (daysArr.length === 1) return `Setiap ${fullNames[daysArr[0]]}`;
    return daysArr.map(d => dayNames[d]).join(", ");
  },

  updateRepeatDaysUI() {
    if (!Array.isArray(this.selectedRepeatDays) || this.selectedRepeatDays.length === 0) {
      this.selectedRepeatDays = [3];
    }
    document.querySelectorAll(".btn-repeat-day").forEach(btn => {
      const day = Number(btn.getAttribute("data-day"));
      btn.classList.toggle("active", this.selectedRepeatDays.includes(day));
    });
    const summaryEl = document.getElementById("custom-days-summary-text");
    if (summaryEl) {
      summaryEl.textContent = `Muncul setiap: ${this.getRepeatDaysLabel(this.selectedRepeatDays)}`;
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
    const cleanTime = this.cleanTimeStr(timeStr);
    const hidden = document.getElementById("habit-reminder-time");
    if (hidden) hidden.value = cleanTime;

    const [h, m] = cleanTime.split(":");
    const hourInput = document.getElementById("reminder-hour-input");
    const minInput = document.getElementById("reminder-minute-input");
    if (hourInput) hourInput.value = h || "20";
    if (minInput) minInput.value = m || "30";

    document.querySelectorAll(".btn-time-chip").forEach(b => {
      b.classList.toggle("active", b.textContent.includes(cleanTime));
    });

    const pill = document.getElementById("reminder-summary-text");
    if (pill) pill.textContent = `Aktif: Jam ${cleanTime}`;
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
    const pill = document.getElementById("reminder-summary-text");
    if (pill) pill.textContent = `Aktif: Jam ${timeStr}`;

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
    this.showToast(`Tes Notifikasi: Alarm jam ${timeStr} berbunyi & bergetar!`, "success", 4000);
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
    const todayHabits = this.getHabitsForDate(todayKey);

    todayHabits.forEach(habit => {
      if (habit.reminderEnabled && !habit.completed) {
        const normTime = this.cleanTimeStr(habit.reminderTime);
        if (normTime === currentHHMM && habit.lastNotifiedDate !== todayKey) {
          habit.lastNotifiedDate = todayKey;
          this.triggerNotificationAlert(habit);
          this.saveLocal();
        }
      }
    });
  },

  triggerNotificationAlert(habit) {
    if (!habit) return;
    const title = `Pengingat: ${habit.title}`;
    const message = habit.subtitle || `Waktunya menyelesaikan target ${habit.title}! Jaga ritme disiplinmu hari ini.`;

    // 1. Android Native Notification Bridge
    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.sendNotification === "function") {
      try {
        window.AndroidNativeNotification.sendNotification(title, message);
      } catch (e) {
        console.warn("Android native notification bridge error:", e);
      }
    }

    // 2. Service Worker Notification (Mobile Chrome / PWA / Android Webview)
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      try {
        navigator.serviceWorker.controller.postMessage({
          type: "TRIGGER_NOTIFICATION",
          title: title,
          body: message
        });
      } catch (e) {}
    } else if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification(title, {
          body: message,
          icon: "logo.svg"
        });
      } catch (e) {}
    }

    // 3. Haptic Vibration Feedback
    if ("vibrate" in navigator) {
      try {
        navigator.vibrate([200, 100, 200, 100, 300]);
      } catch (e) {}
    }

    // 4. Audio Chime & In-App Toast
    this.playVictoryChord();
    this.showToast(`${title}: ${message}`, "info", 5000);
  },

  // ==========================================================
  // PUSAT & TES NOTIFIKASI (DIAGNOSTIK & MONITORING)
  // ==========================================================
  openNotificationCenterModal() {
    this.updateNotificationPermissionUI();
    this.renderActiveRemindersList();
    document.getElementById("modal-notif-center").classList.add("open");
  },

  updateNotificationPermissionUI() {
    const pill = document.getElementById("notif-status-pill");
    const btnReq = document.getElementById("btn-request-notif-permission");
    const headerDot = document.getElementById("strava-header-notif-dot");
    const headerText = document.getElementById("strava-header-notif-text");
    const headerBtn = document.getElementById("btn-strava-notif-toggle");

    let isGranted = false;
    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.hasNotificationPermission === "function") {
      try {
        isGranted = window.AndroidNativeNotification.hasNotificationPermission();
      } catch (e) {
        isGranted = true;
      }
    } else if ("Notification" in window) {
      isGranted = (Notification.permission === "granted");
    }

    if (pill) {
      if (isGranted) {
        pill.textContent = "Diizinkan (Aktif)";
        pill.className = "notif-status-badge granted";
        if (btnReq) btnReq.style.display = "none";
      } else {
        pill.textContent = "Belum Diizinkan";
        pill.className = "notif-status-badge denied";
        if (btnReq) btnReq.style.display = "inline-flex";
      }
    }

    if (headerDot) {
      headerDot.className = isGranted ? "strava-bell-dot" : "strava-bell-dot denied";
    }
    const headerChip = document.getElementById("strava-header-notif-chip");
    if (headerText) {
      headerText.textContent = isGranted ? "Notifikasi Aktif" : "Aktifkan Notifikasi";
    }
    if (headerChip) {
      headerChip.textContent = isGranted ? "ON" : "OFF";
    }
    if (headerBtn) {
      headerBtn.classList.toggle("is-active", isGranted);
    }

    const pinnedBtn = document.getElementById("btn-toggle-pinned-bento");
    if (pinnedBtn) {
      const isPinned = localStorage.getItem("minimal_todo_pinned_bento") !== "false";
      pinnedBtn.classList.toggle("active", isPinned);
    }
  },

  togglePinnedBentoSetting() {
    const currentState = localStorage.getItem("minimal_todo_pinned_bento") !== "false";
    const newState = !currentState;
    localStorage.setItem("minimal_todo_pinned_bento", newState ? "true" : "false");
    
    const btn = document.getElementById("btn-toggle-pinned-bento");
    if (btn) btn.classList.toggle("active", newState);

    this.syncNativeWidgetAndNotification();
    this.showToast(newState ? "Widget Bento disematkan di bar notifikasi HP!" : "Bento dilepas dari bar notifikasi HP.", "info");
  },

  syncNativeWidgetAndNotification() {
    if (!window.AndroidNativeNotification) return;

    try {
      const todayKey = this.getTodayKey();
      const todayHabits = this.getHabitsForDate(todayKey);
      const total = todayHabits.length;
      const completed = todayHabits.filter(h => h.completed).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      const stats = typeof this.calculateRealStats === "function" ? this.calculateRealStats() : { streakCount: 0 };
      const streakText = `${stats.streakCount || 0} Hari Streak`;

      // 1. Update Android Home Screen Bento Widget
      if (typeof window.AndroidNativeNotification.updateBentoWidget === "function") {
        window.AndroidNativeNotification.updateBentoWidget(streakText, completed, total);
      }

      // 2. Update Ongoing Pinned Bento Notification
      const isPinnedEnabled = localStorage.getItem("minimal_todo_pinned_bento") !== "false";
      if (typeof window.AndroidNativeNotification.updatePinnedNotification === "function") {
        const title = `Minimal Todo • ${completed}/${total} Selesai (${pct}%)`;
        const summary = `Ritme Disiplin Hari Ini • ${streakText}`;

        const listText = todayHabits.slice(0, 6).map(h => {
          const checkMark = h.completed ? "✓" : "○";
          const time = h.reminderTime ? ` [${h.reminderTime}]` : "";
          return `${checkMark} ${h.title}${time}`;
        }).join("\n");

        window.AndroidNativeNotification.updatePinnedNotification(isPinnedEnabled, title, summary, listText);
      }
    } catch (e) {
      console.warn("Sync native widget & pinned notif error:", e);
    }
  },

  requestSystemNotificationPermission() {
    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.requestNotificationPermission === "function") {
      try {
        window.AndroidNativeNotification.requestNotificationPermission();
      } catch (e) {}
    }
    if ("Notification" in window) {
      Notification.requestPermission().then(() => {
        this.updateNotificationPermissionUI();
      });
    }
    setTimeout(() => this.updateNotificationPermissionUI(), 800);
  },

  sendTestNotificationNow() {
    const testTitle = "Pengingat Minimal Todo (Tes)";
    const testMsg = "Alarm getar dan suara berhasil diuji pada " + new Date().toLocaleTimeString("id-ID") + " WIB.";

    if (window.AndroidNativeNotification && typeof window.AndroidNativeNotification.sendNotification === "function") {
      try {
        window.AndroidNativeNotification.sendNotification(testTitle, testMsg);
      } catch (e) {
        console.warn("Native send error:", e);
      }
    }

    if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification(testTitle, { body: testMsg, icon: "logo.svg" });
      } catch (e) {}
    }

    if ("vibrate" in navigator) {
      try {
        navigator.vibrate([200, 100, 200, 100, 300]);
      } catch (e) {}
    }

    this.playVictoryChord();
    this.showToast("Tes Notifikasi berhasil dikirim! Periksa panel notifikasi HP Anda.", "success", 4000);
  },

  renderActiveRemindersList() {
    const container = document.getElementById("active-reminders-list-container");
    if (!container) return;

    const reminderHabits = this.habits.filter(h => h.reminderEnabled);
    if (reminderHabits.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:16px 8px; color:#6B7280; font-size:12px;">
          Belum ada kartu dengan alarm pengingat aktif.<br>
          Nyalakan toggle "Pengingat & Alarm" saat membuat atau mengedit kartu.
        </div>
      `;
      return;
    }

    container.innerHTML = reminderHabits.map(h => {
      const iconSvg = SVG_ICONS[h.iconSvgKey] || SVG_ICONS.bell;
      const cleanTime = this.cleanTimeStr(h.reminderTime);
      let schedLabel = "Harian";
      if (h.scheduleType === 'days') schedLabel = h.date || "Hari Tertentu";
      else if (h.scheduleType === 'specific') schedLabel = this.formatShortDate(h.targetDate);

      return `
        <div class="active-reminder-row">
          <div class="reminder-row-left">
            <span class="reminder-row-icon">${iconSvg}</span>
            <div class="reminder-row-text">
              <span class="reminder-row-title">${h.title}</span>
              <span class="reminder-row-sub">${schedLabel} • Jam ${cleanTime}</span>
            </div>
          </div>
          <button type="button" class="btn-test-single-reminder" onclick="App.triggerNotificationAlert(App.habits.find(item => item.id === '${h.id}'))" title="Tes Kartu Ini">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Tes</span>
          </button>
        </div>
      `;
    }).join("");
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
      { key: "sparkles", label: "Bersyukur", icon: SVG_ICONS.sparkles },
      { key: "heart", label: "Penuh Cinta", icon: SVG_ICONS.heart },
      { key: "zap", label: "Semangat", icon: SVG_ICONS.zap },
      { key: "sun", label: "Optimis", icon: SVG_ICONS.sun },
      { key: "leaf", label: "Tenang", icon: SVG_ICONS.leaf },
      { key: "coffee", label: "Santai", icon: SVG_ICONS.coffee },
      { key: "meditate", label: "Zen Hening", icon: SVG_ICONS.meditate },
      { key: "star", label: "Bangga", icon: SVG_ICONS.star },
      { key: "target", label: "Fokus", icon: SVG_ICONS.target },
      { key: "music", label: "Ceria", icon: SVG_ICONS.music },
      { key: "moon", label: "Istirahat", icon: SVG_ICONS.moon }
    ];

    const currentKey = document.getElementById("selected-mood-key") ? (document.getElementById("selected-mood-key").value || "smile") : "smile";

    grid.innerHTML = moods.map(m => `
      <button type="button" class="btn-mood-choice ${m.key === currentKey ? 'active' : ''}" 
              data-mood="${m.key}" 
              onclick="App.selectMood('${m.key}')" 
              title="${m.label}">
        <span class="mood-svg-box">${m.icon}</span>
        <span class="mood-choice-label">${m.label}</span>
      </button>
    `).join("");
  },

  selectMood(key) {
    document.querySelectorAll(".btn-mood-choice").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-mood") === key);
    });
    const hidden = document.getElementById("selected-mood-key");
    if (hidden) hidden.value = key;
  },

  handleSaveHabit(e) {
    e.preventDefault();
    const editId = document.getElementById("habit-edit-id").value;
    const title = document.getElementById("habit-input-title").value.trim();
    const subtitle = document.getElementById("habit-input-subtitle").value.trim();
    const scheduleType = document.getElementById("selected-schedule-type").value || "daily";
    let targetDate = null;
    let repeatDays = null;
    let dateLabel = "HARIAN";

    if (scheduleType === "specific") {
      targetDate = document.getElementById("habit-input-specific-date").value || this.getTodayKey();
      dateLabel = this.formatShortDate(targetDate);
    } else if (scheduleType === "days") {
      repeatDays = Array.isArray(this.selectedRepeatDays) && this.selectedRepeatDays.length > 0 ? [...this.selectedRepeatDays] : [3];
      dateLabel = this.getRepeatDaysLabel(repeatDays);
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
    const reminderTime = document.getElementById("habit-reminder-time") ? this.cleanTimeStr(document.getElementById("habit-reminder-time").value) : "20:30";

    if (editId) {
      // Edit habit
      const h = this.habits.find(item => item.id === editId);
      if (h) {
        h.title = title;
        h.subtitle = subtitle;
        h.cardType = cardType;
        h.scheduleType = scheduleType;
        h.targetDate = targetDate;
        h.repeatDays = repeatDays;
        h.date = dateLabel;
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
        repeatDays: repeatDays,
        reminderEnabled: reminderEnabled,
        reminderTime: reminderTime,
        lastNotifiedDate: null,
        currentProgress: cardType === "progressive" ? curProgressVal : 0,
        targetGoal: targetGoal,
        unit: unit,
        date: dateLabel,
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

    // RESET FORM HABIT SETIAP KALI SELESAI INPUT DATA
    const formHabit = document.getElementById("form-create-habit");
    if (formHabit) formHabit.reset();
    const editIdInput = document.getElementById("habit-edit-id");
    if (editIdInput) editIdInput.value = "";
    this.selectCardType("checklist");
    this.selectScheduleType("daily");
    this.selectIconKey("sun");
    this.updateColorLabel("#FDE047");

    this.pushToGoogleSheets(false);
  },

  // ==========================================================
  // 11. ONE-LINE MICRO JOURNAL (CATATAN SYUKUR)
  // ==========================================================
  openJournalModal() {
    // RESET FORM JURNAL SETIAP KALI DIBUKA (BERSIH SETIAP INPUT BARU)
    const formEl = document.getElementById("form-journal");
    if (formEl) formEl.reset();
    const input = document.getElementById("journal-input-text");
    if (input) input.value = "";
    const counter = document.getElementById("journal-char-count");
    if (counter) counter.textContent = "0 / 140";
    this.selectMood("smile");
    this.removeJournalPhoto();
    document.getElementById("modal-journal").classList.add("open");
  },

  handleJournalPhotoSelected(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      this.showToast("Ukuran foto maksimal 8 MB", "warning");
      return;
    }
    const reader = new FileReader();
    reader.onload = (loadEvt) => {
      const dataUrl = loadEvt.target.result;
      const hiddenData = document.getElementById("journal-photo-data");
      if (hiddenData) hiddenData.value = dataUrl;
      const previewImg = document.getElementById("journal-photo-preview-img");
      if (previewImg) previewImg.src = dataUrl;
      const emptyState = document.getElementById("photo-empty-state");
      const previewWrap = document.getElementById("photo-preview-wrap");
      if (emptyState) emptyState.style.display = "none";
      if (previewWrap) previewWrap.style.display = "block";
      this.showToast("Foto kenangan berhasil dipilih!", "info");
    };
    reader.readAsDataURL(file);
  },

  removeJournalPhoto() {
    const input = document.getElementById("journal-photo-input");
    if (input) input.value = "";
    const hidden = document.getElementById("journal-photo-data");
    if (hidden) hidden.value = "";
    const previewImg = document.getElementById("journal-photo-preview-img");
    if (previewImg) previewImg.src = "";
    const emptyState = document.getElementById("photo-empty-state");
    const previewWrap = document.getElementById("photo-preview-wrap");
    if (emptyState) emptyState.style.display = "flex";
    if (previewWrap) previewWrap.style.display = "none";
  },

  handleSaveJournal(e) {
    e.preventDefault();
    const input = document.getElementById("journal-input-text");
    const text = input ? input.value.trim() : "";
    if (!text) {
      this.showToast("Tuliskan sedikit rasa syukurmu hari ini ya!", "warning");
      return;
    }

    const moodKey = document.getElementById("selected-mood-key") ? (document.getElementById("selected-mood-key").value || "smile") : "smile";
    const moodLabels = {
      smile: "Bahagia",
      sparkles: "Bersyukur",
      heart: "Penuh Cinta",
      zap: "Bersemangat",
      sun: "Optimis",
      leaf: "Tenang",
      coffee: "Santai",
      meditate: "Zen Hening",
      star: "Bangga",
      target: "Fokus",
      music: "Ceria",
      moon: "Lega & Istirahat"
    };

    const now = new Date();
    const daysIndo = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthsIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const dayName = daysIndo[now.getDay()];
    const dateNum = now.getDate();
    const monthName = monthsIndo[now.getMonth()];
    const yearNum = now.getFullYear();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const photoData = document.getElementById("journal-photo-data") ? document.getElementById("journal-photo-data").value : "";

    const entry = {
      id: "j_" + Date.now(),
      createdAt: Date.now(),
      dateKey: this.formatDateKey(now),
      date: `${dayName}, ${dateNum} ${monthName}`,
      time: `${timeStr} WIB`,
      fullDateLabel: `${dayName}, ${dateNum} ${monthName} ${yearNum}`,
      reflectionText: text,
      moodKey: moodKey,
      moodLabel: moodLabels[moodKey] || "Bersyukur",
      photoUrl: photoData || null,
      username: this.currentUser ? this.currentUser.username : ""
    };

    this.journalList.unshift(entry);
    this.saveJournalLocal();

    // RESET FORM JURNAL SETIAP KALI SELESAI INPUT DATA
    const formEl = document.getElementById("form-journal");
    if (formEl) formEl.reset();
    if (input) input.value = "";
    const counter = document.getElementById("journal-char-count");
    if (counter) counter.textContent = "0 / 140";
    this.selectMood("smile");
    this.removeJournalPhoto();

    this.renderBentoCards();
    this.closeModal("modal-journal");
    this.showToast("Catatan syukur tersimpan!", "success");
    
    // Sync journal to Google Sheets
    if (this.gasEndpoint) {
      fetch(this.gasEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "save_journal",
          username: this.currentUser ? this.currentUser.username : "",
          journal: entry
        })
      }).catch(err => console.log(err));
    }
  },

  // ==========================================================
  // 12. BESPOKE CALENDAR MATRIX (ANTI-NATIVE DATE PICKER)
  // ==========================================================
  calculateRealStats() {
    // 1. Hitung streak beruntun hari-hari aktif dengan target tuntas
    let streakCount = 0;
    const checkDate = new Date();
    const todayKey = this.getTodayKey();
    const todayHabits = this.getHabitsForDate(todayKey);
    const todayCompletedCount = todayHabits.filter(h => h.completed).length;
    const todayDone = todayHabits.length > 0 && todayCompletedCount === todayHabits.length;

    // Jika hari ini seluruh target tuntas atau ada yang selesai
    if (todayDone || todayCompletedCount > 0) {
      streakCount++;
    }

    // Telusuri hari-hari sebelumnya secara berurutan
    checkDate.setDate(checkDate.getDate() - 1);
    while (true) {
      const key = this.formatDateKey(checkDate);
      const rec = this.history[key];
      // Jika di hari itu persentase >= 50% atau ada target yang selesai
      if (rec && (rec.percentage >= 50 || rec.completedCount > 0)) {
        streakCount++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Fallback: jika streak hitungan riwayat 0 tapi ada habit yang memiliki streak
    const maxCardStreak = this.habits.reduce((max, h) => Math.max(max, Number(h.streak) || 0), 0);
    if (streakCount < maxCardStreak) {
      streakCount = maxCardStreak;
    }

    // 2. Hitung total aktivitas tuntas sepanjang masa
    let totalCompletedHistory = 0;
    Object.values(this.history).forEach(r => {
      totalCompletedHistory += (Number(r.completedCount) || 0);
    });
    const totalCompletedAllTime = totalCompletedHistory + todayCompletedCount;

    // 3. Hitung tingkat disiplin (rata-rata persentase)
    let disciplineRate = 0;
    const entries = Object.values(this.history);
    if (entries.length > 0) {
      const sum = entries.reduce((acc, curr) => acc + (Number(curr.percentage) || 0), 0);
      disciplineRate = Math.round(sum / entries.length);
    } else if (todayHabits.length > 0) {
      disciplineRate = Math.round((todayCompletedCount / todayHabits.length) * 100);
    }

    // 4. Penentuan level & gelar pencapaian (6 Tingkat Progresif Berdasarkan Data Riil)
    let level = "Lvl 1";
    let levelTitle = "Langkah Awal";

    if (streakCount >= 30 || totalCompletedAllTime >= 100) {
      level = "Lvl 6";
      levelTitle = "Master Disiplin";
    } else if (streakCount >= 21 || totalCompletedAllTime >= 60) {
      level = "Lvl 5";
      levelTitle = "Zen Achiever";
    } else if (streakCount >= 14 || totalCompletedAllTime >= 35) {
      level = "Lvl 4";
      levelTitle = "Fokus Mendalam";
    } else if (streakCount >= 7 || totalCompletedAllTime >= 18) {
      level = "Lvl 3";
      levelTitle = "Ritme Terbentuk";
    } else if (streakCount >= 3 || totalCompletedAllTime >= 6) {
      level = "Lvl 2";
      levelTitle = "Konsistensi Tumbuh";
    } else {
      level = "Lvl 1";
      levelTitle = "Langkah Awal";
    }

    return { streakCount, disciplineRate, level, levelTitle, totalCompletedAllTime };
  },

  openCalendarModal() {
    this.switchToCalendarView();
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
             data-day-key="${dayKey}"
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

    // Render Arsip Catatan Syukur Terkelompok Sesuai Kapan Diinputnya
    this.renderJournalArchive();
  },

  renderJournalArchive() {
    const journalWrap = document.getElementById("journal-history-list");
    if (!journalWrap) return;

    if (!this.journalList || this.journalList.length === 0) {
      journalWrap.innerHTML = `
        <div class="empty-journal-state" style="padding: 24px 12px; text-align: center; color: #9CA3AF; font-size: 13px;">
          <div style="display: flex; justify-content: center; margin-bottom: 8px; color: #FDE047;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <p style="margin: 0; font-weight: 700; color: #E5E7EB;">Belum ada arsip catatan syukur</p>
          <p style="margin: 4px 0 0; font-size: 11.5px; color: #71717A;">Tuliskan rasa syukurmu hari ini untuk mengabadikan momen bahagia.</p>
        </div>
      `;
      return;
    }

    // Kelompokkan entri catatan syukur berdasarkan tanggal input riil (dateKey)
    const grouped = {};
    this.journalList.forEach(rawJ => {
      const j = this.normalizeJournalEntry(rawJ);
      if (!j) return;
      const groupKey = j.dateKey;

      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          dateKey: groupKey,
          displayLabel: j.fullDateLabel || j.date || groupKey,
          items: []
        };
      }
      grouped[groupKey].items.push(j);
    });

    // Urutkan grup tanggal secara kronologis dari yang terbaru ke terlama
    const sortedKeys = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
    const todayKey = this.getTodayKey();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = this.formatDateKey(yesterday);

    let html = "";
    sortedKeys.forEach(k => {
      const grp = grouped[k];
      let headerText = grp.displayLabel;
      if (k === todayKey) {
        headerText = `Hari Ini • ${grp.displayLabel}`;
      } else if (k === yesterdayKey) {
        headerText = `Kemarin • ${grp.displayLabel}`;
      } else {
        headerText = grp.displayLabel;
      }

      html += `
        <div class="journal-timeline-group">
          <div class="journal-timeline-header">
            <span class="timeline-date-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FDE047" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <span class="timeline-date-label">${headerText}</span>
            <span class="timeline-count-badge">${grp.items.length} Refleksi</span>
          </div>
          <div class="journal-timeline-cards">
            ${grp.items.map(item => `
              <div class="journal-history-item">
                <div class="journal-item-meta">
                  <span class="journal-item-mood-badge">
                    <span class="mood-badge-icon">${SVG_ICONS[item.moodKey] || SVG_ICONS.smile}</span>
                    <span>${item.moodLabel || 'Bersyukur'}</span>
                  </span>
                  <span class="journal-item-time">${item.time || item.date || ''}</span>
                </div>
                <p class="journal-item-text">"${item.reflectionText}"</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });

    journalWrap.innerHTML = html;
  },

  selectCalendarModalDay(y, m, day) {
    const d = new Date(y, m, day);
    const dayKey = this.formatDateKey(d);
    this.calendarModalSelectedDayKey = dayKey;
    
    // Perbarui styling cell aktif langsung di DOM secara mulus
    const cells = document.querySelectorAll("#calendar-matrix-container .calendar-day-cell");
    cells.forEach(c => {
      if (c.getAttribute("data-day-key") === dayKey) {
        c.classList.add("selected-cal-day");
      } else {
        c.classList.remove("selected-cal-day");
      }
    });

    // Render agenda untuk tanggal yang dipilih tanpa flicker
    this.renderCalendarModalAgenda();
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
                  <span>${this.cleanTimeStr(h.reminderTime)}</span>
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
    this.switchToGridView();
    this.renderHeaderAndLiveCalendar();
    this.renderBentoCards();
    this.updateProgressRing();
    this.showToast(`Menampilkan jadwal untuk tanggal ${this.formatShortDate(this.selectedDateKey)}.`, "info");
  },

  // ==========================================================
  // 13. CLOUD GOOGLE SHEETS & FIREBASE SYNC (TWO-WAY ENGINE)
  // ==========================================================
  openSyncSettings() {
    // Jika proteksi password aktif dan sesi belum terbuka
    const hasPass = Boolean(this.settingsPassword);
    if (hasPass && !this.isSettingsUnlocked) {
      const verifyInput = document.getElementById("settings-verify-input");
      if (verifyInput) verifyInput.value = "";
      document.getElementById("modal-settings-auth").classList.add("open");
      setTimeout(() => { if (verifyInput) verifyInput.focus(); }, 200);
      return;
    }

    document.getElementById("input-gas-url").value = this.gasEndpoint;
    const passInput = document.getElementById("input-settings-password");
    if (passInput) passInput.value = this.settingsPassword || "";
    this.updateSyncStatusLabel();
    document.getElementById("modal-settings").classList.add("open");
  },

  submitSettingsPassword(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("settings-verify-input");
    const entered = input ? input.value.trim() : "";
    const expected = this.settingsPassword || "1234";

    if (entered === expected || !expected) {
      this.isSettingsUnlocked = true;
      this.closeModal("modal-settings-auth");
      this.showToast("Akses Pengaturan Terbuka", "success");
      this.openSyncSettings();
    } else {
      this.showToast("Password Pengaturan salah! Silakan coba lagi.", "danger");
      if (input) {
        input.value = "";
        input.focus();
      }
    }
  },

  async saveSettingsPassword() {
    const input = document.getElementById("input-settings-password");
    const newPass = input ? input.value.trim() : "";
    this.settingsPassword = newPass;
    localStorage.setItem("minimal_todo_settings_password", newPass);

    if (this.gasEndpoint) {
      try {
        this.showToast("Menyimpan password ke Google Sheet...", "info");
        await fetch(this.gasEndpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "update_settings_password",
            password: newPass
          })
        });
      } catch (e) {
        console.warn("Gagal simpan password ke cloud:", e);
      }
    }

    this.showToast(newPass ? "Password pengaturan berhasil disimpan!" : "Proteksi password dinonaktifkan.", "success");
  },

  lockSettingsNow() {
    this.isSettingsUnlocked = false;
    this.closeModal("modal-settings");
    this.showToast("Menu Pengaturan dikunci kembali.", "info");
  },

  togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.type = (input.type === "password") ? "text" : "password";
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
        if (data.settingsPassword) {
          this.settingsPassword = data.settingsPassword;
          localStorage.setItem("minimal_todo_settings_password", data.settingsPassword);
        }

        this.mergeHabitsFromRemote(data.habits);
        
        // Merge jurnal jika ada
        if (Array.isArray(data.journal) && data.journal.length > 0) {
          data.journal.forEach(remoteJ => {
            const normJ = this.normalizeJournalEntry(remoteJ);
            const idx = this.journalList.findIndex(localJ => localJ.id === normJ.id);
            if (idx >= 0) {
              this.journalList[idx] = normJ;
            } else {
              this.journalList.push(normJ);
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
        reminderTime: this.cleanTimeStr(h.reminderTime || "20:30"),
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
        existing.reminderTime = this.cleanTimeStr(rh.reminderTime || existing.reminderTime);
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
          reminderTime: this.cleanTimeStr(rh.reminderTime || "20:30"),
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
    const memArea = document.getElementById("view-memories-panel");
    const calArea = document.getElementById("view-calendar-panel");
    if (mainArea) mainArea.style.display = "flex";
    if (memArea) memArea.style.display = "none";
    if (calArea) calArea.style.display = "none";

    const btnHome = document.getElementById("btn-dock-grid");
    const btnMem = document.getElementById("btn-dock-memory");
    const btnCal = document.getElementById("btn-dock-calendar");
    if (btnHome) btnHome.classList.add("active");
    if (btnMem) btnMem.classList.remove("active");
    if (btnCal) btnCal.classList.remove("active");

    if (mainArea) mainArea.scrollTo({ top: 0, behavior: "smooth" });
  },

  switchToMemoriesView() {
    const mainArea = document.getElementById("main-scroll-area");
    const memArea = document.getElementById("view-memories-panel");
    const calArea = document.getElementById("view-calendar-panel");
    if (mainArea) mainArea.style.display = "none";
    if (memArea) memArea.style.display = "flex";
    if (calArea) calArea.style.display = "none";

    const btnHome = document.getElementById("btn-dock-grid");
    const btnMem = document.getElementById("btn-dock-memory");
    const btnCal = document.getElementById("btn-dock-calendar");
    if (btnHome) btnHome.classList.remove("active");
    if (btnMem) btnMem.classList.add("active");
    if (btnCal) btnCal.classList.remove("active");

    this.renderMemoriesAndStats();
    if (memArea) memArea.scrollTo({ top: 0, behavior: "smooth" });
  },

  switchToCalendarView() {
    const mainArea = document.getElementById("main-scroll-area");
    const memArea = document.getElementById("view-memories-panel");
    const calArea = document.getElementById("view-calendar-panel");
    if (mainArea) mainArea.style.display = "none";
    if (memArea) memArea.style.display = "none";
    if (calArea) calArea.style.display = "flex";

    const btnHome = document.getElementById("btn-dock-grid");
    const btnMem = document.getElementById("btn-dock-memory");
    const btnCal = document.getElementById("btn-dock-calendar");
    if (btnHome) btnHome.classList.remove("active");
    if (btnMem) btnMem.classList.remove("active");
    if (btnCal) btnCal.classList.add("active");

    this.calendarViewDate = new Date();
    this.calendarModalSelectedDayKey = this.selectedDateKey || this.getTodayKey();
    this.renderCalendarMonth();
    if (calArea) calArea.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderMemoriesAndStats() {
    const stats = this.calculateRealStats();
    
    // 1. Update Strava Athlete Header Bar
    const athleteNameEl = document.getElementById("strava-athlete-name");
    const avatarInitialsEl = document.getElementById("strava-avatar-initials");
    const levelTagEl = document.getElementById("strava-athlete-level-tag");
    const streakTagEl = document.getElementById("strava-athlete-streak-tag");
    const streakNumEl = document.getElementById("strava-athlete-streak-num");

    const athleteName = (this.currentUser && (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username)) 
      ? (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username) 
      : "Sahabat Disiplin";
    
    if (athleteNameEl) athleteNameEl.textContent = athleteName;
    if (avatarInitialsEl) {
      const words = athleteName.trim().split(" ");
      const initials = words.length >= 2 
        ? (words[0][0] + words[1][0]).toUpperCase() 
        : athleteName.substring(0, 2).toUpperCase();
      avatarInitialsEl.textContent = initials;
    }
    if (levelTagEl) levelTagEl.textContent = `${stats.level} • ${stats.levelTitle}`;
    if (streakNumEl) {
      streakNumEl.textContent = `${stats.streakCount} Hari Streak`;
    } else if (streakTagEl) {
      streakTagEl.innerHTML = `${SVG_ICONS.flame} <span>${stats.streakCount} Hari Streak</span>`;
    }

    // 2. Update Notification Status on Header Button
    this.updateNotificationPermissionUI();

    // 3. Update Hero Quad Stats & Consistency Score Card
    const memTotal = document.getElementById("mem-stat-completed-total");
    const memStreak = document.getElementById("mem-stat-streak");
    const memRate = document.getElementById("mem-stat-rate");
    const memRateBadge = document.getElementById("mem-stat-rate-badge");
    const memRateSub = document.getElementById("mem-stat-rate-sub");
    const heroCircleFill = document.getElementById("strava-hero-circle-fill");
    const memLvl = document.getElementById("mem-stat-level");
    const memLvlTitle = document.getElementById("mem-stat-level-title");

    if (memTotal) memTotal.textContent = stats.totalCompletedAllTime;
    if (memStreak) memStreak.textContent = stats.streakCount;
    if (memRate) memRate.textContent = `${stats.disciplineRate}%`;
    if (memLvl) memLvl.textContent = stats.level;
    if (memLvlTitle) memLvlTitle.textContent = stats.levelTitle;

    if (memRateBadge) {
      if (stats.disciplineRate >= 80) {
        memRateBadge.textContent = "Atlet Elite";
        memRateBadge.style.color = "#FDE047";
        memRateBadge.style.borderColor = "rgba(253, 224, 71, 0.4)";
        memRateBadge.style.background = "rgba(253, 224, 71, 0.15)";
      } else if (stats.disciplineRate >= 50) {
        memRateBadge.textContent = "Disiplin";
        memRateBadge.style.color = "#FC5200";
        memRateBadge.style.borderColor = "rgba(252, 82, 0, 0.4)";
        memRateBadge.style.background = "rgba(252, 82, 0, 0.15)";
      } else if (stats.disciplineRate >= 20) {
        memRateBadge.textContent = "Ritme Baik";
        memRateBadge.style.color = "#60A5FA";
        memRateBadge.style.borderColor = "rgba(96, 165, 250, 0.4)";
        memRateBadge.style.background = "rgba(96, 165, 250, 0.15)";
      } else {
        memRateBadge.textContent = "Langkah Awal";
        memRateBadge.style.color = "#9CA3AF";
        memRateBadge.style.borderColor = "rgba(255, 255, 255, 0.15)";
        memRateBadge.style.background = "rgba(255, 255, 255, 0.06)";
      }
    }

    if (memRateSub) {
      memRateSub.textContent = `${stats.totalCompletedAllTime} target diselesaikan • ${stats.streakCount} hari konsisten`;
    }

    if (heroCircleFill) {
      const radius = 34;
      const circ = 2 * Math.PI * radius; // 213.63
      const offset = circ - (stats.disciplineRate / 100) * circ;
      heroCircleFill.style.strokeDasharray = `${circ}`;
      heroCircleFill.style.strokeDashoffset = `${offset}`;
    }

    // 4. Render Active Strava Tab Module
    this.switchStravaSubTab(this.currentStravaSubTab || 'feed');
  },

  switchStravaSubTab(tabKey) {
    this.currentStravaSubTab = tabKey;
    const tabs = ["feed", "stats", "trophy", "memories"];
    tabs.forEach(t => {
      const btn = document.getElementById(`strava-tab-${t}`);
      const panel = document.getElementById(`strava-panel-${t}`);
      if (btn) btn.classList.toggle("active", t === tabKey);
      if (panel) panel.style.display = (t === tabKey) ? "flex" : "none";
    });

    // Reset scroll agar kartu profil di atas tidak kepotong atau bergeser saat pindah tab
    const memArea = document.getElementById("view-memories-panel");
    if (memArea) memArea.scrollTop = 0;

    if (tabKey === "feed") {
      this.renderStravaActivityFeed(this.currentStravaFilter || 'all');
    } else if (tabKey === "stats") {
      this.renderStravaWeeklyChart();
      this.renderCategoryBreakdown();
    } else if (tabKey === "trophy") {
      this.renderStravaTrophies(this.calculateRealStats());
    } else if (tabKey === "memories") {
      this.renderMemoriesGallery();
    }
  },

  // ==========================================================
  // STRAVA SIGNATURE 1: GRAFIK VOLUME LATIHAN MINGGUAN (7 HARI)
  // ==========================================================
  renderStravaWeeklyChart() {
    const container = document.getElementById("strava-weekly-chart-container");
    const goalPill = document.getElementById("strava-weekly-goal-pill");
    const subLabel = document.getElementById("strava-weekly-volume-sub");
    if (!container) return;

    const now = new Date();
    // Dapatkan hari Senin awal minggu ini
    const currentDay = now.getDay(); // 0 is Sun, 1 is Mon
    const distanceToMonday = (currentDay + 6) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - distanceToMonday);
    monday.setHours(0, 0, 0, 0);

    const dayShortNames = ["S", "S", "R", "K", "J", "S", "M"]; // Sen, Sel, Rab, Kam, Jum, Sab, Min
    const todayKey = this.getTodayKey();
    let daysCompletedThisWeek = 0;
    let html = "";

    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dKey = this.formatDateKey(d);
      const isToday = (dKey === todayKey);

      let pct = 0;
      let isDone = false;

      if (dKey === todayKey) {
        const todayHabits = this.getHabitsForDate(todayKey);
        const total = todayHabits.length;
        const done = todayHabits.filter(h => h.completed).length;
        pct = total > 0 ? Math.round((done / total) * 100) : 0;
        isDone = total > 0 && done === total;
        if (isDone || done > 0) daysCompletedThisWeek++;
      } else {
        const rec = this.history[dKey];
        if (rec) {
          pct = Number(rec.percentage) || 0;
          isDone = pct >= 80;
          if (isDone || pct >= 50) daysCompletedThisWeek++;
        }
      }

      // Pastikan ada tinggi visual minimal jika ada progress
      const fillHeight = pct > 0 ? Math.max(12, Math.round(pct * 0.88)) : 4;
      const colClasses = ["strava-day-column"];
      if (isToday) colClasses.push("is-today");
      if (isDone) colClasses.push("is-completed");

      html += `
        <div class="${colClasses.join(' ')}" onclick="App.openCalendarDayDetail('${dKey}')" title="${dKey}: ${pct}% Selesai">
          <div class="strava-bar-track">
            <div class="strava-bar-fill" style="height: ${fillHeight}px;"></div>
          </div>
          <span class="strava-day-label">${dayShortNames[i]}</span>
          <span class="strava-day-dot"></span>
        </div>
      `;
    }

    container.innerHTML = html;
    if (goalPill) goalPill.textContent = `${daysCompletedThisWeek}/7 Hari Tuntas`;
    if (subLabel) subLabel.textContent = `Minggu Ini • ${daysCompletedThisWeek} Hari Disiplin`;
  },

  openCalendarDayDetail(dayKey) {
    this.calendarModalSelectedDayKey = dayKey;
    this.openCalendarModal();
  },

  // ==========================================================
  // STRAVA SIGNATURE 2: TROPHY CASE & MILESTONES CABINET
  // ==========================================================
  renderStravaTrophies(stats) {
    const container = document.getElementById("strava-trophies-container");
    if (!container) return;

    const streak = Number(stats.streakCount) || 0;
    const completed = Number(stats.totalCompletedAllTime) || 0;
    const rate = Number(stats.disciplineRate) || 0;
    const journals = this.journalList ? this.journalList.length : 0;

    const trophies = [
      {
        id: "streak_3",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
        title: "Sprint 3 Hari",
        desc: "Jaga streak aktif 3 hari berturut-turut",
        curr: streak,
        target: 3,
        unlocked: streak >= 3
      },
      {
        id: "streak_7",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
        title: "Juara Mingguan",
        desc: "Pertahankan konsistensi 7 hari penuh",
        curr: streak,
        target: 7,
        unlocked: streak >= 7
      },
      {
        id: "streak_30",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        title: "Besi Konsistensi",
        desc: "Capai rekor streak luar biasa 30 hari",
        curr: streak,
        target: 30,
        unlocked: streak >= 30
      },
      {
        id: "volume_10",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        title: "10x Target Tuntas",
        desc: "Tuntaskan 10 target atau sesi fokus",
        curr: completed,
        target: 10,
        unlocked: completed >= 10
      },
      {
        id: "volume_50",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Master Disiplin 50",
        desc: "Selesaikan 50 target sepanjang waktu",
        curr: completed,
        target: 50,
        unlocked: completed >= 50
      },
      {
        id: "gratitude_1",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
        title: "Jiwa Syukur",
        desc: "Tuliskan 1 refleksi syukur pertamamu",
        curr: journals,
        target: 1,
        unlocked: journals >= 1
      },
      {
        id: "gratitude_7",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
        title: "Arsip Bahagia",
        desc: "Kumpulkan 7 catatan syukur berharga",
        curr: journals,
        target: 7,
        unlocked: journals >= 7
      },
      {
        id: "discipline_90",
        iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        title: "Ritme Prima 90%",
        desc: "Tingkat disiplin konsistensi mencapai 90%",
        curr: rate,
        target: 90,
        unlocked: rate >= 90
      }
    ];

    const unlockedCount = trophies.filter(t => t.unlocked).length;
    const totalTrophies = trophies.length;
    const pctUnlocked = Math.round((unlockedCount / totalTrophies) * 100);

    // Update Banner Milestone
    const tierBadge = document.getElementById("strava-trophy-tier-badge");
    const tierTitle = document.getElementById("strava-trophy-tier-title");
    const tierDesc = document.getElementById("strava-trophy-tier-desc");
    const progressFill = document.getElementById("strava-trophy-progress-fill");
    const progressLabel = document.getElementById("strava-trophy-progress-label");
    const summaryBadge = document.getElementById("strava-trophy-summary-badge");

    if (tierBadge) tierBadge.textContent = `LEMARI PRESTASI • ${unlockedCount}/${totalTrophies} TERBUKA`;
    if (tierTitle) {
      if (unlockedCount >= 8) tierTitle.textContent = "Legenda Disiplin Agung";
      else if (unlockedCount >= 5) tierTitle.textContent = "Master Konsistensi Tangguh";
      else if (unlockedCount >= 2) tierTitle.textContent = "Pejuang Ritme Disiplin";
      else tierTitle.textContent = "Langkah Awal Perjalanan";
    }
    if (tierDesc) {
      tierDesc.textContent = unlockedCount === totalTrophies 
        ? "Luar biasa! Seluruh medali kehormatan telah Anda raih dengan sempurna!"
        : `Tinggal ${totalTrophies - unlockedCount} medali lagi untuk membuka seluruh pencapaian.`;
    }
    if (progressFill) progressFill.style.width = `${pctUnlocked}%`;
    if (progressLabel) progressLabel.textContent = `${pctUnlocked}% Terbuka`;
    if (summaryBadge) summaryBadge.textContent = `${unlockedCount}/${totalTrophies} Terbuka`;

    container.innerHTML = trophies.map(t => {
      const progressPct = Math.min(100, Math.round((t.curr / t.target) * 100));
      return `
        <div class="strava-trophy-card ${t.unlocked ? 'unlocked' : 'locked'}" title="${t.desc}">
          <div class="trophy-badge-icon-box">
            ${t.iconSvg}
          </div>
          <h4 class="trophy-card-title">${t.title}</h4>
          <p class="trophy-card-desc">${t.desc}</p>
          <span class="trophy-status-pill">${t.unlocked ? 'Tercapai' : (t.curr + '/' + t.target)}</span>
          ${!t.unlocked ? `
          <div class="trophy-card-progress">
            <div class="trophy-card-progress-bar">
              <div class="trophy-card-progress-fill" style="width: ${progressPct}%;"></div>
            </div>
            <span class="trophy-card-progress-text">${progressPct}% Selesai</span>
          </div>` : ''}
        </div>
      `;
    }).join("");
  },

  // ==========================================================
  // STRAVA SIGNATURE 3: ACTIVITY FEED & TRAINING LOG
  // ==========================================================
  filterStravaActivities(catKey, btnEl) {
    this.currentStravaFilter = catKey;
    const items = document.querySelectorAll(".strava-segmented-filter-item, .strava-filter-pill");
    items.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    this.renderStravaActivityFeed(catKey);
  },

  getKudosCount(id) {
    try {
      const stored = localStorage.getItem("minimal_todo_kudos_map");
      const map = stored ? JSON.parse(stored) : {};
      return map[id] || 0;
    } catch (e) {
      return 0;
    }
  },

  hasGivenKudos(id) {
    try {
      const stored = localStorage.getItem("minimal_todo_kudos_user");
      const set = stored ? JSON.parse(stored) : [];
      return set.includes(id);
    } catch (e) {
      return false;
    }
  },

  giveKudos(id, event) {
    if (event) event.stopPropagation();
    try {
      const storedMap = localStorage.getItem("minimal_todo_kudos_map");
      const map = storedMap ? JSON.parse(storedMap) : {};
      
      const storedUser = localStorage.getItem("minimal_todo_kudos_user");
      const userLikes = storedUser ? JSON.parse(storedUser) : [];

      if (!userLikes.includes(id)) {
        userLikes.push(id);
        map[id] = (map[id] || 0) + 1;
        localStorage.setItem("minimal_todo_kudos_map", JSON.stringify(map));
        localStorage.setItem("minimal_todo_kudos_user", JSON.stringify(userLikes));

        this.showToast("Kudos diberikan! Tetap semangat!", "success");
        if (typeof this.playConfetti === "function") this.playConfetti();
      } else {
        // Toggle unlike
        const idx = userLikes.indexOf(id);
        userLikes.splice(idx, 1);
        map[id] = Math.max(0, (map[id] || 1) - 1);
        localStorage.setItem("minimal_todo_kudos_map", JSON.stringify(map));
        localStorage.setItem("minimal_todo_kudos_user", JSON.stringify(userLikes));
      }

      // Perbarui tombol tanpa re-render penuh
      const countEl = document.getElementById(`kudos-count-${id}`);
      const btnEl = document.getElementById(`kudos-btn-${id}`);
      if (countEl) countEl.textContent = map[id] || 0;
      if (btnEl) {
        const hasLiked = userLikes.includes(id);
        btnEl.classList.toggle("gave-kudos", hasLiked);
        const iconSvg = btnEl.querySelector("svg");
        if (iconSvg) {
          iconSvg.setAttribute("fill", hasLiked ? "#FC5200" : "none");
          iconSvg.setAttribute("stroke", hasLiked ? "#FC5200" : "currentColor");
        }
        btnEl.blur(); // Melepas hover / focus touch seketika di layar HP
      }
    } catch (e) {
      console.warn("Kudos error:", e);
    }
  },

  renderStravaActivityFeed(filter = 'all') {
    const container = document.getElementById("all-schedules-list-container");
    if (!container) return;

    const athleteName = (this.currentUser && (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username))
      ? (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username)
      : "Sahabat Disiplin";

    const athleteInitials = (athleteName.trim().split(" ").length >= 2)
      ? (athleteName.trim().split(" ")[0][0] + athleteName.trim().split(" ")[1][0]).toUpperCase()
      : athleteName.substring(0, 2).toUpperCase();

    // 1. Filter kartu habit
    let filteredHabits = this.habits;
    if (filter !== 'all' && filter !== 'journal') {
      filteredHabits = this.habits.filter(h => {
        const item = ICON_CATALOG.find(i => i.key === h.iconSvgKey);
        return item && item.cat === filter;
      });
    } else if (filter === 'journal') {
      filteredHabits = []; // Hanya tampilkan jurnal
    }

    // 2. Gabungkan aktivitas jurnal jika filter 'all' atau 'journal'
    let activityItems = [];

    // Map habits ke activity item
    filteredHabits.forEach(h => {
      const itemInfo = ICON_CATALOG.find(i => i.key === h.iconSvgKey);
      const catKey = itemInfo ? itemInfo.cat : 'fitness';
      
      let sportTag = "OLAHRAGA";
      if (catKey === 'work') sportTag = "FOKUS & KERJA";
      else if (catKey === 'health') sportTag = "SEHAT & NUTRISI";
      else if (catKey === 'life') sportTag = "GAYA HIDUP";

      activityItems.push({
        type: 'habit',
        id: h.id,
        rawObj: h,
        timestamp: h.updatedAt || Date.now(),
        sportTag: sportTag,
        title: h.title,
        subtitle: h.subtitle || "",
        iconSvg: SVG_ICONS[h.iconSvgKey] || SVG_ICONS.sun,
        completed: Boolean(h.completed),
        streak: Number(h.streak) || 0,
        cardType: h.cardType || 'checklist',
        targetGoal: h.targetGoal || 1,
        unit: h.unit || '',
        currentProgress: h.currentProgress || 0
      });
    });

    // Map journals ke activity item
    if (filter === 'all' || filter === 'journal') {
      (this.journalList || []).forEach(j => {
        activityItems.push({
          type: 'journal',
          id: j.id,
          rawObj: j,
          timestamp: j.createdAt || Date.now(),
          sportTag: "CATATAN SYUKUR",
          title: `Refleksi: ${j.moodLabel || 'Bersyukur'}`,
          subtitle: `"${j.reflectionText}"`,
          iconSvg: SVG_ICONS[j.moodKey] || SVG_ICONS.smile,
          photoUrl: j.photoUrl || null,
          timeLabel: j.date || j.fullDateLabel || "Momen Indah"
        });
      });
    }

    if (activityItems.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:32px 14px; color:#6B7280; font-size:12.5px; line-height:1.6;">
          <div style="display:flex; justify-content:center; margin-bottom:8px; color:#FDE047;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h3"/></svg>
          </div>
          <span style="font-weight:700; color:#FFFFFF;">Belum ada aktivitas di kategori ini.</span><br>
          Mulai habit baru sekarang dan catat kemajuan disiplinmu!
        </div>
      `;
      return;
    }

    // Urutkan dari aktivitas terbaru
    activityItems.sort((a, b) => b.timestamp - a.timestamp);

    container.innerHTML = activityItems.map(act => {
      const kudosCount = this.getKudosCount(act.id);
      const isGaveKudos = this.hasGivenKudos(act.id);

      // KARTU JURNAL BERFOTO (STRAVA PHOTO ACTIVITY)
      if (act.type === 'journal') {
        const photoHtml = act.photoUrl ? `
          <div class="strava-act-photo-wrap">
            <img src="${act.photoUrl}" alt="Foto Kenangan" loading="lazy">
            <div class="strava-photo-overlay-quote">
              ${act.subtitle}
            </div>
          </div>
        ` : `
          <div style="background:#111319; border-radius:12px; padding:12px; font-style:italic; color:#E5E7EB; font-size:13px; line-height:1.5;">
            ${act.subtitle}
          </div>
        `;

        return `
          <div class="strava-activity-card">
            <div class="strava-act-header">
              <div class="strava-act-athlete-left">
                <div class="strava-act-avatar-mini">${athleteInitials}</div>
                <div class="strava-act-meta">
                  <span class="strava-act-author">${athleteName}</span>
                  <span class="strava-act-time">${act.timeLabel}</span>
                </div>
              </div>
              <span class="strava-act-type-tag" style="color:#F472B6; background:rgba(244,114,182,0.12); border-color:rgba(244,114,182,0.3);">${act.sportTag}</span>
            </div>

            <div class="strava-act-title-row">
              <span class="strava-act-icon">${act.iconSvg}</span>
              <h3 class="strava-act-title">${act.title}</h3>
            </div>

            ${photoHtml}

            <div class="strava-act-footer">
              <button type="button" class="strava-kudos-btn ${isGaveKudos ? 'gave-kudos' : ''}" id="kudos-btn-${act.id}" onclick="App.giveKudos('${act.id}', event)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="${isGaveKudos ? '#FC5200' : 'none'}" stroke="${isGaveKudos ? '#FC5200' : 'currentColor'}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span>Kudos</span>
                <span id="kudos-count-${act.id}">${kudosCount}</span>
              </button>

              <button type="button" class="strava-share-story-btn" onclick="App.openInstagramShareModal('${act.id}')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Story IG</span>
              </button>
            </div>
          </div>
        `;
      }

      // KARTU HABIT RESMI (STRAVA 3-METRIC ACTIVITY CARD)
      let targetDisplay = "1 Target";
      if (act.cardType === 'progressive') targetDisplay = `${act.targetGoal} ${act.unit || ''}`;
      else if (act.cardType === 'focus') targetDisplay = `${act.targetGoal} mnt`;

      const statusDisplay = act.completed ? "100% Selesai" : "Sedang Aktif";
      const streakDisplay = act.streak > 0 ? `${act.streak} Hari Streak` : "Hari Ke-1";

      return `
        <div class="strava-activity-card" onclick="App.openQuickActionModal('${act.id}')">
          <div class="strava-act-header">
            <div class="strava-act-athlete-left">
              <div class="strava-act-avatar-mini">${athleteInitials}</div>
              <div class="strava-act-meta">
                <span class="strava-act-author">${athleteName}</span>
                <span class="strava-act-time">Hari Ini • Target Aktif</span>
              </div>
            </div>
            <span class="strava-act-type-tag">${act.sportTag}</span>
          </div>

          <div class="strava-act-title-row">
            <span class="strava-act-icon">${act.iconSvg}</span>
            <h3 class="strava-act-title">${act.title}</h3>
          </div>

          <!-- Signature Strava 3-Column Stats -->
          <div class="strava-metrics-tri-grid">
            <div class="strava-metric-col">
              <span class="strava-metric-title">TARGET</span>
              <span class="strava-metric-val">${targetDisplay}</span>
            </div>
            <div class="strava-metric-col">
              <span class="strava-metric-title">STATUS</span>
              <span class="strava-metric-val ${act.completed ? 'status-done' : 'status-active'}">${statusDisplay}</span>
            </div>
            <div class="strava-metric-col">
              <span class="strava-metric-title">STREAK</span>
              <span class="strava-metric-val text-strava-orange">${streakDisplay}</span>
            </div>
          </div>

          <div class="strava-act-footer">
            <button type="button" class="strava-kudos-btn ${isGaveKudos ? 'gave-kudos' : ''}" id="kudos-btn-${act.id}" onclick="App.giveKudos('${act.id}', event)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isGaveKudos ? '#FC5200' : 'none'}" stroke="${isGaveKudos ? '#FC5200' : 'currentColor'}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>Kudos</span>
              <span id="kudos-count-${act.id}">${kudosCount}</span>
            </button>

            <button type="button" class="strava-share-story-btn" onclick="event.stopPropagation(); App.openInstagramShareModal('${act.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>Share IG</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  renderCategoryBreakdown() {
    const container = document.getElementById("category-breakdown-container") || document.getElementById("memories-category-breakdown");
    if (!container) return;

    const categories = [
      {
        key: "fitness",
        label: "Olahraga & Fisik",
        sub: "Kekuatan, Kardio & Stamina",
        color: "#FC5200",
        badgeClass: "cat-badge-fitness",
        fillClass: "fill-fitness",
        iconSvg: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12M12 2l3 4h-6l3-4z"/></svg>`
      },
      {
        key: "health",
        label: "Nutrisi & Istirahat",
        sub: "Hidrasi, Makanan & Tidur",
        color: "#22C55E",
        badgeClass: "cat-badge-health",
        fillClass: "fill-health",
        iconSvg: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
      },
      {
        key: "work",
        label: "Fokus & Belajar",
        sub: "Deep Work, Belajar & Proyek",
        color: "#60A5FA",
        badgeClass: "cat-badge-work",
        fillClass: "fill-work",
        iconSvg: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
      },
      {
        key: "life",
        label: "Gaya Hidup & Rumah",
        sub: "Mindfulness, Syukur & Hobi",
        color: "#C084FC",
        badgeClass: "cat-badge-life",
        fillClass: "fill-life",
        iconSvg: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      }
    ];

    let html = "";
    categories.forEach(cat => {
      const catHabits = this.habits.filter(h => {
        const item = ICON_CATALOG.find(i => i.key === h.iconSvgKey);
        return item && item.cat === cat.key;
      });

      const total = catHabits.length;
      const completed = catHabits.filter(h => h.completed).length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

      html += `
        <div class="cat-progress-item">
          <div class="cat-meta-row">
            <div class="cat-info-group">
              <div class="cat-icon-badge ${cat.badgeClass}">
                ${cat.iconSvg}
              </div>
              <div class="cat-name-group">
                <span class="cat-name-title">${cat.label}</span>
                <span class="cat-name-sub">${total > 0 ? `${completed}/${total} selesai hari ini` : cat.sub}</span>
              </div>
            </div>
            <span class="cat-count-pct">${pct}%</span>
          </div>
          <div class="cat-bar-track">
            <div class="cat-bar-fill ${cat.fillClass}" style="width:${pct}%;"></div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  renderAllSchedulesList() {
    this.renderStravaActivityFeed(this.currentStravaFilter || 'all');
  },

  renderMemoriesGallery() {
    const container = document.getElementById("memories-gallery-container");
    if (!container) return;

    if (!this.journalList || this.journalList.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:28px 12px; color:#6B7280; font-size:12.5px; line-height:1.6;">
          Belum ada catatan syukur dan foto kenangan.<br>
          Gunakan tombol (+ Syukur) untuk mengabadikan momen indahmu!
        </div>
      `;
      return;
    }

    container.innerHTML = this.journalList.map(item => {
      const moodSvg = SVG_ICONS[item.moodKey] || SVG_ICONS.smile;
      const photoHtml = item.photoUrl ? `
        <img class="memory-photo-thumb" src="${item.photoUrl}" alt="Foto Kenangan" loading="lazy">
      ` : "";

      return `
        <div class="memory-card-item">
          ${photoHtml}
          <div class="memory-meta-header">
            <span style="font-size:12px; font-weight:800; color:#FFFFFF;">${item.fullDateLabel || item.date || 'Kenangan'}</span>
            <span style="font-size:11px; font-weight:700; color:#FDE047; display:flex; align-items:center; gap:4px;">
              ${moodSvg}
              ${item.moodLabel || 'Bersyukur'}
            </span>
          </div>
          <p style="font-size:12.5px; color:#D1D5DB; margin:0; line-height:1.5; font-style:italic;">
            "${item.reflectionText}"
          </p>
          <div class="memory-card-actions">
            <button type="button" class="btn-make-ig-frame" onclick="App.openInstagramShareModal('${item.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>Edit Tipis & Frame IG</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  // ==========================================================
  // STUDIO BINGKAI KARTU INSTAGRAM (STORY 9:16 & FEED 1:1)
  // ==========================================================
  openInstagramShareModal(journalId) {
    let entry = this.journalList.find(j => j.id === journalId);
    if (!entry) {
      entry = this.journalList[0] || {
        id: "sample",
        date: "Kamis, 8 Oktober",
        fullDateLabel: "Kamis, 8 Oktober 2026",
        reflectionText: "Bersyukur atas setiap langkah kecil disiplin.",
        moodLabel: "Bersyukur",
        moodKey: "smile",
        photoUrl: null
      };
    }
    this.currentIgEntry = this.normalizeJournalEntry(entry);
    this.currentIgRatio = 'story';
    this.currentIgTheme = 'strava';
    this.currentIgMode = 'overlay';

    document.querySelectorAll(".btn-ig-option").forEach(b => b.classList.remove("active"));
    const btnStory = document.getElementById("btn-ig-ratio-story");
    const btnStrava = document.getElementById("btn-ig-theme-strava");
    const btnModeOverlay = document.getElementById("btn-ig-mode-overlay");
    const btnModeOutside = document.getElementById("btn-ig-mode-outside");
    if (btnStory) btnStory.classList.add("active");
    if (btnStrava) btnStrava.classList.add("active");
    if (btnModeOverlay) btnModeOverlay.classList.add("active");
    if (btnModeOutside) btnModeOutside.classList.remove("active");

    const tStats = document.getElementById("ig-toggle-stats");
    const tTrophy = document.getElementById("ig-toggle-trophy");
    const tQuote = document.getElementById("ig-toggle-quote");
    const tBrand = document.getElementById("ig-toggle-brand");
    if (tStats) tStats.checked = true;
    if (tTrophy) tTrophy.checked = true;
    if (tQuote) tQuote.checked = true;
    if (tBrand) tBrand.checked = true;

    document.getElementById("modal-instagram-share").classList.add("open");
    setTimeout(() => this.renderInstagramPreview(), 100);
  },

  changeInstagramRatio(ratio) {
    this.currentIgRatio = ratio;
    const btnStory = document.getElementById("btn-ig-ratio-story");
    const btnSquare = document.getElementById("btn-ig-ratio-square");
    if (btnStory) btnStory.classList.toggle("active", ratio === 'story');
    if (btnSquare) btnSquare.classList.toggle("active", ratio === 'square');
    this.renderInstagramPreview();
  },

  changeInstagramTheme(theme) {
    this.currentIgTheme = theme;
    ['strava', 'lemon', 'dark', 'emerald'].forEach(t => {
      const b = document.getElementById(`btn-ig-theme-${t}`);
      if (b) b.classList.toggle("active", t === theme);
    });
    this.renderInstagramPreview();
  },

  changeInstagramMode(mode) {
    this.currentIgMode = mode;
    const btnOverlay = document.getElementById("btn-ig-mode-overlay");
    const btnOutside = document.getElementById("btn-ig-mode-outside");
    if (btnOverlay) btnOverlay.classList.toggle("active", mode === 'overlay');
    if (btnOutside) btnOutside.classList.toggle("active", mode === 'outside');
    this.renderInstagramPreview();
  },

  handleCustomInstagramPhoto(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (file.size > 12 * 1024 * 1024) {
      this.showToast("Ukuran foto maksimal 12 MB", "warning");
      return;
    }
    const reader = new FileReader();
    reader.onload = (loadEvt) => {
      this.customIgPhoto = loadEvt.target.result;
      this.showToast("Foto berhasil dimuat ke Studio Instagram!", "success");
      this.renderInstagramPreview();
    };
    reader.readAsDataURL(file);
  },

  roundRect(ctx, x, y, width, height, radius) {
    if (typeof radius === 'number') {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
  },

  wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 6) {
    const words = text.split(" ");
    let line = "";
    let linesDrawn = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
        linesDrawn++;
        if (linesDrawn >= maxLines - 1 && n < words.length - 1) {
          line += "...";
          break;
        }
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
    return y + lineHeight;
  },

  // Helper menggambar ikon api murni tanpa emoji pada Canvas
  drawCanvasFlame(ctx, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size * 0.45);
    ctx.bezierCurveTo(x + size * 0.35, y - size * 0.25, x + size * 0.45, y + size * 0.15, x, y + size * 0.45);
    ctx.bezierCurveTo(x - size * 0.45, y + size * 0.15, x - size * 0.35, y - size * 0.25, x, y - size * 0.45);
    ctx.fill();
    ctx.restore();
  },

  // Helper menggambar piala murni tanpa emoji pada Canvas
  drawCanvasTrophy(ctx, x, y, size, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = Math.max(1.5, size * 0.08);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Cup
    ctx.beginPath();
    ctx.moveTo(x - size * 0.3, y - size * 0.4);
    ctx.lineTo(x + size * 0.3, y - size * 0.4);
    ctx.lineTo(x + size * 0.25, y);
    ctx.bezierCurveTo(x + size * 0.2, y + size * 0.2, x - size * 0.2, y + size * 0.2, x - size * 0.25, y);
    ctx.closePath();
    ctx.stroke();

    // Stem and Base
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.2);
    ctx.lineTo(x, y + size * 0.35);
    ctx.moveTo(x - size * 0.25, y + size * 0.35);
    ctx.lineTo(x + size * 0.25, y + size * 0.35);
    ctx.stroke();
    ctx.restore();
  },

  renderInstagramPreview() {
    const canvas = document.getElementById("ig-render-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isStory = (this.currentIgRatio === 'story');
    const width = 1080;
    const height = isStory ? 1920 : 1080;
    canvas.width = width;
    canvas.height = height;

    const rawEntry = this.currentIgEntry || {
      fullDateLabel: "Kamis, 8 Oktober 2026",
      reflectionText: "Bersyukur atas setiap langkah kecil disiplin.",
      moodLabel: "Bersyukur",
      photoUrl: null
    };
    const entry = this.normalizeJournalEntry(rawEntry);
    const stats = this.calculateRealStats();

    const showStats = document.getElementById("ig-toggle-stats") ? document.getElementById("ig-toggle-stats").checked : true;
    const showTrophy = document.getElementById("ig-toggle-trophy") ? document.getElementById("ig-toggle-trophy").checked : true;
    const showQuote = document.getElementById("ig-toggle-quote") ? document.getElementById("ig-toggle-quote").checked : true;
    const showBrand = document.getElementById("ig-toggle-brand") ? document.getElementById("ig-toggle-brand").checked : true;

    const athleteName = (this.currentUser && (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username))
      ? (this.currentUser.fullName || this.currentUser.fullname || this.currentUser.username)
      : "Sahabat Disiplin";

    const athleteInitials = (athleteName.trim().split(" ").length >= 2)
      ? (athleteName.trim().split(" ")[0][0] + athleteName.trim().split(" ")[1][0]).toUpperCase()
      : athleteName.substring(0, 2).toUpperCase();

    // Theme Tokens
    let accentColor = "#FC5200";
    let secondaryAccent = "#FDE047";
    let bgGrad = ctx.createLinearGradient(0, 0, width, height);

    if (this.currentIgTheme === 'strava') {
      bgGrad.addColorStop(0, "#090B0E");
      bgGrad.addColorStop(0.5, "#101319");
      bgGrad.addColorStop(1, "#171A22");
      accentColor = "#FC5200";
      secondaryAccent = "#FDE047";
    } else if (this.currentIgTheme === 'lemon') {
      bgGrad.addColorStop(0, "#08090C");
      bgGrad.addColorStop(0.5, "#0F1116");
      bgGrad.addColorStop(1, "#161920");
      accentColor = "#FDE047";
      secondaryAccent = "#FC5200";
    } else if (this.currentIgTheme === 'dark') {
      bgGrad.addColorStop(0, "#020304");
      bgGrad.addColorStop(1, "#0A0B0E");
      accentColor = "#FFFFFF";
      secondaryAccent = "#9CA3AF";
    } else if (this.currentIgTheme === 'emerald') {
      bgGrad.addColorStop(0, "#021A11");
      bgGrad.addColorStop(1, "#052E1E");
      accentColor = "#34D399";
      secondaryAccent = "#FDE047";
    }

    const drawContent = (imgObj) => {
      // MODE 1: OVERLAY (FULL PHOTO IS DOMINANT, COMPONENTS DECORATE MARGINS WITHOUT BLOCKING)
      if (this.currentIgMode === 'overlay') {
        if (imgObj) {
          // Photo fills the canvas with object-fit: cover
          const imgRatio = imgObj.width / imgObj.height;
          const boxRatio = width / height;
          let sx, sy, sw, sh;
          if (imgRatio > boxRatio) {
            sh = imgObj.height;
            sw = sh * boxRatio;
            sx = (imgObj.width - sw) / 2;
            sy = 0;
          } else {
            sw = imgObj.width;
            sh = sw / boxRatio;
            sx = 0;
            sy = (imgObj.height - sh) / 2;
          }
          ctx.drawImage(imgObj, sx, sy, sw, sh, 0, 0, width, height);

          // Top Subtle Vignette (protects header badges, leaves 70% center clear)
          const topVignette = ctx.createLinearGradient(0, 0, 0, 260);
          topVignette.addColorStop(0, "rgba(5, 7, 10, 0.75)");
          topVignette.addColorStop(0.65, "rgba(5, 7, 10, 0.35)");
          topVignette.addColorStop(1, "rgba(5, 7, 10, 0.0)");
          ctx.fillStyle = topVignette;
          ctx.fillRect(0, 0, width, 260);

          // Bottom Subtle Vignette (protects quotes & telemetry badges)
          const botVignette = ctx.createLinearGradient(0, height - 420, 0, height);
          botVignette.addColorStop(0, "rgba(5, 7, 10, 0.0)");
          botVignette.addColorStop(0.4, "rgba(5, 7, 10, 0.45)");
          botVignette.addColorStop(1, "rgba(5, 7, 10, 0.88)");
          ctx.fillStyle = botVignette;
          ctx.fillRect(0, height - 420, width, 420);
        } else {
          // No photo provided: draw aesthetic dark carbon canvas
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, width, height);

          // Mesh grid lines
          ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
          ctx.lineWidth = 1;
          for (let y = 100; y < height; y += 120) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          // Center prompt
          ctx.save();
          ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
          this.roundRect(ctx, width / 2 - 220, height / 2 - 50, 440, 100, 26);
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.stroke();

          ctx.font = "bold 20px 'Outfit', sans-serif";
          ctx.fillStyle = "#FDE047";
          ctx.textAlign = "center";
          ctx.fillText("PILIH FOTO ANDA DENGAN TOMBOL DI BAWAH", width / 2, height / 2 - 6);
          ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
          ctx.fillStyle = "#9CA3AF";
          ctx.fillText("Foto akan ditampilkan penuh & dihias komponen elegan", width / 2, height / 2 + 22);
          ctx.restore();
        }

        // DECORATING COMPONENTS (Corners & Edges Only — Never Obstructing the Center)
        const padX = 48;
        const topY = 64;

        // 1. Top-Left: Brand & Date Capsule
        ctx.save();
        this.roundRect(ctx, padX, topY, 340, 56, 28);
        ctx.fillStyle = "rgba(12, 15, 22, 0.68)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Runner dot
        ctx.fillStyle = accentColor;
        ctx.beginPath();
        ctx.arc(padX + 28, topY + 28, 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "left";
        ctx.fillText("MINIMAL TODO", padX + 48, topY + 34);

        ctx.font = "600 13px 'Outfit', sans-serif";
        ctx.fillStyle = "#9CA3AF";
        const shortDate = (entry.date || "HARI INI").toUpperCase();
        ctx.fillText("• " + shortDate, padX + 172, topY + 34);
        ctx.restore();

        // 2. Top-Right: Trophy Pill (if enabled)
        if (showTrophy) {
          ctx.save();
          const trophyText = `${stats.levelTitle} • ${stats.level}`;
          ctx.font = "bold 15px 'Outfit', sans-serif";
          const tw = ctx.measureText(trophyText).width;
          const pillW = tw + 60;
          const pillX = width - padX - pillW;

          this.roundRect(ctx, pillX, topY, pillW, 56, 28);
          ctx.fillStyle = "rgba(12, 15, 22, 0.68)";
          ctx.fill();
          ctx.strokeStyle = "rgba(253, 224, 71, 0.35)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          this.drawCanvasTrophy(ctx, pillX + 24, topY + 28, 20, "#FDE047");

          ctx.fillStyle = "#FDE047";
          ctx.textAlign = "left";
          ctx.fillText(trophyText, pillX + 44, topY + 34);
          ctx.restore();
        }

        // 3. Bottom Quote Capsule (if enabled)
        let bottomBaseY = height - 120;
        if (showQuote && entry.reflectionText) {
          const quoteBoxY = isStory ? height - 250 : height - 210;
          bottomBaseY = quoteBoxY + 110;

          ctx.save();
          const qW = width - padX * 2;
          this.roundRect(ctx, padX, quoteBoxY, qW, 88, 24);
          ctx.fillStyle = "rgba(12, 15, 22, 0.72)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.font = "italic bold 17px 'Outfit', sans-serif";
          ctx.fillStyle = "#FFFFFF";
          ctx.textAlign = "center";
          this.wrapCanvasText(ctx, `"${entry.reflectionText}"`, width / 2, quoteBoxY + 34, qW - 48, 26, 2);
          ctx.restore();
        }

        // 4. Bottom-Left: Activity & Streak Pill (if enabled)
        if (showStats) {
          ctx.save();
          const statsPillW = 380;
          this.roundRect(ctx, padX, bottomBaseY, statsPillW, 56, 28);
          ctx.fillStyle = "rgba(12, 15, 22, 0.75)";
          ctx.fill();
          ctx.strokeStyle = "rgba(252, 82, 0, 0.4)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          this.drawCanvasFlame(ctx, padX + 26, bottomBaseY + 28, 20, "#FC5200");

          ctx.font = "bold 15px 'Outfit', sans-serif";
          ctx.fillStyle = "#FC5200";
          ctx.textAlign = "left";
          ctx.fillText(`${stats.streakCount} HARI STREAK`, padX + 46, bottomBaseY + 34);

          ctx.fillStyle = secondaryAccent;
          ctx.fillText(`• ${stats.disciplineRate}% DISIPLIN`, padX + 206, bottomBaseY + 34);
          ctx.restore();
        }

        // 5. Bottom-Right: Brand Watermark (if enabled)
        if (showBrand) {
          ctx.save();
          const brandText = `@${athleteName.toUpperCase()}`;
          ctx.font = "bold 14px 'Outfit', sans-serif";
          const bw = ctx.measureText(brandText).width;
          const pillW = bw + 54;
          const pillX = width - padX - pillW;

          this.roundRect(ctx, pillX, bottomBaseY, pillW, 56, 28);
          ctx.fillStyle = "rgba(12, 15, 22, 0.75)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.arc(pillX + 22, bottomBaseY + 28, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#E5E7EB";
          ctx.textAlign = "left";
          ctx.fillText(brandText, pillX + 38, bottomBaseY + 34);
          ctx.restore();
        }

      } else {
        // MODE 2: OUTSIDE (PHOTO AS DOMINANT HERO ~62%, COMPONENTS PLACED CLEANLY BELOW PHOTO)
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        const padX = 48;
        const photoY = 48;
        const photoW = width - padX * 2;
        const photoH = isStory ? 1040 : 540;

        // Draw Hero Photo Box
        ctx.save();
        this.roundRect(ctx, padX, photoY, photoW, photoH, 32);
        ctx.clip();

        if (imgObj) {
          const imgRatio = imgObj.width / imgObj.height;
          const boxRatio = photoW / photoH;
          let sx, sy, sw, sh;
          if (imgRatio > boxRatio) {
            sh = imgObj.height;
            sw = sh * boxRatio;
            sx = (imgObj.width - sw) / 2;
            sy = 0;
          } else {
            sw = imgObj.width;
            sh = sw / boxRatio;
            sx = 0;
            sy = (imgObj.height - sh) / 2;
          }
          ctx.drawImage(imgObj, sx, sy, sw, sh, padX, photoY, photoW, photoH);
        } else {
          // Placeholder gradient
          const phGrad = ctx.createLinearGradient(padX, photoY, padX + photoW, photoY + photoH);
          phGrad.addColorStop(0, "#12141D");
          phGrad.addColorStop(1, "#1A1D29");
          ctx.fillStyle = phGrad;
          ctx.fillRect(padX, photoY, photoW, photoH);

          ctx.font = "bold 20px 'Outfit', sans-serif";
          ctx.fillStyle = "#FDE047";
          ctx.textAlign = "center";
          ctx.fillText("PILIH FOTO SOROTAN ANDA", width / 2, photoY + photoH / 2);
        }
        ctx.restore();

        // Photo Border
        ctx.save();
        this.roundRect(ctx, padX, photoY, photoW, photoH, 32);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // Date pill floating inside hero photo
        ctx.save();
        this.roundRect(ctx, padX + 24, photoY + 24, 260, 44, 22);
        ctx.fillStyle = "rgba(10, 12, 18, 0.72)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "bold 13px 'Outfit', sans-serif";
        ctx.fillStyle = "#FDE047";
        ctx.textAlign = "center";
        ctx.fillText((entry.fullDateLabel || entry.date || "MOMEN DISIPLIN").toUpperCase(), padX + 154, photoY + 52);
        ctx.restore();

        // COMPONENTS PLACED OUTSIDE (BELOW PHOTO)
        let curY = photoY + photoH + 28;

        // 1. Trophy Banner (if enabled)
        if (showTrophy) {
          ctx.save();
          this.roundRect(ctx, padX, curY, photoW, 58, 20);
          ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
          ctx.fill();
          ctx.strokeStyle = "rgba(253, 224, 71, 0.3)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          this.drawCanvasTrophy(ctx, padX + 28, curY + 29, 22, "#FDE047");

          ctx.font = "bold 16px 'Outfit', sans-serif";
          ctx.fillStyle = "#FFFFFF";
          ctx.textAlign = "left";
          ctx.fillText(`PENCAPAIAN: ${stats.levelTitle}`, padX + 54, curY + 35);

          ctx.font = "800 14px 'Outfit', sans-serif";
          ctx.fillStyle = "#FDE047";
          ctx.textAlign = "right";
          ctx.fillText(`PERINGKAT ${stats.level}`, padX + photoW - 24, curY + 35);
          ctx.restore();

          curY += 72;
        }

        // 2. Telemetry Quad Cards (if enabled)
        if (showStats) {
          const colW = (photoW - 36) / 4;
          const colH = isStory ? 104 : 84;
          const statData = [
            { label: "STREAK", val: `${stats.streakCount} HARI`, color: "#FC5200" },
            { label: "DISIPLIN", val: `${stats.disciplineRate}%`, color: secondaryAccent },
            { label: "TUNTAS", val: `${stats.totalCompletedAllTime}`, color: "#22C55E" },
            { label: "STATUS", val: stats.level || "ATLET", color: "#A78BFA" }
          ];

          statData.forEach((st, idx) => {
            const bx = padX + idx * (colW + 12);
            ctx.save();
            this.roundRect(ctx, bx, curY, colW, colH, 18);
            ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.font = "800 12px 'Outfit', sans-serif";
            ctx.fillStyle = "#9CA3AF";
            ctx.textAlign = "left";
            ctx.fillText(st.label, bx + 16, curY + 30);

            ctx.font = "900 20px 'Outfit', sans-serif";
            ctx.fillStyle = st.color;
            ctx.fillText(st.val, bx + 16, curY + (isStory ? 72 : 62));
            ctx.restore();
          });

          curY += colH + 16;
        }

        // 3. Catatan Syukur Quote (if enabled)
        if (showQuote && entry.reflectionText) {
          ctx.save();
          this.roundRect(ctx, padX, curY, photoW, 82, 18);
          ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = "italic 16px 'Outfit', sans-serif";
          ctx.fillStyle = "#D1D5DB";
          ctx.textAlign = "center";
          this.wrapCanvasText(ctx, `"${entry.reflectionText}"`, width / 2, curY + 34, photoW - 36, 24, 2);
          ctx.restore();

          curY += 94;
        }

        // 4. Brand Watermark Footer (if enabled)
        if (showBrand) {
          const footerY = height - 42;
          ctx.save();
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.arc(padX + 10, footerY - 4, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = "bold 14px 'Outfit', sans-serif";
          ctx.fillStyle = "#E5E7EB";
          ctx.textAlign = "left";
          ctx.fillText(`ATLET: ${athleteName.toUpperCase()}`, padX + 26, footerY);

          ctx.font = "700 13px 'Outfit', sans-serif";
          ctx.fillStyle = "#6B7280";
          ctx.textAlign = "right";
          ctx.fillText("MINIMAL TODO • HABIT & FOCUS ENGINE", width - padX, footerY);
          ctx.restore();
        }
      }
    };

    const photoSource = this.customIgPhoto || (entry ? entry.photoUrl : null);
    if (photoSource) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => drawContent(img);
      img.onerror = () => drawContent(null);
      img.src = photoSource;
    } else {
      drawContent(null);
    }
  },

  downloadInstagramCard() {
    const canvas = document.getElementById("ig-render-canvas");
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL("image/png", 1.0);
      const a = document.createElement("a");
      a.download = `MinimalTodo_Story_${Date.now()}.png`;
      a.href = dataUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast("Foto siap diposting ke Instagram Story / Feed!", "success", 4000);
    } catch (e) {
      this.showToast("Gagal mengunduh gambar: " + e.message, "danger");
    }
  },

  async shareInstagramCard() {
    const canvas = document.getElementById("ig-render-canvas");
    if (!canvas) return;

    if (navigator.share && canvas.toBlob) {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          this.downloadInstagramCard();
          return;
        }
        const file = new File([blob], `MinimalTodo_Story_${Date.now()}.png`, { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: "Perjalanan Disiplin Minimal Todo",
              text: "Catatan syukur & refleksi disiplin hari ini.",
              files: [file]
            });
            this.showToast("Berhasil membagikan ke aplikasi!", "success");
            return;
          } catch (e) {
            if (e.name !== "AbortError") {
              this.downloadInstagramCard();
            }
            return;
          }
        }
        this.downloadInstagramCard();
      }, "image/png");
    } else {
      this.downloadInstagramCard();
    }
  },

  showSplashScreen(customMsg = null) {
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

    if (status) status.textContent = customMsg || "Menyiapkan ruang fokus...";

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
  // 14. CUTE FULL-PAGE ONBOARDING & AUTHENTICATION (DESAIN LUCU)
  // ==========================================================
  showFullPageAuth() {
    const screen = document.getElementById("fullpage-auth-screen");
    if (!screen) return;
    screen.style.display = "flex";
    screen.classList.remove("fade-out");
    this.switchCuteAuthTab("login");
  },

  hideFullPageAuth() {
    const screen = document.getElementById("fullpage-auth-screen");
    if (!screen) return;
    screen.classList.add("fade-out");
    setTimeout(() => {
      screen.style.display = "none";
    }, 380);
  },

  switchCuteAuthTab(tab) {
    const tabLogin = document.getElementById("cute-tab-login");
    const tabReg = document.getElementById("cute-tab-register");
    const formLogin = document.getElementById("form-cute-login");
    const formReg = document.getElementById("form-cute-register");
    const title = document.getElementById("cute-auth-main-title");
    const desc = document.getElementById("cute-auth-main-desc");

    if (tab === "register") {
      if (tabLogin) tabLogin.classList.remove("active");
      if (tabReg) tabReg.classList.add("active");
      if (formLogin) formLogin.style.display = "none";
      if (formReg) formReg.style.display = "block";
      if (title) title.textContent = "Daftar Akun Baru";
      if (desc) desc.textContent = "Buat akun barumu agar target dan catatan syukurmu tersimpan rapi & terpisah di Google Sheets!";
    } else {
      if (tabLogin) tabLogin.classList.add("active");
      if (tabReg) tabReg.classList.remove("active");
      if (formLogin) formLogin.style.display = "block";
      if (formReg) formReg.style.display = "none";
      if (title) title.textContent = "Selamat Datang";
      if (desc) desc.textContent = "Masuk dan mulai harimu dengan penuh semangat & target yang tercapai!";
    }
  },

  selectCuteAvatar(key) {
    document.querySelectorAll(".cute-avatar-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-avatar") === key);
    });
    const hidden = document.getElementById("selected-cute-avatar");
    if (hidden) hidden.value = key;
  },

  async handleCuteLogin(e) {
    e.preventDefault();
    const userIn = document.getElementById("cute-login-username");
    const pinIn = document.getElementById("cute-login-pin");
    if (!userIn) return;

    const rawUsername = userIn.value.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    const rawPin = pinIn ? pinIn.value.trim() : "";

    if (!rawUsername || rawUsername.length < 3) {
      this.showToast("Username minimal 3 karakter ya! (huruf, angka, _)", "warning");
      return;
    }

    const btn = document.getElementById("btn-cute-submit-login");
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = "0.7";
    }

    this.showToast(`Menghubungkan ke profil @${rawUsername}...`, "info");

    const userObj = {
      username: rawUsername,
      fullName: rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1),
      pin: rawPin,
      avatarKey: "star",
      loggedInAt: new Date().toISOString()
    };

    // Migrasi data aman: wariskan target lokal yang sudah diinput agar TIDAK ADA YANG HILANG
    const userKey = `minimal_todo_habits_${rawUsername}`;
    const existingUserData = localStorage.getItem(userKey);
    if (!existingUserData && this.habits.length > 0) {
      this.habits.forEach(h => { h.username = rawUsername; });
      localStorage.setItem(userKey, JSON.stringify(this.habits));
    } else if (existingUserData) {
      try {
        this.habits = JSON.parse(existingUserData);
      } catch (err) {}
    }

    this.currentUser = userObj;
    localStorage.setItem("minimal_todo_user", JSON.stringify(userObj));
    this.updateUserProfileUI();

    // Sesuai alur pengguna: login berhasil -> sembunyikan auth -> BARU loading screen muncul -> diarahkan ke isi APK
    this.hideFullPageAuth();
    this.showSplashScreen(`Selamat datang kembali, @${rawUsername}! Menyiapkan ruang fokus...`);

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
      } catch (err) {}

      await this.pullFromGoogleSheets(false);
    }

    if (btn) {
      btn.disabled = false;
      btn.style.opacity = "1";
    }

    this.renderBentoCards();
    this.updateProgressRing();
    this.renderHeaderAndLiveCalendar();
  },

  async handleCuteRegister(e) {
    e.preventDefault();
    const nameIn = document.getElementById("cute-reg-fullname");
    const userIn = document.getElementById("cute-reg-username");
    const pinIn = document.getElementById("cute-reg-pin");
    const avatarIn = document.getElementById("selected-cute-avatar");

    if (!userIn) return;

    const rawName = nameIn ? nameIn.value.trim() : "";
    const rawUsername = userIn.value.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    const rawPin = pinIn ? pinIn.value.trim() : "";
    const avatarKey = avatarIn ? avatarIn.value : "star";

    if (!rawUsername || rawUsername.length < 3) {
      this.showToast("Username minimal 3 karakter ya! (huruf, angka, _)", "warning");
      return;
    }

    const btn = document.getElementById("btn-cute-submit-register");
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = "0.7";
    }

    this.showToast(`Mendaftarkan akun @${rawUsername}...`, "info");

    const userObj = {
      username: rawUsername,
      fullName: rawName || (rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1)),
      pin: rawPin,
      avatarKey: avatarKey,
      registeredAt: new Date().toISOString()
    };

    // Wariskan seluruh habit lokal yang ada agar TIDAK ADA YANG HILANG
    const userKey = `minimal_todo_habits_${rawUsername}`;
    this.habits.forEach(h => { h.username = rawUsername; });
    localStorage.setItem(userKey, JSON.stringify(this.habits));

    this.currentUser = userObj;
    localStorage.setItem("minimal_todo_user", JSON.stringify(userObj));
    this.updateUserProfileUI();

    // Sesuai alur pengguna: daftar berhasil -> sembunyikan auth -> BARU loading screen muncul -> masuk isi APK
    this.hideFullPageAuth();
    this.showSplashScreen(`Menyiapkan petualangan untuk @${rawUsername}...`);

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
      } catch (err) {}

      await this.pushToGoogleSheets(false);
      await this.pullFromGoogleSheets(false);
    }

    if (btn) {
      btn.disabled = false;
      btn.style.opacity = "1";
    }

    this.renderBentoCards();
    this.updateProgressRing();
    this.renderHeaderAndLiveCalendar();
  },

  // ==========================================================
  // 15. PULL-TO-REFRESH (SWIPE KE BAWAH TANPA LOGOUT)
  // ==========================================================
  initPullToRefresh() {
    const mainArea = document.getElementById("main-scroll-area");
    const indicator = document.getElementById("pull-refresh-indicator");
    const textEl = document.getElementById("pull-refresh-text");
    const svgEl = indicator ? indicator.querySelector(".pull-refresh-svg") : null;
    if (!mainArea || !indicator) return;

    let startY = 0;
    let currentY = 0;
    let isPulling = false;
    let isRefreshing = false;
    const threshold = 65;

    mainArea.addEventListener("touchstart", (e) => {
      if (isRefreshing) return;
      if (mainArea.scrollTop <= 0) {
        startY = e.touches[0].clientY;
        isPulling = true;
      } else {
        isPulling = false;
      }
    }, { passive: true });

    mainArea.addEventListener("touchmove", (e) => {
      if (!isPulling || isRefreshing) return;
      currentY = e.touches[0].clientY;
      const pullDist = currentY - startY;

      if (pullDist > 0 && mainArea.scrollTop <= 0) {
        const visualDist = Math.min(85, pullDist * 0.45);
        indicator.style.height = `${visualDist}px`;
        indicator.style.opacity = Math.min(1, visualDist / 40);

        if (svgEl) {
          const deg = Math.min(180, (visualDist / threshold) * 180);
          svgEl.style.transform = `rotate(${deg}deg)`;
        }

        if (visualDist >= threshold) {
          indicator.classList.add("ready");
          if (textEl) textEl.textContent = "Lepaskan untuk menyegarkan...";
        } else {
          indicator.classList.remove("ready");
          if (textEl) textEl.textContent = "Tarik untuk menyegarkan...";
        }
      }
    }, { passive: true });

    const endPull = async () => {
      if (!isPulling || isRefreshing) return;
      isPulling = false;

      if (indicator.classList.contains("ready")) {
        isRefreshing = true;
        indicator.classList.remove("ready");
        indicator.classList.add("refreshing");
        if (textEl) textEl.textContent = "Menyinkronkan data Cloud...";
        indicator.style.height = "52px";

        // Tarik data dari Google Sheets. SESI USER TIDAK AKAN PERNAH LOGOUT!
        try {
          await this.pullFromGoogleSheets(true);
        } catch (err) {}

        if (textEl) textEl.textContent = "Tersinkron!";
        setTimeout(() => {
          indicator.classList.remove("refreshing");
          indicator.style.height = "0px";
          indicator.style.opacity = "0";
          if (svgEl) svgEl.style.transform = "rotate(0deg)";
          isRefreshing = false;
        }, 500);
      } else {
        indicator.style.height = "0px";
        indicator.style.opacity = "0";
        if (svgEl) svgEl.style.transform = "rotate(0deg)";
      }
    };

    mainArea.addEventListener("touchend", endPull, { passive: true });
    mainArea.addEventListener("touchcancel", endPull, { passive: true });
  },

  // ==========================================================
  // 16. BENTO MULTI-USER CLOUD AUTHENTICATION & PROFILE ENGINE
  // ==========================================================
  openAuthModal() {
    if (!this.currentUser) {
      // Jika belum masuk akun, langsung tampilkan Cute Full Page Onboarding!
      this.showFullPageAuth();
      return;
    }

    const modal = document.getElementById("modal-auth");
    if (!modal) return;

    const loggedView = document.getElementById("auth-logged-view");
    const formView = document.getElementById("auth-form-view");

    if (loggedView) loggedView.style.display = "block";
    if (formView) formView.style.display = "none";
    this.updateProfileModalStats();

    modal.classList.add("open");
  },

  showSwitchAccountForm() {
    this.closeModal("modal-auth");
    this.showFullPageAuth();
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

    const userKey = `minimal_todo_habits_${rawUsername}`;
    this.habits.forEach(h => { h.username = rawUsername; });
    localStorage.setItem(userKey, JSON.stringify(this.habits));

    this.currentUser = userObj;
    localStorage.setItem("minimal_todo_user", JSON.stringify(userObj));

    this.updateUserProfileUI();
    this.closeModal("modal-auth");

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

  confirmAction(title, desc, onConfirm) {
    this.showConfirm(title, desc, onConfirm);
  },

  promptLogout() {
    const uname = this.currentUser ? (this.currentUser.fullName || this.currentUser.username) : "akun ini";
    this.showConfirm(
      "Keluar dari Akun?",
      `Apakah Anda yakin ingin keluar dari akun ${uname}? Data pribadi Anda tetap tersimpan aman di Google Sheet.`,
      () => {
        this.executeLogout();
      }
    );
  },

  handleLogout() {
    this.promptLogout();
  },

  executeLogout() {
    const oldUser = this.currentUser ? this.currentUser.username : "";
    if (oldUser) {
      localStorage.setItem(`minimal_todo_habits_${oldUser}`, JSON.stringify(this.habits));
    }
    this.currentUser = null;
    localStorage.removeItem("minimal_todo_user");

    this.updateUserProfileUI();
    this.closeModal("modal-auth");
    this.renderHeaderAndLiveCalendar();
    this.renderBentoCards();
    this.updateProgressRing();
    this.showToast("Berhasil keluar dari akun.", "info");

    // Langsung arahkan kembali ke Full Page Onboarding/Login
    setTimeout(() => this.showFullPageAuth(), 350);
  },

  updateUserProfileUI() {
    const barName = document.getElementById("user-account-name");
    const barStatus = document.getElementById("user-account-status-pill");
    const avatarBadge = document.getElementById("user-avatar-badge");
    const settingsBadge = document.getElementById("settings-user-badge");
    const settingsName = document.getElementById("settings-account-name");
    const settingsHandle = document.getElementById("settings-account-handle");
    const settingsAvatar = document.getElementById("settings-avatar-badge");
    const quickLogoutBtn = document.getElementById("btn-quick-logout");
    const chevronAccount = document.getElementById("chevron-account");

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

      if (quickLogoutBtn) quickLogoutBtn.style.display = "flex";
      if (chevronAccount) chevronAccount.style.display = "none";
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

      if (quickLogoutBtn) quickLogoutBtn.style.display = "none";
      if (chevronAccount) chevronAccount.style.display = "block";
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
