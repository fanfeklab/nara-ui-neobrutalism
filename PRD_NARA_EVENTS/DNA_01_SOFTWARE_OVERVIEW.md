---
title: "DNA_01 - Software Overview — Nara ERP"
description: "Peta besar seluruh sistem Nara ERP: grup menu, menu, submenu, fungsi, dan arsitektur modular. Dokumen ini adalah titik masuk utama bagi AI Agent untuk memahami struktur aplikasi secara menyeluruh sebelum masuk ke detail teknis. Sepenuhnya agnostik terhadap stack teknologi."
author: "Nara Project Planner (Hanif — Lead Principal Architect & Software Engineering)"
date: 2026-05-07
tags: ["software_overview", "menu_structure", "architecture", "module", "feature_flags", "agnostic"]
category: "Foundation"
ai_context:
  goal: "Menyediakan peta visual dan struktural yang komprehensif tentang seluruh sistem Nara ERP. AI Agent wajib membaca dokumen ini paling awal untuk memahami 'big picture' sebelum mengerjakan task."
  target_audience: "Agen AI, Developer, Architect, Lead Engineer"
  constraints: "Dokumen ini tidak terikat stack teknologi. Semua menu dan halaman didefinisikan secara agnostik. Tidak mengandung kode."
language: "id"
---

# SOFTWARE OVERVIEW — NARA ERP

> **Nama File:** `DNA_01_SOFTWARE_OVERVIEW.md`
> **Kode Dokumen:** `DOC-OVERVIEW`
> **Sifat:** Peta Besar Sistem
> **Versi:** 1.0.0 — Agnostic Foundation
> **Rujuk ke:** [DNA_02_DEVELOPMENT_PHILOSOPHY.md](./DNA_02_DEVELOPMENT_PHILOSOPHY.md), [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md)

---

## 1. Ikhtisar Sistem

Nara ERP adalah platform operasional internal terpadu untuk PT Nara Sukses Bersama. Sistem ini dibangun sebagai **Modular Monolith** di mana setiap modul bisnis berdiri sendiri, dapat diaktifkan/dinonaktifkan melalui **Feature Flags**, dan berkomunikasi melalui **Events & Interface Contracts**.

### 1.1 Tiga Zona Aplikasi

| Zona | Audiens | Deskripsi |
|---|---|---|
| **Dashboard Internal** | 10 Role Internal (CEO, COO, CFO, PM, Finance Manager, HR Manager, Legal Officer, Staff Operasional, HR Staff, Admin Officer) | Kokpit operasional untuk mengelola seluruh bisnis. |
| **Portal Eksternal** | 4 Role Eksternal (Vendor, Sponsor, Client, Peserta Member) | Portal terbatas untuk stakeholder luar. |
| **Halaman Publik** | Publik (Calon Klien, Calon Peserta Walk-in) | Landing page, blog, portfolio, checkout tiket, refund Walk-in. Tidak menampilkan istilah teknis. |

---

## 2. Struktur Menu Dashboard Internal

### 2.1 Grup Menu: Dashboard

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Home** | — | Dashboard utama dengan widget ringkasan bisnis: event aktif, invoice pending, leads terkonversi, tasks belum selesai, grafik overview. |

### 2.2 Grup Menu: Event Management

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Semua Event** | — | DataGrid seluruh event dengan filter: status, kategori, tanggal, PM. |
| **Buat Event Baru** | — | Membuka **Event Wizard** 10/11 langkah (branching berdasarkan Project Type). |
| **Kategori Event** | — | CRUD `event_categories` (MDM). |
| **Venue** | — | CRUD `venues` (MDM). |

**Halaman Detail Event** (`/dashboard/events/{slug}`) memiliki tab:
- **Overview**: Info dasar event (judul, tanggal, venue, status, progress bar).
- **RAB**: Dynamic form builder untuk item RAB. Total otomatis dihitung.
- **Timeline & Checklist**: Kanban/List view milestone + checklist interaktif.
- **Vendor**: Daftar vendor yang terlibat, status, brief.
- **Sponsor**: Daftar sponsor, tier, proposal, status (hanya untuk event promotor).
- **Client**: Data client, RFP, progres (hanya untuk event client_event).
- **Tiket**: Konfigurasi tiket (tipe, harga, kuota, aturan pembelian).
- **Check-in**: Antarmuka scan QR + counter hadir (untuk staff operasional di hari H).
- **Dokumen Legal**: Checklist dokumen & izin, upload file.
- **Honor Freelance**: Manajemen honor untuk freelancer yang terlibat.

