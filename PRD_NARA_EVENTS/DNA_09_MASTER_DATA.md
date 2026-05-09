---
title: "DNA_09 - Master Data Management (MDM) — Nara ERP"
description: "Dokumen yang mendefinisikan seluruh data referensi terpusat (Master Data Management) untuk Nara ERP. Mencakup 25 koleksi master data, field, tipe data, relasi, dan aturan main. Sepenuhnya agnostik terhadap stack teknologi."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["master_data", "mdm", "reference_data", "dropdown_source", "agnostic"]
category: "Data Architecture"
ai_context:
  goal: "Menyediakan referensi tunggal yang tidak ambigu untuk seluruh data master yang digunakan di setiap dropdown, pilihan, dan referensi di seluruh sistem. Data master adalah fondasi yang memastikan konsistensi data di seluruh modul."
  target_audience: "Agen AI, Backend Developer, Database Designer"
  constraints: "Dokumen ini tidak terikat stack teknologi. Setiap field wajib memiliki tipe data yang jelas. Semua dropdown di UI wajib mengambil data dari koleksi master ini, tidak boleh hardcode string untuk data referensi."
language: "id"
---

# MASTER DATA MANAGEMENT (MDM) — NARA ERP

> **Nama File:** `DNA_09_MASTER_DATA.md`
> **Kode Dokumen:** `DOC-MDM`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md), [DNA_11_DATABASE_SCHEMA.md](./DNA_11_DATABASE_SCHEMA.md), [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md)

---

## 1. Definisi & Prinsip MDM

### 1.1 Definisi
Master Data Management (MDM) adalah kumpulan data referensi yang menjadi sumber kebenaran tunggal (Single Source of Truth) untuk seluruh sistem. Semua dropdown, pilihan, autocomplete, dan data referensi di setiap modul wajib mengambil data dari koleksi master ini.

### 1.2 Prinsip Utama

| Prinsip | Deskripsi |
|---|---|
| **Single Source of Truth** | Setiap data referensi hanya disimpan di satu tempat. Tidak boleh ada duplikasi data master di modul lain. |
| **No Hardcoded Strings** | Dilarang keras menulis string bebas untuk data yang seharusnya menjadi referensi (contoh: nama bank, mata uang, kategori vendor). Semua harus merujuk ke ID dari koleksi master. |
| **Soft Delete Only** | Data master yang sudah digunakan di data operasional tidak boleh dihapus permanen. Hanya bisa dinonaktifkan (`isActive: false`). |
| **Controlled Update** | Hanya role dengan permission `manage:settings` (Super Admin, COO) yang dapat menambah, mengubah, atau menonaktifkan data master. |

---

## 2. 25 Koleksi Master Data

### 2.1 `companies`
Data perusahaan yang terdaftar di sistem (vendor, sponsor, client, dan internal).

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `legalName` | String | Nama resmi perusahaan |
| `taxIdentificationNumber` | String | NPWP perusahaan |
| `registeredAddress` | String | Alamat resmi sesuai akta |
| `baseCurrencyId` | UUID → `currencies` | Mata uang dasar perusahaan |
| `defaultTimezone` | String | Zona waktu default (contoh: `Asia/Jakarta`) |
| `isActive` | Boolean | Status aktif |

### 2.2 `currencies`
Mata uang yang didukung sistem.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `currencyCode` | String | Kode ISO 4217 (IDR, USD, SGD) |
| `symbol` | String | Simbol mata uang (Rp, $, S$) |
| `name` | String | Nama mata uang (Indonesian Rupiah, US Dollar) |
| `isActive` | Boolean | Status aktif |

### 2.3 `countries_regions`
Data wilayah administratif (Provinsi → Kab/Kota → Kecamatan → Kelurahan). Digunakan untuk form alamat.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `countryCode` | String | Kode negara ISO 3166-1 alpha-2 |
| `provinceName` | String | Nama provinsi |
| `regencyName` | String | Nama kabupaten/kota |
| `districtName` | String | Nama kecamatan |
| `subdistrictName` | String | Nama kelurahan/desa |
| `postalCode` | String | Kode pos |

### 2.4 `units_of_measure`
Satuan ukur yang digunakan di RAB dan item.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `uomCode` | String | Kode satuan (Pcs, Lot, Pax, Hari, Jam) |
| `description` | String | Deskripsi satuan |
| `symbol` | String | Simbol satuan |
| `isActive` | Boolean | Status aktif |

### 2.5 `departments`
Struktur departemen internal PT Nara.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `departmentCode` | String | Kode departemen (OPS, FIN, HR, LEGAL) |
| `name` | String | Nama departemen |
| `headEmployeeId` | UUID → `hr_employees` | Kepala departemen |
| `parentDepartmentId` | UUID → `departments` | Departemen induk (untuk hierarki) |
| `isActive` | Boolean | Status aktif |

