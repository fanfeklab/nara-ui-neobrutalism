import { Users, AlertTriangle } from "lucide-react";
import staticData from "@/data/static-company.json";

export default function AboutPage() {
  const { about_full, our_team } = staticData.static_pages;

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      
      {/* Header */}
      <section className="w-full py-20 bg-background  border-b-2 border-black relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
         />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block text-foreground drop-shadow-[2px_2px_0_#000] dark:drop-shadow-[2px_2px_0_var(--color-primary)]">
            PRESISI <span className="text-secondary dark:text-primary">TANPA</span> KOMPROMI
          </h1>
          <p className="text-xl md:text-2xl font-body font-bold text-muted-foreground uppercase tracking-tight">
            {about_full.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <article className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary prose-a:font-bold prose-ul:font-bold prose-ul:list-inside">
              <div className="markdown-body" dangerouslySetInnerHTML={{ __html: about_full.body_html }} />
           </article>
        </div>
      </section>

      <div className="w-full flex justify-center py-4">
        <div className="w-24 h-2 bg-black dark:bg-card rounded-full"></div>
      </div>

      {/* Team Section */}
      <section className="w-full py-16 bg-card">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 flex items-center justify-center gap-4">
                 <Users className="w-10 h-10 text-accent p-1 border-2 border-black rounded shadow-brutal-sm bg-card" /> BARISAN TERDEPAN
               </h2>
               <p className="font-body text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                 Orkestrator di balik setiap operasi masif kami.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {our_team.map(member => (
                 <div key={member.id} className="bg-card  border-4 border-black rounded-2xl overflow-hidden shadow-brutal flex flex-col group hover:-translate-y-2 transition-transform">
                    <div className="aspect-square bg-muted border-b-4 border-black overflow-hidden relative">
                       <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card text-card-foreground border-2 border-black rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-colors">in</a>}
                          {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card text-card-foreground border-2 border-black rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors">tw</a>}
                          {(member.social as any).github && <a href={(member.social as any).github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card text-card-foreground border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">gh</a>}
                       </div>
                    </div>
                    <div className="p-6 flex flex-col items-center text-center flex-1">
                       <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-1 leading-tight">{member.name}</h3>
                       <p className="font-body text-xs font-bold text-secondary dark:text-primary uppercase tracking-widest mb-4">{member.role}</p>
                       <p className="font-body text-sm font-medium text-muted-foreground">{member.bio}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  )
}
