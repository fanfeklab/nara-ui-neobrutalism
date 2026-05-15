# ADR 003: Progressive Web App & Vector Seat Mapping

**Context**: 
Aplikasi memiliki persyaratan untuk memungkinkan Staf Lapangan menggunakan sistem saat check-in tiket, serta memberikan Member Dashboard khusus. Sistem juga memerlukan fitur rancang bangun denah lokasi duduk (seat mapping) tipe vektor yang dinamis dan interaktif (dapat dipilih, digambar batasannya, diprint kustom template invoice/rancangan seat).

**Decision**:
Sistem akan diubah menjadi **PWA** menggunakan **Serwist** (`@serwist/next`) dan fitur Vector Editor Seat Mapping akan dibangun menggunakan **Konva.js** (`react-konva`).

**Options Considered**:
1. *PWA (Serwist) + Web Canvas (react-konva) (Selected)*
2. Pengembangan Native App Mobile secara instan dengan React Native (Ditolak karena belum masuk fase production native).
3. Pembuatan Seat Mapping dengan elemen DOM (Grid HTML absolut) / SVG murni.

**Rationale**:
- **PWA**: PWA merupakan solusi paling tepat untuk *field staff* yang kadang menghadapi koneksi internet fluktuatif di lokasi event. Serwist lebih modern, terbebas dari deprecation `next-pwa`, dan mendukung caching API/aset secara canggih di Workbox.
- **Konva.js**: Penggunaan library Canvas (Konva) diperlukan karena jika event mencapai ribuan seat, node HTML/SVG murni akan menurunkan performa DOM di browser (memory leak & lag). Canvas adalah satu-satunya entitas DOM, yang secara efisien mampu menampung ribuan objek tergambar, diseret (*drag_and_drop*), di-zoom secara interaktif. Canvas juga mudah diekspor untuk dicetak (`toDataURL`).

**Consequences**:
- *Positif*: Kebutuhan offline ter-cover, pengalaman pengguna saat membeli seat via manipulasi kanvas visual terasa imersif dan cepat.
- *Negatif*: Service worker caching strategy memerlukan arsitektur ekstra hati-hati guna menghindari isu *stale data* saat event vital berlangsung. Pengelolaan state Canvas (Konva) sering rumit bila tidak diintegrasikan dengan baik ke React.
