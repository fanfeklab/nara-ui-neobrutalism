---
title: "TECH_01 - Tech Stack & Environment — Nara ERP (Laravel 13 Edition)"
description: "Dokumen spesifikasi teknis lengkap untuk stack teknologi Nara ERP yang diimplementasikan di atas Laravel 13. Mencakup versi pasti, justifikasi pemilihan, package ecosystem komprehensif, environment constraints, dan strategi deployment budget 0 rupiah. Semua package telah diverifikasi kompatibilitasnya dengan Laravel 13 per Mei 2026."
author: "Nara Project Planner (Hanif — Lead Principal Architect & Software Engineering)"
date: 2026-05-07
tags: ["tech_stack", "laravel_13", "filament", "livewire", "postgresql", "tall_stack", "environment", "budget_zero"]
category: "Architecture"
ai_context:
  goal: "Menyediakan spesifikasi teknis yang tidak ambigu bagi agen AI untuk menyetel environment pengembangan Laravel 13. Mencerminkan seluruh package ecosystem yang telah diverifikasi dan strategi deployment tanpa biaya."
  target_audience: "Agen AI, Developer, DevOps, Lead Engineer"
  constraints: "Seluruh package manager WAJIB menggunakan Composer + npm. Environment development menggunakan Laravel Sail atau Docker. Semua package telah dicek kompatibilitasnya dengan Laravel 13. Budget deployment: Rp 0."
language: "id"
---

# TECH STACK & ENVIRONMENT — NARA ERP (LARAVEL 13 EDITION)

> **Nama File:** `TECH_01_STACK.md`
> **Kode Dokumen:** `DOC-TECH-L13`
> **Sifat:** Referensi Stabil
> **Versi:** 1.0.0 — Laravel 13 Foundation
> **Rujuk ke:** [AGENTS.md](./AGENTS.md), [../../DNA/DNA_02_DEVELOPMENT_PHILOSOPHY.md](../../DNA/DNA_02_DEVELOPMENT_PHILOSOPHY.md), [../../DNA/DNA_08_DOMAIN_CONTEXT.md](../../DNA/DNA_08_DOMAIN_CONTEXT.md), [../../DNA/DNA_12_DESIGN_SYSTEM.md](../../DNA/DNA_12_DESIGN_SYSTEM.md), [TECH_06_DEVELOPER_COOKBOOK.md](./TECH_06_DEVELOPER_COOKBOOK.md)

---

## 1. Ikhtisar Stack

Nara ERP dibangun sebagai **Modular Monolith** di atas **Laravel 13** dengan **Filament 5** sebagai admin panel, **Livewire 4 / Volt** untuk UI interaktif, **PostgreSQL 16** (via Neon) untuk database, dan **Laravel Cloud** (atau alternatif free-tier) untuk deployment.

Seluruh pemilihan stack mengacu pada prinsip **"Jangan Membangun Roda yang Sudah Ada"** ([DNA_02](../../DNA/DNA_02_DEVELOPMENT_PHILOSOPHY.md)), memaksimalkan package Laravel yang mature dan terverifikasi, serta mengoptimalkan biaya operasional menuju **Rp 0 per bulan**.

---

## 2. Core Stack (Wajib)

### 2.1 Bahasa & Framework

| Teknologi | Versi Target | Justifikasi |
|---|---|---|
| **PHP** | ≥ 8.4 | Persyaratan minimum mayoritas package Laravel 13. Strict typing, readonly properties, enum. |
| **Laravel** | 13.x | Rilis Maret 2026. First-party AI SDK native, JSON:API resources, native pgvector integration, PHP Attributes everywhere, PreventRequestForgery (cookie-less CSRF), Reverb database driver (WebSocket tanpa Redis). |
| **PostgreSQL** | 16 | ACID wajib untuk double-entry accounting. pgvector built-in untuk AI semantic search. Table prefix untuk isolasi modul. |
| **Redis** | 7.x | Queue driver untuk Laravel Horizon. Caching. Reverb pub/sub. |

