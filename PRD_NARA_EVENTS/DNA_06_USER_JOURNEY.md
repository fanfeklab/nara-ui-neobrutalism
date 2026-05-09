---
title: "DNA_06 - User Journey & Operational Flow — Nara ERP"
description: "Dokumen yang mendefinisikan secara preskriptif seluruh alur operasional kunci untuk setiap Role di Nara ERP. Mencakup 18+ skenario yang mewakili tugas utama setiap aktor. Menjadi panduan utama bagi Agen AI untuk mengimplementasikan alur kerja dengan prinsip 'Jangan Membangun Roda yang Sudah Ada'."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["user_journey", "operational_flow", "workflow", "use_case", "scenario", "rbac", "agnostic"]
category: "Analysis"
ai_context:
  goal: "Menyediakan spesifikasi alur operasional yang tidak ambigu untuk setiap use case kritis di seluruh Role. Setiap langkah dijelaskan secara rinci termasuk input, output, validasi, dan permission yang dibutuhkan."
  target_audience: "Agen AI, Developer, QA, Business Analyst"
  constraints: "Setiap skenario harus mencakup aktor, prasyarat, alur utama, alur alternatif jika ada, dan permission yang relevan. Alur tidak boleh bertentangan dengan Business Rules di DOC-BIZ."
language: "id"
---

# USER JOURNEY & OPERATIONAL FLOW — NARA ERP

> **Nama File:** `DNA_06_USER_JOURNEY.md`
> **Kode Dokumen:** `DOC-OPS`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_05_PROBLEM_PERSONA.md](./DNA_05_PROBLEM_PERSONA.md), [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md), [DNA_10_FORM_SPEC.md](./DNA_10_FORM_SPEC.md), [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md)

---

## 1. Pendahuluan

Dokumen ini adalah cetak biru operasional untuk setiap alur kerja kunci di Nara ERP. Setiap skenario dijabarkan langkah demi langkah untuk menghilangkan ambiguitas dalam implementasi. Alur ini mencerminkan integrasi mendalam antara `project_type`, sistem modul, RBAC, dan prinsip "Jangan Membangun Roda yang Sudah Ada".

---

## 2. Skenario 1: Super Admin Mengelola Modul (Contoh: Menambahkan Modul Bazar)

**Aktor:** Raditya (Super Admin)  
**Permission dibutuhkan:** `manage:settings`  
**Prasyarat:** File modul Bazar sudah tersedia.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka halaman Manajemen Modul. | `/dashboard/settings/modules` | - | DataGrid menampilkan semua modul yang terdaftar. |
| 2 | Klik "Tambah Modul Baru". | Tombol di header | - | Dialog unggah muncul. |
| 3 | Unggah file konfigurasi modul. | Dialog Unggah | File konfigurasi | Sistem memvalidasi struktur file. Modul baru muncul di daftar dengan status `tidak aktif`. |
| 4 | Aktifkan modul. | Toggle "Aktif" pada baris modul | - | Sistem memperbarui status. Mulai saat itu, titik ekstensi `event-wizard-step-extra` akan menyertakan step dari modul ini. |

---

## 3. Skenario 2: COO Memonitor Dashboard Operasional

**Aktor:** Maya (COO)  
**Permission dibutuhkan:** `view:dashboard`  
**Prasyarat:** Ada event yang sedang berjalan.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login ke dashboard. | `/dashboard/home` | - | Sistem menampilkan dashboard COO yang berisi ringkasan proyek, vendor, sponsor, dan client. |
| 2 | Klik menu "Events". | `/dashboard/events` | - | DataGrid menampilkan semua event. COO bisa filter berdasarkan status (draft, published, in_progress). |
| 3 | Klik event yang sedang berjalan. | `/dashboard/events/[slug]` | - | Sistem menampilkan detail event: timeline, checklist, status vendor, dan laporan keuangan ringkas. |
| 4 | Jika ada masalah, COO bisa memberikan catatan. | Tombol "Tambah Catatan" | Teks bebas | Catatan tersimpan di `event_notes`. Notifikasi terkirim ke PM terkait. |

---

## 4. Skenario 3: CFO Menyetujui Transaksi Level Akhir

