---
title: "DNA_12 - Design System Agnostik — Nara ERP"
description: "Dokumen yang mendefinisikan secara ketat seluruh fondasi visual Nara ERP sebagai token abstrak. Mencakup palet warna brand, sistem tipografi brutalist, aturan komponen inti, animasi, dan spacing. Sepenuhnya agnostik terhadap UI kit, template, atau stack teknologi. Mendukung penuh Light Mode dan Dark Mode. Template premium apa pun dapat dipasangkan di kemudian hari tanpa mengubah DNA visual ini."
author: "Nara Project Planner"
date: 2026-05-07
tags: ["design_system", "brand_color", "typography", "brutalist", "dark_mode", "animation", "token", "agnostic", "template_ready"]
category: "Design"
ai_context:
  goal: "Memberikan kontrak visual yang tidak ambigu. Agen AI wajib mengimplementasikan token ini dengan ringan dan fungsional. Di masa depan, template premium tinggal dipasangkan — DNA visual tetap berlaku."
  target_audience: "Agen AI, Frontend Developer, UI/UX Designer"
  constraints: "Tidak menyebut nama framework, library, atau template spesifik. Semua komponen didefinisikan sebagai token abstrak. Prioritas: enak dipandang, mudah, ringan, logic jalan, light mode dan dark mode keduanya berfungsi. Kosmetik dipikir belakangan, template premium bisa dipasang nanti."
language: "id"
---

# DESIGN SYSTEM AGNOSTIK — NARA ERP

> **Nama File:** `DNA_12_DESIGN_SYSTEM.md`
> **Kode Dokumen:** `DOC-DESIGN`
> **Sifat:** Kontrak Visual Abadi
> **Versi:** 3.0.0 — Adaptasi ke Struktur Baru
> **Rujuk ke:** [AGENTS.md](../AGENTS.md), [DNA_02_DEVELOPMENT_PHILOSOPHY.md](./DNA_02_DEVELOPMENT_PHILOSOPHY.md)

---

## 1. Filosofi Desain

Nara ERP memiliki **satu fondasi visual tunggal** yang berlaku untuk seluruh halaman — dashboard internal maupun landing page publik.

### 1.1 Prinsip Utama

1.  **Fungsional First:** Semua komponen harus berfungsi penuh. Logic jalan. State handling lengkap. Dark mode dan light mode keduanya berfungsi. Kosmetik bisa disempurnakan nanti.
2.  **Template-Ready:** Dokumen ini adalah kontrak visual. Di masa depan, template premium apa pun bisa dipasangkan tanpa mengubah DNA di sini.
3.  **Karakter Brutalist Precision:** Teknis, presisi, high contrast, informatif. Hindari dekorasi yang tidak perlu.
4.  **Token-First:** Semua keputusan visual disimpan sebagai token (variabel) — warna, ukuran, spacing, tipografi. Tidak boleh ada nilai hardcoded di komponen.
5.  **Dumb Components:** Komponen UI hanya menerima props, merender, dan mengemit event. **Tidak boleh ada business logic di dalam komponen UI.**
6.  **State Handling Wajib:** Setiap komponen interaktif wajib menangani state: `idle`, `loading`, `success`, `error`, `empty`.

---

## 2. Palet Warna Brand

### 2.1 Warna Utama

| Token | Light Mode | Dark Mode | Peran |
|---|---|---|---|
| `color-primary` | `#6C5CE7` | `#A067FF` | CTA utama, link, highlight, fokus |
| `color-secondary` | `#FFEAA7` | `#333300` | Background aksen, badge |
| `color-accent` | `#FF6B35` | `#FF8132` | Warning, emphasis, notifikasi penting |
| `color-black` | `#1A1A2E` | `#F8F8F8` | Teks utama, ikon, border aktif |

### 2.2 Warna Fungsional

