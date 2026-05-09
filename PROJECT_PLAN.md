# 🎨 NARA EVENTS - Sistem Desain & Rencana Pengembangan Komprehensif

Dokumen ini adalah sumber kebenaran (Source of Truth) untuk sistem desain (Design System) berbasis Atomic Design, token visual, dan checklist rencana pengembangan berskala besar untuk proyek Nara Events. Dokumen ini wajib dibaca dan diikuti oleh setiap agen AI atau developer yang berkontribusi pada proyek ini agar konteks tidak hilang.

---
## ⚠️ KRITIKAL: REKONSILIASI MOCKUP PHASE VS TALL STACK PRD

Terdapat dokumen PRD arsitektur lengkap di `/PRD_NARA_EVENTS` yang mendefinisikan Nara ERP menggunakan PHP/Laravel (TALL Stack) dan desain konvensional (SaaS standard).

Untuk fase pengerjaan (Mockup SPA React) saat ini, berlaku **Aturan Override Mutlak** berikut:

1. **Override Visual (UI/UX):** Abaikan spesifikasi `DNA_12_DESIGN_SYSTEM.md` dan `TECH_03` di PRD yang meminta pendekatan visual konvensional SaaS/Filament. Fase Mockup ini **WAJIB menggunakan Neo-Brutalism murni** sesuai yang dijabarkan di dokumen `PROJECT_PLAN.md` ini (Primary Lime, Violet, Strict Black Borders, dll.).
2. **Limitasi State Management:** Dokumen PRD merujuk pada ratusan tabel relasional dan 25 Master Data Collection (MDM) di PostgreSQL. Front-end React Mockup ini **tidak memiliki backend real**. Oleh karena itu:
    * Kita tidak akan membangun sistem data-binding reaktif yang terlalu kompleks layaknya backend DB.
    * Master Data (seperti opsi Vendor, Venue, Kategori) akan dimock lewat JSON statis (`/src/data/mock/`) atau Zustand Stores.
    * Hindari over-engineering form validation (contoh perhitungan pajak/double-entry accounting yang rumit) di sisi client; fokus cukup pada tampilan "Happy Path" layaknya fungsional frontend.
3. **Peringatan Transisi Ekosistem:** Semua komponen canggih dan animasi yang kita rancang di frontend SPA ini (menggunakan Framer Motion/Zustand) harus dirancang agar kelak bisa "diterjemahkan" ke Server-Side rendering Laravel/Livewire oleh tim perakit backend. Usahakan pembuatan 'Dumb Component' semaksimal mungkin.

---

Aplikasi ini mencakup 3 Pintu Utama:
1. **Public Page** (CMS & Copywriting)
2. **Dashboard** (Tools Internal & Rekanan Eksternal Bisnis)
3. **UI Docs** (Dokumentasi sistem desain & DX Tools)

---

## 🎨 ANALISIS DESAIN & ATURAN VISUAL FINAL (MOCKUP REVIEW)

Berdasarkan analisis mockup final (Referensi UI), pendekatan visual menggunakan **Neo-Brutalism Murni** dengan kontras tajam. Aturan ini bersifat mengikat dan menimpa aturan styling standar yang pernah ada:

### 1. Warna & Tema Latar Belakang
Skema warna dirancang mencolok, membedakan boundary state dengan kuat.

*   **Primary/Secondary/Accent:** Gunakan pewarnaan `bg-[#ccff00]` (Lime), `bg-[#8a2be2]` (Violet).
*   **Aturan Emas Border:** Border **SELALU HITAM tebal (`#000000`)** di mode Light maupun Dark untuk menegaskan batas elemen (Brutalism).
*   **Latar Belakang (Dark Mode):** Wajib berwarna **Navy pekat (`#0a192f`)**. Kombinasi Navy dengan elemen pekat menghasilkan ciri khas dark cyberpunk.
*   **Latar Belakang (Light Mode):** Wajib berwarna **Cream terang (`#fdfbf7`)**.
*   **Animasi Background Utama:** Seluruh layer root aplikasi wajib memiliki pola grid linier animasi yang berjalan pelan membentuk semacam lantai arsitektur / retro grid.
*   **Elemen Global / Sidebar:** Navbar/Sidebar dapat memilih desain independen; Sidebar *SELALU* menggunakan background Dark Navy (`#0a192f`), meskipun app di mode Light.
*   **Card Background:** Harus menggunakan variasi warna solid dengan rona pastel dan bold (seperti Hijau, Violet, Peach, Cyan) jika menampilkan status agregat, atau latar solid background biasa.