### 2.3 Grup Menu: Finance & Accounting

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Chart of Accounts** | — | CRUD COA. Hierarki akun, soft delete. |
| **General Ledger** | — | DataGrid journal entries. Filter: tanggal, akun, event. |
| **Jurnal Baru** | — | Form double-entry journal. Validasi: DEBIT = CREDIT. |
| **Invoice** | Semua Invoice, Buat Invoice | DataGrid + form. Status lifecycle: draft → sent → paid → overdue. |
| **Purchase Order** | Semua PO, Buat PO | DataGrid + form. Status lifecycle: draft → sent → accepted → received. |
| **Petty Cash** | Riwayat, Catat Pengeluaran | DataGrid + form dengan upload nota & OCR auto-fill. |
| **Approval Queue** | — | Antrian persetujuan transaksi. Level 1 (Finance Manager) dan Level 2 (CFO untuk > 10jt). |
| **Refund Queue** | — | Antrian refund request. Filter: walkin, suspicious. |
| **Payroll** | — | Manajemen penggajian. |

### 2.4 Grup Menu: Human Resources

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Karyawan** | Semua Karyawan, Tambah Karyawan | CRUD data karyawan tetap. |
| **Freelance** | Semua Freelance, Tambah Freelance | CRUD data tenaga lepas. |
| **Jadwal Kru** | — | Kalender penugasan kru. Conflict detection. |
| **Honor** | — | Manajemen honor freelance per event. |
| **Rekrutmen** | — | Pipeline rekrutmen (opsional). |

### 2.5 Grup Menu: CRM & Sales

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Klien** | Semua Klien, Tambah Klien, Grup, Industri | CRUD data klien. Segmentasi grup dan industri (MDM). |
| **Leads** | Semua Leads, Tambah Lead, Sumber, Status, Web to Lead | Manajemen prospek. Kanban view pipeline. Konversi lead → klien. |
| **Proposal** | Semua Proposal, Buat Proposal, Template | Proposal builder. Draft AI-generated. Kirim via email. |
| **Estimasi** | Semua Estimasi, Buat Estimasi | Estimasi builder. Konversi ke invoice. |
| **Sales Pipeline** | — | Kanban pipeline penjualan. |

### 2.6 Grup Menu: Vendor Management

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Vendor** | Semua Vendor, Tambah Vendor, Kategori | CRUD data vendor. Kategori vendor (MDM). |
| **Brief** | Semua Brief, Buat Brief | Manajemen brief ke vendor. Status tracking. |
| **Evaluasi** | — | Penilaian performa vendor. Rating 1–5. |

### 2.7 Grup Menu: Sponsor Management

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Sponsor** | Semua Sponsor, Tambah Sponsor, Tier | CRUD data sponsor. Tier sponsor (MDM). |
| **Proposal Sponsor** | Semua Proposal, Generate Proposal | Proposal sponsorship. AI-generated. |
| **Laporan Sponsor** | — | Laporan dampak pasca-acara. |

### 2.8 Grup Menu: Ticketing & Check-in

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Tiket** | Semua Tiket, Tipe Tiket | Manajemen tiket terjual. CRUD tipe tiket (MDM). |
| **Kode Booking** | — | Pelacakan kode booking. Refund processing. |
| **Check-in** | Scanner | Antarmuka scan QR untuk check-in. Mode offline. |

### 2.9 Grup Menu: Legal & Compliance

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **SOP** | Semua SOP, Tambah SOP | Manajemen SOP. Versioning. Approval workflow. |
| **Kontrak** | Semua Kontrak, Tambah Kontrak, Tipe Kontrak | Manajemen kontrak. Versioning. E-sign. |
| **Perizinan** | Semua Izin, Tambah Izin, Tipe Izin | Manajemen izin acara. Pengingat tenggat. |
| **UU PDP / GDPR** | — | Consent tracking, data export, data deletion. |

### 2.10 Grup Menu: Loyalty Program

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Poin** | Riwayat Poin | DataGrid transaksi poin. |
| **Tier** | Konfigurasi Tier | CRUD loyalty tiers (MDM). |
| **Reward** | Semua Reward, Tambah Reward | CRUD reward types. Penukaran poin. |

### 2.11 Grup Menu: CMS & Page Builder

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Halaman** | Semua Halaman, Tambah Halaman | CRUD halaman publik (Landing Page, About, dll.). Block-based editor. |
| **Blog** | Semua Post, Tambah Post, Kategori | Manajemen blog. Rich text editor. |
| **Portfolio** | Semua Item, Tambah Item | Manajemen portfolio. |
| **Menu Builder** | — | Drag-and-drop menu navigasi halaman publik. |

### 2.12 Grup Menu: Marketing & Campaign

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Kampanye Email** | Semua Kampanye, Buat Kampanye, Template | Email marketing. Segmentasi penerima. |
| **SMS / WA Blast** | — | Broadcast pesan ke peserta/klien. |