**Aktor:** Budi (CFO)  
**Permission dibutuhkan:** `approve:finance:level2`  
**Prasyarat:** Ada transaksi yang sudah disetujui Finance Manager (Level 1) dan nominalnya > Rp 10.000.000.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka antrian persetujuan. | `/dashboard/finance/approval-queue` | - | DataGrid menampilkan transaksi dengan status `level1_approved`. Transaksi > 10jt ditandai. |
| 2 | Klik transaksi untuk detail. | Baris transaksi | - | Sistem menampilkan detail transaksi: jumlah, deskripsi, akun COA, dokumen terkait. |
| 3 | Klik "Setujui" atau "Tolak". | Tombol di detail | Catatan (opsional) | Jika disetujui, status berubah menjadi `level2_approved` dan transaksi dibukukan ke jurnal. Jika ditolak, status `rejected` dan pemohon mendapat notifikasi. |

---

## 5. Skenario 4A: Project Manager Membuat Event Promotor

**Aktor:** Dewi (Project Manager)  
**Permission dibutuhkan:** `create:event`, `manage:event:rab`, `manage:vendors`, `manage:sponsors`  
**Prasyarat:** Data master `event_categories`, `venues`, `vendors`, `sponsor_tiers` sudah tersedia.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Klik "New Event" di dashboard. | `/dashboard/events/new` | - | Sistem mengarahkan ke Wizard Event. |
| 2 | Pilih Project Type `promotor`. | Radio Group | `promotor` | Sistem menentukan branching wizard. |
| 3 | Pilih Event Category `konser`. | Select | `eventCategoryId` | Dropdown dari `event_categories`. |
| 4 | Isi Konsep Acara. | TextField, Rich Text Editor | `title`, `description`, `targetAudience` | Validasi `title` min 5 karakter. |
| 5 | Tentukan Tanggal & Lokasi. | DatePicker, Autocomplete | `date`, `venueId`, `capacity` | Validasi kapasitas vs `venues.maxCapacity`. |
| 6 | Input RAB & Sponsor Needs. | Dynamic Form Builder | Items RAB (akun, volume, satuan, harga) | Sistem menghitung total RAB dan menampilkan selisih sebagai "Kebutuhan Sponsor". |
| 7 | Input Artis/Narasumber. | TextField, NumberInput | `artistName`, `fee` | Disimpan di sub-data `event_artists`. |
| 8 | Pilih Vendor. | Checklist | Array `vendorIds` | Menandai vendor yang terlibat. |
| 9 | Generate & Sesuaikan Proposal Sponsor. | Rich Text Editor | `proposalContent`, `tierId` | Draft proposal dihasilkan AI berdasarkan data event. |
| 10 | Checklist Legal & Izin. | Checklist, FileUpload | Array dokumen dan izin | Status checklist tersimpan. |
| 11 | Konfigurasi Aturan Tiket. | Form aturan tiket | `allowedBuyers` (member_only / public), `maxTicketsPerPerson`, `maxTicketsPerNIK`, `requireNIK` | Project Manager menentukan aturan main penjualan tiket untuk event ini. Lihat [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md) Pasal Tiket. |
| 12 | Review & Publish. | Ringkasan semua step | - | Klik "Publish" → status event `published`, Efek Domino Penuh terpicu (RAB, proposal, brief vendor, notifikasi). |

---

## 6. Skenario 4B: Project Manager Membuat Event Client Event

**Aktor:** Dewi (Project Manager)  
**Permission dibutuhkan:** `create:event`, `manage:event:rab`, `manage:vendors`, `manage:clients`  
**Prasyarat:** Data client sudah ada di CRM.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Klik "New Event" di dashboard. | `/dashboard/events/new` | - | Sistem mengarahkan ke Wizard Event. |
| 2 | Pilih Project Type `client_event`. | Radio Group | `client_event` | Sistem mengubah branching: step Sponsor menjadi non-aktif, step Data Client muncul. |
| 3 | Pilih atau Input Data Client. | Autocomplete atau TextField | `clientId` (pilih dari CRM) atau input baru | Validasi client terdaftar atau data baru lengkap. |
| 4–11 | **(Sama dengan Promotor, tetapi Step Sponsor di-skip)** | | | |
| 12 | Konfigurasi Aturan Tiket. | Form aturan tiket | `allowedBuyers`, `maxTicketsPerPerson`, `maxTicketsPerNIK`, `requireNIK` | Project Manager menentukan aturan main penjualan tiket. |
| 13 | Review & Publish. | Ringkasan semua step | - | Klik "Publish" → status event `published`, Efek Domino Terbatas terpicu. |

