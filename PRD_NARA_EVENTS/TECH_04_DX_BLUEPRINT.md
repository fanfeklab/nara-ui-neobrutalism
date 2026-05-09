---
title: "TECH_04 - Development Blueprint: DX Tools, Seeding & Copywriting — Nara ERP (Laravel 13 Edition)"
description: "Dokumen cetak biru pengembangan yang mendefinisikan strategi Developer Experience (DX Tools), strategi seeding data untuk pengembangan paralel, dan aturan copywriting untuk konten publik dan internal di stack Laravel 13. Menjadi acuan bagi AI Agent untuk menyetel lingkungan pengembangan dan menulis konten."
author: "Nara Project Planner (Hanif — Lead Principal Architect & Software Engineering)"
date: 2026-05-07
tags: ["dx_tools", "development", "seeding", "copywriting", "public_content", "internal_content", "laravel13"]
category: "Development Blueprint"
ai_context:
  goal: "Menyediakan panduan lengkap untuk alat bantu pengembangan, strategi data seeding, dan aturan penulisan konten yang wajib dipatuhi oleh AI Agent."
  target_audience: "Agen AI, Developer, Content Writer"
  constraints: "DX Tools hanya aktif di environment development. Seeding data wajib mengikuti struktur database dan MDM. Copywriting publik tidak boleh menyebut istilah teknis."
language: "id"
---

# DEVELOPMENT BLUEPRINT: DX TOOLS, SEEDING & COPYWRITING — NARA ERP (LARAVEL 13 EDITION)

> **Nama File:** `TECH_04_DX_BLUEPRINT.md`
> **Kode Dokumen:** `DOC-DX-L13`
> **Sifat:** Referensi Stabil
> **Versi:** 1.0.0 — Laravel 13 Implementation
> **Rujuk ke:** [AGENTS.md](./AGENTS.md), [TECH_01_STACK.md](./TECH_01_STACK.md), [../../DNA/DNA_09_MASTER_DATA.md](../../DNA/DNA_09_MASTER_DATA.md), [../../DNA/DNA_06_USER_JOURNEY.md](../../DNA/DNA_06_USER_JOURNEY.md), [../../DNA/DNA_12_DESIGN_SYSTEM.md](../../DNA/DNA_12_DESIGN_SYSTEM.md), [TECH_06_DEVELOPER_COOKBOOK.md](./TECH_06_DEVELOPER_COOKBOOK.md)

---

## BAGIAN A: DX TOOLS STRATEGY

### A.1 Tujuan

DX Tools (Developer Experience Tools) adalah seperangkat alat bantu yang mempercepat pengembangan, debugging, dan pengujian oleh AI Agent. Semua alat ini bersifat **internal** dan hanya aktif di lingkungan `APP_ENV=local`. Tidak boleh ada DX Tools yang terlihat atau berjalan di production.

### A.2 Filament DevTools (Bawaan)

**Filament 5** menyediakan beberapa DX Tools bawaan yang sangat berguna:

| Tools | Fungsi | Cara Akses |
|---|---|---|
| **Filament Resource Generator** | Generate Filament Resource dari Model | `php artisan make:filament-resource` |
| **Filament Shield Permission Generator** | Generate permission dari Resource | `php artisan shield:generate --all` |
| **Filament Widget Generator** | Generate widget dashboard | `php artisan make:filament-widget` |
| **Filament Page Generator** | Generate custom page | `php artisan make:filament-page` |
| **Filament Relation Manager** | Generate relation manager | `php artisan make:filament-relation-manager` |
| **Filament Cluster** | Grouping resource dalam cluster | `php artisan make:filament-cluster` |

### A.3 Filament CRUD Maker (WAJIB DIGUNAKAN)

**`felipereisdev/filament-crud-maker`** adalah akselerator utama. Satu perintah Artisan untuk membuat Model, Migration, Filament Resource, Form, Table, Filter, dan Actions sekaligus.

```bash
php artisan make:filament-crud Event --module=EventManagement
```

**Aturan Wajib:**
- Semua CRUD dasar wajib dibuat dengan `filament-crud-maker`, bukan manual.
- Hanya modifikasi kustom untuk logika bisnis spesifik yang ditulis manual.
- CRUD maker tidak boleh digunakan untuk entitas yang memerlukan double-entry transaction khusus — itu harus ditulis manual dengan `DB::transaction()`.

### A.4 Laravel Telescope (Debugging & Insight)

**`laravel/telescope`** menyediakan dashboard debugging yang luar biasa. Hanya aktif di `APP_ENV=local`.

```bash
# Akses di browser
http://nara-erp.test/telescope
```

