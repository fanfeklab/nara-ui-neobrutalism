# 🏗️ Arsitektur Interaktif & Perencanaan Mockup (Stage 2 - 8)

Dokumen ini adalah peta panduan (blueprint) bagi kita selama fase assemblesi komponen interaktif (Stage 2 hingga 8). Karena proyek Frontend ini berjalan tanpa *backend* ril (PostgreSQL/Laravel), semua rute, state, dan logika bisnis yang didefinisikan dalam dokumen PRD (`DNA_06_USER_JOURNEY.md`, `DNA_11_DATABASE_SCHEMA.md`, dll) harus kita proyeksikan ke dalam infrastruktur *mock* yang solid.

---

## 1. Peta Jalur (Wireframe Paths & Routing)

Berdasarkan `DNA_01_SOFTWARE_OVERVIEW.md`, sistem NARA EVENTS dipecah menjadi beberapa *entry points* dengan URL base yang berbeda.

### A. Situs Publik (Company Profile & Ticketing) - *Dikerjakan pada STAGE 2*
*Penting: Copywriting di area ini murni berfokus pada NARA EVENTS sebagai Event Organizer (EO) yang inovatif, profil perusahaan, portofolio acara, dan sistem penjualan tiket. Tidak ada mention terkait fitur ERP/Internal tools.*
*   `/` : **Landing Page**. (Hero banner, USP EO Nara Events, Call to Action ke Explore Events).
*   `/about` : **About Us & Team**.
*   `/services` : **Layanan NARA Events**.
*   `/portfolio` : **Histori Event Masa Lalu & Gallery**.
*   `/clients` : **Our Clients / Partners**.
*   `/blog` / `/blog/[slug]`: **Grid Artikel, News & Detail**.
*   `/events` : **Event Explorer** (Pencarian, filter kategori/tanggal).
*   `/events/[slug]` : **Pusat Informasi Event**. (Rujukan utama untuk pembelian).
*   `/checkout/[eventId]/step-1` : **Pemilihan Tiket** (Validasi sisa kuota, pemilihan tier).
*   `/checkout/[eventId]/step-2` : **Data Diri Pemesan** (Integrasi Zod untuk validasi identitas).
*   `/checkout/[eventId]/step-3` : **Review & Bayar** (Kalkulasi subtotal + pajak/admin fee).
*   `/checkout/success/[orderId]` : **E-Ticket & QR Download**.
*   `/refund-request` : **Pengajuan Refund**.
*   `/contact` : **Hubungi Kami**.

### B. Dashboard Internal (Operasional Manajemen & CMS) - *Dikerjakan pada STAGE 3, 4, 5, 7*
*   `/login`, `/register`, `/forgot-password` : **Gerbang Akses**.
*   `/dashboard` : **Global Overview** (Analitik, Revenue, Ticker).
*   `/dashboard/events` : **Master DataGrid Event** (Filter status: Draft, Published, Selesai).
*   `/dashboard/events/create` : **Wizard Builder Event** (Form raksasa 10 langkah pembentukan event + RAB).
*   `/dashboard/events/[id]` : **Command Center Event** (Tab: RAB, Kanban Timeline, Vendor, Ticketing, Lineup).
*   `/dashboard/finance` : **Monitor Laba/Rugi, Transaksi Masuk/Keluar, AP/AR**.
*   `/dashboard/hr` : **Direktori Kru, Slip Gaji, Kalender Penugasan**.
*   `/dashboard/cms/blog` : **Manajemen Konten Blog & Berita**.
*   `/dashboard/cms/portfolio` : **Manajemen Portofolio, Klien & Galeri**.
*   `/dashboard/cms/landing` : **Pengaturan Landing Page (Hero, USP, Testimonial)**.

### C. Ekosistem Portal (Vendor, Klien, Member) - *Dikerjakan pada STAGE 6*
*   `/portal/vendor/dashboard` : **Brief Tender & Submit Penawaran**.
*   `/portal/client/dashboard` : **Project Tracker (View Only) & Laporan Tagihan**.
*   `/portal/member/dashboard` : **Tiket Saya (QR Aktif), Histori, Poin Rewards**.

---

