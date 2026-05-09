---
title: "DNA_11 - Database Schema — Nara ERP"
description: "Dokumen spesifikasi struktur database logis untuk Nara ERP. Mencakup seluruh entitas, field, tipe data, relasi, aturan immutability, versioning, dan data masking. Sepenuhnya agnostik terhadap stack teknologi (dapat diimplementasikan di PostgreSQL, Firestore, MySQL, dsb.)."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["database", "schema", "entity_relationship", "immutable", "versioning", "data_masking", "agnostic"]
category: "Data Architecture"
ai_context:
  goal: "Menyediakan referensi tunggal yang tidak ambigu untuk struktur data di seluruh sistem. Dirancang agar dapat diimplementasikan di berbagai teknologi database."
  target_audience: "Agen AI, Backend Developer, Database Designer, Security Engineer"
  constraints: "Dokumen ini tidak terikat stack teknologi. Semua field wajib memiliki tipe data yang jelas. Relasi menggunakan ID string/UUID, bukan pointer mentah."
language: "id"
---

# DATABASE SCHEMA — NARA ERP

> **Nama File:** `DNA_11_DATABASE_SCHEMA.md`
> **Kode Dokumen:** `DOC-DB`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_09_MASTER_DATA.md](./DNA_09_MASTER_DATA.md), [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md), [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md)

---

## 1. Prinsip Dasar

### 1.1 Konvensi Penamaan
- **Entitas Utama:** `snake_case`, jamak jika mengandung banyak dokumen/baris.
- **Field:** `camelCase`.
- **Sub-entitas:** Dipisahkan dengan notasi `/` atau `_`.

### 1.2 Tipe Data Abstrak

| Tipe Abstrak | Digunakan untuk |
|---|---|
| `UUID` | Primary key, foreign key |
| `String` | Teks, ID eksternal, URL, email |
| `Integer` | Jumlah, durasi |
| `Decimal` | Harga, nilai uang (presisi tinggi) |
| `Boolean` | Status ya/tidak |
| `DateTime (ISO 8601)` | Tanggal dan waktu |
| `Array[T]` | Daftar nilai bertipe T |
| `Map/JSON` | Objek bertingkat |
| `Enum` | Nilai terbatas dari daftar yang ditentukan |

### 1.3 Aturan DTO & Data Masking
- Objek database **tidak boleh** dikirim langsung ke client. Semua data harus melewati DTO (`toDTO()`).
- `DateTime` dikonversi ke ISO string.
- Foreign key dikonversi ke ID string.
- Field sensitif di-mask di DTO layer (lihat [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md) Pasal 8).

---

## 2. Master Data Referensi (MDM)

> **Prinsip:** Semua field yang tadinya `String` bebas diubah menjadi referensi ke entitas master. Setiap dropdown di UI membaca data dari entitas ini.

### 2.1 `companies`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `legalName` | String | Nama resmi perusahaan |
| `taxIdentificationNumber` | String | NPWP perusahaan |
| `registeredAddress` | String | Alamat resmi sesuai akta |
| `baseCurrencyId` | UUID → `currencies` | Mata uang dasar |
| `defaultTimezone` | String | Zona waktu default |
| `isActive` | Boolean | Status aktif |

### 2.2 `currencies`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `currencyCode` | String | Kode ISO 4217 |
| `symbol` | String | Simbol mata uang |
| `name` | String | Nama mata uang |
| `isActive` | Boolean | Status aktif |

### 2.3 `countries_regions`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `countryCode` | String | Kode negara ISO |
| `provinceName` | String | Nama provinsi |
| `regencyName` | String | Nama kabupaten/kota |
| `districtName` | String | Nama kecamatan |
| `subdistrictName` | String | Nama kelurahan/desa |
| `postalCode` | String | Kode pos |

### 2.4 `units_of_measure`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `uomCode` | String | Kode satuan |
| `description` | String | Deskripsi |
| `symbol` | String | Simbol |
| `isActive` | Boolean | Status aktif |

### 2.5 `departments`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `departmentCode` | String | Kode departemen |
| `name` | String | Nama departemen |
| `headEmployeeId` | UUID → `hr_employees` | Kepala departemen |
| `parentDepartmentId` | UUID → `departments` | Departemen induk |
| `isActive` | Boolean | Status aktif |

### 2.6 `positions`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `positionTitle` | String | Nama jabatan |
| `departmentId` | UUID → `departments` | Departemen terkait |
| `jobLevel` | Integer | Level jabatan |
| `baseSalaryRangeMin` | Decimal | Gaji minimum |
| `baseSalaryRangeMax` | Decimal | Gaji maksimum |
| `isActive` | Boolean | Status aktif |

