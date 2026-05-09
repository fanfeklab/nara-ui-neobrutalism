# AGENTS.md – Konstitusi Pengembangan UI/UX NARA EVENTS (Neo-Brutalism)

_Dokumen ini adalah pedoman fundamental dan filosofis bagi semua AI coder, developer, serta pipeline otomatisasi (GitHub Actions, Vercel) dalam repositori **NARA EVENTS**. Setiap baris kode harus tunduk pada aturan di bawah tanpa kecuali. Versi ini sepenuhnya diselaraskan dengan Sistem Desain Neo-Brutalism NARA EVENTS._

---

## 1. Prinsip Dasar: Mobile-First, Progresif, Inklusif, dan Neo-Brutalist

- **Mobile-First Sejati**: Setiap penulisan kode dimulai dari viewport terkecil (320 piksel) tanpa mengandalkan interaksi berbasis hover atau kursor. Gunakan breakpoint dengan pendekatan `min-width` (`md:`, `lg:`) hanya untuk penambahan fitur, bukan perbaikan tata letak. Desain harus berfungsi sempurna pada layar kecil terlebih dahulu, baru kemudian diperkaya.
- **Touch Target**: Semua elemen interaktif wajib memiliki ukuran minimal 44 kali 44 piksel. Pertimbangan zona jempol (thumb zone) pada perangkat genggam harus diperhatikan.
- **Progressive Enhancement**: Konten dan fungsionalitas inti harus dapat diakses bahkan tanpa JavaScript berat. Interaktivitas ditingkatkan secara progresif menggunakan React dan Radix UI.
- **Aksesibilitas (WAI-ARIA) adalah Mandat**: Semua komponen interaktif wajib lolos audit `jest-axe`, mendukung navigasi keyboard penuh (Tab, Enter, Escape, Arrow Keys), serta kompatibel dengan pembaca layar (screen reader).
- **Estetika Neo-Brutalism**: Setiap keputusan visual harus mencerminkan kontras tajam, soliditas, dan unsur *playful* yang profesional. **Border dan Shadow selalu `#000000` di mode Light maupun Dark.**

---

## 2. Arsitektur Komponen: Atomic Design Ketat

Gunakan hierarki berikut secara disiplin. Dilarang keras melompati level.

| Level       | Contoh                                   | Tanggung Jawab                                                                                      |
|-------------|------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Atoms**   | `Button`, `Input`, `Label`, `Avatar`, `Badge` | Unit terkecil. Hanya styling, varian, dan state sendiri. **Dilarang memiliki margin eksternal.** Semua data via props. |
| **Molecules**| `InputGroup`, `SearchBar`, `Breadcrumb`, `Alert` | Gabungan atom untuk fungsi spesifik. Tetap tidak memiliki margin eksternal.                         |
| **Organisms**| `Sidebar`, `DataTable`, `Card`, `Dialog`      | Bagian UI kompleks mandiri. Dapat memiliki state internal yang dikelola container/store.             |
| **Templates**| `DashboardShell`, `PublicLayout`             | Tata letak halaman penuh dengan placeholder konten. Menyediakan struktur grid/zona untuk organisms.   |
| **Pages**   | `Beranda`, `EventDetail`, `FinanceDashboard`  | Template yang telah diisi data nyata. **Hanya komposisi dan pengikatan data.** Dilarang membuat komponen baru. |

- **Daftar Komponen Wajib**: Seluruh komponen dalam daftar proyek (Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Kbd, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip, Typography) harus sudah diimplementasikan hingga level Organisms sebelum digunakan di Page.
- Setiap komponen Atoms **wajib** memiliki varian resmi melalui `cva()`. Tidak boleh ada styling ad-hoc di halaman.

---

## 3. Data-Driven UI: Prinsip Dumb Component

Setiap komponen antarmuka, dari Atom hingga Organism, harus bersifat presentasional (dumb).

- Komponen hanya merender berdasarkan data yang diterima melalui props.
- **Dilarang keras** menulis hardcode untuk konten, label, teks, URL gambar, atau data lainnya di dalam komponen UI.
- Satu-satunya state yang diperbolehkan adalah UI state (dropdown terbuka, tooltip, fokus).
- Semua data mengalir melalui **Data Transfer Object (DTO)** yang telah didefinisikan dengan TypeScript.
- Data dapat berasal dari file JSON, Markdown, API, atau Zustand store.
- **Container Components** bertanggung jawab mengambil data, mentransformasi ke DTO, dan mengikat ke komponen presentasional.

Contoh DTO untuk komponen Card NARA EVENTS:

```typescript
// types/dto/card.dto.ts
export interface CardDTO {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly variant: "stat" | "data" | "image"; // Varian spesifik NARA EVENTS
  readonly statValue?: string;
  readonly statLabel?: string;
  readonly actionLabel?: string;
  readonly actionUrl?: string;
}
```