### 2. Efek Interaksi Taktil (Tactile Elements)
Semua button dan panel aktif (Clickable Card) wajib memancarkan rasa *tactile mechanics* seperti switch sungguhan:

*   **Shadow Drop Utama:** Shadow menggunakan warna solid hitam, tebal (`8px 8px 0px 0px #000` atau setidaknya `4px 4px 0px 0px #000`), ditujukan tegak menyatu langsung dengan pinggir border sehingga tidak terlihat melayang blur kosong.
*   **State Di-Tekan (`active`):** Ini poin terpenting. Saat sebuah tombol diklik pengguna, elemen WAJIB terlihat seakan tenggelam membaur menutupi shadow. Gunakan translasi Tailwind murni sesuai offset bayangan (contoh: `active:translate-y-[*px] active:translate-x-[*px] active:shadow-none`) dengan durasi transisi yang sangat pendek (`transition-all duration-75`). Hindari `framer-motion` untuk elemen klik dasar agar lebih responsif dan snappty.
*   **Hover:** `hover` cukup untuk feedback subtle atau mengangkat naik sedikit (memperlebar shadow), dan memunculkan filter brigthness / warna terik.

### 3. Aturan Resolusi Tipografi Bertingkat (WAJIB DIPATUHI)
Sistem *Body Sans-serif (Inter)* sepenuhnya DICABUT. Berikut adalah fondasi typografi yang baru:

*   **Heading/Teks Ukuran Besar:** SELALU menggunakan font **Space Grotesk** (seperti H1, H2, Title Header besar).
    *   *⚡ OVERRIDE PENULISAN (MUTLAK):* Dilarang keras menggunakan huruf kapital semua berurutan (`UPPERCASE`) pada teks heading ini. Meskipun terlihat membingungkan karena screenshot mockup awal menunjukkan teks *RINGKASAN DASHBOARD* memakai font besar huruf kapital, mandat *developer (user)* telah turun "jangan memakai kapital atau uppercase". Kamu harus format dengan mode `Sentence case` atau `Capitalize`.
*   **Body & Teks Lain:** SELALU menggunakan font **IBM Plex Mono**. Hal ini mencakup semua struktur paragraf bacaan reguler, sub-teks, isi form, navigasi item, label tabel, deskripsi, tag maupun angka statistik. Penggunaan font IBM Plex Mono universal ini menciptakan estetika modern tech yang konsisten.

### 4. Detail Struktur Komponen Spesifik
*   **Dashboard Cards (Bento) Statistik:** Memanfaatkan sudut pembulatan penuh (misalnya `rounded-2xl` atau `rounded-xl`), outline tebal 2px Hitam. Terdiri dari Judul pojok kiri, ikon spesifik terletak di pojok kanan atas berselimut border mini hitam `rounded`, badge stat persentase naik/turun di bagian bawah value nominal yang sangat besar.
*   **Badges:** Berbentuk pipih warna-warni kontras tinggi, ditambahi border hitam solid mutlak, font label *uppercase* menggunakan spesifik kelas IBM Plex Mono.
*   **Panel Peringatan:** Digunakan banner warna kuning menyala terang diposisikan langsung tepat di bawah nav/header sebagai attention bar (`SANDBOX MODE` dsb).

### 4. Metodologi Atomic Design
DILARANG membuat halaman/organism *hardcode* jika elemen dasar belum ada di Atoms. Semua rupa memiliki lebih dari 1 varian bentuk, warna, dan state.

#### 🧱 Atoms (Elemen paling dasar)
Komponen primitif yang tidak bisa dipecah lagi.
- [x] Avatar
- [x] Badge (Beragam warna kategori: Sound, LED, Catering, Tenda, Stage, Status Verified)
- [x] Breadcrumb
- [x] Button (Varian: Solid, Outline, Ghost, Link, Icon)
- [x] Checkbox
- [x] Empty State Illustration
- [ ] Icon / Item
- [x] Input
- [x] Kbd (Keyboard key)
- [x] Label
- [x] Progress / Spinner
- [x] Radio Group
- [x] Separator
- [x] Skeleton (Loading state)
- [x] Slider
- [x] Switch
- [x] Textarea
- [x] Toggle
- [x] Typography (H1-H6, P, Blockquote, Inline Code)

#### 🧬 Molecules (Kumpulan Atoms)
Gabungan atom fungsional sederhana.
- [x] Alert
- [x] Button Group
- [x] Combobox
- [x] Date Picker
- [x] Dropdown Menu
- [x] Field
- [x] Hover Card
- [x] Input Group (Input + Label + Error/Helper Text)
- [x] Input OTP
- [ ] Native Select
- [x] Select
- [x] Sonner / Toast
- [x] Toggle Group
- [x] Tooltip

