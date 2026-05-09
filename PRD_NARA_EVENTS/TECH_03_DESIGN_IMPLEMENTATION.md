---
title: "TECH_03 - Design System Implementation — Nara ERP (Laravel 13 Edition)"
description: "Dokumen yang memetakan token abstrak dari DNA_12_DESIGN_SYSTEM.md ke implementasi riil di Filament v5 dan Tailwind CSS v4. Mencakup konfigurasi tema, palet warna, tipografi, komponen, spacing, breakpoints, dan Dark Mode. Semua perubahan visual harus melalui dokumen ini, bukan hardcode di komponen."
author: "Nara Project Planner (Hanif — Lead Principal Architect & Software Engineering)"
date: 2026-05-07
tags: ["design_system", "filament", "tailwind", "theme", "dark_mode", "implementation", "token_mapping"]
category: "Design"
ai_context:
  goal: "Menyediakan panduan implementasi visual yang preskriptif bagi agen AI untuk menerapkan Design System Nara ke Filament 5 dan Tailwind CSS 4. Setiap token dari DNA_12 dipetakan ke kode spesifik."
  target_audience: "Agen AI, Frontend Developer, UI/UX Designer"
  constraints: "Semua perubahan visual wajib melalui file konfigurasi tema. Dilarang hardcode warna, font, atau spacing di komponen. Mapping harus tetap sinkron dengan DNA_12."
language: "id"
---

# DESIGN SYSTEM IMPLEMENTATION — NARA ERP (LARAVEL 13 EDITION)

> **Nama File:** `TECH_03_DESIGN_IMPLEMENTATION.md`
> **Kode Dokumen:** `DOC-DESIGN-L13`
> **Sifat:** Referensi Stabil
> **Versi:** 1.0.0 — Laravel 13 Implementation
> **Rujuk ke:** [../../DNA/DNA_12_DESIGN_SYSTEM.md](../../DNA/DNA_12_DESIGN_SYSTEM.md), [TECH_01_STACK.md](./TECH_01_STACK.md), [AGENTS.md](./AGENTS.md)

---

## 1. Filosofi Implementasi

Seluruh DNA visual Nara ERP didefinisikan di [DNA_12_DESIGN_SYSTEM.md](../../DNA/DNA_12_DESIGN_SYSTEM.md). Dokumen ini adalah jembatan antara token abstrak dan kode riil. Prinsip utama:

1. **Token-First:** Semua nilai visual (warna, ukuran, spacing, font) dikonfigurasi di file tema, bukan hardcode.
2. **Override, Bukan Buat Baru:** Manfaatkan komponen Filament dan Tailwind yang sudah ada. Override visualnya agar sesuai token Nara. Jangan buat komponen dari nol.
3. **Sinkron Abadi:** Setiap perubahan di DNA_12 harus diperbarui di sini.

---

## 2. Konfigurasi Tailwind CSS v4

### 2.1 File `tailwind.config.js`

Tailwind CSS v4 menggunakan format konfigurasi CSS-first. Token warna dan font dari DNA_12 dipetakan sebagai CSS custom properties.

```css
/* resources/css/app.css */
@import "tailwindcss";

@theme {
  /* Warna Brand (DNA_12 Pasal 2.1) */
  --color-primary: #6C5CE7;
  --color-primary-dark: #A067FF;
  --color-secondary: #FFEAA7;
  --color-secondary-dark: #333300;
  --color-accent: #FF6B35;
  --color-accent-dark: #FF8132;
  --color-black: #1A1A2E;
  --color-black-dark: #F8F8F8;

  /* Warna Fungsional (DNA_12 Pasal 2.2) */
  --color-success: #00B894;
  --color-success-dark: #55EFC4;
  --color-error: #FF4B4B;
  --color-warning: #FF6B35;
  --color-warning-dark: #FF8132;
  --color-info: #0984E3;
  --color-info-dark: #74B9FF;

  /* Warna Latar & Teks (DNA_12 Pasal 2.3) */
  --color-bg-default: #FEFEFE;
  --color-bg-default-dark: #101015;
  --color-bg-paper: #FEFEFE;
  --color-bg-paper-dark: #1A1A2E;
  --color-bg-subtle: #F5F5F5;
  --color-bg-subtle-dark: #252530;
  --color-text-primary: #1A1A2E;
  --color-text-primary-dark: #F8F8F8;
  --color-text-secondary: #636E72;
  --color-text-secondary-dark: #B2BEC3;
  --color-text-disabled: #B2BEC3;
  --color-text-disabled-dark: #636E72;
  --color-border-default: #DFE6E9;
  --color-border-default-dark: #2D3436;

  /* Tipografi (DNA_12 Pasal 3) */
  --font-family-mono: "IBM Plex Mono", monospace;

  /* Spacing (DNA_12 Pasal 6) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

---

## 3. Konfigurasi Filament 5 Theme

### 3.1 Membuat Custom Theme

```bash
php artisan make:filament-theme nara
```

Ini akan membuat file `resources/views/filament/themes/nara.blade.php` dan `resources/css/filament/nara/theme.css`.

### 3.2 Mendaftarkan Theme

Di `config/filament.php`, tambahkan theme Nara:

```php
'default' => 'nara',
'themes' => [
    'nara' => [
        'name' => 'nara',
        'path' => 'filament/themes/nara',
    ],
],
```

### 3.3 File `theme.css` Kustom

```css
/* resources/css/filament/nara/theme.css */