---

## 4. Pilar Teknis: Radix UI, Tailwind CSS v4, CVA, Zustand, Zod

### 4.1 Radix UI (Logika & Aksesibilitas)
Gunakan primitif Radix untuk semua komponen interaktif. Jangan menulis ulang logika fokus, keyboard, atau ARIA.

### 4.2 Tailwind CSS v4 (Konfigurasi CSS-First)
**Tidak ada file `tailwind.config.js`**. Konfigurasi diintegrasikan ke CSS utama menggunakan `@theme`.

#### Konfigurasi Tema Neo-Brutalism NARA EVENTS

```css
/* globals.css */
@import "tailwindcss";

/* =============================================
   Tema NARA EVENTS - Neo-Brutalism
   Aturan Emas: Border & Shadow SELALU #000000, serta semua elemen wajib rounded-xl atau 2xl
   ============================================= */
@theme {
  /* --- Font --- */
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* --- Breakpoint --- */
  --breakpoint-3xl: 1920px;
}

/* =============================================
   Light Mode (Default)
   ============================================= */
:root {
  /* Palet Utama */
  --color-primary: #ccff00;       /* Ijo Stabilo / Lime */
  --color-primary-foreground: #000000;
  --color-secondary: #8a2be2;    /* Violet */
  --color-secondary-foreground: #ffffff;
  --color-accent: #ff5500;       /* Orange */
  --color-accent-foreground: #000000;

  /* Latar & Teks */
  --color-background: #FDFBD4;   /* Cream terang kuning */
  --color-foreground: #000000;
  --color-card: #ffffff;         /* Solid white */
  --color-card-foreground: #000000;
  --color-popover: #ffffff;
  --color-popover-foreground: #000000;

  /* Elemen UI */
  --color-muted: #f3f4f6;
  --color-muted-foreground: #4b5563;
  --color-border: #000000;       /* MANDATORY HITAM */
  --color-input: #000000;
  --color-ring: #ccff00;

  /* Semantik */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-destructive: #ef4444;
  --color-info: #06b6d4;

  /* Shadow Neo-Brutalism (Solid, tanpa blur) */
  --shadow-brutal: 6px 6px 0px 0px #000000;
  --shadow-brutal-sm: 4px 4px 0px 0px #000000;
  --shadow-brutal-lg: 8px 8px 0px 0px #000000;
}

/* =============================================
   Dark Mode (Navy Pekat + Cyberpunk-Brutalism)
   ============================================= */
.dark {
  --color-background: #0a192f;   /* Navy pekat */
  --color-foreground: #ffffff;
  --color-card: #112240;         /* Solid navy lebih terang */
  --color-card-foreground: #ffffff;
  --color-popover: #112240;
  --color-popover-foreground: #ffffff;

  --color-muted: #1e3a5f;
  --color-muted-foreground: #94a3b8;
  --color-border: #000000;       /* TETAP HITAM di dark mode */
  --color-input: #000000;
  --color-ring: #ccff00;
}
```

#### 4.2.1 Plugin
Plugin didaftarkan dengan `@plugin` di CSS. Contoh: `@plugin "@tailwindcss/typography";`

#### 4.2.2 Perubahan Utility di Tailwind v4
- **`outline-none`**: Sekarang benar-benar menghapus outline. Untuk fokus aksesibel, gunakan `outline-hidden` atau ring manual.
- **Border default**: Sekarang `currentColor`. Eksplisitkan `border-[#000000]`.

### 4.3 CVA (Class Variance Authority)
Definisikan varian komponen dengan `cva()`. Contoh untuk `Button` NARA EVENTS:

```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold uppercase tracking-tight border-2 border-black transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-[#ccff00] text-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        outline: "bg-transparent text-foreground shadow-brutal hover:bg-[#ccff00] hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        destructive: "bg-[#ef4444] text-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        ghost: "border-transparent shadow-none hover:bg-muted",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);
```

### 4.4 Zustand (State Management)
Untuk state global (auth, theme, data cache). Setiap store wajib memiliki tipe eksplisit dan data dari luar divalidasi Zod. Gunakan middleware `persist` untuk menyimpan preferensi tema ke `localStorage`.

### 4.5 Zod (Validasi)
Setiap data dari sumber eksternal (API, form, localStorage) wajib divalidasi Zod. Tipe TypeScript dihasilkan via `z.infer`.

---

## 5. Avatar & Placeholder Images

- **Avatar**: Gunakan **DiceBear** (`https://api.dicebear.com/7.x/{style}/svg?seed={id}`) atau **UI Avatars**. **Jangan gunakan Unsplash**.
- **Placeholder**: Gunakan **Lorem Picsum** (`https://picsum.photos/{w}/{h}`) atau **Placehold.co**.
- URL dikonfigurasi terpusat di `config/images.config.ts`.

---

## 6. Dukungan Dark Mode & Light Mode

