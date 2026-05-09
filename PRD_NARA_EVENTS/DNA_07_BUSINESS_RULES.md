---
title: "DNA_07 - Aturan Bisnis & SOP — Nara ERP"
description: "Dokumen yang mendefinisikan seluruh aturan bisnis, alur kerja, validasi, error handling, data masking, kebijakan refund, aturan tiket, dan Standard Operating Procedure (SOP) yang berlaku di Nara ERP. Sepenuhnya agnostik terhadap stack teknologi."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["business_rules", "refund", "ticket", "validation", "sop", "agnostic", "launchpad", "sandbox"]
category: "Business Rules"
ai_context:
  goal: "Memberikan panduan aturan bisnis yang tidak ambigu bagi agen AI untuk mengimplementasikan fitur-fitur kritis. Aturan ini bersifat preskriptif dan wajib dipatuhi."
  target_audience: "Agen AI, Backend Developer, Business Analyst, QA"
  constraints: "Setiap aturan harus jelas, terukur, dan tidak menimbulkan multitafsir. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer."
language: "id"
---

# ATURAN BISNIS & SOP — NARA ERP

> **Nama File:** `DNA_07_BUSINESS_RULES.md`
> **Kode Dokumen:** `DOC-BIZ`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_06_USER_JOURNEY.md](./DNA_06_USER_JOURNEY.md), [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md), [DNA_10_FORM_SPEC.md](./DNA_10_FORM_SPEC.md), [DNA_11_DATABASE_SCHEMA.md](./DNA_11_DATABASE_SCHEMA.md)

---

## 1. Aturan Umum

### 1.1 Definisi
Dokumen ini berisi aturan bisnis yang berlaku di seluruh modul Nara ERP. Setiap aturan harus diimplementasikan dalam bentuk validasi, alur kerja, dan otorisasi yang sesuai.

### 1.2 Sumber Aturan
- Undang-Undang Perlindungan Konsumen (Refund)
- Prinsip akuntansi berterima umum (Chart of Accounts, Double-Entry)
- Standar operasional industri event organizer modern
- Kebijakan internal PT Nara Sukses Bersama

---

## 2. Aturan Tiket & Pembelian

### 2.1 Jenis Pembeli dan Aturan

| Atribut | Konser / Event Publik | Workshop / Seminar |
|---|---|---|
| **Pembeli yang Diizinkan** | Member + Walk-in | Hanya Member |
| **Batas Tiket** | Maks 5 per NIK | Maks 1 per Akun |
| **NIK Wajib untuk Pembeli** | Ya (Walk-in wajib, Member wajib jika belum ada di profil) | Tidak (1 akun = 1 tiket sudah cukup) |
| **NIK Wajib per Tiket** | Ya (setiap tiket wajib memiliki NIK peserta) | Ya (setiap tiket wajib memiliki NIK peserta) |

### 2.2 NIK sebagai UUID Walk-in
- Bagi **Walk-in** (pembeli tanpa akun), NIK berfungsi sebagai **unique identifier (UUID)** pengganti User ID.
- NIK digunakan untuk:
  - Melacak riwayat pembelian lintas transaksi.
  - Menegakkan batas `maxTicketsPerNIK`.
  - Validasi identitas saat pengajuan refund.
  - Deteksi penipuan (Fraud Detection).
- NIK **tidak wajib** untuk Member, kecuali saat membeli tiket event yang memiliki batas per NIK. Jika Member belum mengisi NIK di profil, sistem wajib meminta mereka melengkapinya sebelum checkout.

### 2.3 Kode Booking dan QR Code

| Komponen | Fungsi | Jumlah |
|---|---|---|
| **Kode Booking** | Identitas pemesanan. Digunakan untuk refund, ubah pesanan, dan pelacakan. | 1 per transaksi |
| **QR Code** | Identitas tiket satuan. Digunakan untuk check-in di hari H. | 1 per tiket |