### 2.6 `positions`
Jabatan di perusahaan.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `positionTitle` | String | Nama jabatan (Project Manager, Finance Manager) |
| `departmentId` | UUID → `departments` | Departemen terkait |
| `jobLevel` | Number | Level jabatan (1: C-Level, 2: Manager, 3: Staff) |
| `baseSalaryRangeMin` | Number | Gaji pokok minimum |
| `baseSalaryRangeMax` | Number | Gaji pokok maksimum |
| `isActive` | Boolean | Status aktif |

### 2.7 `employment_statuses`
Status ketenagakerjaan.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `statusCode` | String | Kode status (KARTAP, PKWT, FREELANCE) |
| `description` | String | Deskripsi status |
| `isEligibleForBenefits` | Boolean | Berhak atas benefit karyawan |
| `isActive` | Boolean | Status aktif |

### 2.8 `banks`
Daftar bank yang didukung untuk transfer otomatis.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `bankCode` | String | Kode bank (014, 008, 002) |
| `bankName` | String | Nama bank (BCA, Mandiri, BRI) |
| `swiftCode` | String | Kode SWIFT |
| `isSupportedForAutomatedTransfer` | Boolean | Mendukung transfer otomatis via payment gateway |
| `isActive` | Boolean | Status aktif |

### 2.9 `chart_of_accounts`
Chart of Accounts (COA) untuk double-entry accounting.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `accountCode` | String | Kode akun (contoh: `1-1000`, `4-1000`) |
| `accountName` | String | Nama akun (Kas, Pendapatan Event, Beban Operasional) |
| `accountCategory` | Enum | ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE |
| `normalBalance` | Enum | DEBIT atau CREDIT |
| `isHeaderAccount` | Boolean | Apakah akun header (tidak bisa dijurnal langsung) |
| `parentAccountId` | UUID → `chart_of_accounts` | Akun induk (untuk hierarki) |
| `isActive` | Boolean | Status aktif |

### 2.10 `tax_codes`
Kode pajak untuk invoice dan transaksi.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `taxCode` | String | Kode pajak (VAT-11, WHT-23) |
| `taxType` | Enum | VAT, WHT, PPH |
| `ratePercentage` | Number | Persentase pajak |
| `linkedCoaId` | UUID → `chart_of_accounts` | Akun COA terkait |
| `isActive` | Boolean | Status aktif |

### 2.11 `payment_methods`
Metode pembayaran yang didukung.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `methodCode` | String | Kode metode (BANK_TRANSFER, E_WALLET, CREDIT_CARD) |
| `providerName` | String | Nama provider (Xendit, Midtrans, Manual) |
| `settlementSlaDays` | Number | SLA penyelesaian dana (hari) |
| `adminFeePercentage` | Number | Persentase biaya admin |
| `isActive` | Boolean | Status aktif |

### 2.12 `event_categories`
Kategori acara yang dapat dibuat.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `categoryCode` | String | Kode kategori (KONSER, WORKSHOP, SEMINAR, EXHIBITION) |
| `name` | String | Nama tampilan (Konser, Workshop, Seminar, Pameran) |
| `requiresMembership` | Boolean | Apakah wajib member untuk membeli tiket |
| `defaultRevenueCoaId` | UUID → `chart_of_accounts` | Akun pendapatan default |
| `memberBenefitsList` | Array of String | Daftar benefit member (Sertifikat, Materi, Galeri) |
| `isActive` | Boolean | Status aktif |

### 2.13 `venues`
Daftar venue/lokasi acara.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `venueName` | String | Nama venue |
| `fullAddress` | String | Alamat lengkap |
| `maximumCapacity` | Number | Kapasitas maksimal |
| `contactPersonId` | UUID → `users` | Kontak person venue |
| `rentalCostEstimate` | Number | Estimasi biaya sewa |
| `isActive` | Boolean | Status aktif |

### 2.14 `vendor_categories`
Kategori vendor.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `categoryCode` | String | Kode kategori (SOUND_SYSTEM, CATERING, DECORATION) |
| `name` | String | Nama kategori (Sound System, Katering, Dekorasi) |
| `requiresSlaDocument` | Boolean | Butuh dokumen SLA |
| `evaluationCriteria` | Array of String | Kriteria evaluasi performa |
| `isActive` | Boolean | Status aktif |

### 2.15 `sponsor_tiers`
Tier/level sponsor.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `tierName` | String | Nama tier (Platinum, Gold, Silver, Bronze) |
| `minimumCommitmentValue` | Number | Komitmen minimal (dalam IDR) |
| `allocatedBenefits` | Array of String | Benefit yang dialokasikan |
| `isActive` | Boolean | Status aktif |

