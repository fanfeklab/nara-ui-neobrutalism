import { Handshake, MessageSquare } from "lucide-react";
import staticData from "@/data/static-company.json";

export default function ClientsPage() {
  const { our_clients, testimonials } = staticData.static_pages;

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      
      {/* Header */}
      <section className="w-full py-20 bg-card text-card-foreground text-white border-b-2 border-black relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
         />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6">
            KLIEN & <span className="text-primary">MITRA</span>
          </h1>
          <p className="text-xl font-body font-medium text-gray-300">
            Daftar merek dan institusi yang telah membuktikan standar presisi operasional kami.
          </p>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="w-full py-16 bg-card border-b-2 border-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12 border-b-4 border-black pb-4 inline-flex">
               <Handshake className="w-10 h-10 text-secondary" />
               <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter">ALIANSI STRATEGIS</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {our_clients.map((client, index) => (
                  <div key={index} className="aspect-[3/2] bg-card border-4 border-black rounded-2xl shadow-brutal flex items-center justify-center p-8 group hover:-translate-y-2 hover:bg-primary transition-colors">
                     {/* For mockup purposes, we show text. In real app, we use client.logo image */}
                     <span className="font-display font-black text-xl md:text-2xl uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors text-center">
                       {client.name}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-background ">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 flex items-center justify-center gap-4">
                 <MessageSquare className="w-10 h-10 text-accent p-1 border-2 border-black rounded shadow-brutal-sm bg-card" /> DEKLARASI KEPUASAN
               </h2>
               <p className="font-body text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                 Dengarkan langsung dari mereka yang telah merasakan presisi operasional kami.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {testimonials.map(item => (
                 <div key={item.id} className="bg-card  border-4 border-black rounded-2xl p-8 shadow-brutal flex flex-col relative group">
                    <div className="absolute -top-6 -left-6 text-6xl text-primary drop-shadow-[2px_2px_0_#000] z-0 font-display font-black opacity-80 group-hover:rotate-12 transition-transform">"</div>
                    <p className="font-body text-lg font-bold italic mb-8 relative z-10 text-foreground">
                       "{item.quote}"
                    </p>
                    <div className="mt-auto border-t-2 border-black pt-4 flex items-center gap-4">
                       <span className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-muted flex items-center justify-center font-display font-black text-xl uppercase shrink-0">
                         {item.name.charAt(0)}
                       </span>
                       <div className="flex flex-col">
                          <span className="font-display font-black uppercase text-sm leading-tight text-foreground">{item.name}</span>
                          <span className="font-body text-xs font-bold text-muted-foreground uppercase">{item.role}</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  )
}
