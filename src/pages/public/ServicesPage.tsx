import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ticket, Speaker, Music, Megaphone, Zap, Laptop, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Music,
      title: "Produksi Konser Skala Penuh",
      desc: "Dari tur stadion epik hingga panggung underground yang intim. Kami menangani desain tata panggung, pencahayaan, rekayasa suara (FOH), dan manajemen talenta terbaik di kelasnya.",
      color: "bg-[#ccff00]"
    },
    {
      icon: Ticket,
      title: "Mesin Tiket Proprietary",
      desc: "Nol ketergantungan pada vendor luar. Sistem tiket mandiri kami mampu menahan arus 100.000 pengunjung serentak dilengkapi QR Code dinamis anti-calo.",
      color: "bg-[#8a2be2]"
    },
    {
      icon: Speaker,
      title: "Infrastruktur Audio Visual",
      desc: "Kami tidak sekadar menyewa speaker. Kami merakit lanskap akustik dan permainan visual mematikan yang menghipnotis seluruh indera audiens.",
      color: "bg-[#ff5500]"
    },
    {
      icon: Megaphone,
      title: "Konferensi B2B & Eksibisi",
      desc: "Acara korporat tidak harus membosankan. Kami menyuntikkan energi agresi Neo-Brutalism ke dalam puncak teknologi, perilisan produk, dan networking tertutup.",
      color: "bg-[#06b6d4]"
    },
    {
      icon: ShieldCheck,
      title: "Manajemen Keamanan & Keramaian",
      desc: "Telemetri kerumunan cerdas, gelang akses RFID per zona, serta barikade militer. Protokol keamanan adalah sesuatu yang tidak pernah kami kompromikan.",
      color: "bg-[#22c55e]"
    },
    {
      icon: Laptop,
      title: "Intervensi Ruang Digital & Periklanan",
      desc: "Sirkuit marketing, kampanye media sosial guerilla, hingga penyiaran global 4K multi-cam untuk mereka yang tidak bisa berada di lapangan.",
      color: "bg-white"
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-black text-white w-full py-24 border-b-2 border-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(45deg, #000, #000 10px, #222 10px, #222 20px)' }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 text-white drop-shadow-[4px_4px_0_#ff5500]">
            ARSENAL KAMI
          </h1>
          <p className="font-body text-xl max-w-2xl text-gray-300 font-medium mx-auto">
            Gudang persenjataan lengkap untuk mengorkestrasikan sebuah fenomena budaya yang sesungguhnya. Pilih alat Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 bg-card border-b-2 border-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="group bg-background border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all flex flex-col">
                <div className={`w-16 h-16 ${svc.color} border-2 border-black rounded-2xl flex items-center justify-center mb-8 shadow-brutal-sm`}>
                  <svc.icon className={`w-8 h-8 ${svc.color === 'bg-black' ? 'text-white' : 'text-black'}`} />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-4 border-b-2 border-black pb-2">
                  {svc.title}
                </h3>
                <p className="font-body text-muted-foreground font-medium flex-1">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTE */}
      <section className="w-full py-32 bg-background text-center relative overflow-hidden">
         {/* Decorative backgrounds */}
         <div className="absolute top-10 left-[10%] w-32 h-32 bg-[#ff5500] border-4 border-black rounded-full mix-blend-multiply opacity-50 dark:opacity-20 blur-xl animate-pulse" />
         <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-[#06b6d4] border-4 border-black rounded-full mix-blend-multiply opacity-50 dark:opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
            BERHENTI <span className="text-muted-foreground border-black dark:border-white">MERAIH</span> HASIL BIASA.
          </h2>
          <Button asChild size="lg" className="w-full sm:w-auto max-w-full min-h-16 h-auto py-4 px-6 md:px-12 bg-black text-white hover:bg-[#8a2be2] border-2 border-black shadow-brutal text-lg md:text-xl rounded-2xl transition-all whitespace-normal text-center leading-tight">
            <Link to="/contact">EKSKUSI BERSAMA KAMI TERKINI <ArrowRight className="w-6 h-6 ml-2 shrink-0 hidden sm:inline-block" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