---

## 7. Skenario 5: Finance Manager Menyetujui Transaksi Level 1

**Aktor:** Andi (Finance Manager)  
**Permission dibutuhkan:** `approve:finance:level1`  
**Prasyarat:** Ada transaksi baru yang diajukan (contoh: pengeluaran kas kecil).

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka antrian persetujuan. | `/dashboard/finance/approval-queue` | - | DataGrid menampilkan transaksi dengan status `pending`. |
| 2 | Klik transaksi untuk detail. | Baris transaksi | - | Sistem menampilkan detail dan dokumen pendukung. |
| 3 | Klik "Setujui" atau "Tolak". | Tombol di detail | Catatan (opsional) | Jika disetujui dan nominal <= 10jt, status langsung `approved`. Jika > 10jt, status `level1_approved` dan masuk antrian CFO. |

---

## 8. Skenario 6: Finance Manager Memproses Refund (Member & Walk-in)

**Aktor:** Andi (Finance Manager)  
**Permission dibutuhkan:** `manage:finance:refunds`  
**Prasyarat:** Ada permintaan refund yang valid.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka Refund Queue. | `/dashboard/finance/refunds` | - | DataGrid menampilkan semua refund request. Walk-in request memiliki flag `walkin: true`. |
| 2 | Buka detail refund. | Baris refund | - | Sistem menampilkan detail kecocokan data, riwayat refund NIK yang sama, dan flag `suspicious` jika ada. |
| 3 | Verifikasi dan Approve. | Tombol "Approve" | Catatan (opsional) | Status refund berubah menjadi `approved`. |
| 4a | **Jika refund Member dan metode original_payment:** Sistem otomatis memproses refund via payment gateway ke sumber pembayaran asli. | Otomatis | - | Status refund `processing` → `completed`. Dana kembali ke sumber pembayaran asli. |
| 4b | **Jika refund Member dan metode manual_transfer:** Sistem menggunakan data rekening yang tersimpan di profil Member. Finance melakukan transfer manual. | `/dashboard/finance/refunds/{id}/confirm` | Bukti transfer | Status refund `completed`. |
| 4c | **Jika refund Walk-in:** Finance menggunakan data rekening yang diinput saat pengajuan refund. Finance melakukan transfer manual. | `/dashboard/finance/refunds/{id}/confirm` | Bukti transfer | Status refund `completed`. Sistem mencatat `journal_entry` untuk transaksi refund. |

---

## 9. Skenario 7: HR Manager Mengelola Data Karyawan

**Aktor:** Sari (HR Manager)  
**Permission dibutuhkan:** `manage:hr:employees`  
**Prasyarat:** Data karyawan baru dari proses rekrutmen.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka menu "HR" > "Karyawan". | `/dashboard/hr/employees` | - | DataGrid menampilkan daftar karyawan. |
| 2 | Klik "Tambah Karyawan". | Tombol di header | - | Form tambah karyawan muncul. |
| 3 | Isi data karyawan: Nama, Posisi, Departemen, Status, Bank. | Form | `userId`, `positionId`, `departmentId`, `statusId`, `bankId` | Dropdown diisi dari koleksi Master Data. |
| 4 | Simpan. | Tombol "Simpan" | - | Data tersimpan di `hr_employees`. User terkait otomatis mendapatkan role yang sesuai. |

---

## 10. Skenario 8: Legal Officer Mengelola SOP