### 2.2 Admin Panel & UI

| Teknologi | Versi Target | Justifikasi |
|---|---|---|
| **Filament** | 5.x | Admin panel framework. Form builder, table builder, widget builder out-of-the-box. Rilis Januari 2026. Support Laravel 13 via v5.4.0. |
| **Livewire** | 4.x | Komponen UI backend-driven (Dumb UI). Rilis Januari 2026. Support penuh Laravel 13 via v4.2.0. |
| **Volt** | 4.x | Single-File Components API untuk Livewire. Mempercepat development UI tanpa memisahkan class dan template. |
| **Tailwind CSS** | 4.x | CSS utility framework. Diperlukan oleh Filament 5. Juga digunakan untuk halaman publik via template premium nantinya. |

### 2.3 Autentikasi & Otorisasi

| Teknologi | Versi Target | Justifikasi |
|---|---|---|
| **Laravel Sanctum** | 4.x (bawaan L13) | Token-based auth untuk API dan SPA. Ringan, first-party. |
| **Laravel Socialite** | 6.x (bawaan L13) | OAuth login (Google, dll.) untuk user eksternal. |
| **spatie/laravel-permission** | ^7.0 | RBAC engine. 6K+ GitHub stars. Support Laravel 13 via dedicated branch. Integrasi native dengan Laravel Gate & Policy. |
| **bezhansalleh/filament-shield** | 4.2.0 | UI manajemen role/permission di Filament. Auto-generate permission dari Filament resources. Support Laravel 13. |

### 2.4 Queue, Real-Time & Monitoring

| Teknologi | Versi Target | Justifikasi |
|---|---|---|
| **Laravel Horizon** | 6.x | Dashboard monitoring Redis queue. Real-time metrics, worker auto-balancing, job retry management. |
| **Laravel Reverb** | 2.x | WebSocket server first-party. L13 memperkenalkan **database driver** — horizontal scaling tanpa Redis wajib. |
| **Laravel Pulse** | 2.x | Real-time server monitoring. Request lambat, job error, queue throughput. |

---

## 3. Package Ecosystem (Verified for Laravel 13)

### 3.1 Developer Experience (DevTools)

| Package | Versi | Justifikasi | Status |
|---|---|---|---|
| **pestphp/pest** | 4.x | Testing framework. Ships by default with Laravel 13. | ✅ Bawaan L13 |
| **laravel/telescope** | Latest | Debugging & insight. Request, query, job, log, mail inspection. | ✅ L13 Ready |
| **laravel/pulse** | 2.x | Server monitoring. Real-time metrics. | ✅ L13 Ready |
| **laravel/horizon** | 6.x | Queue monitoring dashboard. | ✅ L13 Ready |
| **itsgoingd/clockwork** | Latest | Clockwork for Laravel. Profiling & debugging. | ✅ L13 Ready |
| **barryvdh/laravel-ide-helper** | Latest | IDE Helper Generator. | ✅ L13 Ready |
| **barryvdh/laravel-debugbar** | Latest | Debugbar for Laravel. | ✅ L13 Ready |
| **maatwebsite/excel** | ^3.1.68 | Excel Import/Export. | ✅ L13 Ready |
| **spatie/laravel-backup** | Latest | Backup & Restore. | ✅ L13 Ready |

### 3.2 Core Systems

| Package | Versi | Justifikasi | Status |
|---|---|---|---|
| **spatie/laravel-permission** | ^7.0 | RBAC engine. | ✅ L13 Ready |
| **bezhansalleh/filament-shield** | 4.2.0 | RBAC UI + Policy Generator. | ✅ L13 Ready |
| **spatie/laravel-activitylog** | ^5.0 | Immutable audit trail. | ✅ L13 Ready |
| **mradder/filament-logger** | Latest | Filament activity log viewer. | ✅ L13 Ready |
| **laravel/pennant** | 1.x (bawaan L13) | First-party feature flags. | ✅ Bawaan L13 |
| **spatie/laravel-medialibrary** | ^11.21 | Manajemen file & media. | ✅ L13 Ready |
| **laravel/scout** | ^10.24 | Full-text search abstraction. | ✅ L13 Ready |
| **meilisearch/meilisearch** | Latest | Search engine (self-hosted atau cloud). | ✅ Tersedia |
| **knuckleswtf/scribe** | Latest | API Documentation generator. | ✅ L13 Ready |
| **spatie/laravel-pdf** | Latest | PDF Generation. | ✅ L13 Ready |
| **spatie/laravel-database-mail-templates** | Latest | Email Templates. | ✅ L13 Ready |
| **goedemiddag/laravel-recaptcha** | Latest | reCAPTCHA integration. | ✅ L13 Ready |

