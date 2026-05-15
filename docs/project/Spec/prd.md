---
name: Product Requirements Document
description: Dokumen spesifikasi produk Ekosistem Nara Events. Berisi executive summary, problem statement, user personas, user stories, functional dan non-functional requirements lengkap. Agnostik terhadap framework bahasa pemrograman (Blueprint Blueprint Mutlak).
author: Product Manager
phase: 1-vision-requirements
input_documents:
  - docs/project/Overview/productContext.md
status: final
---

# docs/project/Spec/prd.md - Product Requirements Document

> **Dibuat oleh**: Product Manager Agent (Fase 1: Vision & Requirements)
> **Dibaca oleh**: Technical Architect, UI/UX Designer, Project Manager, Engineer (Maupun AI Baru yang menggantikan di masa depan)

**🔥 ABSOLUTE DIRECTIVE (KORIDOR MUTLAK UNTUK NEXT AI):**
Dokumen ini bersifat bahasa-agnostik dan framework-agnostik. Apabila di masa depan Anda (AI) membaca dokumen ini untuk membangun ulang (*create from scratch*), baik itu menggunakan React, Vue, Laravel, Go, ataupun framework lainnya, Anda **WAJIB** mengikuti seluruh flow, filosofi master data, dan *requirement* bisnis yang ada di dokumen ini **TANPA** harus bertanya atau berdiskusi ulang dengan pengguna. Keputusan di dokumen ini adalah final dan komprehensif.

---

## 1. Executive Summary

Nara Events Ecosystem adalah "Super App" manajemen perhelatan acara komprehensif untuk skala korporat (B2B), promotor (Internal), dan pengguna akhir (B2C) yang dikelola oleh PT. Nara Sukses Bersama. 

Sistem ini didasari oleh prinsip **Master Data Management (MDM) Data-driven** dan **Data Transfer Object (DTO)**. Tidak ada data *statik* (hardcoded) dalam UI. Semua modul, mulai dari Hero Banner Landing Page, hingga pembuatan Tiket harus berbasis data.

Ekosistem mengintegrasikan proses *project management* (RAB, vendor, proposal template), sistem pertiketan (*seat mapping vector*, NIK protection), CRM Sales Pipeline (prospek, leads), Automation (broadcast WA/Email, logistik, promo), hingga Finance & Ledger dengan sistem *Approval/Otorisasi Berlapis*. Sistem ini menghadirkan antarmuka web, CMS Backoffice, serta PWA (Progressive Web App) untuk Staf Lapangan (Check-in) dan Member.

---

## 2. Problem Statement & Solusi Diusulkan

### 2.1 Masalah Inti & Solusi
1. **Silo Data & Duplikasi**: Manajemen EO sering menggunakan banyak alat terpisah (Trello, Xero, WA Broadcast, Eventbrite). Solusinya adalah *Master Data Management*. Membuat *Hot Create* di berbagai elemen sistem agar data entitas tidak pernah ada duplikasi (misal Vendor hanya dicatat 1 kali dan direlasikan).
2. **Kekakuan CMS**: Hero Banner, Featured Post sering *hardcode*. Solusi: Sistem harus sepenuhnya *Data Driven / CMS Builder*.
3. **Calo Tiket & Seat Conflict**: Solusi: Menggunakan Validasi NIK (1 Tiket 1 Identitas Manifes) dan fitur *Vector Map Canvas* yang dinamis untuk mencadangkan kursi secara interaktif layaknya bioskop.
4. **Kebocoran Finansial & Otorisasi Lengah**: Solusi: Menggunakan General Ledger terpusat dengan modul *Finance Multi-Tier Approval* (berdasarkan limit/nominal transaksi).
5. **Konektivitas Lapangan**: Staf check-in di venue sering blank spot. Solusi: PWA offline-first untuk staf lapangan.
6. **Kebocoran Follow-Up Leads**: Solusi: Integrasi Modul Sales CRM (Pipeline Kanban) dan Automation Broadcast.

---

## 3. Epic & User Stories (Core Modules)

### 3.1 Epic: Master Data & CMS Framework (Data-Driven Core)
- **US-MD-01**: Sebagai sistem, semua formulir *dropdown* relasional wajib memiliki tombol "Hot Create" via Drawer/Modal agar input data master (wilayah, bank, kategori UI) tidak memecah *flow* pengguna.
- **US-MD-02**: Sebagai Admin konten, saya bisa merakit *landing page* (Hero Banner, Pin Event, Featured Post) menggunakan dinamic section CMS berbasis *Schema* (tidak *hardcode*).
- **US-MD-03**: Sebagai Admin, saya bisa mengatur *Default Template* variatif (Template Invoice, Template RAB, Proposal, Printing Ticket). Tersedia variabel makro data untuk dicetak (PDF).