**Aktor:** Rina (Legal Officer)  
**Permission dibutuhkan:** `manage:sops`  
**Prasyarat:** Ada prosedur baru yang perlu didokumentasikan.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka menu "Legal" > "SOP". | `/dashboard/legal/sops` | - | DataGrid menampilkan daftar SOP. |
| 2 | Klik "Tambah SOP". | Tombol di header | - | Form tambah SOP muncul. |
| 3 | Isi SOP Number, Judul, Departemen terkait, dan isi (Rich Text Editor). | Form | `sopNumber`, `title`, `departmentId`, `content` | `sopNumber` auto-generated dengan format `SOP-{dept}-{number}`. |
| 4 | Simpan sebagai Draft atau Ajukan Persetujuan. | Tombol | - | Status SOP: `draft` atau `pending_approval`. Super Admin akan meninjau. |

---

## 11. Skenario 9: Staff Operasional Membantu Checklist Event

**Aktor:** Dodi (Staff Operasional)  
**Permission dibutuhkan:** `view:dashboard`, `edit:event` (untuk checklist)  
**Prasyarat:** Project Manager sudah membuat event dan checklist.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka menu "Events" dan pilih event. | `/dashboard/events/[slug]` | - | Sistem menampilkan tab "Checklist". |
| 2 | Buka item checklist. | Daftar checklist | - | Menampilkan daftar tugas operasional. |
| 3 | Centang item yang sudah selesai. | Checkbox | - | Status item checklist berubah. PM mendapat notifikasi progres. |

---

## 12. Skenario 10: Admin Officer Mencatat Pengeluaran Kas Kecil (Petty Cash)

**Aktor:** Tono (Admin Officer)  
**Permission dibutuhkan:** `manage:finance:petty_cash`  
**Prasyarat:** Ada nota pengeluaran dari operasional.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka menu "Finance" > "Petty Cash". | `/dashboard/finance/petty-cash` | - | DataGrid menampilkan riwayat kas kecil. |
| 2 | Klik "Catat Pengeluaran". | Tombol di header | - | Form pencatatan muncul. |
| 3 | Unggah foto nota. | FileUpload | Gambar/JPG | Sistem memproses gambar dengan OCR. Hasil OCR (nominal, vendor, tanggal) otomatis mengisi form. |
| 4 | Verifikasi data, pilih akun COA, dan simpan. | Form, Select | `coaId`, `description`, `amount` | Data tersimpan sebagai `finance_transactions` dengan status `pending`. Masuk antrian persetujuan Finance Manager. |

---

## 13. Skenario 11: Vendor Menerima Brief dan Mengirim Invoice

**Aktor:** Mandiri Sound System (Vendor)  
**Permission dibutuhkan:** `view:briefs`, `view:invoices` (milik sendiri)  
**Prasyarat:** PM sudah mengirimkan undangan.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login via tautan undangan. | `/login` | - | Token divalidasi, diarahkan ke `/vendor/dashboard`. |
| 2 | Buka daftar brief. | `/vendor/briefs` | - | DataGrid menampilkan brief dengan status `sent`. |
| 3 | Buka detail brief. | Baris brief | - | Menampilkan semua detail brief. |
| 4 | Klik "Acknowledge" untuk konfirmasi. | Tombol | - | Status brief `acknowledged`. PM mendapat notifikasi. |
| 5 | Buat Invoice. | `/vendor/invoices/new` | Pilih event, masukkan item invoice (deskripsi, qty, harga) | Invoice tersimpan dengan status `draft`. Setelah dikirim, status `sent` dan Finance Manager mendapat notifikasi. |

---

## 14. Skenario 12: Sponsor Melihat Proposal dan Laporan

**Aktor:** PT Dukungan Utama (Sponsor)  
**Permission dibutuhkan:** `view:sponsors` (milik sendiri)  
**Prasyarat:** PM sudah mengirimkan proposal.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login via tautan undangan. | `/login` | - | Token divalidasi, diarahkan ke `/sponsor/dashboard`. |
| 2 | Buka daftar proposal. | `/sponsor/proposals` | - | Menampilkan proposal yang dikirim oleh PM. |
| 3 | Buka detail proposal. | Baris proposal | - | Menampilkan detail proposal, tier benefit, data demografi audiens. |
| 4 | Jika setuju, klik "Setujui Proposal". | Tombol | - | Status proposal berubah `approved`. PM dan Finance mendapat notifikasi. |
| 5 | Setelah acara selesai, buka tab "Laporan". | `/sponsor/reports` | - | Menampilkan laporan dampak sponsorship. |