### 3.3 Core Modules & Plugins

| Package | Versi | Kategori | Justifikasi | Status |
|---|---|---|---|---|
| **olaoluwasipe/multi-wallet-ledger** | dev-master | Double-Entry Accounting | Multi-currency ledger primitives. Wallets, accounts, journals. | ✅ L13 Ready |
| **LaravelDaily/laravel-invoices** | Latest | Invoice | Invoice PDF generation. | ✅ Sikat (Package) |
| **glennraya/xendivel** | v2.1.1 | Payment Gateway (Xendit) | Kartu kredit, e-wallet, custom invoicing, refund. | ✅ Sikat (Package) |
| **bensondevs/laravel-midtrans** | v0.1.0-alpha | Payment Gateway (Midtrans) | Snap payments, subscription billing, refund. | ✅ Sikat (Package) |
| **centrex/laravel-crm** | v1.0.0 | CRM & Sales Pipeline | Companies, contacts, leads, deals, activities. | ✅ Sikat (Package) |
| **jeffersongoncalves/filament-knowledge-base** | Latest | Knowledge Base / Wiki | Kategori, artikel, versioning, SEO, public/private panel. | ✅ Sikat (Package) |
| **statikbe/laravel-filament-flexible-content-block-pages** | Latest | CMS & Page Builder | Flexible content blocks, hierarchical menu builder, SEO. | ✅ Sikat (Package) |
| **elgibor-solution/laravel-inventory** | Latest | Inventory & Asset | Multi-branch, FIFO costing, auto journal posting. | ✅ Sikat (Package) |
| **arafadev/multi-channel-notifications** | v1.3.0 | Notification Hub | Unified API: email, SMS, WhatsApp, Slack, Discord. | ✅ Sikat (Package) |
| **spatie/mailcoach** | v10.0.0 | Marketing & Email Campaign | Self-hosted marketing emails, automations, segmentation. | ✅ Sikat (Package) |
| **laravel/ai** | ^0.4 | AI Copilot | First-party Laravel AI SDK. | ✅ Sikat (Package) |
| **miracuthbert/laravel-royalty** | Latest | Loyalty Program | User points, rewards, experience points. | ⚠️ Perlu verifikasi L13 |
| **guava/calendar** | Latest | Calendar / Schedule | Filament FullCalendar integration. | ✅ Sikat (Package) |
| **matt-daneshvar/laravel-survey** | Latest | Surveys | Survey creation, questions, results. | ✅ Sikat (Package) |
| **masterix21/laravel-bookings** | Latest | Ticketing & Booking | Booking management. | 🧠 Contek (Framework) |
| **simple-qrcode** | Latest | QR Code | QR Code generation. | ✅ Sikat (Package) |

### 3.4 Additional Modules (dari hasil bedah Perfex CRM & Evente)

