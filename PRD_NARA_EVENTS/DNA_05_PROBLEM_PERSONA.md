---
title: "DNA_05 - Problem Statement & User Persona — Nara ERP"
description: "Dokumen yang mendefinisikan masalah operasional yang dirasakan saat ini oleh PT Nara Sukses Bersama dan mendeskripsikan secara rinci 14 user persona yang akan menggunakan platform Nara ERP. Sepenuhnya agnostik terhadap stack teknologi."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["problem_statement", "user_persona", "internal_stakeholder", "external_stakeholder", "agnostic"]
category: "Foundation"
ai_context:
  goal: "Menyediakan pemahaman mendalam tentang masalah yang ingin dipecahkan dan siapa saja pengguna yang terlibat. Menjadi acuan utama untuk perancangan fitur dan alur operasional."
  target_audience: "CEO, Product Lead, COO, CFO, Agen AI, Tim Pengembang, UX Designer"
  constraints: "Dokumen ini tidak terikat stack teknologi. Deskripsi persona harus mencakup peran, tanggung jawab, dan kebutuhan utama."
language: "id"
---

# PROBLEM STATEMENT & USER PERSONA — NARA ERP

> **Nama File:** `DNA_05_PROBLEM_PERSONA.md`
> **Kode Dokumen:** `DOC-PERSONA`
> **Sifat:** Referensi Stabil
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [DNA_04_PRODUCT_POSITIONING.md](./DNA_04_PRODUCT_POSITIONING.md), [DNA_06_USER_JOURNEY.md](./DNA_06_USER_JOURNEY.md)

---

## 1. Problem Statement (Masalah yang Dirasakan Saat Ini)

Sebelum platform ini hadir, PT Nara Sukses Bersama menghadapi sejumlah masalah operasional yang menghambat efisiensi, transparansi, dan pertumbuhan. Berikut adalah masalah utama yang teridentifikasi:

| Masalah | Dampak Langsung |
|---|---|
| **Data Terpencar** | RAB di spreadsheet, data vendor di chat, invoice di email, registrasi peserta di form terpisah. Tidak ada satu sumber kebenaran. |
| **Keuangan Tidak Transparan** | Pengeluaran petty cash sulit dilacak. Proses approval tidak terdokumentasi. Risiko manipulasi tinggi. |
| **Manajemen Vendor & Sponsor Tidak Terstruktur** | Brief dikirim via chat, penawaran masuk via email. Tidak ada sistem evaluasi performa vendor atau data demografi audiens untuk sponsor. |
| **Klien Sulit Memantau Progres** | Klien tidak punya akses real-time ke status proyek. Komunikasi bolak-balik tidak efisien dan rentan miskomunikasi. |
| **SDM Tidak Terkelola dengan Baik** | Data karyawan, freelance, jadwal kru, dan honor dicatat manual. Bentrok jadwal sering terjadi. |
| **Peserta Hanya Sekali Datang** | Setelah acara selesai, tidak ada benefit lanjutan. Tidak ada materi, sertifikat digital, atau program loyalitas yang membuat peserta kembali. |
| **Pemasaran & Penjualan Tidak Terlacak** | Prospek dan proposal dikelola secara manual. Tidak ada pipeline penjualan yang jelas. |

---

## 2. Dampak Bisnis (Business Impact)

Akumulasi masalah di atas mengakibatkan:

1. **Pertumbuhan Terhambat** — Tanpa sistem terpadu, skala operasional sulit ditingkatkan.
2. **Risiko Finansial** — Tanpa double-entry accounting dan audit trail, potensi kebocoran atau manipulasi keuangan tinggi.
3. **Reputasi di Mata Klien & Sponsor** — Klien dan sponsor menginginkan transparansi dan data yang akurat. Tanpa itu, kepercayaan mereka menurun.
4. **Retensi Peserta Rendah** — Tanpa program loyalitas, Nara kehilangan potensi peserta berulang (repeat customer).