### 2.16 `client_industries`
Industri klien.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `industryCode` | String | Kode industri (TECH, FMCG, FINANCE) |
| `industryName` | String | Nama industri |
| `targetMarketDemographic` | String | Target demografi |
| `isActive` | Boolean | Status aktif |

### 2.17 `lead_sources`
Sumber prospek/lead.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `sourceCode` | String | Kode sumber (WEBSITE, REFERRAL, SOCIAL_MEDIA) |
| `name` | String | Nama sumber |
| `marketingChannel` | String | Digital, Offline, Referral |
| `isActive` | Boolean | Status aktif |

### 2.18 `ticket_types`
Tipe tiket yang dapat dijual.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode tipe (VIP, FESTIVAL, EARLY_BIRD, REGULAR) |
| `name` | String | Nama tampilan |
| `hasSeatAssignment` | Boolean | Apakah ada penempatan kursi |
| `isActive` | Boolean | Status aktif |

### 2.19 `document_types`
Jenis dokumen legal.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode dokumen (CONTRACT, MOU, NDA) |
| `name` | String | Nama dokumen |
| `requiresDigitalSignature` | Boolean | Butuh tanda tangan digital |
| `retentionPeriodDays` | Number | Masa retensi dokumen |
| `isActive` | Boolean | Status aktif |

### 2.20 `permit_types`
Jenis izin acara.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `permitCode` | String | Kode izin (CROWD_PERMIT, NOISE_PERMIT, FIRE_PERMIT) |
| `name` | String | Nama izin |
| `issuingAuthority` | String | Otoritas penerbit |
| `estimatedProcessingDays` | Number | Estimasi waktu proses |
| `isActive` | Boolean | Status aktif |

### 2.21 `loyalty_tiers`
Tier loyalitas peserta.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `tierCode` | String | Kode tier (BASIC, PREMIUM, ELITE) |
| `tierName` | String | Nama tier |
| `minimumPointsRequired` | Number | Poin minimal untuk mencapai tier ini |
| `rewardMultiplier` | Number | Pengali reward (contoh: Basic 1x, Premium 1.5x, Elite 2x) |
| `isActive` | Boolean | Status aktif |

### 2.22 `reward_types`
Jenis reward yang bisa ditukar dengan poin.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `rewardCode` | String | Kode reward |
| `description` | String | Deskripsi reward |
| `pointsCost` | Number | Biaya poin untuk menukar |
| `inventoryLimit` | Number | Batas stok reward |
| `isActive` | Boolean | Status aktif |

### 2.23 `notification_types`
Jenis notifikasi yang didukung.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode notifikasi (EVENT_PUBLISHED, TRANSACTION_APPROVED, BRIEF_SENT) |
| `deliveryChannel` | Enum | Email, WA, InApp, All |
| `priorityLevel` | Enum | High, Medium, Low |
| `isActive` | Boolean | Status aktif |

### 2.24 `roles`
Role dalam sistem RBAC.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `roleCode` | String | Kode role (super_admin, coo, cfo, project_manager, dll.) |
| `name` | String | Nama tampilan |
| `permissions` | Array of UUID → `permissions` | Daftar permission yang dimiliki role ini |
| `hierarchyLevel` | Number | Level hierarki (1–5) |
| `isActive` | Boolean | Status aktif |

### 2.25 `permissions`
Permission granular untuk RBAC.

| Field | Tipe Data | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `permissionCode` | String | Kode izin (contoh: `create:event`, `manage:finance:petty_cash`) |
| `description` | String | Deskripsi izin |
| `moduleName` | String | Nama modul yang terkait |
| `isCritical` | Boolean | Apakah izin kritis (perlu audit khusus) |

---

## 3. Aturan Main MDM

### 3.1 Pengelolaan
- Semua data master diunggah melalui **seeding script** saat instalasi awal.
- Super Admin dapat menambah, mengubah, atau menonaktifkan data master melalui halaman Settings.
- Data master yang sudah digunakan di data operasional (contoh: COA yang sudah dijurnal) **tidak boleh dihapus**, hanya dinonaktifkan (`isActive: false`).

### 3.2 Seeding untuk Development & Sandbox
- Data master wajib memiliki data awal (seeding) untuk environment development dan Sandbox Mode.
- Seeding memastikan semua dropdown di UI terisi saat pertama kali aplikasi dijalankan.
- Untuk Sandbox Mode, data master akan otomatis terisi saat sesi latihan dimulai.

---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah kontrak data untuk seluruh MDM di sistem. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `DNA_09_MASTER_DATA.md`