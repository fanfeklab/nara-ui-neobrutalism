import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

export default function ClientsPage() {
  const testimonials = [
    {
      text: "Nara Events tidak hanya mengeksekusi acara, mereka merekayasa ulang seluruh harapan kami. Tingkat konversi di event kemarin naik hingga 300%.",
      author: "Aditya Pratama",
      role: "VP Marketing, Titan Tech",
      avatarSeed: "Aditya"
    },
    {
      text: "Pertama kali dalam 5 tahun, sistem tiket kami tidak crash di detik pertama rilis. Mesin antrian mereka adalah monster.",
      author: "Diana Siregar",
      role: "Festival Director, WeAreLive",
      avatarSeed: "DianaS"
    },
    {
      text: "Estetika panggung yang mereka buat benar-benar alien. Cara mereka menata pencahayaan dengan struktur industrial sungguh gila.",
      author: "Faisal Rahman",
      role: "CEO, Startup Media Hub",
      avatarSeed: "FaisalR"
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-background w-full py-24 border-b-2 border-black text-center px-4">
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative">
          DIPERCAYA OLEH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#8a2be2] stroke-black" style={{ WebkitTextStroke: '2px black' }}>PARA TITAN</span>
        </h1>
        <p className="font-body text-xl max-w-2xl mx-auto text-muted-foreground font-medium">
          Deretan merek dan institusi paling dominan di industri yang telah menyerahkan operasional lapangannya kepada Nara Events.
        </p>
      </section>

      {/* Grid of Logos */}
      <section className="w-full py-24 bg-card border-b-2 border-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {['BCA', 'GOJEK', 'TELKOMSEL', 'TOKOPEDIA', 'SAMSUNG', 'BINTANG', 'MANDIRI', 'TRAVELOKA', 'SHOPEE', 'NISSAN', 'HYUNDAI', 'DANA'].map((brand, i) => (
                <div key={i} className="bg-white dark:bg-[#112240] aspect-video border-2 border-black rounded-2xl flex items-center justify-center p-6 shadow-brutal-sm hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal transition-all cursor-crosshair">
                   <span className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter text-black dark:text-white opacity-40 hover:opacity-100 transition-opacity">
                     {brand}
                   </span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-[#FDFBD4] dark:bg-[#0a192f] border-b-2 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">
               CATATAN <span className="text-[#ff5500]">PERANG</span>
             </h2>
             <p className="font-body text-lg font-bold uppercase text-muted-foreground">Apa yang mereka ucapkan setelah asap menghilang.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-card border-4 border-black p-8 rounded-2xl shadow-brutal relative hover:-translate-y-2 transition-transform flex flex-col">
                 <Quote className="absolute top-6 right-6 w-12 h-12 text-[#ccff00] opacity-50" />
                 <p className="font-body font-medium text-lg mb-8 flex-1 relative z-10">"{t.text}"</p>
                 <div className="flex items-center gap-4 mt-auto pt-6 border-t-2 border-black">
                    <img 
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${t.avatarSeed}`} 
                      alt="" 
                      className="w-12 h-12 bg-muted rounded-full border-2 border-black" 
                    />
                    <div>
                      <p className="font-display font-black uppercase tracking-tight leading-none">{t.author}</p>
                      <p className="font-body text-xs font-bold text-muted-foreground mt-1">{t.role}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to invite */}
      <section className="w-full py-24 text-center bg-background">
         <h2 className="text-4xl font-display font-black uppercase mb-8">TAMBAHKAN LOGO ANDA DI SINI.</h2>
         <Button asChild size="lg" className="rounded-2xl border-2 border-black shadow-brutal h-14 px-8 text-lg hover:bg-[#8a2be2] hover:text-white transition-all">
            <Link to="/contact">INISIASI KONTRAK SEKARANG</Link>
         </Button>
      </section>
    </div>
  );
}
