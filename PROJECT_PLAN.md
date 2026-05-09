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
- [ ] Avatar
- [ ] Badge (Beragam warna kategori: Sound, LED, Catering, Tenda, Stage, Status Verified)
- [ ] Breadcrumb
- [ ] Button (Varian: Solid, Outline, Ghost, Link, Icon)
- [ ] Checkbox
- [ ] Empty State Illustration
- [ ] Icon / Item
- [ ] Input
- [ ] Kbd (Keyboard key)
- [ ] Label
- [ ] Progress / Spinner
- [ ] Radio Group
- [ ] Separator
- [ ] Skeleton (Loading state)
- [ ] Slider
- [ ] Switch
- [ ] Textarea
- [ ] Toggle
- [ ] Typography (H1-H6, P, Blockquote, Inline Code)

#### 🧬 Molecules (Kumpulan Atoms)
Gabungan atom fungsional sederhana.
- [ ] Alert
- [ ] Button Group
- [ ] Combobox
- [ ] Date Picker
- [ ] Dropdown Menu
- [ ] Field
- [ ] Hover Card
- [ ] Input Group (Input + Label + Error/Helper Text)
- [ ] Input OTP
- [ ] Native Select
- [ ] Select
- [ ] Sonner / Toast
- [ ] Toggle Group
- [ ] Tooltip

#### 🫀 Organisms (Komponen kompleks)
Kumpulan molecule untuk membentuk bagian UI utuh.
- [ ] Accordion
- [ ] Alert Dialog
- [ ] Aspect Ratio Container
- [ ] Calendar
- [ ] Card (Varian: Stat Card, Data Card, Image Card)
- [ ] Carousel
- [ ] Chart
- [ ] Collapsible
- [ ] Command (Command Palette)
- [ ] Context Menu
- [ ] Data Table (Dengan pagination, sort, search)
- [ ] Dialog / Modal
- [ ] Directional Layout
- [ ] Drawer
- [ ] Hero Banner
- [ ] Menubar
- [ ] Navigation Menu
- [ ] Pagination
- [ ] Popover
- [ ] Resizable Container
- [ ] Scroll Area
- [ ] Sheet
- [ ] Sidebar

---

## 🚀 ROADMAP KOMPREHENSIF: 8 STAGE & 100+ TASK
Rencana pembangunan ujung-ke-ujung berskala masif. Checklist ini wajib dipatuhi dan akan diperbarui (ditandai `x`) seiring progres agar tidak kehilangan konteks jika ada iterasi panjang di tengah jalan.

### STAGE 1: UI Foundation & Dev Tools (± 10 Tasks)
*Tujuan: Membangun fondasi agar pembuatan halaman selanjutnya sangat cepat.*
- [ ] Setup React Router & 3 Master Layouts (Public, Dashboard, Portal).
- [ ] Konfigurasi Design System (Colors, Tipografi Neo-Brutalism, Shadow, Dark/Light mode).
- [x] Membangun UI Docs / Component Library Viewer terpusat (Dengan sistem **Tabs Preview & Code**, serta Variasi Eksahustif).
- [x] Base Atoms: Typography, Button (varian lengkap: icon, social, payment, dll), Input, Label, Badge.
- [x] Base Molecules: Input Group, Card Structure, Alerts, Tabs, Breadcrumbs.
- [ ] Base Organisms: Master Sidebar, Master Header, standard Master DataGrid (Tabel).
- [ ] Membangun Dev Toolbar (Role Switcher) di ujung layar untuk kemudahan demo per-role.
- [ ] Setup Framer Motion base animations (untuk transisi halaman standar).
- [x] Pipeline Setup: Vercel preparation, GitHub Actions (.github/workflows), dan config tests Playwright/Vitest.
- [ ] Standard Form Wrapper & Validation display UI.
- [ ] Standard Dialog/Modal & Drawer (Panel Kanan) component shell.

