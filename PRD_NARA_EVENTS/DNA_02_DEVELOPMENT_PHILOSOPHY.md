---
title: "DNA_02 - Filosofi Pengembangan: Jangan Membangun Roda yang Sudah Ada"
description: "Dokumen fondasi yang mendeklarasikan prinsip-prinsip pengembangan wajib untuk Nara ERP. Dirancang untuk memaksimalkan efisiensi AI Agentic Coder dengan Ecosystem-First Development, Configuration over Coding, dan Token Budget Awareness. Dokumen ini adalah DNA proyek yang berlaku lintas stack teknologi."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["philosophy", "ecosystem-first", "efficiency", "ai-agent", "constitution", "agnostic"]
category: "Foundation"
ai_context:
  goal: "Menyediakan panduan prinsip pengembangan yang tidak dapat dinegosiasikan. Agen AI wajib membaca dan mematuhi dokumen ini sebelum menulis kode apa pun."
  target_audience: "Agen AI (Gemini, Developer, Architect, QA), Lead Engineer"
  constraints: "Dokumen ini adalah DNA proyek. Setiap pelanggaran terhadap prinsip di sini = penolakan kode. Tidak terikat pada stack teknologi tertentu."
language: "id"
---

# FILOSOFI PENGEMBANGAN: JANGAN MEMBANGUN RODA YANG SUDAH ADA

> **Nama File:** `DNA_02_DEVELOPMENT_PHILOSOPHY.md`
> **Kode Dokumen:** `DOC-PHIL`
> **Sifat:** Konstitusi Pengembangan
> **Versi:** 2.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [AGENTS.md](../AGENTS.md), [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md)

---

## 1. Mengapa Prinsip Ini Adalah Fondasi Utama

Proyek **Nara ERP** dikembangkan dengan bantuan **AI Agentic Coder**. Berbeda dengan pengembangan tradisional di mana manusia menulis setiap baris, AI memiliki karakteristik unik yang membuat prinsip "Jangan Membangun Roda" menjadi **kritis**, bukan sekadar *best practice*:

### 1.1 Efisiensi Token Context Window
Setiap baris kode yang dihasilkan AI dari nol memakan **token** dalam context window. Semakin sedikit kode yang perlu ditulis, semakin panjang riwayat percakapan dan logika kompleks yang bisa ditampung. Ini berdampak langsung pada **biaya API** dan **kualitas hasil**.

### 1.2 Minimalkan Halusinasi dan Bug
Implementasi dari nol — terutama untuk fitur kompleks seperti RBAC, file uploader, atau CRUD generator — sangat rawan **halusinasi** (kode yang tampak benar tapi salah) dan **celah keamanan**. Package populer sudah teruji oleh ribuan pengembang; AI cukup menulis kode integrasi pendek yang jauh lebih aman.

### 1.3 Kecepatan Iterasi
Dengan admin panel framework yang matang, package ecosystem yang kaya, dan *starter kit* yang teruji, AI hanya perlu menulis konektor atau *wrapper*. Proses dari "ide ke deployment" bisa selesai dalam hitungan jam, bukan hari.

### 1.4 Maintainability Jangka Panjang
Kode kustom yang ditulis AI mungkin sulit dipahami oleh AI lain (atau manusia) di masa depan. Package standar memiliki dokumentasi, komunitas, dan pola yang dikenal luas.

---

## 2. Enam Prinsip Turunan (Wajib Dipatuhi)

### 2.1 Ecosystem-First Development
**Definisi:** Sebelum membuat fitur apa pun, AI **wajib** mencari package, library, boilerplate, atau SaaS yang sudah ada dan *maintained*.

**Aturan:**
- Cari di package registry resmi (npm, packagist, pypi, dll.) atau GitHub.
- Prioritaskan package dengan banyak bintang, diperbarui dalam 6 bulan terakhir, dan lisensi permisif (MIT, Apache 2.0).
- Gunakan package tersebut. Hanya tulis kode kustom jika benar-benar tidak ada solusi yang sesuai.

