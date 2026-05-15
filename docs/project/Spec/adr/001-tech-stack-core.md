# ADR 001: Pemilihan Core Tech Stack & Framework

**Context**: 
Sistem akan menjadi ekosistem skala besar yang memerlukan front-end modern, skalabilitas di masa depan (native mobile app), dan penanganan data relasional yang strict terutama untuk manajemen keuangan (Ledger) dan relasional CRM kompleks.

**Decision**: 
Kita menggunakan kombinasi **Next.js (App Router)** sebagai full-stack meta-framework, **PostgreSQL** sebagai database utama, **Drizzle ORM** sebagai jembatan *type-safe* antara kode dan database, dan **Firebase Authentication** untuk manajemen identitas (*identity provider*). 

**Options Considered**:
1. *Next.js + Postgres + Firebase Auth (Selected)*
2. Laravel + MySQL + Laravel Breeze (Filament base)
3. Next.js + Firebase Firestore (NoSQL)

**Rationale**:
- Next.js (App Router) dengan TypeScript menawarkan produktivitas tinggi (DX), type-safety dari backend ke frontend, dan kemampuan membangun RESTful API *first-class*. 
- PostgreSQL sangat krusial karena sifat transaksional absolut yang diperlukan oleh modul Finance terintegrasi, yang mana sangat sulit dicapai secara murni dan efisien dengan NoSQL seperti Firestore. PostgreSQL via Neon juga sangat cocok dengan environment Vercel/Serverless.
- Drizzle ORM berjalan sangat cepat di level Edge/Serverless tanpa *cold boot* lambat seperti Prisma, sambil menawarkan sintaks SQL yang familier.

**Consequences**:
- *Positif*: Kita mendapatkan skalabilitas "serverless" dari edge network Next.js/Vercel sambil mempertahankan *ACID compliance* database SQL. Validasi identitas aman lewat Google Firebase.
- *Negatif*: Tim perlu beradaptasi dengan *Server Components* dan penulisan API terpisah untuk mengakomodasi klien eksternal (mobile app kelak).