### STAGE 2: Public Facing Pages (± 15 Tasks)
*Tujuan: Etalase perusahaan dan entry point pembelian tiket (Role: Guest/Public).*
- [ ] Landing Page Utama (Hero Banner Neo-brutalism, Feature USP).
- [ ] Section / Page About Us & Our Team.
- [ ] Section / Page Services yang ditawarkan Nara Events.
- [ ] Section / Page Portfolio / Past Events (Carousel Grid).
- [ ] Section / Page Blog / Artikel (Hanya Mockup UI Grid & Detail).
- [ ] Halaman Event Explorer (Daftar event aktif untuk publik).
- [ ] Halaman Detail Event Publik (Informasi, jadwal, harga tiket).
- [ ] Alur Checkout Tiket Walk-in - Step 1: Pemilihan Tiket.
- [ ] Alur Checkout Tiket Walk-in - Step 2: Data Pemesan.
- [ ] Alur Checkout Tiket Walk-in - Step 3: Pembayaran & Eksekusi.
- [ ] Halaman Sukses Checkout & Download E-Ticket (QR Code).
- [ ] Form Pengajuan Refund Publik (Walk-in).
- [ ] Halaman Status Cek Refund/Pertanyaan Publik.
- [ ] Halaman Contact Us & FAQ.
- [ ] Footer Global Publik.

### STAGE 3: Core Dashboard & Auth (± 10 Tasks)
*Tujuan: Masuk ke sistem dan melihat big picture (Role: Internal/Management).*
- [ ] Layar Login Dashboard & Portal.
- [ ] Layar Register (Untuk Member/Client baru).
- [ ] Layar Lupa Password & Reset Password.
- [ ] Global Main Dashboard (View COO/CEO) - Analitik Utama.
- [ ] Global Dashboard - Penjualan Tiket & Conversion Rate.
- [ ] Header Dashboard - Global Search & Context Switcher.
- [ ] Header Dashboard - Notification Hub Panel.
- [ ] Dashboard Profile Settings & Security.
- [ ] Widget My Tasks / Approval Pendings di Dashboard.
- [ ] Widget Kalender Global di Dashboard.

### STAGE 4: Event Management & Ticketing (± 25 Tasks) 🔥 Paling Kompleks
*Tujuan: Jantung dari operasional Project Manager (PM).*
- [ ] DataGrid Semua Event (Tabel Master dengan filter kompleks).
- [ ] Wizard Creation - Step 1: Info Dasar & Pemilihan Tipe Event.
- [ ] Wizard Creation - Step 2: Set Tanggal & Lokasi (Multi-day support).
- [ ] Wizard Creation - Step 3: Ticketing Setup (Tiers, Harga, Kapasitas).
- [ ] Wizard Creation - Step 4: Lineup / Artis.
- [ ] Wizard Creation - Step 5: Pengajuan Kebutuhan Vendor.
- [ ] Wizard Creation - Step 6: Sponsor Targets.
- [ ] Wizard Creation - Step 7: Checklists Legal & Dokumen.
- [ ] Wizard Creation - Step 8: RAB Builder dinamis (Perakitan Harga).
- [ ] Wizard Creation - Step 9: Otomatisasi Total Anggaran & Margin.
- [ ] Wizard Creation - Step 10: Pengajuan Approval ke COO/Finance.
- [ ] Event Detail - Hub Utama (Status, Progress Setup).
- [ ] Event Detail - Tab RAB (Realisasi vs Rencana).
- [ ] Event Detail - Tab Timeline Kanban (Task Management).
- [ ] Event Detail - Tab Vendors (Kontrak & Status).
- [ ] Event Detail - Tab Ticketing (Live Sales Dashboard per Event).
- [ ] Event Detail - Tab Lineup / Artis (Jadwal Manggung).
- [ ] Event Detail - Tab Dokumen (MoU, SPK, Permit).
- [ ] Scanner App UI - Simulasi Tampilan HP Mobile App.
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

### STAGE 7: Master Data & Settings (± 10 Tasks)
*Tujuan: Halaman administrasi data terpusat (MDM).*
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
