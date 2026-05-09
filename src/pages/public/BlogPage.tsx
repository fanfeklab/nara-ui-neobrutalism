import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      id: "post-1",
      title: "Cara Nara Events Mengendalikan 50.000 Penonton Tanpa Kepanikan",
      category: "STUDI KASUS",
      date: "09 MEI 2026",
      excerpt: "Membongkar metodologi pengendalian kerumunan, barikade labirin, dan psikologi tata cahaya yang mencegah kepanikan massal pada festival terbaru kami.",
      image: "https://picsum.photos/seed/nara_b1/800/500"
    },
    {
      id: "post-2",
      title: "Matematika Kasar di Balik Tiket Sold Out dalam 3 Menit",
      category: "TEKNOLOGI",
      date: "02 MEI 2026",
      excerpt: "Bagaimana algoritma antrian in-house kami menangkal 100 ribu bot calo simultan sekaligus menjaga server tetap berjalan sejuk.",
      image: "https://picsum.photos/seed/nara_b2/800/500"
    },
    {
      id: "post-3",
      title: "Estetika Neo-Brutalism dalam Tata Panggung Modern",
      category: "DESAIN VISUAL",
      date: "24 APR 2026",
      excerpt: "Mengapa kami memecat semua desainer 'aman' kami dan beralih ke struktur asimetris, besi mentah, dan kontras warna yang agresif.",
      image: "https://picsum.photos/seed/nara_b3/800/500"
    },
    {
      id: "post-4",
      title: "Rapat Koordinasi: Dokumen Rahasia Penyelamatan Acara yang Hampir Batal",
      category: "BEHIND THE SCENES",
      date: "15 APR 2026",
      excerpt: "Hujan badai, vendor lari, dan generator terbakar 4 jam sebelum gerbang dibuka. Begini cara kami memperbaiki semuanya tepat waktu.",
      image: "https://picsum.photos/seed/nara_b4/800/500"
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-black text-white w-full py-24 border-b-2 border-black text-center px-4 relative">
        {/* Subtle grid pattern for dark header */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">
             PANGKALAN <span className="text-[#06b6d4]">DATA</span>
          </h1>
          <p className="font-body text-xl max-w-2xl mx-auto text-gray-400 font-medium">
             Transmisi tulisan, pembedahan operasional, dan log teknis langsung dari para komandan lapangan.
          </p>
        </div>
      </section>

      {/* Featured / Hero Blog */}
      <section className="w-full py-16 bg-card border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link to={`/blog/${posts[0].id}`} className="group flex flex-col md:flex-row bg-background border-4 border-black rounded-2xl overflow-hidden shadow-brutal hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all">
              <div className="w-full md:w-3/5 border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden relative">
                 <img src={posts[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-[#112240]">
                 <div className="flex gap-4 mb-4">
                    <span className="bg-[#ccff00] text-black font-body font-bold text-xs uppercase px-2 py-1 border-2 border-black rounded-lg">
                      {posts[0].category}
                    </span>
                    <span className="font-body font-bold text-xs text-muted-foreground pt-1">
                      {posts[0].date}
                    </span>
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-display font-black uppercase tracking-tighter mb-4 leading-tight">
                    {posts[0].title}
                 </h2>
                 <p className="font-body text-muted-foreground font-medium mb-8">
                    {posts[0].excerpt}
                 </p>
                 <Button variant="outline" className="w-fit rounded-xl">BACA SELENGKAPNYA</Button>
              </div>
           </Link>
        </div>
      </section>

      {/* Grid List */}
      <section className="w-full py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                 <Link key={post.id} to={`/blog/${post.id}`} className="group bg-card border-2 border-black rounded-2xl flex flex-col overflow-hidden shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:shadow-brutal transition-all">
                    <div className="aspect-video border-b-2 border-black overflow-hidden">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                       <div className="flex justify-between items-center mb-4">
                          <span className="bg-[#f3f4f6] dark:bg-black text-foreground font-body font-bold text-[10px] uppercase px-2 py-1 border-2 border-black rounded">
                            {post.category}
                          </span>
                          <span className="font-body font-bold text-[10px] text-muted-foreground">
                            {post.date}
                          </span>
                       </div>
                       <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-3 leading-tight group-hover:text-[#ff5500] transition-colors">
                          {post.title}
                       </h3>
                       <p className="font-body text-sm text-muted-foreground font-medium flex-1 line-clamp-3">
                          {post.excerpt}
                       </p>
                    </div>
                 </Link>
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <Button variant="solid" size="lg" className="rounded-xl border-2 border-black shadow-brutal-sm font-bold uppercase">
                Muat Transmisi Lebih Lama
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