### 2.13 Grup Menu: Notification Hub

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Template Notifikasi** | — | CRUD template notifikasi. Merge fields. |
| **Riwayat Pengiriman** | — | Log pengiriman notifikasi (email, WA, in-app). |
| **Saluran** | — | Konfigurasi saluran notifikasi. |

### 2.14 Grup Menu: Inventory & Asset

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Aset** | Semua Aset, Tambah Aset, Kategori | CRUD aset fisik. Depresiasi otomatis. |
| **Jadwal Pemakaian** | — | Kalender pemakaian aset. Conflict detection. |

### 2.15 Grup Menu: Reports & Analytics

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Laporan Penjualan** | — | Revenue, tiket terjual. |
| **Laporan Keuangan** | — | Profit/Loss, cash flow. |
| **Laporan Leads** | — | Konversi leads. |
| **Laporan Timesheet** | — | Jam kerja kru. |
| **Custom Report** | — | Report builder (drag-and-drop). |

### 2.16 Grup Menu: Knowledge Base / Wiki

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Artikel** | Semua Artikel, Tambah Artikel, Kategori | CRUD artikel wiki. Public/private toggle. |
| **Pencarian** | — | Full-text search artikel. |

### 2.17 Grup Menu: Settings

| Menu | Submenu | Deskripsi Fungsi |
|---|---|---|
| **Pengaturan Umum** | — | Nama perusahaan, logo, favicon, alamat, NPWP. |
| **Pengaturan Keuangan** | — | Default currency, tax, COA. |
| **Pengaturan Tiket** | — | Default refund policy, max tickets. |
| **Feature Flags** | — | Toggle aktivasi modul (Bazar, Marketplace, Live Streaming, Gamification). |
| **Manajemen Modul** | — | Upload, install, aktivasi/non-aktivasi modul. |
| **API Keys** | — | Xendit, Midtrans, Veryfi OCR, Gemini AI, Resend, WABA. |
| **Notifikasi** | — | Konfigurasi saluran notifikasi. |
| **Keamanan** | — | Kebijakan password, durasi sesi, retensi data. |
| **Tema & Branding** | — | Custom CSS, warna brand, mode gelap/terang. |
| **Backup Database** | — | Backup otomatis & manual. |
| **Audit Trail** | — | Log aktivitas (read-only). |

### 2.18 AI Copilot (Toolbar Global)

| Fitur | Deskripsi |
|---|---|
| **Panel AI** | Ikon AI di header dashboard. Membuka panel samping. |
| **Generate RAB** | AI menyarankan item RAB berdasarkan tipe event dan data historis. |
| **Generate Proposal** | AI membuat draft proposal sponsorship. |
| **Rekomendasi Vendor** | AI merekomendasikan vendor berdasarkan rating dan kategori. |

---

## 3. Struktur Portal Eksternal

### 3.1 Portal Vendor

| Menu | Deskripsi Fungsi |
|---|---|
| **Dashboard Vendor** | Ringkasan brief, invoice, PO. |
| **Brief Saya** | DataGrid brief. Detail brief. Acknowledge. |
| **Kirim Penawaran** | Form penawaran harga. Upload lampiran. |
| **Invoice Saya** | DataGrid invoice. Upload invoice baru. |
| **PO Saya** | DataGrid purchase order. |

### 3.2 Portal Sponsor

| Menu | Deskripsi Fungsi |
|---|---|
| **Dashboard Sponsor** | Ringkasan proposal, event. |
| **Proposal Saya** | DataGrid proposal. Detail proposal. Setujui/Tolak. |
| **Laporan Dampak** | Laporan pasca-acara. Demografi audiens. |

### 3.3 Portal Client

| Menu | Deskripsi Fungsi |
|---|---|
| **Dashboard Client** | Ringkasan proyek. |
| **Proyek Saya** | Detail proyek: timeline, progres, vendor. |
| **Invoice Saya** | DataGrid invoice. |
| **Laporan Proyek** | Laporan final setelah proyek selesai. |

### 3.4 Portal Peserta (Member)

| Menu | Deskripsi Fungsi |
|---|---|
| **Tiket Saya** | DataGrid tiket. QR Code. Tombol refund. |
| **Riwayat Pembelian** | Riwayat transaksi tiket. |
| **Sertifikat** | Unduh sertifikat digital. |
| **Materi Event** | Unduh materi workshop/seminar. |
| **Loyalitas** | Poin, tier, reward. Tukar poin. |
| **Profil Saya** | Edit profil, data rekening, NIK. |

---

## 4. Struktur Halaman Publik