---

## 3. User Persona (14 Peran)

Platform ini dirancang untuk **14 peran** yang terbagi dalam dua kelompok besar: **Pihak Internal** (10 peran) dan **Pihak Eksternal** (4 peran). Berikut adalah deskripsi rinci setiap persona.

### 3.1 Pihak Internal (10 Peran)

#### 3.1.1 Super Admin / CEO
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Raditya |
| **Level** | C-Level |
| **Tanggung Jawab Utama** | Akses penuh ke seluruh sistem. Mengelola konfigurasi global, audit trail, dan pengguna. Meng-override keputusan jika diperlukan. |
| **Kebutuhan Utama** | Dashboard ringkasan seluruh bisnis, manajemen pengguna & RBAC, pengaturan global, fitur aktivasi/non-aktivasi modul. |

#### 3.1.2 Chief Operating Officer (COO)
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Maya |
| **Level** | C-Level |
| **Tanggung Jawab Utama** | Mengawasi operasional harian. Memonitor seluruh proyek, vendor, sponsor, dan klien. |
| **Kebutuhan Utama** | Dashboard operasional, filter proyek berdasarkan status, akses ke seluruh data proyek untuk pengambilan keputusan. |

#### 3.1.3 Chief Financial Officer (CFO)
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Budi |
| **Level** | C-Level |
| **Tanggung Jawab Utama** | Mengelola seluruh keuangan perusahaan: General Ledger, Payroll, Pajak. Menyetujui transaksi besar (Level 2). |
| **Kebutuhan Utama** | Laporan keuangan real-time, antrian persetujuan transaksi besar, audit trail keuangan. |

#### 3.1.4 Project Manager (PM)
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Dewi |
| **Level** | Manajemen |
| **Tanggung Jawab Utama** | Membuat event dari nol hingga publikasi. Mengelola RAB, vendor, sponsor, klien, timeline, dan checklist. |
| **Kebutuhan Utama** | Wizard pembuatan event yang lengkap, dynamic form builder untuk RAB, manajemen vendor & sponsor, dasbor progres proyek. |

#### 3.1.5 Finance Manager
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Andi |
| **Level** | Manajemen |
| **Tanggung Jawab Utama** | Menyetujui transaksi (Level 1), mengelola anggaran, petty cash, payroll, Chart of Accounts, dan refund. |
| **Kebutuhan Utama** | Antrian persetujuan, form pencatatan petty cash (dengan OCR), manajemen COA, proses refund. |

#### 3.1.6 HR Manager
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Sari |
| **Level** | Manajemen |
| **Tanggung Jawab Utama** | Mengelola data karyawan tetap (KARTAP), kontrak freelance, rekrutmen, dan jadwal kru. |
| **Kebutuhan Utama** | CRUD data karyawan dan freelance, penjadwalan kru, conflict detection untuk bentrok jadwal. |

#### 3.1.7 Legal Officer
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Rina |
| **Level** | Manajemen |
| **Tanggung Jawab Utama** | Mengelola kontrak, perizinan acara, SOP, dan kepatuhan UU PDP. |
| **Kebutuhan Utama** | Manajemen SOP dengan versioning, pelacakan kontrak dan izin, pengingat tenggat. |

#### 3.1.8 Staff Operasional
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Dodi |
| **Level** | Staff |
| **Tanggung Jawab Utama** | Membantu Project Manager dalam operasional: input data vendor, checklist operasional, scan tiket check-in. |
| **Kebutuhan Utama** | Akses terbatas ke event yang ditugaskan, checklist interaktif, antarmuka scan QR untuk check-in. |

#### 3.1.9 HR Staff
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Fitri |
| **Level** | Staff |
| **Tanggung Jawab Utama** | Administrasi data karyawan dan freelance. Membantu HR Manager dalam rekrutmen. |
| **Kebutuhan Utama** | Akses read/write terbatas ke data HR, input data karyawan baru. |

