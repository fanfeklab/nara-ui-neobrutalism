---
name: Brand Identity
description: Dokumen identitas brand yang berisi brand personality, palet warna, tipografi, visual references, voice and tone.
author: UI/UX Designer
phase: 2-design-experience
input_documents:
  - docs/project/Overview/productContext.md
  - docs/project/Spec/prd.md
status: final
---

# docs/project/Overview/brand-identity.md - Brand Identity

> **Dibuat oleh**: UI/UX Designer Agent (Fase 2: Design & Experience)
> **Dibaca oleh**: Technical Architect, Project Manager, Engineer

---

## 1. Brand Personality

Nara Events Ecosystem mengusung kepribadian yang menggabungkan profesionalisme B2B dengan energi dinamis B2C.

1. **Bold & Unapologetic**: Berani tampil beda dengan garis tegas dan kontras tinggi.
2. **Tech-Forward (Cyber-Industrial)**: Membumi secara teknis, fungsional, dan transparan.
3. **Energetic & Playful**: Penuh energi, mencerminkan semangat hingar-bingar acara/konser yang meriah.
4. **Structured**: Rapi, kotak-kotak, dan grid-based yang menanamkan kepercayaan pada klien korporat.
5. **Accessible**: Sangat mudah dibaca karena legibilitas kontras yang sangat tinggi.

---

## 2. Color Palette

Mengusung estetika **Neo-Brutalism**, warna memainkan peran hierarkis untuk memisahkan struktur dari aksi. Border dan shadow selalu solid black (`#000000`).

### 2.1 Primary & Secondary Colors

| Nama | Hex Code | Penggunaan |
|:---|:---|:---|
| Primary (Lime) | `#CCFF00` | The core action color. Tombol utama, representasi energi dan highlight. Selalu dipasangkan dengan teks hitam. |
| Secondary (Violet) | `#8A2BE2` | Digunakan untuk aksen mendalam, aksi sekunder, dan state aktif. Membawa kesan misteri dan kreativitas. |
| Contrast (Black) | `#000000` | Border solid, shadow offset, dan teks utama. Esensi dari Neo-Brutalism. |

### 2.2 Background Colors

| Nama | Hex Code | Penggunaan |
|:---|:---|:---|
| Light Bg (Cream) | `#FDFBD4` | Background utama di light mode. Memberikan nuansa kertas retro (retro-paper). Wajib ditambahkan motif grid kertas bergaris (`.bg-grid`). |
| Dark Bg (Navy) | `#0A192F` | Background utama di dark mode. Nuansa navy cyberpunk yang dalam. Tetap menggunakan motif grid (`.bg-grid`). |
| Card (Light) | `#FFFFFF` | Background untuk card atau area konten di dalam Light Bg agar menonjol. |
| Card (Dark) | `#112240` | Solid navy yang sedikit lebih terang dari background utama. |

### 2.3 Semantic Colors

| Nama | Hex Code | Penggunaan |
|:---|:---|:---|
| Success | `#22c55e` | Konfirmasi sukses (check-in, payment). |
| Warning | `#eab308` | Peringatan ringan, status pending payment. |
| Error/Danger | `#ef4444` | Validasi error, tombol hapus/refund. |
| Info | `#06b6d4` | Informasi netral. |

---

## 3. Typography

Tipografi sangat krusial dalam Neo-Brutalism. Mengandalkan font display yang tebal dan font monospace untuk data teknis (seperti kode booking, tiket, RAB).

### 3.1 Font Family

| Tingkat | Font Family | Penggunaan |
|:---|:---|:---|
| Headings | **Space Grotesk**, sans-serif | H1-H4. Digunakan dalam font weight besar (Bold/Heavy) dan huruf kapital (Uppercase) untuk impak maksimal. |
| Body & Data | **IBM Plex Mono**, monospace | Paragraf, tabel, angka uang (Ledger), kode tiket. Memberikan kesan teknis dan "raw". |