**Aturan:**
- Hanya boleh diakses di environment development.
- Di production, Telescope WAJIB dinonaktifkan (`TELESCOPE_ENABLED=false`).

### A.5 Laravel Pulse (Server Monitoring)

**`laravel/pulse`** menyediakan dashboard real-time untuk monitoring performa server. Aktif di development dan production.

```bash
# Akses di browser
http://nara-erp.test/pulse
```

**Aturan:**
- Di production, hanya Super Admin yang boleh mengakses Pulse.
- Pulse menggunakan Redis untuk real-time data.

### A.6 Laravel Horizon (Queue Monitoring)

**`laravel/horizon`** menyediakan dashboard monitoring Redis queue. Aktif di development dan production.

```bash
# Akses di browser
http://nara-erp.test/horizon
```

**Aturan:**
- Di production, hanya Super Admin yang boleh mengakses Horizon.
- Semua job queue wajib dipantau melalui Horizon.

### A.7 Laravel Debugbar

**`barryvdh/laravel-debugbar`** menambahkan toolbar debugging di bagian bawah halaman. Hanya aktif di `APP_ENV=local`.

```php
// config/debugbar.php
'enabled' => env('DEBUGBAR_ENABLED', false),
```

**Aturan:**
- Jangan pernah mengaktifkan Debugbar di production.
- Gunakan untuk profiling query, memory usage, dan route analysis.

### A.8 Clockwork

**`itsgoingd/clockwork`** adalah alternatif Telescope yang lebih ringan. Bisa digunakan bersamaan atau terpisah.

```bash
# Akses di browser
http://nara-erp.test/clockwork
```

### A.9 IDE Helper Generator (WAJIB DIJALANKAN SETIAP PERUBAHAN MODEL)

**`barryvdh/laravel-ide-helper`** meng-generate PHPDoc untuk semua model, facade, dan container bindings. Ini adalah **wajib** untuk autocomplete IDE.

```bash
# Generate ulang setelah perubahan model
php artisan ide-helper:generate
php artisan ide-helper:models --write
php artisan ide-helper:meta
```

**Aturan Wajib:**
- Jalankan setiap kali ada perubahan pada model (termasuk menambah/menghapus field).
- Commit file `_ide_helper.php` dan `.phpstorm.meta.php` ke repositori.

### A.10 Role & Permission Switcher (DevToolBar Kustom)

**Konsep:** Sebuah toolbar Filament Widget yang memungkinkan developer atau AI Agent untuk **berpindah role secara instan** tanpa harus logout dan login ulang.

Plugin Filament untuk ini: **`croustibat/filament-impersonate`** atau menggunakan fitur **`Filament Shield`** yang sudah terpasang.

**Fitur:**
- **Role Switcher:** Dropdown berisi 14 role. Pilih salah satu, dan session langsung di-override untuk mensimulasikan role tersebut.
- **Permission Preview:** Di samping dropdown, tampilkan list permission yang aktif untuk role yang dipilih.
- **Impersonation Banner:** Banner kuning di atas halaman dengan teks: "Anda sedang login sebagai [Nama Role] | [Stop Impersonation]".

**Implementasi:**
```php
// Hanya tampil jika APP_ENV=local
if (app()->isLocal()) {
    Filament::registerRenderHook(
        'panels::body.start',
        fn () => view('filament.devtools.impersonation-banner'),
    );
}
```

### A.11 Error Scenario Simulator (DevTool Kustom)

Simulasi error spesifik untuk menguji *error handling* dan *logging*.

| Simulasi | Cara Memicu | Tujuan |
|---|---|---|
| **Timeout Server Action** | Klik tombol "Simulasi Timeout" | Test handling timeout di Action layer |
| **Rate Limit** | Klik tombol "Simulasi Rate Limit" | Test `p-limit` dan Horizon queue |
| **Payment Gateway Gagal** | Klik tombol "Simulasi Gateway Error" | Test fallback Xendit → Midtrans → Manual |
| **Refund Fraud Detection** | Klik tombol "Simulasi Fraud" | Test flag `suspicious` dan pemblokiran NIK |

**Implementasi:** Buat Filament Widget khusus yang hanya tampil di development.

### A.12 State Reset

Tombol "Reset Database" yang:
- Menghapus semua data (kecuali tabel `migrations`, `counters`, `global_settings`).
- Menjalankan ulang semua seeder (`php artisan db:seed`).
- Berguna untuk testing ulang dari kondisi bersih.

```bash
php artisan migrate:fresh --seed
```

---

## BAGIAN B: STRATEGI SEEDING DATA

### B.1 Tujuan

Agar AI Agent dapat merakit halaman dan komponen **tanpa harus menunggu backend siap**, digunakan strategi seeding tiga tahap yang memungkinkan pengembangan UI dan backend berjalan secara paralel.