**Aturan:**
- Satu Kode Booking dapat menaungi banyak QR Code (jika pembelian lebih dari 1 tiket).
- Refund hanya dapat diajukan oleh pemilik Kode Booking (pembeli).
- QR Code tidak dapat digunakan untuk refund.
- Kode Booking tidak dapat digunakan untuk check-in.

### 2.4 Konfigurasi Aturan Tiket oleh Project Manager

Saat membuat event, Project Manager dapat mengatur parameter berikut di dalam Wizard Event:

| Parameter | Deskripsi | Nilai Default |
|---|---|---|
| `allowedBuyers` | Siapa yang boleh membeli tiket | `public` (Konser) / `member_only` (Workshop) |
| `maxTicketsPerNIK` | Batas maksimal tiket per NIK | 5 |
| `maxTicketsPerAccount` | Batas maksimal tiket per akun (untuk member_only) | 1 |
| `requireNIK` | Apakah NIK wajib diisi per tiket | `true` |

---

## 3. Aturan Refund (Pengembalian Dana)

### 3.1 Kebijakan Refund Global

**Global Default Refund Policy** disimpan di pengaturan global:

| Field | Nilai Default | Deskripsi |
|---|---|---|
| `refundWindowDays` | 30 | Maksimal hari setelah event selesai untuk mengajukan refund. |
| `refundWindowDaysCancelled` | 90 | Maksimal hari setelah event dibatalkan untuk mengajukan refund. |
| `refundPercentageFull` | 100% | Persentase refund jika event dibatalkan EO. |
| `refundPercentageReschedule` | 100% | Persentase refund jika event dijadwal ulang. |
| `refundPercentageForceMajeure` | H-14: 80%, H-7: 50%, H-3: 30%, < H-3: 0% | Persentase refund jika peserta batal karena force majeure. |
| `refundProcessingFee` | 0 | Biaya administrasi refund (dipotong dari jumlah refund). |

**Per Event Override:** Setiap event dapat memiliki `refundPolicy` sendiri yang mengabaikan aturan global.

### 3.2 Syarat Refund Umum

| Kondisi | Persentase Refund | Keterangan |
|---|---|---|
| **Event dibatalkan oleh EO** | Sesuai `refundPercentageFull` (default 100%) | Wajib sesuai UU Perlindungan Konsumen. |
| **Event dijadwal ulang** | Sesuai `refundPercentageReschedule` (default 100%) | Peserta bisa pilih refund atau terima tiket baru. |
| **Peserta batal karena force majeure** | Sesuai `refundPercentageForceMajeure` | Dibuktikan dengan dokumen pendukung. |
| **Peserta batal tanpa alasan** | 0% | Tidak dapat refund. |
| **Double charge** | 100% | Idempotency key harus mencegah ini. |

### 3.3 Proses Refund untuk Member

1. Peserta login, buka `/user/tickets`, pilih tiket yang ingin direfund.
2. Sistem memvalidasi:
   - Tiket milik user yang login.
   - Status tiket = `issued`.
   - Tanggal pengajuan dalam `refundWindowDays` setelah event selesai.
   - Tiket belum pernah direfund.
   - Data rekening sudah diisi di profil Member (jika metode refund bukan original_payment).
3. Jika valid, sistem membuat dokumen `refund_requests` dengan status `pending_review`.
4. Finance Manager meninjau. Jika disetujui:
   - **Jika `refundMethod: original_payment`**: Sistem otomatis memproses refund via payment gateway. Dana kembali ke sumber pembayaran asli.
   - **Jika `refundMethod: manual_transfer`**: Finance melakukan transfer manual ke rekening yang tersimpan di profil Member.
5. Status refund `processing` → `completed`.

### 3.4 Proses Refund untuk Walk-in (Validasi Ketat)

1. Peserta mengisi form refund di halaman publik `/refund` (tanpa perlu login):
   - `bookingCode` (Kode Booking)
   - `fullName`, `nik`, `email`, `phoneWA` (minimal 3 dari 4 harus cocok dengan data `walkin_attendees`)
   - `bankId`, `accountNumber`, `accountHolder` (nama pemilik rekening harus sama persis dengan `fullName`)

