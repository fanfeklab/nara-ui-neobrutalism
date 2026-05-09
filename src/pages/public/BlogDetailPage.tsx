import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams();

  // Mocked detail logic
  const title = slug === "post-1" 
    ? "Cara Nara Events Mengendalikan 50.000 Penonton Tanpa Kepanikan"
    : "Sistem Eksekusi Lapangan: Pembedahan Taktis Logistik Kami";

  return (
    <div className="w-full relative bg-background">
      {/* Sticky top-nav back button */}
      <div className="sticky top-20 z-40 bg-card border-b-2 border-black w-full py-3 h-14 flex items-center shadow-brutal-sm">
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-sm font-body font-bold uppercase tracking-tight hover:text-[#ff5500] transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> KEMBALI KE PANGKALAN DATA
            </Link>
         </div>
      </div>

      {/* Hero Header Article */}
      <header className="w-full pt-16 pb-12 bg-white dark:bg-[#112240] border-b-2 border-black">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="mb-6 flex justify-center gap-3">
              <span className="bg-[#ccff00] text-black font-body font-bold text-xs uppercase px-3 py-1 border-2 border-black rounded-lg shadow-brutal-sm">STUDI KASUS</span>
              <span className="bg-black text-white font-body font-bold text-xs uppercase px-3 py-1 border-2 border-black rounded-lg shadow-brutal-sm">09 MEI 2026</span>
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter leading-[1.1] mb-8">
             {title}
           </h1>
           <div className="flex items-center justify-center gap-4 border-t-2 border-black pt-8 max-w-md mx-auto">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif S" className="w-12 h-12 bg-[#ccff00] rounded-full border-2 border-black" alt="Author" />
              <div className="text-left font-body">
                 <p className="font-bold uppercase text-sm">Ditulis oleh: Hanif S</p>
                 <p className="text-muted-foreground text-xs font-bold">OPERATOR TEKNIS, NARA EVENTS</p>
              </div>
           </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full max-w-5xl mx-auto px-4 -mt-8 relative z-10">
         <div className="aspect-[21/9] bg-muted border-4 border-black rounded-2xl overflow-hidden shadow-brutal">
            <img src="https://picsum.photos/seed/nara_b1_big/1200/600" className="w-full h-full object-cover" alt="Blog cover" />
         </div>
      </div>

      {/* Content Body */}
      <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-p:font-body prose-p:font-medium prose-a:text-[#8a2be2] dark:prose-a:text-[#ccff00] prose-a:font-bold border-b-2 border-black">
         <p className="lead text-xl">
           Industri hiburan sering kali sangat meromantisasi kerumunan, namun dari sudut pandang rekayasa logistik, 50.000 manusia adalah entitas cair bergerak yang bisa berujung pada bencana jika salah dimanifestasikan. Di sinilah metode kami ikut campur.
         </p>
         
         <h2>1. Menghancurkan Arus Tradisional</h2>
         <p>
           Sistem masuk satu pintu atau pintu sejajar selalu gagal dalam stres test. Pada festival bulan lalu, kami mengatur ulang area masuk menjadi bentukan formasi 'Parit Zig-Zag'. Ini bukan cuma untuk gaya neo-brutalisme, tapi ilmu dinamika fluida. Memecah momentum jalan sebelum titik pindai memastikan tidak ada himpitan.
         </p>
         
         <blockquote className="border-l-4 border-black dark:border-white pl-6 italic font-display text-2xl font-black bg-muted p-6 rounded-r-xl shadow-brutal-sm">
            "Tidak peduli seberapa gila lineup Anda. Jika pengunjung Anda merasa seperti tercekik di pintu masuk, acaranya sudah gagal sebelum dimulai."
         </blockquote>

         <h2>2. Manajemen Psikologi Cahaya</h2>
         <p>
            Ketika kegelapan tiba, lampu bukan cuma untuk memeriahkan area panggung. Kami menanamkan jalur pencahayaan LED lantai dengan warna psikologis spesifik. Saat flow aman, ia biru redup. Saat padat merayap, transisi menuju amber hangat yang secara tidak sadar menurunkan kecepatan berjalan lautan manusia tanpa harus diperingatkan melalui toa.
         </p>

         <h2>3. Infrastruktur Jaringan Tertutup</h2>
         <p>
            Scan tiket dengan sinyal operator? Bunuh diri. Nara Events membawa infrastruktur *local star-network* mandiri kami ke setiap venue lepas. Server otentikasi lokal terhubung via satelit atau fiber khusus. Waktu latensi dari pemotretan QR ke hijau: rata-rata di bawah 300 ms.
         </p>
         
         <p>
           Intinya sangat brutal: Antisipasi hal yang terburuk, lalu bangun sistem yang dua kali lebih berat daripada prediksi itu. Sisanya, biarkan para penonton meliar dengan aman.
         </p>
      </article>

      {/* Share & Footer Actions */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-4">
            <span className="font-display font-black uppercase tracking-tighter text-xl">Bagikan Transmisi:</span>
            <div className="flex gap-2">
               <button className="w-10 h-10 flex items-center justify-center bg-card border-2 border-black rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 transition-all"><Twitter className="w-4 h-4" /></button>
               <button className="w-10 h-10 flex items-center justify-center bg-card border-2 border-black rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 transition-all"><Facebook className="w-4 h-4" /></button>
               <button className="w-10 h-10 flex items-center justify-center bg-card border-2 border-black rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 transition-all"><Linkedin className="w-4 h-4" /></button>
            </div>
         </div>
         
         <Button asChild variant="solid" className="rounded-xl border-2 border-black shadow-brutal font-bold">
            <Link to="/blog">BACA TRANSMISI LAINNYA</Link>
         </Button>
      </section>
    </div>
  );
}