#### 🫀 Organisms (Komponen kompleks)
Kumpulan molecule untuk membentuk bagian UI utuh.
- [x] Accordion
- [x] Alert Dialog
- [x] Aspect Ratio Container
- [x] Calendar
- [x] Card (Varian: Stat Card, Data Card, Image Card)
- [x] Carousel
- [x] Chart
- [x] Collapsible
- [x] Command (Command Palette)
- [x] Context Menu
- [x] Data Table (Dengan pagination, sort, search)
- [x] Dialog / Modal
- [ ] Directional Layout
- [x] Drawer
- [ ] Hero Banner
- [x] Menubar
- [x] Navigation Menu
- [x] Pagination
- [x] Popover
- [x] Resizable Container
- [x] Scroll Area
- [x] Sheet
- [x] Sidebar

---

## 🚀 ROADMAP KOMPREHENSIF: 8 STAGE & 100+ TASK
Rencana pembangunan ujung-ke-ujung berskala masif. Checklist ini wajib dipatuhi dan akan diperbarui (ditandai `x`) seiring progres agar tidak kehilangan konteks jika ada iterasi panjang di tengah jalan.

### STAGE 1: UI Foundation & Dev Tools (± 10 Tasks)
*Tujuan: Membangun fondasi agar pembuatan halaman selanjutnya sangat cepat.*
- [x] Setup React Router & 3 Master Layouts (Public, Dashboard, Portal).
- [x] Konfigurasi Design System (Colors, Tipografi Neo-Brutalism, Shadow, Dark/Light mode).
- [x] Membangun UI Docs / Component Library Viewer terpusat (Dengan sistem **Tabs Preview & Code**, serta Variasi Eksahustif).
- [x] Base Atoms: Typography, Button (varian lengkap: icon, social, payment, dll), Input, Label, Badge.
- [x] Base Molecules: Input Group, Card Structure, Alerts, Tabs, Breadcrumbs.
- [x] Base Organisms: Master Sidebar, Master Header, standard Master DataGrid (Tabel).
- [x] Membangun DX Toolbar Lanjutan (Role Switcher, MSW Network Mock Toggle, Zustand State Inspector, A11y Visualizer).
- [x] Setup Framer Motion base animations (untuk transisi halaman standar).
- [x] Pipeline & Test Setup: Vitest (Unit/Hook tests), Playwright (E2E flows config), dan GitHub Actions. Termasuk file script `test`, `test:ui`, `test:e2e` di package.json.
- [x] Standard Form Wrapper & Validation display UI.
- [x] Standard Dialog/Modal & Drawer (Panel Kanan) component shell.

### STAGE 2: Public Facing Pages (± 15 Tasks)
*Tujuan: Etalase perusahaan dan entry point pembelian tiket (Role: Guest/Public).*
*Penting: Copywriting murni berfokus pada NARA EVENTS sebagai Event Organizer profesional (Company Profile B2B/B2C), bukan menampilkan aplikasi ERP ini.*
*Referensi Dokumen:* `DNA_01_SOFTWARE_OVERVIEW.md` (Zona Halaman Publik), `DNA_06_USER_JOURNEY.md` (Alur 6A/6B: Eksplorasi & Checkout).
- [x] Landing Page Utama (Hero Banner Neo-brutalism, Feature USP NARA Events sbg EO, Navigasi).
- [x] Section / Page About Us & Our Team.
- [x] Section / Page Services yang ditawarkan Nara Events.
- [x] Section / Page Portfolio / Past Events / Gallery (Carousel & Masonry Grid).
- [x] Section / Page Our Clients / Partners (Logo showcase & Testimonial).
- [x] Section / Page Blog / Artikel / News (Hanya Mockup UI Grid & Detail).
- [ ] Halaman Event Explorer (`/events` - Daftar event aktif untuk publik).
- [ ] Halaman Detail Event Publik (`/events/[slug]` - Informasi, jadwal, harga tiket). *Ref: DNA_11 (Tabel events).*
- [ ] Alur Checkout Tiket Walk-in - Step 1: Pemilihan Tiket (`/checkout/[id]/step-1`). *Ref: DNA_06 (Pasal 2.1), DNA_11 (Tabel tickets).*
- [ ] Alur Checkout Tiket Walk-in - Step 2: Data Pemesan (Form Identity + Zod validation). *Ref: DNA_11 (Tabel ticket_owners).*
- [ ] Alur Checkout Tiket Walk-in - Step 3: Pembayaran & Eksekusi (Review ringkasan).
- [ ] Halaman Sukses Checkout & Download E-Ticket (QR Code). *Ref: DNA_06 (Pasal 2.3).*
- [ ] Form Pengajuan Refund Publik (Walk-in). *Ref: DNA_06 (Pasal 3.1).*
- [ ] Halaman Status Cek Refund/Pertanyaan Publik.
- [ ] Halaman Contact Us & FAQ.
- [ ] Footer Global Publik.