| Package | Versi | Kategori | Justifikasi | Status |
|---|---|---|---|---|
| **laravel/cashier** | Latest | Subscription / Billing | Stripe/Paddle billing. | ✅ Sikat (Package) |
| **bezhansalleh/filament-google-analytics** | Latest | Google Analytics | Analytics dashboard di Filament. | ✅ Sikat (Package) |
| **hadyfayed/filament-workflow-canvas** | Latest | Workflow Automation | Visual workflow builder. | ✅ Sikat (Package) |
| **riari/laravel-forum** | Latest | Discussion / Forum | Forum untuk komunitas EO (opsional). | ✅ Sikat (Package) |
| **fereydooni/laravel-ticketing** | Latest | Support / Ticketing | Ticket support system. | ✅ Sikat (Package) |
| **jeffersongoncalves/laravel-help-desk** | Latest | Support / Help Desk | Help desk system. | ✅ Sikat (Package) |
| **ediazaro/receipt-scanner** | v4.0.1 | OCR (Petty Cash) | AI-Powered receipt scanner. | ✅ Sikat (Package) |
| **nik-ktp-validator** | Latest | NIK Validator | Validasi format NIK KTP. | ✅ Sikat (Package) |

---

## 4. Package yang DILARANG KERAS

| Package / Library | Alasan Pelarangan |
|---|---|
| **Tailwind CSS plugin lain (DaisyUI, dll.) untuk dashboard** | Filament 5 sudah menggunakan Tailwind CSS v4. Menambahkan plugin UI lain akan memecah konsistensi dan berpotensi konflik. |
| **Library ikon selain bawaan Filament** | Konsistensi ikonografi. Filament menggunakan Heroicons secara default. |
| **Font selain IBM Plex Mono** | DNA visual di [DNA_12](../../DNA/DNA_12_DESIGN_SYSTEM.md). |
| **pnpm, yarn, bun** | Composer untuk PHP, npm untuk frontend. |
| **Implementasi RBAC kustom** | `spatie/laravel-permission` + `filament-shield` sudah teruji. |
| **Implementasi CRUD manual** | Gunakan Filament Resource + `filament-crud-maker`. |

---

## 5. Struktur Proyek (Modular Monolith)

```text
nara-erp/
├── app/
│   ├── Modules/                          # Modul bisnis
│   │   ├── Shared/                       # Shared Kernel (DTOs, ValueObjects, Enums, Interfaces, Exceptions)
│   │   ├── MasterData/                   # 25+ MDM
│   │   ├── EventManagement/              # Wizard, RAB, Timeline
│   │   ├── Finance/                      # Double-Entry, Invoice, PO
│   │   ├── HumanResources/               # Karyawan, Freelancer
│   │   ├── VendorManagement/             # Brief, Evaluasi
│   │   ├── SponsorManagement/            # Proposal, Tier
│   │   ├── ClientManagement/             # RFP, Progres
│   │   ├── Ticketing/                    # Booking, QR, Check-in
│   │   ├── Legal/                        # SOP, Kontrak, Izin
│   │   ├── Loyalty/                      # Poin, Tier, Reward
│   │   ├── Notification/                 # Email, WA, In-app
│   │   ├── CMS/                          # Page Builder
│   │   ├── Marketing/                    # Pipeline, Campaign
│   │   └── Settings/                     # Global Settings, Feature Flags
│   └── Filament/                         # Filament Resources, Pages, Widgets
├── config/
│   └── modules.php                       # Module Activation/Deactivation
├── database/
│   ├── migrations/
│   └── seeders/
│       └── master/                       # 25+ MDM seeders
├── routes/
│   ├── web.php                           # Public routes
│   ├── admin.php                         # Filament routes
│   └── api.php                           # REST API (opsional)
└── tests/
    ├── Unit/
    ├── Feature/
    └── Arch/                             # Pest Architectural Tests
```

---

## 6. Database & Master Data Management (MDM)

| Atribut | Keputusan |
|---|---|
| **Database** | PostgreSQL 16 via **Neon** (serverless, free tier) |
| **Primary Key** | UUID untuk semua tabel (`ramsey/uuid` dengan ordered UUID) |
| **Table Prefix** | `master_*` (MDM), `evt_*` (Event), `fin_*` (Finance), `hr_*` (HR), `vnd_*` (Vendor), `spn_*` (Sponsor), `clt_*` (Client), `tkt_*` (Ticketing), `lgl_*` (Legal), `lty_*` (Loyalty), `ntf_*` (Notification), `cms_*` (CMS), `mkt_*` (Marketing), `inv_*` (Inventory), `stg_*` (Settings) |