### B.2 Tahap 1: Seeding MDM (Wajib, Sebelum Development Dimulai)

Semua **25 koleksi Master Data Referensi** ([DNA_09_MASTER_DATA.md](../../DNA/DNA_09_MASTER_DATA.md)) harus memiliki data awal.

**Lokasi:** `database/seeders/master/`  
**Perintah:** `php artisan db:seed --class=MasterDataSeeder`

**Seeder Utama:**
```
database/seeders/
├── master/
│   ├── CompaniesSeeder.php
│   ├── CurrenciesSeeder.php
│   ├── CountriesRegionsSeeder.php
│   ├── UnitsOfMeasureSeeder.php
│   ├── DepartmentsSeeder.php
│   ├── PositionsSeeder.php
│   ├── EmploymentStatusesSeeder.php
│   ├── BanksSeeder.php
│   ├── ChartOfAccountsSeeder.php
│   ├── TaxCodesSeeder.php
│   ├── PaymentMethodsSeeder.php
│   ├── EventCategoriesSeeder.php
│   ├── VenuesSeeder.php
│   ├── VendorCategoriesSeeder.php
│   ├── SponsorTiersSeeder.php
│   ├── ClientIndustriesSeeder.php
│   ├── LeadSourcesSeeder.php
│   ├── TicketTypesSeeder.php
│   ├── DocumentTypesSeeder.php
│   ├── PermitTypesSeeder.php
│   ├── LoyaltyTiersSeeder.php
│   ├── RewardTypesSeeder.php
│   ├── NotificationTypesSeeder.php
│   ├── RolesAndPermissionsSeeder.php
│   └── GlobalSettingsSeeder.php
├── DummyDataSeeder.php         # Data dummy untuk Sandbox
└── DatabaseSeeder.php          # Seeder utama (panggil semua)
```

### B.3 Tahap 2: Data Dummy untuk Sandbox Mode

Data dummy untuk setiap role agar user bisa langsung berlatih di Sandbox Mode.

**Lokasi:** `database/seeders/DummyDataSeeder.php`  
**Perintah:** `php artisan db:seed --class=DummyDataSeeder`

**Konten:**
- User dummy untuk setiap role (minimal 1 per role).
- Event dummy (2 promotor, 2 client_event) lengkap dengan RAB, vendor, sponsor, timeline, checklist.
- Ticket dummy (5 per event).
- Invoice dummy, PO dummy, journal entry dummy.
- Vendor dummy (minimal 5).
- Sponsor dummy (minimal 3).
- Client dummy (minimal 3).

### B.4 Tahap 3: Wiring Backend (Fase Integrasi)

Setelah UI selesai dan backend siap, semua data dummy dihapus dan diganti dengan seeding MDM saja. Data operasional akan diinput langsung oleh user production.

```bash
# Production seeding (hanya MDM + admin user)
php artisan migrate:fresh --seed --class=ProductionSeeder
```

---

## BAGIAN C: COPYWRITING BLUEPRINT

### C.1 Prinsip Dasar

Nara ERP memiliki **dua wajah konten** yang harus dipisahkan secara ketat:

1. **Wajah Publik (`/` publik, landing page, blog, portfolio):** Ditujukan untuk calon klien korporat, sponsor, dan peserta event.
2. **Wajah Internal (`/dashboard/*`):** Ditujukan untuk karyawan PT Nara Sukses Bersama.

### C.2 Wajah Publik: Target Audiens & Tone

| Atribut | Keterangan |
|---|---|
| **Target Audiens** | Calon klien korporat, sponsor, peserta event potensial |
| **Copywriting Tone** | Profesional, percaya diri, bersemangat, personal |
| **Bahasa** | **Bahasa Indonesia** untuk semua konten publik |

### C.3 Konten Publik per Halaman