| Halaman | Path | Deskripsi Fungsi |
|---|---|---|
| **Landing Page** | `/` | Hero, value proposition, layanan, portfolio preview, CTA. |
| **Tentang Kami** | `/about` | Sejarah, visi, misi, tim leadership. |
| **Layanan** | `/services` | 5 lini bisnis. |
| **Portfolio** | `/portfolio` | Galeri event terdahulu. |
| **Blog** | `/blog` | Artikel industri event. |
| **Kontak** | `/contact` | Form inquiry. Alamat. Nomor telepon. |
| **FAQ** | `/faq` | Pertanyaan umum. |
| **Kebijakan Privasi** | `/privacy` | UU PDP compliance. |
| **Syarat & Ketentuan** | `/terms` | Aturan penggunaan. |
| **Login** | `/login` | Pintu masuk dashboard & portal. |
| **Register** | `/register` | Pendaftaran peserta member. |
| **Detail Event** | `/events/{slug}` | Informasi event publik. Tombol "Beli Tiket". |
| **Checkout** | `/checkout/{eventId}` | Form pembelian tiket (Walk-in & Member). |
| **Refund Walk-in** | `/refund` | Form pengajuan refund tanpa login. |

---

## 5. Arsitektur Modular

### 5.1 Prinsip Modular Monolith
- Setiap modul bisnis adalah **Service Provider** mandiri.
- Modul dapat diaktifkan/dinonaktifkan via **Feature Flags** di halaman Settings.
- Komunikasi antar modul **hanya melalui** Events, Listeners, atau Interface Contracts.
- Shared Kernel hanya berisi DTOs, Value Objects, Enums, dan Interface Contracts.

### 5.2 Daftar Modul

| Modul | Status Default | Feature Flag |
|---|---|---|
| **Master Data** | Aktif (inti) | — |
| **Event Management** | Aktif (inti) | — |
| **Finance & Accounting** | Aktif (inti) | — |
| **Human Resources** | Aktif (inti) | — |
| **Vendor Management** | Aktif | — |
| **Sponsor Management** | Aktif (hanya untuk promotor) | `sponsor_enabled` |
| **Client Management** | Aktif (hanya untuk client_event) | `client_enabled` |
| **Ticketing & Check-in** | Aktif (inti) | — |
| **Legal & Compliance** | Aktif | — |
| **Loyalty Program** | Aktif | — |
| **CMS & Page Builder** | Aktif | — |
| **Marketing & Campaign** | Aktif | `marketing_enabled` |
| **Notification Hub** | Aktif | — |
| **Inventory & Asset** | Aktif | `inventory_enabled` |
| **Knowledge Base** | Aktif | — |
| **Reports & Analytics** | Aktif | — |
| **AI Copilot** | Aktif | `ai_copilot_enabled` |
| **Bazar / Exhibition** | Non-aktif (tambahan) | `bazar_enabled` |
| **Marketplace** | Non-aktif (tambahan) | `marketplace_enabled` |
| **Live Streaming** | Non-aktif (tambahan) | `live_streaming_enabled` |
| **Gamification** | Non-aktif (tambahan) | `gamification_enabled` |

### 5.3 Sistem Modul (Mikro Kernel)
- Modul dapat di-upload sebagai file `.zip` melalui **Setup → Modules**.
- Setiap modul memiliki entry point (register hooks, permission, menu).
- Modul tidak boleh mengubah file inti. Semua kustomisasi terisolasi.
- Modul dapat mendaftarkan permission-nya sendiri untuk RBAC.

---

## 6. UX Global

### 6.1 Nara Launchpad
Setiap modul menyediakan:
- **Quick Setup**: Wizard singkat untuk konfigurasi otomatis sesuai SOP.
- **Advanced Mode**: Konfigurasi manual penuh.
- **Recommendation Engine**: Saran proaktif berdasarkan data historis.

### 6.2 Sandbox Mode
- Lingkungan latihan terisolasi dari data production.
- Tombol "Simulasikan Skenario" untuk generate data dummy.
- Banner kuning "ANDA SEDANG DI SANDBOX MODE".
- Reset data kapan saja.

### 6.3 Global Search
- Pencarian lintas modul di header dashboard.
- Mencakup: event, vendor, sponsor, klien, invoice, tiket, artikel wiki.

### 6.4 Notifikasi
- In-app notification bell di header.
- Email & WhatsApp untuk notifikasi penting.

---

> **Akhir Dokumen**
>
> _Versi 1.0.0 — Agnostic Foundation. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah peta besar seluruh sistem Nara ERP. Setiap perubahan menu atau fitur harus diperbarui di sini._

> END OF DOCUMENT - `DNA_01_SOFTWARE_OVERVIEW.md`