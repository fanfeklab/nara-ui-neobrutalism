# Paket Handoff untuk Engineer Agent (MVP Stage 1)

**🔥 ABSOLUTE DIRECTIVE (KORIDOR MUTLAK UNTUK NEXT AI / ENGINEER):**
Jika Anda mengambil alih sesi ini dari agen sebelumnya (atau dari scratch di sesi/chat baru), **DILARANG KERAS** mengatur ulang arsitektur, berdiskusi mengenai tech-stack yang sudah ditetapkan, ataupun bertanya untuk mendefinisikan ulang fitur.
Tugas Anda adalah **EKSEKUSI KODE LANGSUNG** melanjutkan dari titik Handoff ini. Dokumen dan framework referensi adalah sumber kebenaran tertinggi (*Single Source of Truth*). 

> **ATURAN EKSEKUSI "UI-FIRST DEVELOPMENT":**
> TAHAP PERTAMA HANYA BOLEH MENGHASILKAN KOMPONEN STATIS (HARDCODED DTO) DI FOLDER FRONTEND LAYOUTING (`/components` atau `/app`).
> **DILARANG** MENGONFIGURASI KONEKSI DATABASE (`Drizzle`, `Prisma`, `SQL`), **DILARANG** MEMBUAT SYSTEM API ROUTES YANG TERHUBUNG KE BACKEND *SEBELUM* Tech Lead memberikan *Approval/QA* pada dokumen `ux-test-report.md`.

## 1. Lingkup Pekerjaan Eksekusi (Sprint 1 & Sprint 2)

**Output yang Diharapkan Khusus Frontend (UI Mock Interactive State):**
- Setup Project (misal: instalasi kerangka UI Neo-brutalism seperti *Tailwindcss*, modifikasi parameter CSS borders & roundness).
- Seluruh direktori `/components/ui/` disiapkan untuk form interaktif, button, card, modal/drawer.
- Penggunaan Theme Provider (`next-themes`) untuk Dark/Light transition.
- Folder `/app/(marketing)` yang menampilkan Dummy Landing Page B2C.
- Folder `/app/(dashboard)` untuk UI simulasi *Backoffice B2B* (Dashboard modular, Menu navigasi CMS).
- Canvas Seat Mapping menggunakan library visual layer (Konva.js atau sejenis) dirender interaktif untuk *drag-and-drop* konfigurasi layout, lalu diekspor state JSON-nya.
- Modul *Hot Create* (Modals/Drawers terbuka tumpuk saat dropdown tidak menemukan data) yang menggunakan state React (React Context/Zustand semu).
- Modul Kanban CRM menggunakan (dnd-kit/react-beautiful-dnd) dengan dummy leads state, bisa diseret antar kolom (Prospek -> Deal).

## 2. Struktur Data Kontrak (DTO Mocks) Agnostik

Setiap *dummy data* untuk mengisi View Components wajib dipisahkan ke `src/lib/mocks/` atau setara yang distruktur secara ketat (TypeScript / Zod Schemas).

Contoh `TiketDTO` Mock (Kontrak State Klien-Server):
```typescript
import { z } from 'zod';

export const TicketDTOSchema = z.object({
  id: z.string(),
  event_name: z.string(),
  price: z.number(),
  status: z.enum(['AVAILABLE', 'BOOKED', 'SOLD']),
  seat_vector: z.object({ x: z.number(), y: z.number(), label: z.string() }).optional()
});
export type TicketDTO = z.infer<typeof TicketDTOSchema>;

export const MockTickets: TicketDTO[] = [
  { id: 'TKT-001', event_name: 'Nara Fest', price: 500000, status: 'AVAILABLE', seat_vector: {x: 10, y: 15, label: 'VIP-A1'} },
];
```

## 3. Batasan CMS Headless / Stateful di Tahap Awal

Gunakan layout CMS / Admin panel B2B di sisi klien, namun hubungkan API Provider-nya dengan fungsi simulasi (`Promise` resolving dummy JSON di atas dengan `setTimeout`) agar komponen mensimulasikan *loading state*, *table rendering*, *pagination*, dan *error validation* layaknya sudah live.

## 4. Referensi Dokumen Pendukung (Wajib Dibaca)
Semua AI yang menjalankan Handoff ini wajib melakukan `read_file` pada:
1. `docs/project/Spec/prd.md` (Bisnis & Fitur)
2. `docs/project/Spec/architecture.md` (Blueprint Teknis Eksekusi)
3. `docs/project/Spec/ux-spec.md` (Perilaku Tampilan & Modals)
4. `docs/project/Spec/design-system.md` & `tokens.json` (Gaya Neo-Brutalism mutlak)

---
**Catatan Versi:** 2.0 (Super Robust & Agnostic Deep Dive Audit)
**Update:** 2026-05-11