| Halaman | Path | Tujuan Copywriting | Konten yang Harus Ada |
|---|---|---|---|
| **Homepage** | `/` | Meyakinkan calon klien bahwa Nara adalah EO profesional, terpercaya, dan berpengalaman | Hero headline + subheadline; 3 value proposition; Preview layanan; Testimoni klien; CTA "Hubungi Kami" |
| **Tentang Kami** | `/about` | Memperkenalkan PT Nara Sukses Bersama sebagai entitas profesional dengan tim yang kompeten | Sejarah berdiri; Visi & Misi; Profil tim leadership (Nadia — CEO, Hanif — Lead); Pencapaian atau milestone perusahaan |
| **Layanan** | `/services` | Menjelaskan 5 lini bisnis secara jelas dan meyakinkan | Masing-masing lini: deskripsi singkat, contoh event yang pernah ditangani, benefit untuk klien |
| **Portofolio** | `/portfolio` | Membuktikan pengalaman dengan showcase event terdahulu | Grid/kartu event dengan: foto, nama event, tahun, lokasi, deskripsi singkat (case study mini) |
| **Blog** | `/blog` | Menarik traffic organik dan membangun otoritas di industri event | Artikel 800-1500 kata tentang: tren event, tips memilih EO, behind-the-scene acara, teknologi dalam event (tanpa menyebut Nara ERP), kisah sukses klien |
| **Kontak** | `/contact` | Memudahkan calon klien menghubungi Nara | Form inquiry (nama, perusahaan, email, pesan); Alamat lengkap Malang; Nomor telepon; Email info@naraevent.id |
| **FAQ** | `/faq` | Menjawab pertanyaan umum calon klien | Minimal 10 pertanyaan + jawaban tentang: proses kerja Nara, biaya, timeline, garansi |
| **Kebijakan Privasi** | `/privacy` | Kepatuhan UU PDP | Informasi pengumpulan data, penggunaan data, hak user, kontak DPO |
| **Syarat & Ketentuan** | `/terms` | Aturan penggunaan website | Syarat penggunaan, batasan tanggung jawab, hak kekayaan intelektual |

### C.4 Wajah Internal: Target Audiens & Tone

| Atribut | Keterangan |
|---|---|
| **Target Audiens** | Karyawan PT Nara Sukses Bersama (10 role internal) |
| **Copywriting Tone** | Fungsional, jelas, instruktif, langsung |
| **Bahasa** | **Bahasa Indonesia** untuk semua label, placeholder, pesan error |

### C.5 Konten Internal

- **Helpdesk & Wiki (`/dashboard/knowledge-base`):** Basis pengetahuan untuk internal staff. SOP, panduan langkah demi langkah, FAQ internal.
- **Onboarding Guide:** Setiap role baru (saat pertama login) mendapat halaman onboarding yang menjelaskan fitur-fitur yang relevan dengan role mereka. Contoh: PM baru melihat panduan "Cara Membuat Event Pertama Anda".
- **Label & Placeholder Form:** Semua label form, placeholder input, dan pesan error wajib Bahasa Indonesia. Jelas dan tidak ambigu. Contoh:
  - ✅ "Pilih kategori acara"
  - ❌ "Select event category"
- **Toast Notification:** Pesan sukses/gagal pendek dan informatif. Contoh:
  - ✅ "Event berhasil dipublikasi. Brief vendor sedang dikirim."
  - ❌ "Success! Event published."

### C.6 Larangan Copywriting (WAJIB DIPATUHI)

| Larangan | Alasan |
|---|---|
| **Tidak boleh menyebut "software", "aplikasi", "SaaS", "platform", "teknologi", atau istilah teknis** di halaman publik | Nara adalah Event Organizer, bukan perusahaan software. Nara ERP adalah alat internal yang TIDAK TERLIHAT oleh klien. |
| **Tidak boleh menyebut "AI Agent", "Gemini", "token", "Filament", "Laravel", "Livewire"** di konten publik manapun — termasuk blog | Ini adalah detail teknis internal. Klien tidak perlu tahu. |
| **Bahasa yang diizinkan:** "kami", "tim kami", "Nara", "klien", "event", "acara", "pengalaman", "profesional", "kreatif", "terpercaya" | Gunakan bahasa yang membangun kepercayaan, bukan bahasa teknis. |

### C.7 Aturan untuk AI Agent Saat Menulis Konten

1. **Baca [DNA_05_PROBLEM_PERSONA.md](../../DNA/DNA_05_PROBLEM_PERSONA.md)** untuk memahami target audiens.
2. **Baca [DNA_06_USER_JOURNEY.md](../../DNA/DNA_06_USER_JOURNEY.md)** untuk memahami alur operasional (agar konten blog relevan dengan praktik nyata).
3. **Semua teks copywriting publik wajib disimpan di file `resources/lang/id/`** (format JSON atau PHP array) agar mudah di-review dan diubah tanpa menyentuh kode komponen.
4. **Jangan gunakan placeholder teks (Lorem Ipsum) di halaman yang akan di-publish.** Jika konten belum siap, gunakan komentar `{{-- TODO: Copywriting untuk [halaman] — lihat TECH_04_DX_BLUEPRINT.md Pasal C.3 --}}`.

---

> **Akhir Dokumen**
>
> _Versi 1.0.0 — Laravel 13 Implementation. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah acuan untuk tools pengembangan, strategi data seeding, dan aturan copywriting. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `TECH_04_DX_BLUEPRINT.md`