### 2.7 `employment_statuses`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `statusCode` | String | Kode status |
| `description` | String | Deskripsi |
| `isEligibleForBenefits` | Boolean | Berhak benefit |
| `isActive` | Boolean | Status aktif |

### 2.8 `banks`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `bankCode` | String | Kode bank |
| `bankName` | String | Nama bank |
| `swiftCode` | String | Kode SWIFT |
| `isSupportedForAutomatedTransfer` | Boolean | Dukungan transfer otomatis |
| `isActive` | Boolean | Status aktif |

### 2.9 `chart_of_accounts`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `accountCode` | String | Kode akun |
| `accountName` | String | Nama akun |
| `accountCategory` | Enum | ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE |
| `normalBalance` | Enum | DEBIT atau CREDIT |
| `isHeaderAccount` | Boolean | Apakah akun header |
| `parentAccountId` | UUID → `chart_of_accounts` | Akun induk |
| `isActive` | Boolean | Status aktif |

### 2.10 `tax_codes`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `taxCode` | String | Kode pajak |
| `taxType` | Enum | VAT, WHT, PPH |
| `ratePercentage` | Decimal | Persentase pajak |
| `linkedCoaId` | UUID → `chart_of_accounts` | Akun COA terkait |
| `isActive` | Boolean | Status aktif |

### 2.11 `payment_methods`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `methodCode` | String | Kode metode |
| `providerName` | String | Nama provider |
| `settlementSlaDays` | Integer | SLA penyelesaian |
| `adminFeePercentage` | Decimal | Biaya admin |
| `isActive` | Boolean | Status aktif |

### 2.12 `event_categories`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `categoryCode` | String | Kode kategori |
| `name` | String | Nama tampilan |
| `requiresMembership` | Boolean | Wajib member |
| `defaultRevenueCoaId` | UUID → `chart_of_accounts` | Akun pendapatan default |
| `memberBenefitsList` | Array[String] | Benefit member |
| `isActive` | Boolean | Status aktif |

### 2.13 `venues`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `venueName` | String | Nama venue |
| `fullAddress` | String | Alamat lengkap |
| `maximumCapacity` | Integer | Kapasitas maksimal |
| `contactPersonId` | UUID → `users` | Kontak person |
| `rentalCostEstimate` | Decimal | Estimasi biaya sewa |
| `isActive` | Boolean | Status aktif |

### 2.14 `vendor_categories`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `categoryCode` | String | Kode kategori |
| `name` | String | Nama kategori |
| `requiresSlaDocument` | Boolean | Butuh SLA |
| `evaluationCriteria` | Array[String] | Kriteria evaluasi |
| `isActive` | Boolean | Status aktif |

### 2.15 `sponsor_tiers`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `tierName` | String | Platinum, Gold, Silver |
| `minimumCommitmentValue` | Decimal | Komitmen minimal |
| `allocatedBenefits` | Array[String] | Benefit |
| `isActive` | Boolean | Status aktif |

### 2.16 `client_industries`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `industryCode` | String | Kode industri |
| `industryName` | String | Nama industri |
| `targetMarketDemographic` | String | Target demografi |
| `isActive` | Boolean | Status aktif |

### 2.17 `lead_sources`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `sourceCode` | String | Kode sumber |
| `name` | String | Nama sumber |
| `marketingChannel` | String | Digital, Offline, Referral |
| `isActive` | Boolean | Status aktif |

### 2.18 `ticket_types`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode tipe |
| `name` | String | Nama tampilan |
| `hasSeatAssignment` | Boolean | Penempatan kursi |
| `isActive` | Boolean | Status aktif |

### 2.19 `document_types`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode dokumen |
| `name` | String | Nama dokumen |
| `requiresDigitalSignature` | Boolean | Tanda tangan digital |
| `retentionPeriodDays` | Integer | Masa retensi |
| `isActive` | Boolean | Status aktif |

### 2.20 `permit_types`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `permitCode` | String | Kode izin |
| `name` | String | Nama izin |
| `issuingAuthority` | String | Otoritas penerbit |
| `estimatedProcessingDays` | Integer | Estimasi proses |
| `isActive` | Boolean | Status aktif |

