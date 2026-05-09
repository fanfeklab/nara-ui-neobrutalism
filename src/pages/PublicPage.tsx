import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Ticket, Rocket, Calendar, Users, MapPin } from "lucide-react";

export default function PublicPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#FDFBD4] border-b-2 border-black dark:bg-[#0a192f]">
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center py-24 md:py-32 lg:py-40">
          <div className="inline-flex items-center gap-2 px-6 py-2 border-2 border-black rounded-full bg-[#ccff00] text-black shadow-brutal-sm font-bold uppercase tracking-tight text-sm mb-8">
            <Zap className="w-4 h-4" /> Standar Baru Event Organizer
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter max-w-5xl leading-[0.9] text-foreground mix-blend-difference drop-shadow-[0_4px_0_rgba(0,0,0,1)] dark:drop-shadow-none">
            KAMI ORKESTRASIKAN <span className="text-[#8a2be2] dark:text-[#ccff00] inline-block mt-2">PENGALAMAN</span>
            <br /> TAK TERLUPAKAN.
          </h1>
          
          <p className="mt-8 text-lg md:text-xl font-body max-w-2xl text-muted-foreground font-medium">
            Nara Events menghancurkan kebiasaan lama manajemen acara. Kami menggabungkan inovasi agresif dengan eksekusi sempurna untuk menghadirkan festival, konferensi, dan pameran berskala masif.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" variant="solid" className="w-full sm:w-auto text-lg h-16 px-8 rounded-2xl">
              <Link to="/events">EKSPLORASI ACARA <ArrowRight className="ml-2 w-5 h-5 hidden sm:inline-block" /></Link>
            </Button>
            {/* Forced styling on outline button for contrast safety in both modes */}
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg h-16 px-8 rounded-2xl bg-white text-black hover:bg-black hover:text-white dark:bg-card dark:text-white dark:hover:bg-[#ccff00] dark:hover:text-black">
              <Link to="/services">LAYANAN KAMI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT: Upcoming Events */}
      <section className="w-full py-24 bg-card border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-2">
                ACARA <span className="text-[#ff5500]">MENDATANG</span>
              </h2>
              <p className="text-muted-foreground font-body font-bold uppercase">Amankan tiket Anda sebelum hancur.</p>
            </div>
            <Button asChild variant="outline" className="rounded-xl font-bold uppercase">
              <Link to="/events">Lihat Semua <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          {/* Fixed Responsivitas di Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 1 Big Featured Card (Horizontal layout on large screens) */}
            <div className="lg:col-span-8 group bg-background border-4 border-black rounded-2xl overflow-hidden shadow-brutal flex flex-col lg:flex-row hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all h-full">
              <div className="relative aspect-video lg:aspect-auto lg:w-1/2 border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden min-h-[300px] lg:min-h-full">
                <img src="https://picsum.photos/seed/naramain/1200/1200" alt="Main Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#8a2be2] text-white font-display font-black text-lg lg:text-xl uppercase px-4 py-2 border-2 border-black rounded-xl shadow-brutal-sm">
                  FESTIVAL
                </div>
                {/* Sold Out / Status badge mockup */}
                <div className="absolute top-4 right-4 bg-[#ccff00] text-black font-body font-bold text-xs lg:text-sm uppercase px-3 py-1 border-2 border-black rounded-lg">
                  Tiket Tersedia
                </div>
              </div>
              <div className="p-6 md:p-8 lg:w-1/2 bg-white dark:bg-[#112240] flex flex-col justify-center gap-4">
                <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter leading-tight">Neo-Brutalism Tech Summit 2026</h3>
                <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-4 font-body text-sm font-bold text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-black dark:text-white shrink-0" /> 24-26 AGUSTUS 2026</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-black dark:text-white shrink-0" /> JCC SENAYAN, JAKARTA</span>
                </div>
                <p className="font-body font-medium mt-2 mb-4 line-clamp-3 text-sm md:text-base">
                  Konferensi teknologi terbesar tahun ini. Mempertemukan para inovator, startup, dan investor dalam satu ekosistem tanpa batas.
                </p>
                <div className="mt-auto pt-4">
                  <Button size="lg" className="w-full bg-black text-white hover:bg-[#ccff00] hover:text-black border-2 border-black rounded-xl shadow-brutal font-display text-lg tracking-tight transition-all">
                    BELI TIKET SEKARANG
                  </Button>
                </div>
              </div>
            </div>

            {/* 2 Small Cards List */}
            <div className="lg:col-span-4 flex flex-col gap-8 h-full">
              {[1, 2].map((item) => (
                <div key={item} className="flex flex-col bg-background border-4 border-black rounded-2xl overflow-hidden shadow-brutal hover:-translate-y-1 transition-transform group flex-1">
                  <div className="h-48 border-b-4 border-black overflow-hidden relative">
                    <img src={`https://picsum.photos/seed/subevent${item}/600/300`} alt="Sub Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-white text-black font-display font-bold text-xs uppercase px-2 py-1 border-2 border-black rounded-lg">
                      KONSER
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1 bg-white dark:bg-[#112240]">
                    <div>
                      <h4 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight mb-2 leading-tight">
                        {item === 1 ? "Underground Synth Rave" : "Startup Pitch Battle Vol.4"}
                      </h4>
                      <div className="flex flex-col gap-1 font-body text-xs md:text-sm font-bold text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 1{item} September 2026</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-xl font-bold uppercase text-xs md:text-sm mt-auto">
                      Lihat Info
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="w-full py-24 bg-[#ccff00] text-black border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 text-black">
              MENGAPA <span className="text-white drop-shadow-[2px_2px_0_#000]">NARA EVENTS?</span>
            </h2>
            <p className="text-gray-800 font-body font-bold text-lg uppercase tracking-tight">
              Kami tidak sekadar mengatur acara. Kami mendesain pergerakan masa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Eksekusi Presisi",
                desc: "Setiap detail direncanakan secara militer. Tidak ada ruang untuk kesalahan, memastikan acara Anda berjalan sempurna."
              },
              {
                icon: Rocket,
                title: "Inovasi Agresif",
                desc: "Penggunaan teknologi tata panggung dan pencahayaan paling mutakhir yang tidak bisa direplikasi oleh kompetitor."
              },
              {
                icon: Ticket,
                title: "Ticketing Berdaulat",
                desc: "Sistem tiket in-house tanpa perantara. Manajemen kuota real-time dan anti-calo tingkat dewa."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white border-2 border-black p-8 rounded-2xl shadow-brutal hover:-translate-y-2 transition-transform group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-brutal-sm group-hover:bg-[#8a2be2] transition-colors group-hover:rotate-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="font-body text-gray-700 font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASTE EVENTS / PORTFOLIO TEASER */}
      <section className="w-full py-24 bg-card border-b-2 border-black overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter">REKAM <span className="text-[#8a2be2]">JEJAK</span></h2>
              <p className="font-body text-muted-foreground font-medium mt-2">Daftar operasi yang telah sukses kami laksanakan.</p>
            </div>
            <Button variant="solid" asChild className="rounded-xl">
               <Link to="/portfolio">LIHAT SEMUA PORTOFOLIO</Link>
            </Button>
           </div>
           
           {/* Horizontal Scroll Snap Grid with Fade Mask */}
           <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
             <div className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbars [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
               {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-background border-4 border-black rounded-2xl snap-center overflow-hidden shadow-brutal pb-6 hover:-translate-y-2 transition-transform">
                     <div className="aspect-video bg-muted border-b-4 border-black mb-6">
                        <img src={`https://picsum.photos/seed/past${i}/600/400`} alt="Past event" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                     </div>
                     <div className="px-6">
                       <h4 className="font-display font-black uppercase text-xl mb-1">Misi Operasional {i}</h4>
                       <p className="font-body text-sm font-bold text-muted-foreground uppercase">10.000+ Kehadiran</p>
                     </div>
                  </div>
               ))}
               {/* Padder for the last item to scroll into view with margin */}
               <div className="shrink-0 w-[5vw] sm:w-[1vw]" aria-hidden="true"></div>
             </div>
           </div>
        </div>
      </section>

      {/* BRAND & CLIENT LOGO SLIDER */}
      <section className="w-full py-16 bg-[#112240] text-white border-b-2 border-black overflow-hidden relative">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
           <p className="font-body font-bold uppercase tracking-widest text-[#ccff00]">DIPERCAYA OLEH TITAN INDUSTRI</p>
         </div>
         {/* Marquee Wrapper (pure tailwind custom inline or simple flex flex-nowrap animation if configured. We'll use a responsive grid for safety if marquee config config is missing) */}
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
              {['BCA', 'GOJEK', 'TELKOMSEL', 'TOКOPEDIA', 'SAMSUNG', 'BINTANG'].map((brand, i) => (
                 <div key={i} className="font-display font-black text-2xl md:text-4xl uppercase tracking-tighter text-gray-500 hover:text-white transition-colors cursor-default">
                    {brand}
                 </div>
              ))}
           </div>
         </div>
      </section>

      {/* BLOG / NEWS TEASER */}
      <section className="w-full py-24 bg-background border-b-2 border-black">
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4"><span className="text-[#ff5500]">WAWASAN</span> LOKASI</h2>
            <p className="font-body text-muted-foreground font-medium mb-12">Berita, insight, dan rilis pers resmi dari markas Nara Events.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               {[1, 2].map((blog) => (
                  <Link key={blog} to={`/blog/post-${blog}`} className="group bg-card border-2 border-black rounded-2xl overflow-hidden shadow-brutal flex flex-col hover:-translate-y-2 transition-transform">
                     <div className="aspect-video bg-muted border-b-2 border-black overflow-hidden">
                        <img src={`https://picsum.photos/seed/news${blog}/600/300`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News" />
                     </div>
                     <div className="p-6">
                        <div className="text-xs font-body font-bold bg-[#ccff00] text-black px-2 py-1 inline-block border-2 border-black rounded hover:bg-black hover:text-white mb-4">BERITA</div>
                        <h4 className="font-display font-black text-2xl uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">Cara Nara Events Mengatasi 50rb Penonton</h4>
                        <p className="font-body text-muted-foreground text-sm line-clamp-2">Teknologi di balik tata letak pintu masuk dan sistem keamanan mutakhir yang kami jalankan.</p>
                     </div>
                  </Link>
               ))}
            </div>
            
            <Button asChild variant="outline" size="lg" className="mt-12 rounded-xl font-bold uppercase">
               <Link to="/blog">Buka Semua Wawasan</Link>
            </Button>
         </div>
      </section>
      
      {/* Short CTA */}
      <section className="w-full py-32 bg-[#8a2be2] text-white relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6 text-white drop-shadow-[4px_4px_0_#000]">
            SIAP BERKOLABORASI?
          </h2>
          <p className="text-xl font-body max-w-2xl mx-auto mb-10 font-medium">
            Bergabunglah dengan ratusan brand visioner yang telah mempercayakan pesan mereka kepada Nara Events.
          </p>
          <Button asChild size="lg" className="bg-[#ccff00] text-black hover:bg-white border-2 border-black shadow-brutal h-16 px-10 text-lg rounded-2xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            <Link to="/contact">MULAI PROYEK BARU</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