| Token | Light Mode | Dark Mode | Peran |
|---|---|---|---|
| `color-success` | `#00B894` | `#55EFC4` | Sukses, approved |
| `color-error` | `#FF4B4B` | `#FF4B4B` | Error, destructive, ditolak |
| `color-warning` | `#FF6B35` | `#FF8132` | Warning, pending |
| `color-info` | `#0984E3` | `#74B9FF` | Informasi, netral |

### 2.3 Warna Latar & Teks

| Token | Light Mode | Dark Mode | Peran |
|---|---|---|---|
| `color-bg-default` | `#FEFEFE` | `#101015` | Latar utama |
| `color-bg-paper` | `#FEFEFE` | `#1A1A2E` | Latar kartu, panel |
| `color-bg-subtle` | `#F5F5F5` | `#252530` | Latar sekunder |
| `color-text-primary` | `#1A1A2E` | `#F8F8F8` | Teks utama |
| `color-text-secondary` | `#636E72` | `#B2BEC3` | Teks sekunder |
| `color-text-disabled` | `#B2BEC3` | `#636E72` | Teks disabled |
| `color-border-default` | `#DFE6E9` | `#2D3436` | Border standar |

---

## 3. Tipografi

| Atribut | Nilai |
|---|---|
| **Font Family** | IBM Plex Mono (fallback: monospace) |
| **Karakter** | Monospace, teknis, high contrast |

| Token | Ukuran | Weight | Peran |
|---|---|---|---|
| `text-hero` | 48px | 700 | Hero display |
| `text-h1` | 36px | 700 | Judul halaman |
| `text-h2` | 28px | 700 | Judul section |
| `text-h3` | 22px | 600 | Judul sub-section |
| `text-h4` | 18px | 600 | Judul card |
| `text-body` | 16px | 400 | Body text |
| `text-body-small` | 14px | 400 | Tabel, teks sekunder |
| `text-caption` | 12px | 500 | Caption, badge |
| `text-overline` | 10px | 500 | Overline |

---

## 4. Komponen Inti (Token Abstrak)

### 4.1 Tombol

| Token | Warna Latar | States |
|---|---|---|
| `button-primary` | `color-primary` | Default, Hover, Active, Disabled, Loading |
| `button-secondary` | `color-secondary` | Default, Hover, Active, Disabled, Loading |
| `button-destructive` | `color-error` | Default, Hover, Active, Disabled, Loading |
| `button-outline` | Transparan | Default, Hover, Active, Disabled, Loading |
| `button-ghost` | Transparan | Default, Hover, Active, Disabled, Loading |

Ukuran: `large` (12px/24px), `medium` (8px/16px), `small` (4px/12px).  
Border radius: 8px.  
Maksimal satu `primary` per section.

### 4.2 Input Field

| Token | States |
|---|---|
| `input-text`, `input-select`, `input-textarea`, `input-datepicker` | Default, Focus, Error, Disabled, Read-only |
| `input-checkbox` | Unchecked, Checked, Indeterminate, Disabled |
| `input-radio` | Unselected, Selected, Disabled |
| `input-switch` | Off, On, Disabled |
| `input-file` | Default, Drag-over, Uploading, Error, Success |

Tinggi standar: 40px. Border radius: 8px. Label di atas field. Pesan error di bawah dengan `color-error`.

### 4.3 Kartu

| Token | Peran |
|---|---|
| `card-default` | Konten standar |
| `card-dashboard` | Metrik/widget dashboard |
| `card-interactive` | Bisa diklik |
| `card-alert` | Notifikasi/alert |

Border radius: 12px. Padding: 16px–24px.

### 4.4 Data Table

| Token | Peran |
|---|---|
| `datagrid-header` | Sortable, filterable |
| `datagrid-row` | Default, hover, selected |
| `datagrid-pagination` | Navigasi halaman |

Header sticky saat scroll.

### 4.5 Status Tags

| Token | Warna | Peran |
|---|---|---|
| `tag-success` | `color-success` | Approved, Completed, Active |
| `tag-warning` | `color-warning` | Pending, Draft, In Progress |
| `tag-error` | `color-error` | Rejected, Failed, Inactive |
| `tag-info` | `color-info` | Sent, Published |

