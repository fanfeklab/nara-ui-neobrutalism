import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nadia Kirana",
      role: "Chief Executive Officer",
      bio: "10+ tahun pengalaman mendalangi acara raksasa. Pemberontak korporat yang sepenuhnya mengubah wajah industri event.",
      imageSeed: "Nadia Kirana"
    },
    {
      name: "Hanif S",
      role: "Lead Project Engineer",
      bio: "Otak di balik algoritma tiket proprietary kami dan teknologi pengendalian massa berskala masif.",
      imageSeed: "Hanif S"
    },
    {
      name: "Sarah Wijaya",
      role: "VP of Partnerships",
      bio: "Menghubungkan brand raksasa dengan kultur underground. Mengunci sponsor bernilai miliaran adalah rutinitas paginya.",
      imageSeed: "Sarah Wijaya"
    },
    {
      name: "Riko Dharma",
      role: "Head of Creative",
      bio: "Diktator visual. Memastikan setiap tata panggung, spanduk, dan pencahayaan berteriak 'Nara Events'.",
      imageSeed: "Riko Dharma"
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-card w-full py-24 border-b-2 border-black flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] dark:drop-shadow-none">
          TENTANG <span className="text-[#8a2be2] dark:text-[#ccff00]">KAMI</span>
        </h1>
        <p className="font-body text-xl max-w-2xl text-muted-foreground font-medium">
          Kami adalah arsitek disrupsi. Nara Events bukan sekadar Event Organizer. Kami adalah kolektif insinyur dan seniman yang membangun generasi baru pengalaman langsung.
        </p>
      </section>

      {/* The Manifesto */}
      <section className="w-full py-24 bg-[#FDFBD4] dark:bg-[#112240] border-b-2 border-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-card border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] rounded-2xl">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter border-b-4 border-black pb-4 mb-8">
              MANIFESTO KAMI
            </h2>
            <div className="space-y-6 font-body text-lg font-medium leading-relaxed">
              <p>
                Industri acara telah menjadi usang. Lineup yang aman, desain panggung yang membosankan, dan biaya tiket yang digelembungkan telah menjadi kebiasaan. Kami menolak tunduk pada hal tersebut.
              </p>
              <p>
                <strong>Nara Events</strong> lahir dari rasa frustrasi dan dibangun dengan agresi murni. Kami percaya bahwa sebuah acara tidak seharusnya hanya "dihadiri." Ia harus dihidupi. Ia harus diingat. Ia harus meninggalkan jejak permanen pada budaya pergerakan.
              </p>
              <p>
                Kami mengendalikan seluruh proses. Dari percikan ide kreatif pertama hingga kode QR terakhir yang dipindai di pintu gerbang. Tanpa perantara. Tanpa alasan. Hanya eksekusi murni yang brutal.
              </p>
            </div>
            
            <div className="mt-12 flex gap-4">
              <div className="flex-1 border-t-2 border-black pt-4">
                <p className="font-display font-black text-3xl">100+</p>
                <p className="font-body text-sm font-bold uppercase text-muted-foreground">Misi Diselesaikan</p>
              </div>
              <div className="flex-1 border-t-2 border-l-2 border-black pt-4 pl-4">
                <p className="font-display font-black text-3xl">1.2JT</p>
                <p className="font-body text-sm font-bold uppercase text-muted-foreground">Tiket Dihancurkan</p>
              </div>
              <div className="flex-1 border-t-2 border-l-2 border-black pt-4 pl-4">
                <p className="font-display font-black text-3xl">0</p>
                <p className="font-body text-sm font-bold uppercase text-muted-foreground">Kompromi Visi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="w-full py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">
              PARA KOMANDAN
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Temui operator inti di balik pergerakan mesin Nara Events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group bg-background border-2 border-black rounded-2xl overflow-hidden shadow-brutal hover:-translate-y-2 transition-transform pb-2 flex flex-col">
                <div className="aspect-square bg-[#ccff00] border-b-2 border-black p-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#ff5500] transition-colors">
                  <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
                  <img 
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.imageSeed}&backgroundColor=transparent`} 
                    alt={member.name}
                    className="w-32 h-32 relative z-10 drop-shadow-[-4px_4px_0_rgba(0,0,0,0.5)] bg-white rounded-full border-4 border-black"
                  />
                </div>
                <div className="p-6 text-center flex flex-col flex-1">
                  <h3 className="font-display font-black text-xl uppercase tracking-tighter mb-1">{member.name}</h3>
                  <p className="font-body text-sm font-bold text-[#8a2be2] dark:text-[#ff5500] uppercase mb-4">{member.role}</p>
                  <p className="font-body text-sm text-muted-foreground font-medium mb-6 flex-1">
                    {member.bio}
                  </p>
                  <Button variant="outline" size="sm" className="w-full font-bold uppercase rounded-xl" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      LinkedIn <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTE */}
      <section className="w-full py-24 bg-black text-white border-t-2 border-black overflow-hidden relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6 text-white">
            INGIN BERGABUNG DENGAN PASUKAN?
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Kami selalu mencari bakat agresif. Jika Anda merasa mampu bertahan di bawah tekanan, kirimkan portofolio Anda.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-[#ccff00] border-2 border-black shadow-[4px_4px_0_0_#8a2be2] text-lg h-14 rounded-2xl transition-all">
            <Link to="/contact">LAMAR SEKARANG <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
