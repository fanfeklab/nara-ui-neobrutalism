# Hak Akses & Hasil Uji UI/UX (UI-First Approach)

> **Tujuan:** Dokumen ini digunakan oleh Tech Lead (Bapak Hanif) untuk mencatatkan persetujuan (QA Test) khusus mengenai alur interaktif UI/UX (Frontend Mock Stage) untuk menghindari pembongkaran backend yang tidak perlu.

## 1. Kriteria Lolos Uji (UI/UX Mock Stage)

Setiap *Mock Flow* (Prototipe dummy data Next.js) akan dievaluasi berdasarkan:
1. **Interactive Feel:** Responsivitas klik, tap (Touch Target seluler), *swipe/drag* untuk canvas, dan *hover states*.
2. **Kontrast & Aksesibilitas:** Desain Neo-brutalism memiliki shadow tegas, border hitam, light-mode and dark-mode test.
3. **Behavior "Hot Create":** Apakah Form Drawer dapat menumpuk atau terbuka secara *fluid* tanpa membingungkan konteks pengguna saat mengisi form panjang.
4. **Validasi Input Tipe Dasar:** *Zod Schema Validation* berjalan *real-time* di antarmuka (Client-side validation) untuk pesan error yang akurat sebelum API hit (misal: "Email tidak valid").

## 2. Tabel Checklist Mock QA

| Fitur/Flow (UI Mock) | Disetujui Oleh | Status / Catatan Revisi | Tanggal |
|:---|:---|:---|:---|
| Landing B2C & Dark Mode | - | - | - |
| Dynamic Manifest Form & Checkout UI | - | - | - |
| Admin / Refine B2B Base Layout | - | - | - |
| Hot Create Drawer (Multi-layer Form) | - | - | - |
| Interactive Vector Seat Mapping Canvas | - | - | - |
| Table Zebra Ledger & View Template | - | - | - |

*(Silakan diisi oleh Tech Lead setelah Engineer mendeploy Mock V1 di Stage Vercel / Dev Server)*