**Contoh Penerapan (Agnostic):**
- Butuh RBAC? Gunakan package permission management teruji. Jangan buat dari nol.
- Butuh upload file? Gunakan service terkelola atau package filesystem yang sudah ada.
- Butuh CRUD admin? Gunakan admin panel framework yang matang.
- Butuh akuntansi double-entry? Gunakan package ledger yang sudah ada.

### 2.2 Single UI Foundation
**Definisi:** Proyek memiliki **satu fondasi UI tunggal** yang berlaku untuk seluruh halaman — baik dashboard internal maupun landing page publik.

**Aturan:**
- Semua halaman menggunakan Design System yang didefinisikan di [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md).
- **Dilarang menggunakan dua atau lebih library UI yang berbeda** dalam satu proyek.
- **Dilarang membuat komponen primitif sendiri** jika sudah ada di framework UI yang digunakan.
- Landing page publik menggunakan struktur yang sama, hanya berbeda konten.
- Jika di masa depan ada template premium, template tersebut menggantikan implementasi UI, **bukan menggantikan Design System**. DNA visual di [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md) tetap berlaku.

### 2.3 Configuration Over Coding
**Definisi:** Gunakan alat deklaratif (file konfigurasi, schema definition, environment variables) sehingga AI hanya mengelola konfigurasi, bukan menulis ulang logika yang sama.

**Aturan:**
- Gunakan schema definition untuk mendefinisikan form dan wizard (data-driven, bukan hardcode).
- Gunakan tema/kustomisasi terpusat untuk semua perubahan visual, bukan inline style.
- Gunakan environment variables untuk semua konfigurasi yang berbeda antar environment.

**Contoh Penerapan:**
- Wizard pembuatan event dikendalikan oleh schema definition, bukan 10 file komponen terpisah.
- Menu sidebar dirender berdasarkan array permission dari database, bukan switch-case hardcode.
- Warna, tipografi, dan spacing diubah melalui file tema terpusat, bukan CSS satu per satu.

### 2.4 Atomic Modularity & Composability
**Definisi:** Proyek dipecah menjadi layer yang mandiri, sehingga AI bisa menugaskan satu fokus untuk integrasi UI, fokus lain untuk logika bisnis, tanpa saling tumpang tindih.

**Aturan:**
- Setiap modul bisnis berdiri sendiri (lihat [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md)).
- Komunikasi lintas modul hanya via Events, Listeners, atau Interface Contracts.
- Komponen UI adalah *dumb components*; logika bisnis di Service/Action layer.

### 2.5 Explicit Constraint Declaration
**Definisi:** Di setiap dokumen spesifikasi, tambahkan batasan keras untuk mencegah AI menyimpang.

**Aturan:**
- "UI hanya boleh menggunakan Design System yang sudah didefinisikan. Dilarang membuat komponen scratch."
- "Form hanya boleh menggunakan form builder yang direkomendasikan framework. Dilarang membuat form state manual."
- "File upload hanya boleh menggunakan service/package yang sudah ditentukan. Dilarang implementasi dari nol."
- "Tidak boleh ada dua library UI berbeda di SELURUH proyek."

### 2.6 Token Budget Awareness
**Definisi:** Ajari AI untuk menghargai konteks. Instruksikan untuk menghasilkan kode minimal, prefer named imports, dan zero-boilerplate utilities.

**Aturan:**
- Gunakan named exports agar tree-shaking optimal.
- Hindari komentar berlebihan; kode harus self-documenting.
- Hindari duplikasi; ekstrak ke shared utility di modul Shared/Core.
- Manfaatkan komponen yang sudah ada, jangan copy-paste.

### 2.7 Reusability via Community Patterns
**Definisi:** Jangan buat custom utility jika sudah ada di package standar. Jangan buat validasi sendiri jika bisa pakai schema validation library yang mature.

**Aturan:**
- Cek package registry sebelum membuat utility baru.
- Gunakan schema validation library untuk semua validasi, baik client-side maupun server-side.
- Gunakan library standar untuk manipulasi tanggal, string, dan angka.

---

## 3. Alur Keputusan: "Haruskah Saya Menulis Kode Kustom?"

Sebelum menulis kode, AI wajib mengikuti alur keputusan ini:

