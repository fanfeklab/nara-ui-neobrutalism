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
