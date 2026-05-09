import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, title: "Neo-Brutalism Tech Summit", category: "conference", image: "https://picsum.photos/seed/nara1/800/600", year: "2025" },
    { id: 2, title: "Midnight Resonance Festival", category: "music", image: "https://picsum.photos/seed/nara2/800/800", year: "2025" },
    { id: 3, title: "Startup Pitch Battle", category: "corporate", image: "https://picsum.photos/seed/nara3/800/400", year: "2024" },
    { id: 4, title: "Underground Synth Rave", category: "music", image: "https://picsum.photos/seed/nara4/800/800", year: "2024" },
    { id: 5, title: "Global Crypto Expo", category: "conference", image: "https://picsum.photos/seed/nara5/800/600", year: "2024" },
    { id: 6, title: "Urban Sneakers Week", category: "exhibition", image: "https://picsum.photos/seed/nara6/800/1000", year: "2023" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-card w-full py-24 border-b-4 border-black text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#ccff00] opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block">
             REKAM <span className="bg-[#ccff00] text-black px-2 mt-2 md:mt-0 inline-block border-2 border-black rotate-2">JEJAK</span>
          </h1>
          <p className="font-body text-xl max-w-2xl mx-auto text-muted-foreground font-medium">
            Dokumentasi misi operasional masa lalu yang telah mencetak sejarah. Jangan hanya mendengar ceritanya, rasakan buktinya.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-16 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "all", label: "Semua Lini" },
              { id: "music", label: "Festival Musik" },
              { id: "conference", label: "Konferensi B2B" },
              { id: "corporate", label: "Korporat" },
              { id: "exhibition", label: "Pameran" }
            ].map(v => (
              <Button 
                key={v.id}
                onClick={() => setFilter(v.id)}
                variant={filter === v.id ? "solid" : "outline"}
                className={`font-bold uppercase tracking-widest text-xs h-12 px-6 rounded-xl transition-all
                  ${filter === v.id ? 'bg-black text-white shadow-brutal hover:bg-[#8a2be2]' : 'bg-card text-foreground hover:bg-[#ccff00] hover:text-black hover:-translate-y-1 hover:shadow-brutal-sm'}
                `}
              >
                {v.label}
              </Button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-6 md:gap-8">
            {filteredProjects.map((p, i) => (
              <div key={p.id} className={cn("group cursor-pointer flex flex-col items-stretch",
                i % 6 === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" :
                i % 6 === 3 ? "md:col-span-2 lg:col-span-2" :
                "md:col-span-1 lg:col-span-1"
              )}>
                <div className="bg-card border-4 border-black p-4 rounded-2xl shadow-brutal hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] hover:bg-[#FDFBD4] transition-all duration-300 flex-1 flex flex-col">
                  <div className="border-2 border-black rounded-xl overflow-hidden relative mb-4 flex-1">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100 min-h-[200px]" />
                    <div className="absolute top-3 right-3 bg-white text-black text-xs font-bold font-body px-2 py-1 border-2 border-black rounded-lg">
                      {p.year}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-1 group-hover:text-[#ccff00] dark:group-hover:text-[#8a2be2] transition-colors" style={{ WebkitTextStroke: '1px black' }}>
                      {p.title}
                    </h3>
                    <p className="font-body text-xs font-bold uppercase text-muted-foreground">
                      {p.category.replace('-', ' ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-24 bg-[#ff5500] text-black border-t-4 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">
             PROYEK ANDA BERIKUTNYA?
           </h2>
           <p className="font-body text-lg font-bold uppercase tracking-tight max-w-xl mx-auto mb-8">
             KAMI MEMBUAT REKOR BARU SETIAP MINGGU. AMANKAN SLOT TANGGAL ANDA SEBELUM HABIS.
           </p>
           <Button variant="solid" size="lg" className="bg-white text-black rounded-2xl h-16 px-10 text-lg border-2 border-black shadow-brutal hover:bg-black hover:text-white transition-all">
             TANTANG KAMI SEKARANG
           </Button>
        </div>
      </section>
    </div>
  );
}
