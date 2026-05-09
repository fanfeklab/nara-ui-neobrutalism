---
title: "DNA_10 - Form & Data Input Specification — Nara ERP"
description: "Dokumen spesifikasi preskriptif untuk setiap formulir di Nara ERP. Mencakup daftar field, tipe komponen abstrak, tipe data, validasi, sumber data untuk dropdown, dan placeholder. Sepenuhnya agnostik terhadap stack teknologi."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["form_specification", "data_input", "field_dictionary", "validation", "dropdown_source", "agnostic"]
category: "Data Specification"
ai_context:
  goal: "Menyediakan spesifikasi formulir yang tidak ambigu dan terukur untuk diimplementasikan oleh agen AI. Setiap field didefinisikan secara lengkap termasuk asal data untuk pilihan (dropdown)."
  target_audience: "Agen AI, Frontend Developer, Backend Developer, QA"
  constraints: "Setiap field wajib memiliki tipe data, validasi, dan sumber data yang jelas. Dilarang menggunakan string bebas untuk field yang seharusnya menjadi referensi ke MDM. Semua placeholder dan pesan error wajib Bahasa Indonesia."
language: "id"
---

# FORM & DATA INPUT SPECIFICATION — NARA ERP

> **Nama File:** `DNA_10_FORM_SPEC.md`
> **Kode Dokumen:** `DOC-FORM`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_06_USER_JOURNEY.md](./DNA_06_USER_JOURNEY.md), [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md), [DNA_09_MASTER_DATA.md](./DNA_09_MASTER_DATA.md)

---

## 1. Pendahuluan

Dokumen ini adalah kamus data utama untuk setiap formulir di Nara ERP. Setiap field input didefinisikan secara preskriptif untuk menghilangkan ambiguitas dalam pengembangan dan pengujian. Prinsip utama: **setiap field yang memerlukan pilihan harus mengambil data dari koleksi master referensi (MDM), bukan ditulis manual.**

---

## 2. Formulir: Wizard Event (Promotor)

### 2.1 Step 1: Project Type

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `projectType` | Tipe Proyek | Radio Group | Enum (`promotor`, `client_event`) | Wajib | Pilihan hardcoded. |

### 2.2 Step 2: Event Category

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `eventCategoryId` | Kategori Acara | Select | UUID | Wajib | MDM: `event_categories` (filter `isActive == true`). |

### 2.3 Step 3: Konsep Acara

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `title` | Judul Acara | TextField | String | Wajib, min 5 karakter | Input manual. |
| `description` | Deskripsi Acara | Rich Text Editor | String (HTML) | Opsional | Input manual. |
| `theme` | Tema | TextField | String | Opsional | Input manual. |
| `targetAudience` | Target Audiens | Select | String | Opsional | Opsi hardcoded: "Anak Muda", "Profesional", "Keluarga", "Umum". |

### 2.4 Step 4: Tanggal & Lokasi

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `date` | Tanggal & Waktu | DateTimePicker | ISO 8601 String | Wajib, harus di masa depan | Input manual. |
| `venueId` | Venue | Autocomplete | UUID | Wajib | MDM: `venues`. |
| `capacity` | Kapasitas Peserta | NumberInput | Integer | Wajib, maks: `venues.maximumCapacity` | Nilai maksimum diambil dari data venue terpilih. |

### 2.5 Step 5: RAB & Sponsor Needs

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| **RAB Items (Array dinamis)** | | | | | |
| `items[].coaId` | Akun Biaya | Select | UUID | Wajib | MDM: `chart_of_accounts` (filter `accountCategory == EXPENSE`). |
| `items[].description` | Deskripsi Item | TextField | String | Wajib, min 5 karakter | Input manual. |
| `items[].volume` | Volume | NumberInput | Number | Wajib, min 1 | Input manual. |
| `items[].uomId` | Satuan | Select | UUID | Wajib | MDM: `units_of_measure`. |
| `items[].unitPrice` | Harga Satuan | NumberInput | Number | Wajib, min 0 | Input manual. |
| `items[].totalPrice` | Total Harga | TextField (baca saja) | Number | Otomatis: `volume * unitPrice` | Dihitung otomatis. |
| `sponsorNeeds` | Kebutuhan Sponsor | TextField (baca saja) | Number | - | Dihitung otomatis: `totalRAB - danaTersedia`. |