---

## 15. Skenario 13: Client Memantau Progres Proyek

**Aktor:** PT Inovasi Kreatif (Client)  
**Permission dibutuhkan:** `view:clients` (milik sendiri)  
**Prasyarat:** Client sudah mengajukan RFP dan PM sudah membuat event `client_event`.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login via tautan undangan. | `/login` | - | Token divalidasi, diarahkan ke `/client/dashboard`. |
| 2 | Buka proyek yang sedang berjalan. | `/client/projects/[id]` | - | Menampilkan timeline, progres checklist, dan status vendor. Progres dihitung dari persentase checklist yang selesai. |
| 3 | Lihat Invoice. | `/client/projects/[id]/invoices` | - | DataGrid menampilkan invoice yang dikirim oleh PM. |
| 4 | Lihat Laporan Proyek. | Tab "Laporan" | - | Halaman ini akan menampilkan laporan final setelah proyek selesai. |

---

## 16. Skenario 14: Peserta Walk-in Membeli Tiket (Checkout Publik)

**Aktor:** Calon Peserta (Tanpa Akun / Walk-in)  
**Permission dibutuhkan:** Tidak ada (publik)  
**Prasyarat:** Event sudah dipublikasi, tiket tersedia, dan aturan tiket memperbolehkan pembelian oleh publik (`allowedBuyers: public`).

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka halaman acara dari tautan publik. | `/events/[slug]` | - | Menampilkan detail acara dan tombol "Beli Tiket". |
| 2 | Klik "Beli Tiket". | `/checkout/[eventId]` | - | Formulir checkout muncul. |
| 3 | Pilih tipe dan jumlah tiket. | Select, NumberInput | `ticketTypeId`, `quantity` | Pilihan tipe dari `ticket_types`. Jumlah dibatasi oleh `maxTicketsPerNIK` yang ditetapkan Project Manager (default: 5). |
| 4 | Isi data diri pembeli: Nama Depan, Nama Belakang (opsional), Alamat Lengkap (Provinsi → Kab/Kota → Kecamatan → Kelurahan via API Wilayah Indonesia), NIK (16 digit, wajib), Email, Nomor WhatsApp. | Form dengan Autocomplete berantai untuk alamat | `firstName`, `lastName`, `addressProvince`, `addressRegency`, `addressDistrict`, `addressSubdistrict`, `nik`, `email`, `phoneWA` | Sistem memvalidasi format NIK via `nik-ktp-validator`. Sistem memeriksa batas pembelian: jumlah tiket yang sudah dibeli dengan NIK ini di event yang sama + quantity sekarang <= `maxTicketsPerNIK`. Jika terlampaui, transaksi ditolak. |
| 5 | Isi data peserta untuk setiap tiket. | Form dinamis (sejumlah quantity) | `participantName`, `participantNIK` | Setiap tiket wajib memiliki nama dan NIK peserta masing-masing. NIK pembeli dan NIK peserta bisa berbeda. |
| 6 | Klik "Bayar". | Tombol | - | Diarahkan ke payment gateway (fully automatic). Sistem membuat `Kode Booking` dan `booking_tickets` dengan status `pending`. |
| 7 | Pembayaran sukses. | Halaman konfirmasi | - | Sistem mengubah status `booking_tickets` menjadi `issued`. Setiap tiket mendapatkan QR Code unik. Kode Booking dan QR Code dikirim ke email dan WhatsApp pembeli. Data pembeli disimpan sebagai `walkin_attendees`. |

---

## 17. Skenario 15: Peserta Member Membeli Tiket dengan Aturan Khusus