```text
1. Apakah fitur ini sudah ada di framework UI yang digunakan?
   (Cek: dokumentasi framework, komponen bawaan, halaman contoh)
   -> YA: Gunakan yang sudah ada. Overwrite konten, jangan hapus struktur.
   -> TIDAK: Lanjut ke 2.

2. Apakah ada komponen UI di Design System yang menyediakan fitur ini?
   (Cek: [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md))
   -> YA: Gunakan komponen Design System tersebut.
   -> TIDAK: Lanjut ke 3.

3. Apakah ada package resmi yang menyediakan fitur ini?
   (Cek: package registry, GitHub stars, maintenance status, lisensi)
   -> YA: Jika memenuhi syarat, gunakan.
   -> TIDAK: Lanjut ke 4.

4. Apakah ada SaaS yang bisa diintegrasikan?
   (Contoh: Uploadthing untuk file upload, Auth provider untuk autentikasi)
   -> YA: Gunakan API mereka. Tulis konektor minimal.
   -> TIDAK: Lanjut ke 5.

5. Apakah fitur ini benar-benar unik dan tidak ada solusi yang ada?
   -> YA: Tulis kode kustom dengan cakupan minimal. Dokumentasikan.
   -> TIDAK: Kembali ke 1, cari lebih dalam.
```

---

## 4. Konsekuensi Pelanggaran

| Prinsip yang Dilanggar | Dampak | Contoh |
|---|---|---|
| Single UI Foundation | Dua design system berbeda, bundle membengkak, inkonsistensi visual | Menambahkan library UI kedua untuk landing page, padahal Design System sudah mencakup |
| Ecosystem-First | Token habis sia-sia, bug keamanan, waktu development 10x lebih lama | Implementasi RBAC dari nol butuh 500+ baris, package hanya butuh 20 baris konfigurasi |
| Configuration Over Coding | Perubahan kecil butuh ubah kode, bukan file konfigurasi | Menu sidebar di-hardcode, setiap tambah role harus edit 5 file |
| Token Budget Awareness | Biaya API membengkak, context window cepat penuh | Kode penuh komentar tidak perlu, fungsi 100 baris yang seharusnya 10 baris |
| Explicit Constraint | AI berhalusinasi membuat komponen dari nol | AI membuat DatePicker kustom padahal framework sudah menyediakan |

---

## 5. Hubungan dengan Dokumen Lain

| Dokumen | Hubungan |
|---|---|
| [AGENTS.md](../AGENTS.md) | Merujuk dokumen ini sebagai prinsip nomor satu. Aturan Ecosystem-First. |
| [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md) | Mendefinisikan satu-satunya Design System: warna, tipografi, komponen, animasi. |
| [DNA_07_BUSINESS_RULES.md](./DNA_07_BUSINESS_RULES.md) | Aturan bisnis diimplementasikan dengan package yang sudah ada, bukan kode kustom. |
| [DNA_08_DOMAIN_CONTEXT.md](./DNA_08_DOMAIN_CONTEXT.md) | Mendefinisikan pembagian domain untuk arsitektur modular. |
| [DEVELOPMENT/](../DEVELOPMENT/) | Setiap task milestone harus menyebutkan package yang akan digunakan, bukan "buat dari nol". |

---

## 6. Tata Kelola

1. Dokumen ini adalah **konstitusi pengembangan**. Perubahan hanya bisa dilakukan melalui persetujuan eksplisit Lead Engineer.
2. Setiap usulan package baru harus mengikuti alur keputusan Pasal 3 dan dicatat.
3. AI Agentic Coder wajib mematuhi dokumen ini. Pelanggaran yang disengaja = penolakan kode.
4. Lead Engineer bertanggung jawab menegakkan prinsip ini dalam setiap code review.
5. **Design System di [DNA_12_DESIGN_SYSTEM.md](./DNA_12_DESIGN_SYSTEM.md) adalah fondasi UI yang tidak dapat diganti.** Setiap usulan untuk menambah library UI lain akan ditolak otomatis.

---

> **Akhir Dokumen**
>
> _Dokumen ini adalah DNA proyek Nara ERP. Setiap pengembang — manusia maupun AI — wajib menjiwai prinsip ini. Versi 2.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._

> END OF DOCUMENT - `DNA_02_DEVELOPMENT_PHILOSOPHY.md`