### 3.2 Type Scale (Rem-based)

| Level | Desktop Size | Mobile Size | Line Height | Font Weight |
|:---|:---|:---|:---|:---|
| H1 | 3.5rem | 2.5rem | 1.1 | 700 (Bold) |
| H2 | 2.5rem | 2rem | 1.2 | 700 (Bold) |
| H3 | 2rem | 1.5rem | 1.2 | 700 (Bold) |
| Body Large| 1.125rem | 1rem | 1.5 | 400 (Regular) / 600 (Semibold)|
| Body | 1rem | 0.875rem | 1.5 | 400 (Regular) |
| Caption | 0.875rem | 0.75rem | 1.4 | 400 (Regular) |

---

## 4. Visual References & Styling Principles

### 4.1 Prinsip Neo-Brutalism Rounded
- **High Contrast:** Teks harus jelas. Hitam di atas Lime atau Cream. Putih di atas Navy atau Violet.
- **Solid Borders:** Setiap Card, Button, Input Field, dan Container memiliki border solid hitam tebal (misal `2px` atau `3px` hitam).
- **Offset Shadows:** Drop shadow bukan blur melainkan block padat (misal `box-shadow: 4px 4px 0px #000000`). Memberikan kesan pop-up 3D retro.
- **Rounded:** Meskipun brutalism, sudut di-round (rounded-xl atau `12px` - `16px`) untuk memberikan sentuhan bersahabat ("Neo-Brutalism Rounded") pada era modern.

### 4.2 Dekorasi, Avatar & Placeholder
- Dekorasi: Dapat menggunakan *abstract blobs*, *animated waves*, *sparkles*, mapun *marquee*.
- Avatar: Wajib menggunakan **DiceBear** (`https://api.dicebear.com/7.x/{style}/svg?seed={id}`) atau **UI Avatars**. *Dilarang keras menggunakan Unsplash.*
- Placeholder Image: Wajib menggunakan **Lorem Picsum** (`https://picsum.photos/{w}/{h}`) atau **Placehold.co**.
- Mock Data Standar: Gunakan nama perusahaan "NARA EVENTS", dengan tokoh "Nadia Kusuma" (CEO) dan "Hanif" (Lead Engineer). Kombinasikan dengan nama event imajiner tapi formal/playful (misal: "Neo-Brutalism Tech Summit 2026").

---

## 5. Voice and Tone

### 5.1 Brand Voice
**"Tegas, Jelas, namun Mengundang (Inviting)."**
Karena menargetkan korporasi maupun anak muda penikmat konser, bahasa harus mudah dipahami tapi tidak kaku.

### 5.2 Panduan Singkat
- **Sapa pengguna dengan**: Sapaan ramah ("Halo," atau langsung ke inti untuk dashboard).
- **Gunakan kata ganti**: "Kamu" untuk B2C (member), dan "Anda/Tim" untuk konteks B2B/Enterprise.
- **Hindari**: Jargon akuntansi rumit di area user, hindari pesan error teknis ("Error 500").
- **Gunakan**: Instruksi langsung ("Selesaikan Pembayaran", "Pilih Kursi").

### 5.3 Contoh Copywriting

| Konteks | Contoh Copy |
|:---|:---|
| Tombol Utama (Beli Tiket) | AMANKAN TIKETMU |
| Tombol Utama (B2B Approval) | APPROVE RAB |
| Pesan Sukses (Payment) | YEAY! TIKET SUDAH DITANGAN. Cek email kamu. |
| Pesan Error | Ups. Kursi ini baru saja diambil orang lain. Pilih yang lain ya! |
| Placeholder NIK | Masukkan 16 Digit NIK KTP |

---

## 6. Catatan Versi

- [X] Versi: 1.0.0
- [X] Terakhir diperbarui: 2026-05-11
- [X] Dibuat oleh: UI/UX Designer Agent
- [X] Input dari: Arahan desain pengguna (Neo-Brutalism referensi)