**Aktor:** Andi Peserta (Member)  
**Permission dibutuhkan:** `view:dashboard` (peserta)  
**Prasyarat:** Event sudah dipublikasi, tiket tersedia.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login dan buka halaman acara. | `/events/[slug]` | - | Menampilkan detail acara dan tombol "Beli Tiket". |
| 2 | Klik "Beli Tiket". | `/checkout/[eventId]` | - | Formulir checkout muncul. |
| 3 | Sistem memeriksa aturan tiket event: | - | - | |
| 3a | **Jika event Workshop/Seminar (`allowedBuyers: member_only`, 1 tiket per akun)**: Sistem memeriksa apakah user sudah pernah membeli tiket event ini. Jika sudah: tolak. Jika belum: lanjut. | - | - | Tidak ada pengecekan NIK. |
| 3b | **Jika event Konser (`allowedBuyers: public`, `maxTicketsPerNIK: 5`)**: Sistem memeriksa profil Member apakah NIK sudah diisi. Jika belum: tampilkan prompt "Lengkapi NIK Anda untuk melanjutkan pembelian tiket." Member mengisi NIK → tervalidasi → tersimpan di profil. | - | - | NIK wajib untuk event dengan batas per NIK. |
| 4 | Pilih tipe dan jumlah tiket (jika event publik). | Select, NumberInput | `ticketTypeId`, `quantity` | Jumlah dibatasi oleh `maxTicketsPerNIK`. |
| 5 | Isi data peserta untuk setiap tiket (jika membeli >1). | Form dinamis | `participantName`, `participantNIK` | Setiap tiket wajib memiliki nama dan NIK peserta masing-masing. |
| 6 | Klik "Bayar". | Tombol | - | Diarahkan ke payment gateway (fully automatic). Sistem membuat `Kode Booking` dan `booking_tickets` dengan status `pending`. |
| 7 | Pembayaran sukses. | Halaman konfirmasi | - | Status `booking_tickets` menjadi `issued`. QR Code per tiket dikirim ke email dan WhatsApp pembeli. |

---

## 18. Skenario 16: Peserta Walk-in Mengajukan Refund dari Halaman Publik

**Aktor:** Calon Peserta (Tanpa Akun / Walk-in)  
**Permission dibutuhkan:** Tidak ada (publik)  
**Prasyarat:** Memiliki Kode Booking yang valid dan tiket masih dalam masa refund window.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka halaman refund dari tautan publik. | `/refund` | - | Menampilkan form pengajuan refund tanpa perlu login. |
| 2 | Masukkan Kode Booking. | TextField | `bookingCode` | Sistem mencari data `booking_tickets` berdasarkan Kode Booking. Jika tidak ditemukan: error "Kode Booking tidak valid". |
| 3 | Sistem menampilkan ringkasan pemesanan. | Card ringkasan | - | Menampilkan: nama event, tanggal event, jumlah tiket, daftar tiket (nama peserta + NIK per tiket), dan status refund masing-masing tiket. Pembeli bisa memilih refund penuh atau sebagian tiket. |
| 4 | Pilih tiket yang ingin direfund. | Checklist | Array `ticketIds` | Hanya tiket dengan status `issued` dan dalam refund window yang bisa dipilih. |
| 5 | Isi data diri untuk validasi. | Form | `fullName`, `nik`, `email`, `phoneWA` | Sistem memvalidasi minimal **3 dari 4 data** cocok dengan data `walkin_attendees` yang tersimpan saat checkout. Jika kurang: error "Data tidak cocok. Refund tidak dapat diproses." |
| 6 | Isi data rekening tujuan. | Form | `bankId`, `accountNumber`, `accountHolder` | **Nama pemilik rekening harus sama persis** dengan nama pembeli (`fullName`). Jika berbeda: error "Nama pemilik rekening harus sama dengan nama pembeli." |
| 7 | Sistem menjalankan Fraud Detection. | Otomatis | - | Mengecek riwayat refund dengan NIK yang sama. Jika NIK ≥ 3 refund dalam 7 hari → flag `suspicious`, refund tetap bisa diajukan tapi masuk antrian CFO. Jika NIK ≥ 5 refund dalam 30 hari → blokir permanen, transaksi ditolak. |
| 8 | Klik "Ajukan Refund". | Tombol | - | Sistem membuat `refund_requests` dengan status `pending_review`, `refundMethod: manual_transfer`, dan flag `walkin: true`. Pembeli mendapat notifikasi bahwa pengajuan refund sedang diproses. |

---

## 19. Skenario 17: Peserta Member Mengajukan Refund