### STAGE 3: Core Dashboard & Auth (± 10 Tasks)
*Tujuan: Masuk ke sistem dan melihat big picture (Role: Internal/Management).*
*Referensi Dokumen:* `TECH_02_RBAC.md` (Roles & Permissions), `DNA_11_DATABASE_SCHEMA.md` (Tabel users).
- [ ] Layar Login Dashboard & Portal (Validasi kredensial statis).
- [ ] Layar Register (Untuk Member/Client baru).
- [ ] Layar Lupa Password & Reset Password.
- [ ] Global Main Dashboard (View COO/CEO) - Analitik Utama. *Ref: DNA_01 (Zona Dashboard).*
- [ ] Global Dashboard - Penjualan Tiket & Conversion Rate.
- [ ] Header Dashboard - Global Search & Context Switcher.
- [ ] Header Dashboard - Notification Hub Panel.
- [ ] Dashboard Profile Settings & Security.
- [ ] Widget My Tasks / Approval Pendings di Dashboard. *Ref: DNA_06 (Pasal Approval).*
- [ ] Widget Kalender Global di Dashboard.

### STAGE 4: Event Management & Ticketing (± 25 Tasks) 🔥 Paling Kompleks
*Tujuan: Jantung dari operasional Project Manager (PM).*
*Referensi Dokumen:* `DNA_06_USER_JOURNEY.md` (Pasal 1: Event Creation & RAB), `DNA_11_DATABASE_SCHEMA.md` (Skema Inti: Events, RAB, Lineups, Sponsorships). Menganut konsep data-binding DTO yang robust.
- [ ] DataGrid Semua Event (Tabel Master dengan filter kompeks).
- [ ] Wizard Creation - Step 1: Info Dasar & Pemilihan Tipe Event. *Ref: DNA_11.*
- [ ] Wizard Creation - Step 2: Set Tanggal & Lokasi (Multi-day support). *Ref: DNA_09 (Master Venues).*
- [ ] Wizard Creation - Step 3: Ticketing Setup (Tiers, Harga, Kapasitas).
- [ ] Wizard Creation - Step 4: Lineup / Artis.
- [ ] Wizard Creation - Step 5: Pengajuan Kebutuhan Vendor.
- [ ] Wizard Creation - Step 6: Sponsor Targets.
- [ ] Wizard Creation - Step 7: Checklists Legal & Dokumen.
- [ ] Wizard Creation - Step 8: RAB Builder dinamis (Perakitan Harga). *Ref: DNA_06 (Pasal RAB Creation).*
- [ ] Wizard Creation - Step 9: Otomatisasi Total Anggaran & Margin.
- [ ] Wizard Creation - Step 10: Pengajuan Approval ke COO/Finance. *Ref: TECH_02_RBAC.*
- [ ] Event Detail - Hub Utama (Status, Progress Setup).
- [ ] Event Detail - Tab RAB (Realisasi vs Rencana).
- [ ] Event Detail - Tab Timeline Kanban (Task Management).
- [ ] Event Detail - Tab Vendors (Kontrak & Status).
- [ ] Event Detail - Tab Ticketing (Live Sales Dashboard per Event).
- [ ] Event Detail - Tab Lineup / Artis (Jadwal Manggung).
- [ ] Event Detail - Tab Dokumen (MoU, SPK, Permit).
- [ ] Scanner App UI - Simulasi Tampilan HP Mobile App. *Ref: DNA_06 (Pasal 2.4 - Ticket Redemption).*
- [ ] Scanner App UI - Loading UI & Scan Result (Valid/Invalid/Duplicate).
- [ ] Scanner App UI - Manual Check-in Search.
- [ ] Management Tiket - Form Reschedule Tiket Participant.
- [ ] Management Tiket - List Data Peserta (Exportable).
- [ ] Management Venue - Visual Mapping/Seating Mockup Sandbox.
- [ ] Laporan Pasca-Event (Event Recap Dashboard).