### 2.6 Step 6: Artis/Narasumber

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `artistName` | Nama Artis/Narasumber | TextField | String | Wajib | Input manual. |
| `fee` | Fee | NumberInput | Number | Wajib, min 0 | Input manual. |
| `contractFile` | File Kontrak | FileUpload | String (URL) | Opsional | Upload ke file storage. |
| `rider` | Rider Teknis | TextArea | String | Opsional | Input manual. |

### 2.7 Step 7: Vendor & Mitra

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `vendorIds` | Pilih Vendor | Checklist | Array of UUID | Opsional | MDM: `vendors`. |

### 2.8 Step 8: Sponsor & Proposal

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `tierId` | Tier Sponsor | Select | UUID | Wajib | MDM: `sponsor_tiers`. |
| `proposalContent` | Isi Proposal | Rich Text Editor | String (HTML) | Opsional | Draft awal di-generate AI. Dapat diedit PM. |

### 2.9 Step 9: Legal & Izin

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `documentChecklist` | Checklist Dokumen | Checklist dinamis | Array of `{ documentTypeId, checked, fileUrl? }` | Opsional | `documentTypeId` dari MDM `document_types`. |
| `permitChecklist` | Checklist Izin | Checklist dinamis | Array of `{ permitTypeId, checked, fileUrl? }` | Opsional | `permitTypeId` dari MDM `permit_types`. |

### 2.10 Step 10: Konfigurasi Aturan Tiket

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `allowedBuyers` | Pembeli yang Diizinkan | Select | Enum (`public`, `member_only`) | Wajib | Default: `public` untuk Konser, `member_only` untuk Workshop. |
| `maxTicketsPerNIK` | Maks Tiket per NIK | NumberInput | Integer | Wajib, min 1 | Default: 5. |
| `maxTicketsPerAccount` | Maks Tiket per Akun | NumberInput | Integer | Wajib, min 1 | Default: 1. Hanya relevan jika `allowedBuyers: member_only`. |
| `requireNIK` | NIK Wajib per Tiket | Switch / Toggle | Boolean | - | Default: `true`. |

### 2.11 Step 11: Review & Publish
Tidak ada input. Ringkasan semua step 1-10. Tombol "Publish" memicu Efek Domino.

---

## 3. Formulir: Wizard Event (Client Event)

Sama dengan Promotor, namun **Step 8 (Sponsor & Proposal) diganti dengan:**

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `clientId` | Pilih Client | Autocomplete | UUID | Wajib | MDM: `clients`. Jika client baru, input manual akan membuat data client baru. |

---

## 4. Formulir: Checkout Tiket (Publik — Walk-in)

### 4.1 Data Diri Pembeli

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `firstName` | Nama Depan | TextField | String | Wajib | Input manual. |
| `lastName` | Nama Belakang | TextField | String | Opsional | Input manual. |
| `addressProvince` | Provinsi | Autocomplete berantai | String | Wajib | API Wilayah Indonesia. |
| `addressRegency` | Kabupaten/Kota | Autocomplete berantai | String | Wajib | API Wilayah Indonesia (tergantung provinsi). |
| `addressDistrict` | Kecamatan | Autocomplete berantai | String | Wajib | API Wilayah Indonesia. |
| `addressSubdistrict` | Kelurahan | Autocomplete berantai | String | Wajib | API Wilayah Indonesia. |
| `nik` | NIK | TextField | String (16 digit) | Wajib, format NIK | Validasi: `nik-ktp-validator`. |
| `email` | Email | TextField | String (email) | Wajib, format email | Input manual. |
| `phoneWA` | Nomor WhatsApp | TextField | String | Wajib, format telepon | Input manual. |

### 4.2 Data Peserta per Tiket (Dinamis)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `participantName` | Nama Peserta | TextField | String | Wajib | Input manual. |
| `participantNIK` | NIK Peserta | TextField | String (16 digit) | Wajib | Input manual. |

### 4.3 Tiket

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `ticketTypeId` | Tipe Tiket | Select | UUID | Wajib | MDM: `ticket_types` (tersedia untuk event ini). |
| `quantity` | Jumlah Tiket | NumberInput | Integer | Wajib, min 1, maks 5 | Maks ditentukan oleh `maxTicketsPerNIK`. |

---

