# LOG ITERASI & REVISI NARA EVENTS

Dokumen ini mencatat seluruh histori diskusi, revisi, dan keputusan penting selama proses development bersama AI. Tujuannya agar saat AI di-reset atau konteks hilang, AI berikutnya dapat membaca file ini dan langsung memahami arah proyek yang sudah disepakati.

## Iterasi 1 - 9 Mei 2026 (Stage 2: Public Pages Setup)

**Masalah & Masukan User:**
1. **Bahasa Publik:** Seluruh halaman publik (Company Profile) **WAJIB** menggunakan Bahasa Indonesia dengan *tone* yang sesuai (profesional, tegas, ala Neo-Brutalism).
2. **Logo & Topbar:** Hilangkan icon/logo kompleks, cukup gunakan teks `NARA EVENTS` yang diberi animasi.
3. **Copywriting & Konteks:** Ini adalah *Company Profile* untuk Event Organizer (EO), *bukan* perusahaan IT/Tech. Hapus section yang menampilkan "Codeblock/Tech Stack" di halaman Services.
4. **Bentuk Card (Border Radius):** Desain Neo-Brutalism Nara Events menggunakan pinggiran melengkung (`rounded-xl` atau `rounded-2xl`). Jangan gunakan `rounded-none` secara sembarangan pada card utama.
5. **Kontras & Warna:** Perbaiki masalah text hitam pada button di mode gelap. Pastikan visibilitas aman.
6. **Struktur Halaman Utama (Home / Landing Page):**
   - Hero Section.
   - Upcoming Events (1 Card besar *featured*, beberapa list/carousel di bawahnya, dan tombol explore).
   - Past Events.
   - Blog / Artikel.
   - Logo slider Our Clients / Partners.
7. **Navigasi Mobile (Sidebar/Drawer):** Harus ada tombol *Show/Hide* (Hamburger Menu) untuk mobile.
8. **Pengelompokan Menu:** 
   - *Home*
   - *Events* (Upcoming Event, Event Calendar, Past Event/Portfolio)
   - *Company* (About, Our Services, Our Clients)
   - *Insights* (Blog)
9. **Informasi Footer Tetap:**
   - PT. Nara Sukses Bersama.
   - Kota Malang, Jawa Timur, Indonesia.
   - Tlp: +6285731000806
   - Sosial Media: Ig, FB, YT, Tiktok @naraevents.id
   - Website: www.naraevents.id
   - Email: hello@naraevents.id
10. **Data Our Team:**
    - Nadia Kirana (Chief Executive Officer)
    - Hanif S (Lead Project Engineer)

**Tindakan Resolusi:**
- Seluruh file di `/src/pages/public/*` dan `/src/layouts/PublicLayout.tsx` ditulis ulang ke Bahasa Indonesia.
- Struktur grid dan UI dirapikan dengan `rounded-2xl` sesuai pedoman di `AGENTS.md`.
- Mobile Nav Sidebar diimplementasi menggunakan *conditional rendering state* di Layout.
- File config tes dan DX Tools direncanakan pada tahap lanjut.

## Iterasi 2 - 9 Mei 2026 (Refinement Layout & Tema)

**Masalah & Masukan User:**
1. **Teks Hilang/Transparan:** Teks "MERAIH" pada "BERHENTI MERAIH HASIL BIASA" tidak terlihat jelas / tertutup di layar tertentu karena penggunaan teknik *text-stroke* transparan yang salah.
2. **Button Overlap:** Tombol (Button) di area bawah (CTA) mengalami overlap/tumpang tindih pada layar kecil.
3. **Desain Card Tim:** Area background hijau pada foto Avatar Card "Our Team" terlalu lebar dan kurang proporsional.
4. **Responsivitas Acara Mendatang:** Grid/Layout di bagian Upcoming Events belum fully responsive di desktop.
5. **Konsistensi Padding Container:** Padding kiri/kanan antar section dan halaman (seperti bagian Wawasan Lokasi vs lainnya) tidak konsisten.
6. **Dark/Light Mode:** Belum ada toggle ganti tema dan belum mengikuti *system default* OS.
7. **Ukuran Logo Topbar:** Ukuran teks "NARA EVENTS" terlalu besar dibanding tinggi tombol (button) di baris yang sama.

**Tindakan Resolusi:**
- Padding kiri-kanan diseragamkan dengan konfigurasi class `container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl` di seluruh section di semua page publik.
- Mengganti styling teks `text-transparent WebkitTextStroke` dengan utilitas Tailwind yang lebih aman (solid color atau opacity/stroke yang kompatibel lintas peramban).
- Mengatur ulang responsivitas flexbox/grid pada section Acara Mendatang, dan memperbaiki urutan/tumpukan elemen CTA agar tidak overlapping di mobile.
- Membuat `<ThemeProvider>` untuk menangani dark/light/system theme, serta menempatkan tombol toggle di Navbar `PublicLayout`.
- Mengecilkan ukuran teks Header Logo (dari `text-2xl/3xl` menjadi proporsional `text-xl/2xl`) dan mensejajarkannya (align-items-center) dengan Button di Navbar.
- Merombak struktur Card di `AboutPage.tsx` agar foto tim lebih clean dan background hijaunya sebatas wadah wajar.

## Iterasi 3 - 9 Mei 2026 (Responsivitas Container & Variasi Card UI)

**Masalah & Masukan User:**
1. **Logo Medsos Vektor:** Logo TikTok hilang/tidak ada icon. Warna fill button medsos minta disesuaikan dengan brand aslinya. (Telah diselesaikan di patch sebelumnya).
2. **Fleksibilitas & Variasi Card:** Card terlalu monoton (semua kotak menurun). Minta variasi desain card antar section (grid masonry, horizontal, dll).
3. **Efek Potongan Kasar (Horizontal Scroll):** Carousel/List horizontal "Rekam Jejak" terpotong kaku di ujung layar. Minta efek *fade* di tepi.
4. **Inkonsistensi Garis Tepi (Padding/Margin Kiri-Kanan):** Layar desktop memperlihatkan Logo Navbar, Hero, dan Acara Mendatang memiliki garis batas kiri-kanan yang tidak rata (ada yang menjorok, ada yang keluar).

**Tindakan Resolusi:**
- **Standardisasi Container:** Mengganti kombinasi class `container ...` yang sporadis menjadi komposisi baku utilitas: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` di SEMUA komponen (Navbar, Footer, Hero, Section). Ini mengunci *alignment* vertikal dari atas ke bawah.
- **Variasi Card Acara:** Mengubah *Featured Card* di "Acara Mendatang" menjadi layout Horizontal (Kiri gambar, Kanan teks) pada breakpoint `lg`, membedakannya dari *sub-cards* yang vertikal.
- **Efek Fade Scroll:** Menambahkan utilitas `[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]` pada container horizontal "Rekam Jejak" untuk transisi ujung layar yang elegan.
- *Styling* khusus untuk brand colors Social Media telah ditetapkan.
