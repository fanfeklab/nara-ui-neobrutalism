import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import servicesData from "@/data/services.json";

export default function ServiceDetailPage() {
  const { category, slug } = useParams();
  const fullSlug = `/services/${category}/${slug}`;

  // Find the service across all categories
  let serviceItem: any = null;
  let categoryInfo: any = null;

  for (const cat of Object.values(servicesData.services)) {
    const item = cat.items.find(i => i.slug === fullSlug);
    if (item) {
      serviceItem = item;
      categoryInfo = cat;
      break;
    }
  }

  if (!serviceItem) {
    return (
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 text-center text-foreground">
        <h1 className="text-4xl font-display font-black uppercase mb-4">404: Layanan Tidak Ditemukan</h1>
        <Button asChild variant="outline" className="border-2 border-black rounded-xl">
           <Link to="/services">Kembali ke Daftar Layanan</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* Hero Banner */}
      <section className="w-full bg-card text-card-foreground dark:bg-card border-b-2 border-black py-16 md:py-24 relative overflow-hidden text-white dark:text-foreground">
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start gap-6">
           <div className="flex items-center gap-2 mb-4 text-gray-300 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <Link to="/services" className="font-body font-bold text-sm uppercase">Kembali ke Daftar</Link>
           </div>
           
           <div className="bg-primary text-black font-body font-bold text-xs md:text-sm uppercase px-3 py-1 border-2 border-black rounded-lg shadow-brutal-sm">
              {categoryInfo.category_name}
           </div>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter drop-shadow-[2px_2px_0_#000] dark:drop-shadow-none max-w-4xl leading-tight">
             {serviceItem.title}
           </h1>
           <p className="text-xl md:text-2xl font-body font-medium text-gray-300 dark:text-muted-foreground mt-4 max-w-2xl">
             {serviceItem.tagline}
           </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Left Article */}
           <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="w-full aspect-video border-4 border-black rounded-2xl overflow-hidden shadow-brutal bg-muted">
                 <img src={serviceItem.thumbnail} alt={serviceItem.title} className="w-full h-full object-cover grayscale opacity-90" />
              </div>
              
              <article className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary prose-a:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:flex prose-li:items-start prose-li:gap-3 prose-li:mb-2 prose-strong:text-secondary dark:prose-strong:text-primary">
                 <div className="markdown-body" dangerouslySetInnerHTML={{ __html: serviceItem.body_html.replace(/<li>/g, '<li><svg class="w-6 h-6 text-accent shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><div>').replace(/<\/li>/g, '</div></li>') }} />
              </article>
           </div>

           {/* Right Sticky Column */}
           <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex flex-col gap-8 p-8 border-4 border-black rounded-2xl bg-primary text-black shadow-brutal">
                 <h3 className="font-display font-black text-2xl uppercase tracking-tight border-b-2 border-black pb-2">Klaim Terbesar</h3>
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-black shrink-0" />
                    <p className="font-body text-lg font-bold leading-tight">
                      "{serviceItem.benefit}"
                    </p>
                 </div>
                 
                 <div className="mt-4 pt-6 border-t-2 border-black flex flex-col gap-4">
                    <h4 className="font-display font-black uppercase text-lg">Tertarik Dengan Layanan Ini?</h4>
                    <p className="font-body text-sm font-medium opacity-80">Jadwalkan konsultasi dengan tim operasional kami sekarang.</p>
                    <Button asChild size="lg" className="w-full h-14 bg-black text-white hover:bg-card hover:text-black border-2 border-black rounded-xl font-display font-black text-lg uppercase tracking-tight shadow-brutal-sm hover:translate-x-1 transition-all mt-2">
                       <Link to="/contact">AJUKAN PROPOSAL</Link>
                    </Button>
                 </div>
              </div>
           </div>

        </div>
      </section>

    </div>
  )
}