### 2.21 `loyalty_tiers`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `tierCode` | String | Kode tier |
| `tierName` | String | Nama tier |
| `minimumPointsRequired` | Integer | Poin minimal |
| `rewardMultiplier` | Decimal | Pengali reward |
| `isActive` | Boolean | Status aktif |

### 2.22 `reward_types`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `rewardCode` | String | Kode reward |
| `description` | String | Deskripsi |
| `pointsCost` | Integer | Biaya poin |
| `inventoryLimit` | Integer | Batas stok |
| `isActive` | Boolean | Status aktif |

### 2.23 `notification_types`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `typeCode` | String | Kode notifikasi |
| `deliveryChannel` | Enum | Email, WA, InApp, All |
| `priorityLevel` | Enum | High, Medium, Low |
| `isActive` | Boolean | Status aktif |

### 2.24 `roles`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `roleCode` | String | Kode role |
| `name` | String | Nama tampilan |
| `permissions` | Array[UUID] → `permissions` | Permission yang dimiliki |
| `hierarchyLevel` | Integer | Level hierarki (1–5) |
| `isActive` | Boolean | Status aktif |

### 2.25 `permissions`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `permissionCode` | String | Kode izin |
| `description` | String | Deskripsi |
| `moduleName` | String | Modul terkait |
| `isCritical` | Boolean | Izin kritis |

---

## 3. Entitas Inti

### 3.1 `users`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `email` | String | Email pengguna |
| `displayName` | String | Nama lengkap tampilan |
| `firstName` | String | Nama depan |
| `lastName` | String | Nama belakang |
| `phone` | String | Nomor telepon/WA |
| `nik` | String (opsional, encrypted) | NIK (wajib untuk Walk-in, opsional untuk Member) |
| `birthDate` | DateTime | Tanggal lahir |
| `gender` | Enum | `male` / `female` |
| `address` | Map | `{ province, regency, district, subdistrict }` |
| `occupation` | String | Pekerjaan |
| `status` | Enum | `active` / `invited` / `suspended` |
| `photoURL` | String | URL foto profil |
| `assignedRoles` | Array[UUID] → `roles` | Role yang dimiliki |
| `effectivePermissions` | Array[UUID] → `permissions` | Permission gabungan (union) |
| `bankId` | UUID → `banks` | Bank pengguna |
| `accountNumber` | String (encrypted) | Nomor rekening |
| `accountHolder` | String | Nama pemilik rekening |
| `companyId` | UUID → `companies` | Perusahaan terkait (vendor/sponsor/client) |
| `points` | Integer | Total poin loyalitas |
| `createdAt` | DateTime | Waktu pendaftaran |

### 3.2 `audit_logs` (Immutable)

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `userId` | UUID → `users` | Pengguna yang melakukan aksi |
| `action` | String | Jenis aksi (create, update, delete, system_error) |
| `resource` | String | Nama resource |
| `documentId` | UUID | ID dokumen yang diubah |
| `changes` | Map (opsional) | Data sebelum dan sesudah perubahan |
| `errorMessage` | String (opsional) | Pesan error |
| `ipAddress` | String | Alamat IP |
| `userAgent` | String | User agent browser |
| `timestamp` | DateTime | Waktu aksi |

**Aturan Immutability:** Hanya `create` dan `read`. Tidak ada `update` atau `delete` — ditegakkan di level aturan database.

### 3.3 `counters`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `counterType` | String | INVOICE, PO, JOURNAL, SOP, BOOKING |
| `lastNumber` | Integer | Nomor terakhir |

---

## 4. Domain Operasional

### 4.1 `events`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `title` | String | Judul event |
| `slug` | String | Slug unik |
| `description` | String | Deskripsi |
| `status` | Enum | `draft` → `published` → `in_progress` → `completed` → `archived` |
| `projectType` | Enum | `promotor` atau `client_event` |
| `eventCategoryId` | UUID → `event_categories` | Kategori acara |
| `date` | DateTime | Tanggal acara |
| `venueId` | UUID → `venues` | Venue |
| `capacity` | Integer | Kapasitas |
| `clientId` | UUID → `clients` | Klien (jika client_event) |
| `createdBy` | UUID → `users` | Pembuat (PM) |
| `createdAt` | DateTime | Waktu pembuatan |
| `allowedBuyers` | Enum | `public` / `member_only` |
| `maxTicketsPerNIK` | Integer | Maks tiket per NIK |
| `maxTicketsPerAccount` | Integer | Maks tiket per akun |
| `requireNIK` | Boolean | NIK wajib per tiket |
| `refundPolicy` | Map (opsional) | Override kebijakan refund global |