**Aktor:** Andi Peserta (Member)  
**Permission dibutuhkan:** `view:dashboard` (peserta)  
**Prasyarat:** Sudah login, memiliki tiket yang valid, dan **data rekening sudah diisi di profil** (jika ingin refund via transfer manual).

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Login dan buka "Tiket Saya". | `/user/tickets` | - | DataGrid menampilkan daftar tiket yang dibeli. |
| 2 | Klik tiket yang ingin direfund. | Baris tiket | - | Menampilkan detail tiket dan tombol "Ajukan Refund". |
| 3 | Pilih alasan refund. | Select | `reason` | Pilihan: "Acara Dibatalkan", "Acara Dijadwal Ulang", "Force Majeure", dll. |
| 4 | Ajukan. | Tombol "Ajukan" | - | Sistem memvalidasi syarat refund (status tiket `issued`, dalam refund window, belum pernah direfund). **Sistem juga memeriksa apakah profil Member sudah memiliki data rekening.** Jika belum: prompt "Silakan lengkapi data rekening di profil Anda sebelum mengajukan refund." |
| 5 | Jika valid dan data rekening lengkap, permintaan `refund_requests` dibuat dengan status `pending_review`. | Otomatis | - | Finance Manager akan meninjau. |
| 6 | Jika disetujui oleh Finance Manager. | Otomatis | - | **Jika `refundMethod: original_payment`**: Sistem otomatis memproses refund via payment gateway ke sumber pembayaran asli. **Jika `refundMethod: manual_transfer`**: Sistem menggunakan data rekening yang tersimpan di profil Member. Status refund `processing` → `completed`. |

---

## 20. Skenario 18: Vendor Mengirimkan Penawaran (Alternatif)

**Aktor:** Mandiri Sound System (Vendor)  
**Permission dibutuhkan:** `view:briefs`  
**Prasyarat:** Vendor sudah menerima brief.

| Langkah | Aksi Aktor | Target UI | Input yang Diberikan | Respons Sistem & Validasi |
|---|---|---|---|---|
| 1 | Buka brief yang sudah di-acknowledge. | `/vendor/briefs/[id]` | - | Menampilkan detail brief dan form penawaran. |
| 2 | Klik "Kirim Penawaran". | Tombol | - | Form penawaran muncul. |
| 3 | Isi harga, durasi, catatan, dan lampiran pendukung. | Form, FileUpload | `price`, `duration`, `notes`, `attachments` | Penawaran tersimpan dengan status `draft`. |
| 4 | Klik "Kirim". | Tombol | - | Status penawaran berubah menjadi `sent`. PM mendapat notifikasi penawaran baru untuk ditinjau. |

---

## 21. Ringkasan Jenis Tiket dan Aturan Pembelian

| Atribut | Konser / Event Publik | Workshop / Seminar |
|---|---|---|
| **Pembeli yang Diizinkan** | Member + Walk-in | Hanya Member |
| **Batas Tiket** | Maks 5 per NIK | Maks 1 per Akun |
| **NIK Wajib** | Ya (untuk validasi batas) | Tidak (1 akun = 1 tiket sudah cukup) |
| **Identitas Walk-in** | Nama Depan, Nama Belakang (opsional), Alamat Lengkap, NIK, Email, WA | Tidak tersedia untuk Walk-in |
| **Kode Booking** | 1 per transaksi, digunakan untuk refund | 1 per transaksi, digunakan untuk refund |
| **QR Code** | 1 per tiket, digunakan untuk check-in | 1 per tiket, digunakan untuk check-in |
| **NIK per Tiket** | Wajib (bisa berbeda dengan NIK pembeli) | Wajib (bisa berbeda dengan NIK pembeli) |
| **Refund oleh** | Hanya pembeli (pemilik Kode Booking) | Hanya pembeli (pemilik Kode Booking) |
| **Refund Member** | Otomatis via payment gateway (atau manual transfer jika diminta) | Otomatis via payment gateway (atau manual transfer jika diminta) |
| **Refund Walk-in** | Manual transfer setelah verifikasi, rekening diinput saat pengajuan | N/A |
| **Syarat Refund** | Kode Booking + Validasi Data + Data Rekening (Walk-in) | Tiket Aktif + Data Rekening di Profil (Member) |

---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini mencakup alur operasional seluruh 14 Role. Setiap perubahan harus melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `DNA_06_USER_JOURNEY.md`