### 3.2 Epic: CRM, Sales Pipeline & Automation
- **US-CRM-01**: Sebagai tim Sales/Sponsorship, saya bisa memantau *Leads/Prospek* melalui Kanban Board Pipeline, tracking histori komunikasi, dan status prospek menuju penutupan (*deal/loss*).
- **US-CRM-02**: Sebagai sistem, terdapat modul *Automation* (Trigger-Action) yang bisa men-trigger Broadcast WA/Email, perubahan status logistik, dan injeksi *Promo Code* berdasarkan behavior pengguna atau status CRM.

### 3.3 Epic: Event Management & Vector Seat Mapping
- **US-EM-01**: Sebagai Promotor, saya dapat menggambar denah event (*Vector Map / Canvas drag & drop*) untuk nomor/posisi kursi.
- **US-EM-02**: Sebagai Promotor, saya dapat mensetup jenis tiket (Tier/Kelas, Bebas/Berdiri vs Bernomor, Max purchase, Toggle Proteksi NIK per tiket manifes).
- **US-EM-03**: Sebagai Member pembeli, saya bisa memilih langsung nomor kursi via kanvas visual di aplikasi / web.

### 3.4 Epic: PWA Check-In & Member Dashboard
- **US-PWA-01**: Sebagai *Field Staff* di pintu masuk, saya via PWA Mobile memindai QR Code pengunjung, memvalidasi NIK jika perlu, dengan sinkronisasi *offline-first* ke server utama.
- **US-PWA-02**: Sebagai Member via PWA B2C, saya memiliki dashboard khusus e-Ticket, Riwayat Event, PDF Materi Event, dan Client-side Sertifikat Generator QR.

### 3.5 Epic: Finance Ledger & Multi-Tier Approval
- **US-FIN-01**: Sebagai Finance, terdapat *General Ledger* akuntansi (Jurnal Entri Ganda) untuk setiap transaksi jual/beli.
- **US-FIN-02**: Sebagai Finance/CEO, pencairan dana (*Petty Cash*, Payout Vendor, Refund) **wajib** melewati Otorisasi Keuangan Berlapis (Pembuat -> Pengecek -> Penyetuju) bergantung limit batas nominal.
- **US-FIN-03**: Payment Gateway memicu rekonsiliasi ke Ledger secara *real-time*. Terdapat Dasbor BI.

---

## 4. Constraint Mutlak (Non-Functional Requirements)

1. **Agnostik Backend/Frontend:** DTO (Data Transfer Object) adalah kontrak suci. Skema objek data, struktur JSON untuk integrasi (contoh: Pipeline leads, Ledger), bersifat final. Konsep "Headless" untuk Refine/CMS tetap berlaku meskipun di-porting ke bahasa lain.
2. **Kesiapan Mobile (API-First):** Pengembangan frontend web dilarang mem-bypass API layer. Sistem wajib diasumsikan bahwa tahun depan aplikasi *Mobile Native Android/iOS* akan diciptakan dan harus langsung hit endpoint `/api/` yang sama.
3. **Database Relasional Wajib:** Ledgers, CRM pipeline, dan relasi NIK manifold dilarang menggunakan skema NoSQL yang rapuh. Wajib didukung oleh transaksi RDBMS (relasional, multi-table rollback) atau ORM ekuivalen yang strict (seperti Drizzle).
4. **Security & RBAC:** Memerlukan Spatie/CASL-like System Permissions (Who can Read/Write/Update *per resource*). Ditegakkan baik di tampilan maupun *backend endpoint*.

---

## 5. Pemahaman Konteks Sistemik (Mencegah "Spaghetti Code")

Demi memastikan kualitas dan integritas sistem dari nol:
- **TIDAK** ada pencampuran logika UI dan Backend secara bersamaan (*Spaghetti*).
- Setiap implementasi WAJIB men-deliver *UI Interactive Mock* (dummy data DTO) dahulu dan divalidasi aksesibilitas/flow-nya oleh Tech Lead (Bapak Hanif) secara visual, sebelum menyambungkannya (*wiring*) dengan *live backend*. 

---
**Catatan Versi:** 2.0 (Super Robust & Agnostic Deep Dive Audit)
**Update:** 2026-05-11