### 4.2 Sub-entitas `events/{eventId}/rab`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `coaId` | UUID → `chart_of_accounts` | Akun biaya |
| `description` | String | Deskripsi item |
| `volume` | Decimal | Volume |
| `uomId` | UUID → `units_of_measure` | Satuan |
| `unitPrice` | Decimal | Harga satuan |
| `totalPrice` | Decimal | `volume * unitPrice` |

### 4.3 Sub-entitas `events/{eventId}/artists`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `artistName` | String | Nama artis/narasumber |
| `fee` | Decimal | Fee |
| `contractFile` | String (URL) | File kontrak |
| `rider` | String | Rider teknis |

### 4.4 Sub-entitas `events/{eventId}/vendors`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `vendorId` | UUID → `vendors` | Vendor |
| `status` | Enum | `invited` / `confirmed` / `completed` |

### 4.5 Sub-entitas `events/{eventId}/sponsors`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `sponsorId` | UUID → `sponsors` | Sponsor |
| `tierId` | UUID → `sponsor_tiers` | Tier |
| `proposalContent` | String (HTML) | Isi proposal |
| `status` | Enum | `draft` / `sent` / `approved` / `rejected` |

### 4.6 Sub-entitas `events/{eventId}/timeline`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `task` | String | Nama tugas |
| `deadline` | DateTime | Tenggat |
| `assignedTo` | UUID → `users` | Penanggung jawab |
| `status` | Enum | `pending` / `in_progress` / `completed` / `delayed` |

### 4.7 Sub-entitas `events/{eventId}/checklist`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `task` | String | Nama tugas |
| `isCompleted` | Boolean | Selesai? |
| `completedBy` | UUID → `users` | Diselesaikan oleh |
| `completedAt` | DateTime | Waktu selesai |

### 4.8 Sub-entitas `events/{eventId}/briefs`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `vendorId` | UUID → `vendors` | Vendor tujuan |
| `objective` | String | Tujuan |
| `targetAudience` | String | Target audiens |
| `keyMessage` | String | Pesan kunci |
| `deadline` | DateTime | Tenggat |
| `status` | Enum | `draft` / `sent` / `acknowledged` / `in_progress` / `completed` |

---

## 5. Modul Tiket

### 5.1 `bookings`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `bookingCode` | String | **Kode Booking** (auto-generated, unik) — digunakan untuk refund |
| `eventId` | UUID → `events` | Event |
| `userId` | UUID → `users` (nullable) | Pembeli Member (null jika Walk-in) |
| `walkinAttendeeId` | UUID → `walkin_attendees` (nullable) | Pembeli Walk-in (null jika Member) |
| `totalAmount` | Decimal | Total pembayaran |
| `paymentMethodId` | UUID → `payment_methods` | Metode pembayaran |
| `status` | Enum | `pending` / `confirmed` / `refunded` |
| `createdAt` | DateTime | Waktu pembelian |

### 5.2 `tickets`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `ticketCode` | String | **QR Code** (auto-generated, unik) — digunakan untuk check-in |
| `bookingId` | UUID → `bookings` | Kode Booking induk |
| `ticketTypeId` | UUID → `ticket_types` | Tipe tiket |
| `participantName` | String | Nama peserta |
| `participantNIK` | String (encrypted) | NIK peserta |
| `status` | Enum | `pending` / `issued` / `used` / `refunded` / `cancelled` |
| `checkedInAt` | DateTime (nullable) | Waktu check-in |

### 5.3 `walkin_attendees`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `firstName` | String | Nama depan |
| `lastName` | String (opsional) | Nama belakang |
| `addressProvince` | String | Provinsi |
| `addressRegency` | String | Kabupaten/Kota |
| `addressDistrict` | String | Kecamatan |
| `addressSubdistrict` | String | Kelurahan |
| `nik` | String (encrypted) | NIK (UUID untuk Walk-in) |
| `email` | String | Email |
| `phoneWA` | String | Nomor WhatsApp |
| `createdAt` | DateTime | Waktu pendaftaran |

---

## 6. Modul Keuangan Double-Entry

### 6.1 `journal_entries`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `journalNumber` | String | Nomor jurnal (auto-generated) |
| `transactionDate` | DateTime | Tanggal transaksi |
| `sourceDocumentType` | Enum | INVOICE_AP, PAYMENT_OUTFLOW, REFUND, PETTY_CASH |
| `sourceDocumentId` | UUID | ID dokumen sumber |
| `description` | String | Deskripsi |
| `lines` | Array[`{ accountId, type (DEBIT/CREDIT), amount }`] | Baris jurnal |
| `isBalanced` | Boolean | Total DEBIT = total CREDIT (harus `true`) |