## 2. Struktur Data Mock (Zustand & JSON)

Karena berpedoman pada `DNA_11_DATABASE_SCHEMA.md` & `DNA_09_MASTER_DATA.md`, kita memerlukan desain representasi data JSON (`DTO`). Berikut daftar relasi statis yang harus dipersiapkan dalam folder `/src/data/mock/`:

*   **`events.json`**: Menyimpan array data event (Status, Kuota, Tanggal, Venue Target, Relasi ID Vendor).
*   **`tickets.json`**: Tiers harga (Early Bird, Presale, VIP) serta logika *Sold Out* (Stock = 0).
*   **`users_internal.json`**: Data PM, Finance, CEO untuk simulasi RBAC (`TECH_02_RBAC.md`).
*   **`finance_transactions.json`**: Transaksi masuk dari Gateway, dan AP keluar ke Vendor.
*   **`vendors.json`**: Master direktori EO support (Sound, Rigging, Konsumsi).

*Data ini akan dimasukkan ke store Zustand saat aplikasi melakukan cold boot, agar modifikasi (misal: PM buat event) akan terlihat di halaman lain (Event Public) selama user tidak meresfresh browser secara keras. Jika refresh terjadi, data ter-reset.*

---

## 3. Logika Bisnis & Simulasi Aksi (Business Logic)

Pada `DNA_06_USER_JOURNEY.md` diuraikan langkah yang harus kita mock:
1.  **Sistem Bidding Vendor**: PM (*Project Manager*) menentukan budget. Jika PM set status ke "Open for Bidding", data event tersebut muncul di `/portal/vendor`.
2.  **Kunci Status Status Event**: Event tidak bisa masuk ke URL Publik `/events` jika statusnya `draft` atau `pending_approval`. Harus di-*approve* oleh COO di Dashboard The Director.
3.  **Real-Time Ticketing Cap (Simulasi)**: Saat Checkout Step-1, UI wajib memblokir tombol penambahan bila nilai input melebihi `max_capacity` atau sisa kuota.
4.  **Autentikasi Palsu (Fake Auth)**: Karena login belum nyambung backend, RBAC akan dijembatani *Role Switcher Toolbar* yang ada di `App.tsx` atau sistem login yang mencatat `activeUserRole` di LocalStorage. Akses Dashboard akan diblok pake komponen *Protected Route* sederhana.

---

## 4. Nuansa Copywriting (Neo-Brutalism Tone)

Bahasanya harus berani, tegas, proaktif, tidak ambigu, sedikit *dystopian / techy*, namun tetap profesional.
*   ✅ "EKSEKUSI PEMBAYARAN" (Bukan "Silahkan Bayar")
*   ✅ "TARGET PENDAPATAN" (Bukan "Perkiraan Uang Masuk")
*   ✅ "HANCURKAN TIKET" (Untuk opsi Void/Batal - bercanda, gunakan "BATALKAN TIKET SECARA PERMANEN")
*   ✅ Pesan Error: "AKSES DITOLAK. Kredensial tidak diakui sistem." (Bukan "Maaf, password anda salah").

---

## Rujukan Pelaksanaan & Aturan Pengembangan Selanjutnya

Setiap kali kita membedah satu "Stage", kita akan melihat ke `PROJECT_PLAN.md` untuk pergerakan. Namun ini rujukan PRD-nya:
*   Jika membangun **Form & Database Entity** -> Referensi `DNA_11_DATABASE_SCHEMA.md` untuk mengetahui Field, Tipe Data, dan Enum Valid/Zod Schema.
*   Jika membangun **Alur Persetujuan (Approve/Reject)** atau **Alur User** -> Referensi `DNA_06_USER_JOURNEY.md`.
*   Jika membangun **Akses & Visibilitas Tombol Navbar** -> Referensi `TECH_02_RBAC.md` (Permisssion table).
*   Jika membangun **Opsi Dropdown Pilihan** -> Referensi `DNA_09_MASTER_DATA.md`.

Fase berikutnya (Stage 2) akan fokus mutlak pada layar eksternal publik tanpa autentikasi yang intensif namun *heavy* di konten visual statis dan validasi form checkout.