/* Font Family */
body {
    font-family: "IBM Plex Mono", monospace;
}

/* Primary Button */
.fi-btn.fi-btn-color-primary {
    background-color: var(--color-primary);
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 600;
}
.fi-btn.fi-btn-color-primary:hover {
    background-color: color-mix(in srgb, var(--color-primary) 90%, black);
}

/* Card */
.fi-section {
    border-radius: 12px;
    padding: 16px;
}

/* Table */
.fi-ta-table thead {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--color-bg-default);
}

/* Status Tags (Pill Shape) */
.fi-badge {
    font-size: 12px;
    font-weight: 500;
    border-radius: 16px;
    padding: 2px 8px;
}

/* Sidebar Active */
.fi-sidebar-item-active .fi-sidebar-item-icon {
    color: var(--color-primary);
}

/* Breadcrumbs */
.fi-breadcrumbs-item {
    font-size: 14px;
}

/* Light Mode */
:root {
    --bg-default: var(--color-bg-default);
    --text-primary: var(--color-text-primary);
}

/* Dark Mode */
.dark {
    --bg-default: var(--color-bg-default-dark);
    --text-primary: var(--color-text-primary-dark);
}
```

---

## 4. Mapping Token Tombol

| Token DNA_12 | Implementasi Filament |
|---|---|
| `button-primary` | `Filament\Actions\Action::make()->color('primary')` |
| `button-secondary` | `Filament\Actions\Action::make()->color('secondary')` — perlu define color di tema |
| `button-destructive` | `Filament\Actions\Action::make()->color('danger')` |
| `button-outline` | `Filament\Actions\Action::make()->outlined()` |
| `button-ghost` | `Filament\Actions\Action::make()->link()` |
| `button-large` | `->size('lg')` |
| `button-medium` | `->size('md')` |
| `button-small` | `->size('sm')` |
| Loading state | `->loading()` — Filament akan menampilkan spinner dan disable otomatis |

---

## 5. Mapping Token Input Field

| Token DNA_12 | Implementasi Filament |
|---|---|
| `input-text` | `Forms\Components\TextInput::make()` |
| `input-select` | `Forms\Components\Select::make()` |
| `input-textarea` | `Forms\Components\Textarea::make()` |
| `input-datepicker` | `Forms\Components\DateTimePicker::make()` |
| `input-checkbox` | `Forms\Components\Checkbox::make()` |
| `input-radio` | `Forms\Components\Radio::make()` |
| `input-switch` | `Forms\Components\Toggle::make()` |
| `input-file` | `Forms\Components\FileUpload::make()` |
| Focus state | Default Filament — ring `color-primary` |
| Error state | Default Filament — border `color-error`, pesan di bawah |
| Required indicator | `->required()` — label akan diberi asterisk merah |

---

## 6. Mapping Token Kartu

| Token DNA_12 | Implementasi Filament |
|---|---|
| `card-default` | `Filament\Widgets\StatsOverviewWidget\Stat::make()` atau `<x-filament::section>` |
| `card-dashboard` | `Filament\Widgets\ChartWidget` atau custom Livewire widget |
| `card-interactive` | Tambahkan class `cursor-pointer hover:shadow-md transition` |
| `card-alert` | `Filament\Notifications\Notification::make()->color('warning')` |

---

## 7. Mapping Token Data Table

| Token DNA_12 | Implementasi Filament |
|---|---|
| `datagrid-container` | `Tables\Table::make()` |
| `datagrid-header` | Kolom dengan `->sortable()` dan `->searchable()` |
| `datagrid-row` | Default Filament — hover effect built-in |
| `datagrid-pagination` | Default Filament — pagination di bawah tabel |

---

## 8. Mapping Token Status Tags

| Token DNA_12 | Implementasi Filament |
|---|---|
| `tag-success` | `Tables\Columns\TextColumn::make('status')->badge()->color('success')` |
| `tag-warning` | `->badge()->color('warning')` |
| `tag-error` | `->badge()->color('danger')` |
| `tag-info` | `->badge()->color('info')` |
| Custom text | `->badge()->formatStateUsing(fn ($state) => $state->label())` |

---

## 9. Mapping Token System Feedback

| Token DNA_12 | Implementasi Filament |
|---|---|
| `alert-success` | `Filament\Notifications\Notification::make()->success()->title('Sukses')->send()` |
| `alert-error` | `Notification::make()->danger()->title('Error')->send()` |
| `alert-warning` | `Notification::make()->warning()->title('Perhatian')->send()` |
| `alert-info` | `Notification::make()->info()->title('Info')->send()` |

---

## 10. Mapping Token Navigasi

| Token DNA_12 | Implementasi Filament |
|---|---|
| `sidebar-menu` | Konfigurasi di Panel Provider — `->navigationItems([])` |
| `sidebar-menu` (item aktif) | Default Filament — highlight `color-primary` |
| `breadcrumbs` | Default Filament — `->breadcrumbs(true)` |
| `tab-navigation` | `Tabs::make('FormTabs')->tabs([...])` |

---

## 11. Mapping Token Animasi

| Token DNA_12 | Implementasi Tailwind |
|---|---|
| `transition-fast` (150ms) | Tailwind: `transition duration-150` |
| `transition-normal` (300ms) | Tailwind: `transition duration-300` |
| `transition-slow` (500ms) | Tailwind: `transition duration-500` |
| `fade` | `opacity-0` ↔ `opacity-100` + `transition duration-300` |
| `slide-up` | `translate-y-2 opacity-0` → `translate-y-0 opacity-100` |
| `prefers-reduced-motion` | Gunakan Tailwind `motion-reduce:transition-none motion-reduce:transform-none` |

---

## 12. Mapping Spacing System

| Token DNA_12 | Tailwind Class |
|---|---|
| `space-xs` (4px) | `gap-1` / `p-1` |
| `space-sm` (8px) | `gap-2` / `p-2` |
| `space-md` (16px) | `gap-4` / `p-4` |
| `space-lg` (24px) | `gap-6` / `p-6` |
| `space-xl` (32px) | `gap-8` / `p-8` |
| `space-2xl` (48px) | `gap-12` / `p-12` |
| `space-3xl` (64px) | `gap-16` / `p-16` |

---

## 13. Mapping Breakpoints

| Token DNA_12 | Tailwind Prefix |
|---|---|
| `breakpoint-xs` (0px) | (default) |
| `breakpoint-sm` (600px) | `sm:` |
| `breakpoint-md` (900px) | `md:` |
| `breakpoint-lg` (1200px) | `lg:` |
| `breakpoint-xl` (1536px) | `xl:` |

---

## 14. Dark Mode Implementation

### 14.1 Strategy
Filament v5 mendukung Dark Mode secara native. Toggler tersedia di header.

### 14.2 Warna Dark Mode
Semua warna Dark Mode didefinisikan sebagai CSS custom properties dengan akhiran `-dark` (lihat Pasal 2.1).

### 14.3 Togggle Dark Mode
```php
// Panel Provider
->darkMode(true) // default: true
->darkModeBranding('Nara ERP') // teks branding saat dark mode
```

### 14.4 Transisi
Transisi antar mode: `transition duration-300` (sesuai token `transition-normal`).

---

## 15. Halaman Publik (Non-Filament)

Untuk halaman publik (`/`, `/about`, `/events/{slug}`, dll.), gunakan **Blade** dengan Tailwind CSS v4. Template premium akan dipasangkan nanti tanpa mengubah DNA.

Sementara itu, gunakan komponen Blade sederhana dengan token yang sama:

```blade
<!-- resources/views/components/nara/button.blade.php -->
<button
    {{ $attributes->merge([
        'class' => 'px-4 py-2 rounded-[8px] font-semibold transition duration-300',
    ]) }}
>
    {{ $slot }}
</button>
```

---

## 16. Sandbox Mode Banner

Banner kuning di halaman dashboard saat Sandbox Mode aktif:

```blade
@if(config('app.sandbox_mode'))
<div class="fixed top-0 left-0 right-0 z-50 bg-warning text-black text-center py-2 text-sm font-bold">
    ANDA SEDANG DI SANDBOX MODE — DATA INI TIDAK AKAN MEMPENGARUHI PRODUCTION
</div>
@endif
```

---

> **Akhir Dokumen**
>
> _Versi 1.0.0 — Laravel 13 Implementation. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah jembatan antara DNA visual dan kode Filament. Setiap perubahan visual harus diperbarui di sini._

> END OF DOCUMENT - `TECH_03_DESIGN_IMPLEMENTATION.md`