#### 3.1.10 Admin Officer
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Tono |
| **Level** | Staff |
| **Tanggung Jawab Utama** | Mencatat pengeluaran petty cash, mengunggah nota, rekonsiliasi sederhana. |
| **Kebutuhan Utama** | Form pencatatan pengeluaran, upload nota (dengan OCR), riwayat transaksi petty cash. |

---

### 3.2 Pihak Eksternal (4 Peran)

#### 3.2.1 Vendor
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Mandiri Sound System |
| **Level** | Eksternal Bisnis |
| **Tanggung Jawab Utama** | Menerima brief dari Project Manager, mengirim penawaran, mengunggah invoice, melihat Purchase Order. |
| **Kebutuhan Utama** | Portal khusus vendor, daftar brief, form upload invoice, status PO. |

#### 3.2.2 Sponsor
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | PT Dukungan Utama |
| **Level** | Eksternal Bisnis |
| **Tanggung Jawab Utama** | Melihat proposal sponsorship, menyetujui dana, melihat laporan dampak pasca-acara. |
| **Kebutuhan Utama** | Portal khusus sponsor, daftar proposal, data demografi audiens, laporan pasca-acara. |

#### 3.2.3 Client
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | PT Inovasi Kreatif |
| **Level** | Eksternal Bisnis |
| **Tanggung Jawab Utama** | Mengajukan RFP (Request for Proposal), memantau progres proyek, melihat invoice. |
| **Kebutuhan Utama** | Portal khusus klien, progres proyek real-time, daftar invoice, komunikasi dengan PM. |

#### 3.2.4 Peserta (Member)
| Atribut | Deskripsi |
|---|---|
| **Nama Representatif** | Andi Peserta |
| **Level** | Publik |
| **Tanggung Jawab Utama** | Membeli tiket, check-in event, mengunduh sertifikat dan materi, mengelola poin loyalitas, mengajukan refund. |
| **Kebutuhan Utama** | Halaman checkout tiket, QR code tiket, area unduh sertifikat & materi, riwayat poin loyalitas, form pengajuan refund. |

---

## 4. Ringkasan Kebutuhan Utama per Persona

| Persona | Kebutuhan Paling Kritis |
|---|---|
| **CEO / Super Admin** | Kontrol penuh sistem, pengaturan global, aktivasi modul. |
| **COO** | Dashboard operasional real-time, pemantauan semua proyek. |
| **CFO** | Laporan keuangan, persetujuan transaksi besar. |
| **Project Manager** | Wizard event lengkap, dynamic RAB builder, manajemen vendor & sponsor. |
| **Finance Manager** | Persetujuan transaksi, petty cash dengan OCR, manajemen COA. |
| **HR Manager** | Manajemen karyawan & freelance, penjadwalan kru, deteksi bentrok. |
| **Legal Officer** | SOP versioning, pelacakan kontrak & izin. |
| **Staff Operasional** | Checklist event, scan QR check-in. |
| **HR Staff** | Administrasi data karyawan. |
| **Admin Officer** | Pencatatan petty cash, upload nota. |
| **Vendor** | Portal untuk terima brief, kirim penawaran, upload invoice. |
| **Sponsor** | Portal untuk lihat proposal, setujui dana, lihat laporan. |
| **Client** | Portal untuk pantau progres proyek, lihat invoice. |
| **Peserta** | Pembelian tiket, QR check-in, unduh sertifikat, poin loyalitas, refund. |
| **Walk-In Customer** | Pembelian Tiket Tanpa Login, refund. |
---

> **Akhir Dokumen**
>
> _Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah acuan utama untuk perancangan fitur berbasis kebutuhan pengguna. Setiap perubahan harus disahkan oleh CEO dan Product Lead._

> END OF DOCUMENT - `DNA_05_PROBLEM_PERSONA.md`