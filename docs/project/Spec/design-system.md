---
name: Design System
description: Dokumen design system Ekosistem Nara Events (Neo-Brutalism).
author: UI/UX Designer
phase: 2-design-experience
input_documents:
  - docs/project/Overview/brand-identity.md
status: final
---

# docs/project/Spec/design-system.md - Design System

> **Dibuat oleh**: UI/UX Designer Agent (Fase 2: Design & Experience)
> **Dibaca oleh**: Project Manager, Engineer

---

## 1. Executive Summary

Design System Nara Events beraliran **Neo-Brutalism Rounded**. Fokus pada fungsionalitas murni, kontras ekstrim tingkat tinggi, border solid hitam tebal, dan solid offset shadows (tanpa blur). Dirancang khusus agar sangat *stand out* bagi pengguna (konser), namun tetap rapi dan terukur (komponen grid ketat) untuk operasional B2B dan admin (Dashboard). 

---

## 2. Design Tokens (Summary)

*(Lihat `tokens.json` untuk data parsable).*

### 2.1 CSS Implementation (Tailwind v4 `@theme` approach)
Struktur desain direpresentasikan dalam direktif CSS `@theme` dalam Tailwind v4 (bukan `tailwind.config.js`). Tidak boleh men-hardcode warna `bg-white` atau `bg-black` pada layout; gunakan semantic color agar Dark/Light mode otomatis tertangani.

*   **Colors**:
    *   `--color-primary`: `#ccff00`
    *   `--color-secondary`: `#8a2be2`
    *   `--color-background`: `#fdfbd4` (Light) / `#0a192f` (Dark)
    *   `--color-card`: `#ffffff` (Light) / `#112240` (Dark)
    *   `--color-border`: `#000000` (Mutlak di semua tema)
    *   `--color-foreground`: `#000000` (Light) / `#ffffff` (Dark)
*   **Shadows (Solid, no blur)**:
    *   `--shadow-brutal-sm`: `4px 4px 0px 0px #000000`
    *   `--shadow-brutal`: `6px 6px 0px 0px #000000`
    *   `--shadow-brutal-lg`: `8px 8px 0px 0px #000000`
*   **Border Radius**:
    *   Semua elemen wadah/card/tombol diwajibkan menggunakan `rounded-xl` atau `rounded-2xl`. Jangan biarkan ujung yang tajam (`rounded-none`).

---

## 3. UI Docs / Component Showcase (Standar Enterprise)

Agar UI Kit memiliki "Standard Industri", NARA EVENTS wajib memiliki halaman khusus Dokumentasi UI.
- **Routing Terpisah**: Dibuat sebagai *nested routing* terpisah (misal: `/ui-docs/buttons`).
- **Isolasi Halaman**: Setiap komponen atomic (seperti TextField, Button, Card) memiliki page terpisah di showcase.
- **Varian Ekstensif**: Jangan hanya tampilkan dasar, tampilkan *semua varian CVA* dengan props yang berbeda.
- **Preview vs Code**: Setiap showcase memiliki tab *"Preview"* (menampilkan komponen interaktif) dan tab *"Code"* (potongan source code memakai syntax highlighter bernuansa macOS window).

---

## 4. Component Library (Neo-Brutalism)

### 4.1 Button

Tombol adalah pusat interaksi. Dalam neo-brutalism, tombol *harus* terlihat seperti obyek fisik yang timbul.

*   **Primary Button**:
    *   Background: Lime (`#CCFF00`)
    *   Text: Hitam (`#000`), uppercase, Space Grotesk Bold.
    *   Border: 2px Solid Black.
    *   Shadow: `shadow-brutal` (6px 6px 0px Black).
    *   Hover State: Translasi X/Y `translate-x-[2px] translate-y-[2px]` dan shadow berkurang menjadi `shadow-brutal-sm`. (Efek tombol ditekan).
*   **Secondary Button**:
    *   Background: Violet (`#8A2BE2`)
    *   Text: Putih. Border/Shadow sama dengan primary.
*   **Outline/Ghost Button**:
    *   Background: White/Cream. Text Hitam. Border 2px Hitam.

### 4.2 Input Field & Forms

Bentuk form kental dengan aura *tech/ledger*.
*   **Default State**:
    *   Background: `#FFFFFF` (Light) / `#112240` (Dark). Border: 2px Solid Hitam. Radius: `8px` atau `rounded-xl`.
    *   Font (isian): IBM Plex Mono.
*   **Focus State**:
    *   Border tetap, namun shadow solid tebal (`shadow-brutal-sm`) muncul. Outline none. Ring border dengan offset `ring-[#ccff00]`.
*   **Error State**:
    *   Border menjadi Red, dan label text Red. 
*   **Master Data Dropdown (Combobox)**:
    *   Terdapat tombol `+` disamping dropdown untuk memicu modal **"Hot Create"**.

### 4.3 Card & Panel (Dasbor & Kanban)

*   **Event Card (B2C)**: 
    *   Border 3px hitam. Sudut lengkung (rounded-xl). Gambar di-clip penuh. 
    *   Shadow-brutal. Saat di-hover membesar sedikit `scale-105` atau bayangan bertambah dalam.
*   **Data Card (B2B Dashboard)**:
    *   Flat dengan border 2px. Header terpisah dengan garis hitam tebal 2px (seperti desain jurnal akuntansi kas).

### 4.4 Modal / Side Drawer

*   Sering digunakan untuk *Hot Create* (menambah vendor baru di tengah entri RAB).
*   **Overlay**: Hitam Transparan pekat (misal `rgba(0,0,0,0.7)`).
*   **Box**: Background Cream/White (Light) atau Navy (Dark). Border tebal (4px). Shadow-brutal-lg. Mengandung tombol Close (X) berbentuk bundar solid (border 2px).

### 4.5 Table & Data Grid (Finance/Ledger)

*   Headings menggunakan Space Grotesk Uppercase.
*   Bars / Cell data menggunakan IBM Plex Mono (mudah untuk *align-right* angka nomial Rp).
*   Striped rows menggunakan alternating warna semantik.
*   Garis tabel solid black 1px-2px.

### 4.6 Seat Map (Interactive Component)

*   Arena tempat duduk ditampilkan SVG interaktif atau grid HTML.
*   Kursi tersedia (Available): White fill, black border.
*   Kursi terpilih (Selected): Lime fill, black border tebal.
*   Kursi Terjual (Sold): Abu-abu (Gray line hatching).

---

## 4. Interaction Patterns

1.  **Press Effect (Klik)**: Setiap elemen interaktif (Card, Tombol, Tab) *wajib* merespons klik dengan *"klik fisik"* (shadow menipis, posisi bergeser ke bawah/kanan). Ini core interaksi Neo-brutalism.
2.  **Marquee Navigation**: Teks berjalan di header/footer digunakan untuk mengumumkan diskon tiket atau *Flash Sale* (misalnya baris kuning dengan teks hitam berjalan).
3.  **Loading State**: Bukan spinner standar, melainkan *abstract blob* yang berputar atau *skeleton* kotak-kotak tebal bersudut (border hitam).
4.  **Toast/Alert**: Kotak bersudut (rounded-lg) muncul dari atas atau bawah dengan border tebal dan shadow solid, bergetar sedikit saat muncul (spring animation).

---

## 5. Catatan Versi
- [X] Versi: 1.0.0
- [X] Terakhir diperbarui: 2026-05-11
- [X] Dibuat oleh: UI/UX Designer Agent