2. Sistem memvalidasi:
   - Kode Booking valid dan ditemukan di `booking_tickets`.
   - Minimal **3 dari 4 data** (nama, NIK, email, WA) cocok.
   - **Nama pemilik rekening HARUS SAMA PERSIS** dengan nama pembeli.
   - Status tiket = `issued`.
   - Tanggal pengajuan dalam `refundWindowDays`.
   - Tiket belum pernah direfund.

3. **Fraud Detection Walk-in:**
   - NIK ≥ 3 refund dalam 7 hari → flag `suspicious`, refund masuk antrian CFO.
   - NIK ≥ 5 refund dalam 30 hari → blokir permanen, transaksi ditolak.

4. Jika valid, sistem membuat `refund_requests` dengan `refundMethod: manual_transfer`.

5. Finance Manager (atau CFO jika suspicious) meninjau. Jika disetujui, Finance melakukan transfer manual, lalu mengkonfirmasi di sistem. Status `completed`.

### 3.5 Validasi Tambahan untuk Semua Refund
- **Satu tiket hanya bisa direfund satu kali.**
- **Maksimal 5 refund per user/NIK per bulan.**
- **Refund tidak bisa dibatalkan** setelah status `approved` ke atas.
- **Semua refund dicatat di jurnal** sebagai transaksi double-entry.

---

## 4. Aturan Keuangan (Double-Entry Accounting)

### 4.1 Database Transaction untuk Double-Entry
- Setiap operasi yang melibatkan **lebih dari satu penulisan** ke database dalam konteks double-entry accounting **WAJIB** menggunakan **database transaction**.
- **Debit dan Kredit tidak boleh ditulis secara terpisah.**
- Jika salah satu penulisan gagal, seluruh transaksi dibatalkan (rollback).

### 4.2 Chart of Accounts (COA)
- Kode akun mengikuti hierarki: `parentAccountId` menentukan induk.
- Kategori: `ASSET`, `LIABILITY`, `EQUITY`, `REVENUE`, `EXPENSE`.
- Akun yang sudah digunakan dalam jurnal tidak bisa dihapus, hanya dinonaktifkan (`isActive: false`).

### 4.3 Approval Chain (Persetujuan Transaksi)

| Nominal | Level 1 (Finance Manager) | Level 2 (CFO) |
|---|---|---|
| ≤ Rp 10.000.000 | Setujui → Status `approved` | Tidak diperlukan |
| > Rp 10.000.000 | Setujui → Status `level1_approved` | Setujui → Status `level2_approved` / `approved` |

---

## 5. Aturan Invoice & Purchase Order

### 5.1 Invoice
| Status | Deskripsi |
|---|---|
| `draft` | Belum dikirim, masih bisa diedit. |
| `sent` | Sudah dikirim, jatuh tempo mulai dihitung. |
| `partially_paid` | Pembayaran sebagian diterima. |
| `paid` | Lunas. |
| `overdue` | Melewati jatuh tempo tanpa pelunasan. |

**Validasi:**
- Nomor invoice unik (`invoiceNumber`) auto-generated.
- Total `totalAmount` harus sama dengan jumlah `totalPrice` di semua item invoice.
- Invoice dari vendor harus terhubung ke PO (`linkedPoId`).

### 5.2 Purchase Order (PO)
| Status | Deskripsi |
|---|---|
| `draft` | Belum dikirim ke vendor. |
| `sent` | Vendor menerima PO. |
| `accepted` | Vendor menyetujui PO. |
| `partially_received` | Barang/jasa diterima sebagian. |
| `completed` | Semua item diterima lengkap. |

**Validasi:**
- `poNumber` auto-generated.
- PO tidak bisa diubah jika status `sent` ke atas.

---

## 6. Aturan SOP & Document Versioning

### 6.1 SOP Lifecycle
| Status | Deskripsi |
|---|---|
| `draft` | Dalam penyusunan. |
| `approved` | Disetujui Super Admin. |
| `deprecated` | Tidak berlaku lagi. |