### STAGE 5: Finance, Accounting & HR (± 15 Tasks)
*Tujuan: Menampilkan aliran dana dan rekrutmen/approval.*
- [ ] Finance - Global Finance Dashboard.
- [ ] Finance - Halaman Approval Queue (Menampilkan level persetujuan untuk Transaksi/RAB/Refund).
- [ ] Finance - DataGrid Invoices (Account Receivables).
- [ ] Finance - DataGrid Purchase Orders (Account Payables).
- [ ] Finance - Detail Invoice & Form Pencetakan.
- [ ] Finance - Form Pencatatan Petty Cash (Mockup OCR autofill form).
- [ ] Finance - Laporan Laba/Rugi (P&L Mock).
- [ ] Transaksi - Daftar Transaksi Masuk (Bank Integrations Mock).
- [ ] Transaksi - Daftar Transaksi Keluar.
- [ ] HR - Direktori List Karyawan Inti.
- [ ] HR - Direktori List Kru Freelance.
- [ ] HR - Detail Profil Karyawan & Histori Proyek.
- [ ] HR - Kalender Penjadwalan Kru per Event.
- [ ] HR - Portal Modul Penggajian (Payroll Master).
- [ ] HR - Slip Gaji Generator Mockup.

### STAGE 6: External Portals (Ekosistem Luar) (± 15 Tasks)
*Tujuan: Layar portal independen berdasarkan Role yang login.*
- [ ] **Portal Vendor:** Dashboard Supplier.
- [ ] **Portal Vendor:** Brief & Tenders List (Bidding opportunities).
- [ ] **Portal Vendor:** Form Submit Penawaran (Quotation).
- [ ] **Portal Vendor:** Upload Invoice / Tagihan ke Nara Events.
- [ ] **Portal Vendor:** Riwayat Pembayaran diterima.
- [ ] **Portal Sponsor:** Dashboard Sponsorship.
- [ ] **Portal Sponsor:** Daftar Proposal masuk dari Nara.
- [ ] **Portal Sponsor:** Evaluasi & Laporan Dampak Event (ROI, Engagement).
- [ ] **Portal Klien:** Project Tracker Dashboard (Untuk klien B2B).
- [ ] **Portal Klien:** Timeline & Kanban View.
- [ ] **Portal Klien:** Daftar Tagihan/Invoice Klien.
- [ ] **Portal Member (Peserta):** Dashboard Profil.
- [ ] **Portal Member:** Tiket Saya (Menampilkan QR Code aktif).
- [ ] **Portal Member:** Histori Pembelian & Reward Poin UI.
- [ ] **Portal Member:** Validasi Identitas (Mockup e-KTP/NIK form).

### STAGE 7: CMS, Master Data & Settings (± 15 Tasks)
*Tujuan: Halaman administrasi data terpusat (MDM) dan pengelolaan konten Publik (CMS).*
- [ ] CMS - Manajemen Artikel Blog & News (DataGrid & Editor Form).
- [ ] CMS - Manajemen Portfolio, Past Events & Gallery.
- [ ] CMS - Manajemen Our Clients / Partners.
- [ ] CMS - Manajemen Konten Landing Page (Hero, USP, Testimonial).
- [ ] Pengaturan Profil Perusahaan & Branding.
- [ ] Settings - Feature Flags UI (Enable/Disable module).
- [ ] Settings - Role & Permissions Matrix (Tabel Checklist).
- [ ] MDM - DataGrid Kategori Event & Tags.
- [ ] MDM - Direktori Master Venues (Lokasi).
- [ ] MDM - Direktori Akun Bank & Payment Gateways.
- [ ] MDM - Pajak & Setup PPN.
- [ ] Security - Log Aktivitas (Audit Trail).
- [ ] Integrations - Setup API Keys (Mockup UI).
- [ ] Email Templates - Editor UI standar.

### STAGE 8: Polishing & Interaction (± 10 Tasks)
*Tujuan: Menyempurnakan kesan "Realistis" dan UX responsif.*
- [ ] Implementasi Drawer (Panel Kiri/Kanan) pada tabel master data untuk Detail View.
- [ ] Implementasi Context Menu (Klik Kanan) & Popover pada DataGrids.
- [ ] Transisi halaman menyeluruh (framer-motion page router ringan).
- [ ] Penyempurnaan Error Boundaries & 404 Pages yang kreatif.
- [ ] Empty States Illustration diseluruh sistem (Bukan sekedar tabel kosong).
- [ ] Setup Loading Skeletons yang spesifik (bukan sekedar blok abu).
- [ ] Interaksi Drag & Drop (Mockup visual) di Kanban Board / Timeline.
- [ ] Finalisasi Styling Neo-brutalism (Memastikan Border hitam & Shadow konsisten).
- [ ] Audit Aksesibilitas (Contrast, Focus Rings).
- [ ] Freeze Stage & Penyerahan Hasil Akhir Mockup.