### 6.2 `invoices`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `invoiceNumber` | String | Nomor invoice (auto-generated) |
| `partyType` | Enum | `vendor` atau `client` |
| `partyId` | UUID | ID vendor atau client |
| `eventId` | UUID → `events` | Event |
| `items` | Array[`{ description, quantity, unitPrice, uomId, totalPrice }`] | Item |
| `taxCodeId` | UUID → `tax_codes` | Kode pajak |
| `totalAmount` | Decimal | Total sebelum pajak |
| `taxAmount` | Decimal | Jumlah pajak |
| `grandTotal` | Decimal | Total setelah pajak |
| `dueDate` | DateTime | Jatuh tempo |
| `status` | Enum | `draft` / `sent` / `partially_paid` / `paid` / `overdue` |
| `linkedPoId` | UUID → `purchase_orders` (opsional) | PO terkait |

### 6.3 `purchase_orders`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `poNumber` | String | Nomor PO (auto-generated) |
| `eventId` | UUID → `events` | Event |
| `vendorId` | UUID → `vendors` | Vendor |
| `items` | Array[`{ description, quantity, uomId, unitPrice, totalPrice }`] | Item |
| `expectedDelivery` | DateTime | Pengiriman yang diharapkan |
| `taxCodeId` | UUID → `tax_codes` | Kode pajak |
| `totalAmount` | Decimal | Total PO |
| `status` | Enum | `draft` / `sent` / `accepted` / `partially_received` / `completed` |

### 6.4 `refund_requests`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `bookingId` | UUID → `bookings` | Kode Booking yang direfund |
| `ticketIds` | Array[UUID] → `tickets` | Tiket yang direfund |
| `userId` | UUID → `users` (nullable) | Pemohon Member (null jika Walk-in) |
| `eventId` | UUID → `events` | Event |
| `amount` | Decimal | Jumlah refund |
| `reason` | String | Alasan refund |
| `status` | Enum | `pending_review` / `approved` / `rejected` / `processing` / `completed` / `failed` |
| `refundMethod` | Enum | `original_payment` / `manual_transfer` |
| `walkin` | Boolean | Flag Walk-in |
| `requestorName` | String (opsional) | Nama pemohon |
| `requestorNIK` | String (opsional, encrypted) | NIK pemohon |
| `requestorEmail` | String (opsional) | Email pemohon |
| `requestorPhone` | String (opsional) | WA pemohon |
| `destinationBankId` | UUID → `banks` (opsional) | Bank tujuan |
| `destinationAccountNumber` | String (opsional, encrypted) | Rekening tujuan |
| `destinationAccountHolder` | String (opsional) | Nama pemilik rekening |
| `fraudFlag` | Boolean | Flag mencurigakan |

### 6.5 `finance_transactions`
(Untuk petty cash, pengeluaran, dll.)

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `eventId` | UUID → `events` (opsional) | Event |
| `type` | Enum | `income`, `expense`, `petty_cash`, `payroll` |
| `amount` | Decimal | Jumlah |
| `coaId` | UUID → `chart_of_accounts` | Akun COA |
| `paymentMethodId` | UUID → `payment_methods` | Metode pembayaran |
| `description` | String | Deskripsi |
| `receiptPhotoUrl` | String (opsional) | URL foto nota |
| `status` | Enum | `pending` / `level1_approved` / `level2_approved` / `approved` / `rejected` / `paid` |

---

## 7. Modul HR, Vendor, Sponsor, Client

### 7.1 `hr_employees`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `userId` | UUID → `users` | User terkait |
| `positionId` | UUID → `positions` | Jabatan |
| `departmentId` | UUID → `departments` | Departemen |
| `employmentStatusId` | UUID → `employment_statuses` | Status |
| `bankId` | UUID → `banks` | Bank |
| `accountNumber` | String (encrypted) | Nomor rekening |
| `joinDate` | DateTime | Tanggal bergabung |
| `salary` | Decimal | Gaji pokok |

### 7.2 `hr_freelancers`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `name` | String | Nama freelancer |
| `specializationId` | UUID → `vendor_categories` | Spesialisasi |
| `contact` | String | Nomor telepon |
| `bankId` | UUID → `banks` | Bank |
| `accountNumber` | String (encrypted) | Nomor rekening |
| `accountHolder` | String | Nama pemilik rekening |