- Default mengikuti `prefers-color-scheme`.
- Gunakan `next-themes` (Next.js) atau implementasi manual dengan class `dark` pada `<html>`.
- Tema disimpan ke `localStorage` dengan kunci `theme`.
- **Aturan Emas**: Border `#000000` dan shadow solid tidak berubah di kedua mode.
- **Background Utama**: Harus memiliki motif grid kertas bergaris (menggunakan linear-gradient untuk `.bg-grid` atau utility terkait) di atas warna `bg-background`.

---

## 7. Tipografi

- **Display/Headings**: `font-display` (Space Grotesk), `font-black`, `uppercase`, `tracking-tighter`.
- **Body**: `font-body` (IBM Plex Mono), jelas, mudah dibaca.
- **Mono**: `font-mono` (IBM Plex Mono) untuk angka finansial, ID, kode.

---

## 8. Testing & Pipeline

Testing wajib via GitHub Actions sebelum merge.

| Jenis Test | Alat |
|---|---|
| Unit & Integration | Vitest + Testing Library + jest-axe |
| Visual Regression | Chromatic (Storybook) |
| E2E | Playwright (mengarah ke Preview Vercel) |
| Validasi Data | Vitest (Zod schema) |

Pipeline:
1. Lint & Typecheck
2. Unit + A11y Test
3. Storybook + Chromatic
4. E2E Test (setelah Vercel Preview siap)

## 9. Struktur Dokumentasi UI & Showcase (Standar Enterprise)

Agar UI Kit ini mudah di-*porting* atau dipelajari oleh developer maupun designer, dokumentasi komponen (UI Docs) harus tertata dalam standar *enterprise* (meniru Flowbite, MUI, dsb.):

- **Routing Terpisah**: Jangan menumpuk semua showcase di satu rute. Dokumentasi harus disusun dengan nested routing seperti `/ui-docs/buttons`, `/ui-docs/cards`, dll.
- **Layout Sentral (`UiDocsLayout`)**: Buat tata letak dengan Sidebar Navbar untuk navigasi (dikelompokkan berdasarkan Atoms, Molecules, Organisms) dan area konten utama yang dapat digulir.
- **Isolasi Halaman**: Setiap komponen memiliki **halamannya sendiri** (misal: `ButtonDoc.tsx`) yang merender setiap varian, ukuran, state, dan penggunaan (usage example).
- **Struktur Menu Sidebar (Contoh)**:
  - **Atoms**: Buttons, Badges, Avatars, Inputs, Checkbox, dll.
  - **Molecules**: Cards, Tables, dll.
  - **Organisms**: Dialogs, Sidebars, dll.

---

## 10. Aturan Mutlak AI Coder di IDE

1. **Jangan membuat komponen yang sudah ada.** Periksa daftar lengkap. Tambahkan varian di `cva()` jika perlu.
2. **Gunakan `cva()`** untuk varian, `cn()` untuk kelas dinamis.
3. **Tulis test** setiap membuat/mengubah komponen.
4. **Patuhi Atomic Design.** Tidak boleh `className` ad-hoc.
5. **Komponen harus dumb.** Semua data via props (DTO). Tidak ada hardcode.
6. **Validasi data dengan Zod.** Gunakan `z.infer` untuk tipe.
7. **Gunakan Zustand** untuk state global, `useState` untuk lokal.
8. **Aksesibilitas wajib:** `aria-label`, navigasi keyboard.
9. **Konfigurasi Tailwind hanya di CSS (`@theme`).** Tidak ada `tailwind.config.js`.
10. **Border & shadow `#000000` di semua tema.** Shadow menggunakan utilitas `.shadow-brutal` (6px 6px offset) atau sejenisnya tanpa blur.
11. **Dark mode default ikut sistem.** Simpan preferensi ke `localStorage`.
12. **Gunakan placeholder/avatar dari DiceBear/Lorem Picsum, bukan Unsplash.**
13. **Mobile-first:** desain mobile dulu, baru perluas.
14. **Gunakan token spesifik NARA EVENTS:** `#ccff00` (primary), `#8a2be2` (secondary), `#0a192f` (dark bg), `#FDFBD4` (light bg kuning cream).
15. **Rounding:** Semua elemen UI berbentuk *card*, tombol, atau wadah **WAJIB** memakai `rounded-xl`, `rounded-2xl`, atau lebih. Jangan biarkan pinggiran tajam (`rounded-none`), kecuali bagian sisi edge browser/layar (seperti header).
16. **Grid Background:** Terapkan pola grid pada background dasar aplikasi (misal menggunakan `.bg-grid` yang memanfaatkan transparent linear-gradient).

---

**Versi:** 2.2.0 – NARA EVENTS Neo-Brutalism Edition
**Penjaga:** Tim UI/UX Engineering NARA EVENTS
**Berlaku sejak:** 2026-05-09