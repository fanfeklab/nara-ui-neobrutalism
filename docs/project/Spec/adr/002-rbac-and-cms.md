# ADR 002: Penggunaan Refine sebagai Headless CMS / Data-Driven App Framework

**Context**: 
Aplikasi membutuhkan ratusan route CRUD untuk Backoffice Admin (Dashboard, Manajemen Section Landing Page, Blog, Ledger, Tiket, Approval CRM) dengan filter, pagination, dan otorisasi kontrol (RBAC ABAC) layaknya Laravel Filament, namun dalam ekosistem Next.js/React. Membangun semuanya dari awal berisiko buang-buang sumber daya (*reinvent the wheel*).

**Decision**: 
Menggunakan **Refine.dev** secara **Headless** dipadukan dengan **Shadcn UI** untuk membangun Admin Backoffice, Module Ledger, CRM, dan sistem approval-nya. Otorisasi akan dikelola dengan **CASL** yang di-[inject] ke `AccessControlProvider` milik Refine.

**Options Considered**:
1. *Refine + Shadcn UI + CASL (Selected)*
2. Membangun Custom CRUD & RBAC murni dari nol dengan React Query.
3. React-Admin.

**Rationale**:
- Refine adalah meta-framework standar industri untuk aplikasi B2B di ekosistem React. Refine menangani semua sinkronisasi state data (menggunakan React Query di bawah layar), routing, breadcrumb, notifikasi, dan *access control* (RBAC). 
- Penggunaan Headless dipadukan dengan Shadcn UI memungkinkan UI tetap eksklusif dengan tema Neo-Brutalism, terhindar dari desain kaku "saham" semacam Ant Design.
- Mendukung RESTful API data provider sehingga arsitektur *API-First* (yang dibutuhkan untuk mobile app nanti) bisa terwujud dengan mudah tanpa mengunci kita di satu framework state-manager tertentu.

**Consequences**:
- *Positif*: Penghematan waktu development CRUD, pagination, filter, dan integrasi RBAC hingga 70%. Perawatan data pipeline jadi terstandarisasi.
- *Negatif*: Tim frontend perlu mempelajari konsep "Data Provider" dan "Access Control Provider" milik arsitektur Refine.