### 6.2 Versioning
- Setiap perubahan pada SOP atau kontrak legal **wajib** menyimpan versi sebelumnya.
- Setiap revisi membuat dokumen baru dengan `versionNumber` auto-increment.
- Dokumen versi lama tetap dapat dibaca tetapi ditandai sebagai `deprecated`.

### 6.3 Validasi
- `sopNumber` unik: `SOP-{dept}-{number}`.

---

## 7. Immutable Audit Trail

### 7.1 Aturan
- Koleksi `audit_logs` bersifat **immutable**: hanya bisa `create` dan `read`, tidak bisa `update` atau `delete`.
- Bahkan Super Admin pun tidak dapat menghapus atau mengubah log audit.

---

## 8. Data Masking Policy

### 8.1 Field yang Dimasking

| Field | Pattern | Role yang Bisa Melihat Unmasked |
|---|---|---|
| Nomor Rekening Bank | `**** **** XXXX` | Finance Manager, CFO, HR Manager |
| NIK | `XXXXXXXX********` | HR Manager, Legal Officer, Finance Manager |

### 8.2 Implementasi
- Masking diterapkan di **DTO layer** (`toDTO()`). Data mentah tidak pernah dikirim ke client.
- Role yang memiliki permission tambahan dapat melihat data unmasked melalui endpoint khusus.

---

## 9. Nara Launchpad: Assisted Setup, Preset & Sandbox

Untuk menurunkan kurva pembelajaran (*learning curve*) bagi pengguna internal, sistem wajib menyediakan tiga mekanisme di setiap modul:

### 9.1 Quick Setup (Assisted Wizard)

- Setiap modul yang memiliki konfigurasi kompleks wajib menyediakan tombol **"Quick Setup"**.
- Tombol ini akan memicu *wizard* singkat yang mengajukan pertanyaan sederhana kepada user.
- Berdasarkan jawaban user, sistem akan mengonfigurasi modul secara otomatis di belakang layar sesuai SOP.
- User yang sudah mahir dapat melewati *wizard* ini dan langsung masuk ke mode **"Advanced"** untuk mengatur semua parameter secara manual.

**Contoh Penerapan:**
- Modul **Event Management**: Wizard menanyakan tipe proyek (`promotor` atau `client_event`) dan kategori acara. Sistem otomatis mengonfigurasi template RAB, checklist legal, dan daftar vendor yang relevan.
- Modul **Finance**: Wizard menanyakan metode akuntansi dan mata uang. Sistem otomatis membuat Chart of Accounts standar.

### 9.2 Recommendation Engine

- Sistem menyediakan **Recommendation Engine** yang proaktif memberikan saran kepada user berdasarkan data historis dan konteks.
- Engine ini menggunakan data dari transaksi sebelumnya untuk memberikan rekomendasi.

**Contoh Penerapan:**
- Saat PM memilih vendor, sistem merekomendasikan vendor dengan rating tertinggi untuk kategori tersebut.
- Saat Finance membuat invoice, sistem menyarankan akun COA yang paling sering digunakan untuk jenis transaksi serupa.
- Saat PM mengisi RAB, sistem menawarkan template RAB dari event serupa yang pernah dibuat.

### 9.3 Sandbox Mode (Lingkungan Latihan)

- Setiap user memiliki akses ke lingkungan **Sandbox** yang terisolasi dari data production.
- Di Sandbox, user dapat bebas melakukan apa saja tanpa risiko merusak data asli.

**Fitur Sandbox:**
- **Tombol "Simulasikan Skenario"**: Sistem akan mengisi data dummy secara otomatis sesuai role user, sehingga mereka bisa langsung berlatih.
- **Reset Data**: Tombol untuk mengembalikan data Sandbox ke kondisi awal.
- **Penanda Visual**: Banner kuning mencolok bertuliskan "ANDA SEDANG DI SANDBOX MODE" selalu muncul di bagian atas halaman.

---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah kontrak bisnis untuk seluruh sistem. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `DNA_07_BUSINESS_RULES.md`