### 7.3 `vendors`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `name` | String | Nama vendor |
| `categoryId` | UUID → `vendor_categories` | Kategori |
| `companyId` | UUID → `companies` | Perusahaan |
| `bankId` | UUID → `banks` | Bank |
| `accountNumber` | String (encrypted) | Nomor rekening |
| `accountHolder` | String | Nama pemilik rekening |
| `contact` | String | Nomor telepon |
| `email` | String | Email |
| `rating` | Decimal (1-5) | Rating |
| `status` | Enum | `active` / `inactive` |

### 7.4 `sponsors`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `brandName` | String | Nama brand |
| `contactPerson` | String | Nama kontak |
| `email` | String | Email |
| `companyId` | UUID → `companies` | Perusahaan |

### 7.5 `clients`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `companyName` | String | Nama perusahaan |
| `contactPerson` | String | Nama kontak |
| `email` | String | Email |
| `companyId` | UUID → `companies` | Perusahaan |
| `industryId` | UUID → `client_industries` | Industri |

---

## 8. Modul Legal, Loyalty, CMS, Marketing

### 8.1 `sops`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `sopNumber` | String | Nomor SOP (auto-generated) |
| `title` | String | Judul SOP |
| `departmentId` | UUID → `departments` | Departemen |
| `status` | Enum | `draft` / `approved` / `deprecated` |
| `currentVersion` | Integer | Versi saat ini |

### 8.2 `sop_versions` (sub-entitas `sops/{sopId}/versions`)

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `versionNumber` | Integer | Nomor versi |
| `content` | String (HTML) | Isi SOP |
| `changedBy` | UUID → `users` | Diubah oleh |
| `changedAt` | DateTime | Waktu perubahan |
| `changeNotes` | String | Catatan perubahan |

### 8.3 `legal_contracts`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `contractNumber` | String | Nomor kontrak |
| `documentTypeId` | UUID → `document_types` | Tipe dokumen |
| `partyType` | Enum | `vendor` / `sponsor` / `client` |
| `partyId` | UUID | ID pihak terkait |
| `status` | Enum | `draft` / `active` / `expired` |
| `currentVersion` | Integer | Versi saat ini |

### 8.4 `loyalty_accounts`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `userId` | UUID → `users` | User terkait |
| `totalPoints` | Integer | Total poin |
| `tierId` | UUID → `loyalty_tiers` | Tier saat ini |

### 8.5 `point_transactions`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `userId` | UUID → `users` | User |
| `points` | Integer | Jumlah poin |
| `type` | Enum | `earned` / `redeemed` |
| `source` | String | Sumber (pembelian tiket, reward) |
| `createdAt` | DateTime | Waktu transaksi |

### 8.6 `global_settings`

| Field | Tipe | Deskripsi |
|---|---|---|
| `id` | UUID | Identifier unik |
| `settingId` | String | ID pengaturan (`refund_policy`, `approval_policy`, `company_profile`, `feature_flags`) |
| `data` | Map/JSON | Data pengaturan |

---

## 9. Diagram Relasi (Naratif)

```text
users ───< assignedRoles >─── roles ───< permissions
users ───< effectivePermissions >─── permissions
users ─── audit_logs (immutable)
users ─── bookings
users ─── loyalty_accounts
users ─── point_transactions

events ─── event_categories
events ─── venues
events ─── clients (jika client_event)
events ───< rab (sub)
events ───< artists (sub)
events ───< timeline (sub)
events ───< checklist (sub)
events ───< briefs (sub)

bookings ─── events
bookings ─── users (nullable)
bookings ─── walkin_attendees (nullable)
bookings ───< tickets

tickets ─── ticket_types
tickets ─── bookings

walkin_attendees ─── bookings

journal_entries ───< lines ─── chart_of_accounts
invoices ─── events
invoices ─── tax_codes
purchase_orders ─── events
purchase_orders ─── vendors
refund_requests ─── bookings
refund_requests ─── tickets
refund_requests ─── events

hr_employees ─── users
hr_employees ─── positions
hr_employees ─── departments
hr_employees ─── banks

vendors ─── vendor_categories
vendors ─── companies
vendors ─── banks

sponsors ─── companies
clients ─── companies
clients ─── client_industries

sops ─── departments
sops ───< sop_versions
legal_contracts ─── document_types
```

---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah kontrak data untuk seluruh sistem. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `DNA_11_DATABASE_SCHEMA.md`