## 5. Formulir: Pengajuan Refund Walk-in (Publik)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `bookingCode` | Kode Booking | TextField | String | Wajib | Input manual. Divalidasi keberadaannya di database. |
| `fullName` | Nama Lengkap (sesuai KTP) | TextField | String | Wajib, min 3 karakter | Input manual. |
| `nik` | NIK | TextField | String (16 digit) | Wajib | Input manual. |
| `email` | Email | TextField | String (email) | Wajib, format email | Input manual. |
| `phoneWA` | Nomor WhatsApp | TextField | String | Wajib, format telepon | Input manual. |
| `bankId` | Bank Tujuan Refund | Select | UUID | Wajib | MDM: `banks`. |
| `accountNumber` | Nomor Rekening | TextField | String | Wajib | Input manual. |
| `accountHolder` | Nama Pemilik Rekening | TextField | String | Wajib, harus sama dengan `fullName` | Input manual. |

---

## 6. Formulir: Pengajuan Refund Member (User Area)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `reason` | Alasan Refund | Select | String | Wajib | Pilihan: `event_cancelled`, `event_rescheduled`, `force_majeure`, `double_charge`. |
| `notes` | Catatan Tambahan | TextArea | String | Opsional | Input manual. |

---

## 7. Formulir: Pencatatan Pengeluaran Kas Kecil (Petty Cash + OCR)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `receiptPhoto` | Foto Nota | FileUpload | String (URL) | Wajib | Diupload ke file storage. Diproses oleh OCR. |
| `amount` | Nominal | NumberInput | Number | Wajib, min 1 | Auto-fill dari OCR. Bisa diedit manual. |
| `vendorName` | Nama Vendor/Toko | TextField | String | Wajib | Auto-fill dari OCR. Bisa diedit manual. |
| `transactionDate` | Tanggal Transaksi | DatePicker | ISO 8601 String | Wajib | Auto-fill dari OCR. Bisa diedit manual. |
| `coaId` | Akun Biaya | Select | UUID | Wajib | MDM: `chart_of_accounts` (filter `accountCategory == EXPENSE`). |
| `description` | Deskripsi | TextField | String | Wajib | Input manual. |

---

## 8. Formulir: Tambah Karyawan (HR)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `userId` | User Terkait (jika sudah ada) | Autocomplete | UUID | Opsional | MDM: `users`. |
| `fullName` | Nama Lengkap | TextField | String | Wajib | Input manual. |
| `positionId` | Jabatan | Select | UUID | Wajib | MDM: `positions`. |
| `departmentId` | Departemen | Select | UUID | Wajib | MDM: `departments`. |
| `employmentStatusId` | Status Ketenagakerjaan | Select | UUID | Wajib | MDM: `employment_statuses`. |
| `bankId` | Bank | Select | UUID | Wajib | MDM: `banks`. |
| `accountNumber` | Nomor Rekening | TextField | String | Wajib | Input manual. |
| `joinDate` | Tanggal Bergabung | DatePicker | ISO 8601 String | Wajib | Input manual. |

---

## 9. Formulir: Manajemen Master Data (Contoh: Banks)

| Nama Field | Label UI | Tipe Komponen Abstrak | Tipe Data | Validasi | Sumber Data / Aturan |
|---|---|---|---|---|---|
| `bankCode` | Kode Bank | TextField | String | Wajib, min 3, maks 10 karakter | Input manual. |
| `bankName` | Nama Bank | TextField | String | Wajib, min 5 karakter | Input manual. |
| `swiftCode` | Kode SWIFT | TextField | String | Opsional, min 8, maks 11 karakter | Input manual. |
| `isSupportedForAutomatedTransfer` | Dukungan Transfer Otomatis | Switch / Toggle | Boolean | - | Input manual. |

---

## 10. Placeholder & Pesan Error Wajib (Bahasa Indonesia)

| Konteks | Teks |
|---|---|
| Placeholder TextField | "Masukkan [nama field]" |
| Placeholder Select | "Pilih [nama field]" |
| Error required | "[Nama field] wajib diisi." |
| Error minLength | "[Nama field] minimal [jumlah] karakter." |
| Error maxLength | "[Nama field] maksimal [jumlah] karakter." |
| Error email | "Format email tidak valid." |
| Error phone | "Format nomor telepon tidak valid." |
| Error NIK | "NIK harus 16 digit." |
| Error max | "[Nama field] tidak boleh lebih dari [jumlah]." |
| Error min | "[Nama field] tidak boleh kurang dari [jumlah]." |

---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah kamus data untuk seluruh formulir di sistem. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `DNA_10_FORM_SPEC.md`