Font: `text-caption`, pill shape (radius 16px).

### 4.6 System Feedback

| Token | Latar | Border | Peran |
|---|---|---|---|
| `alert-success` | `color-success` 10% | `color-success` | Operasi sukses |
| `alert-error` | `color-error` 10% | `color-error` | Operasi gagal |
| `alert-warning` | `color-warning` 10% | `color-warning` | Perlu perhatian |
| `alert-info` | `color-info` 10% | `color-info` | Informasi |

### 4.7 Avatar

Ukuran: `small` (32px), `medium` (40px), `large` (64px), `xl` (96px).  
Border radius: 50%. Fallback: inisial dengan `color-primary`.

### 4.8 Dialog / Modal

| Token | Peran |
|---|---|
| `dialog-alert` | Konfirmasi OK/Cancel |
| `dialog-form` | Form dalam modal |
| `dialog-fullscreen` | Form kompleks |

Overlay: 50% opacity. Tutup dengan X, klik overlay, atau Escape.

### 4.9 Navigasi

| Token | Peran |
|---|---|
| `breadcrumbs` | Jejak navigasi |
| `sidebar-menu` | Menu utama dashboard (aktif: `color-primary`) |
| `tab-navigation` | Tab dalam halaman (aktif: border `color-primary`) |

---

## 5. Animasi

| Token | Durasi | Peran |
|---|---|---|
| `transition-fast` | 150ms | Hover, focus, toggle |
| `transition-normal` | 300ms | Expand/collapse, fade, slide |
| `transition-slow` | 500ms | Page transition, modal |

Jenis: `fade`, `slide-up`, `slide-down`, `scale`.  
Semua animasi menghormati `prefers-reduced-motion`.

---

## 6. Spacing System

| Token | Nilai |
|---|---|
| `space-xs` | 4px |
| `space-sm` | 8px |
| `space-md` | 16px |
| `space-lg` | 24px |
| `space-xl` | 32px |
| `space-2xl` | 48px |
| `space-3xl` | 64px |

---

## 7. Breakpoints Responsif

| Token | Min Width |
|---|---|
| `breakpoint-xs` | 0px |
| `breakpoint-sm` | 600px |
| `breakpoint-md` | 900px |
| `breakpoint-lg` | 1200px |
| `breakpoint-xl` | 1536px |

Mobile-first. Sidebar collapse di bawah `md`.

---

## 8. Dark Mode

- Semua komponen wajib mendukung Light Mode dan Dark Mode.
- Transisi: 300ms.
- Preferensi user disimpan dan/atau mengikuti OS (`prefers-color-scheme`).
- Kontras teks minimal 4.5:1 (WCAG AA).

---

## 9. Penerapan Template Premium di Masa Depan

Dokumen ini adalah **kontrak visual abadi**. Saat template premium dipilih nanti:

1. **Mapping Token:** Setiap token di sini dipetakan ke variabel atau konfigurasi tema template.
2. **Override Komponen:** Manfaatkan komponen bawaan template. Override visualnya agar sesuai token. Jangan buat komponen dari nol.
3. **DNA Tidak Berubah:** Warna, tipografi, dan aturan di sini adalah yang utama. Template hanya "baju" — DNA-nya tetap Nara.

Untuk saat ini, yang penting: **enak dipandang, mudah, ringan, logic jalan, dark mode dan light mode keduanya berfungsi.** Kosmetik disempurnakan belakangan setelah template premium tersedia.

---

> **Akhir Dokumen**
>
> _Versi 3.0.0 — Adaptasi ke Struktur Baru. Ditinjau terakhir: 2026-05-07._
> _Design system ini adalah kontrak visual abadi. Template apa pun bisa dipasangkan tanpa mengubah DNA._

> END OF DOCUMENT - `DNA_12_DESIGN_SYSTEM.md`