### 6.1 Neon PostgreSQL Free Tier

| Atribut | Nilai |
|---|---|
| **Compute** | 100 CU-hours/bulan |
| **Storage** | 0.5 GB |
| **Scale to Zero** | ✅ Database idle tidak dikenakan biaya |
| **pgvector** | ✅ Built-in |
| **Branching** | ✅ Copy-on-write database branches (berguna untuk Sandbox Mode) |

---

## 7. Deployment & Hosting (Budget Rp 0)

### 7.1 Strategi Utama: Laravel Cloud Starter Plan

| Atribut | Nilai |
|---|---|
| **Biaya Bulanan** | **$0** (Starter Plan) |
| **Free Credit** | $5 (sekali di awal) |
| **Kartu Kredit** | **Tidak diperlukan** untuk signup |
| **Compute** | Auto-hibernate ke nol saat idle (tidak ada biaya saat tidak ada request) |
| **Custom Domain** | Gratis di Starter Plan |
| **Apps & Environments** | Unlimited |
| **Serverless Postgres** | Included, hibernate bersama aplikasi |

### 7.2 Strategi Fallback: Neon + VPS Free Tier

Jika Laravel Cloud tidak mencukupi untuk production:

| Layanan | Platform | Biaya |
|---|---|---|
| **Database** | Neon PostgreSQL | $0 (free tier: 0.5 GB, 100 CU-hrs) |
| **Object Storage** | Cloudflare R2 | $0 (10 GB gratis) |
| **Email** | Resend | $0 (100 email/hari) |
| **Search** | Meilisearch Cloud | $0 (self-hosted di VPS) atau $0 (free tier) |

### 7.3 File Storage: Cloudflare R2

| Atribut | Nilai |
|---|---|
| **Free Tier** | 10 GB storage |
| **Egress Fee** | **$0** (zero egress fee) |
| **API** | S3-compatible |
| **Laravel Integration** | Native via `storage.disks.s3` dengan endpoint R2 |

---

## 8. Environment Development

### 8.1 Konfigurasi Wajib

| Atribut | Nilai | Keterangan |
|---|---|---|
| **PHP** | ≥ 8.4 | Required oleh Laravel 13 & package ecosystem |
| **Composer** | Latest | PHP package manager |
| **Node.js** | ≥ 20 LTS | Untuk npm dependencies (Tailwind CSS, Vite) |
| **npm** | Latest | Frontend package manager |
| **PostgreSQL** | 16 | Local: Laravel Sail. Cloud: Neon. |
| **Redis** | 7.x | Local: Laravel Sail. |

### 8.2 Laravel Sail (Docker)

Development lokal menggunakan Laravel Sail:
```bash
curl -s "https://laravel.build/nara-erp?with=pgsql,redis,meilisearch,mailpit" | bash
```

### 8.3 Environment Variables Wajib

```ini
# Database (Neon - Production / Sail - Local)
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=nara_erp
DB_USERNAME=nara
DB_PASSWORD=

# Redis
REDIS_HOST=localhost
REDIS_PASSWORD=null
REDIS_PORT=6379

# Cloudflare R2
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=auto
AWS_BUCKET=
AWS_ENDPOINT=https://<account_id>.r2.cloudflarestorage.com
AWS_USE_PATH_STYLE_ENDPOINT=true

# AI SDK
AI_PROVIDER=gemini
GEMINI_API_KEY=

# Email (Resend)
MAIL_MAILER=resend
RESEND_API_KEY=

# Payment Gateway
XENDIT_API_KEY=
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=

# Feature Flags
SANDBOX_MODE_ENABLED=false
```

---

> **Akhir Dokumen**
>
> _Versi 1.0.0 — Laravel 13 Foundation. Ditinjau terakhir: 2026-05-07._
> _Setiap perubahan pada stack ini harus dicatat dan melalui persetujuan eksplisit Lead Engineer._

> END OF DOCUMENT - `TECH_01_STACK.md`