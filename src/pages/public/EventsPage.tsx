import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import eventsData from "@/data/events.json";
import { BRAND } from "@/config/brand.config";

export default function EventsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusFilter = searchParams.get("status") || "all";
  const categoryFilter = searchParams.get("category") || "all";

  const allEvents = useMemo(() => {
    let list = [];
    if (statusFilter === "all" || statusFilter === "upcoming") {
      list = [...list, ...eventsData.events.upcoming];
    }
    if (statusFilter === "all" || statusFilter === "past") {
      list = [...list, ...eventsData.events.past];
    }
    
    if (categoryFilter !== "all") {
      list = list.filter(e => e.category === categoryFilter);
    }
    
    return list;
  }, [statusFilter, categoryFilter]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    eventsData.events.upcoming.forEach(e => cats.add(e.category));
    eventsData.events.past.forEach(e => cats.add(e.category));
    return Array.from(cats);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="w-full py-20 bg-background  border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block">
            EKSPLORASI <span className="text-secondary">ACARA</span>
          </h1>
          <p className="text-xl font-body max-w-2xl text-muted-foreground font-medium">
            Saksikan kalender aktivitas {BRAND.name} dari ujung ke ujung.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 border-b-2 border-black bg-card sticky top-20 z-40">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
           
           <div className="flex gap-2 p-1 bg-muted border-2 border-black rounded-xl overflow-auto w-full md:w-auto hidescrollbar">
             <Button
               variant={statusFilter === "all" ? "solid" : "ghost"}
               size="sm"
               className={cn("rounded-lg uppercase font-bold", statusFilter === "all" && "bg-black text-white hover:bg-black")}
               onClick={() => { searchParams.set("status", "all"); setSearchParams(searchParams); }}
             >
               Semua Status
             </Button>
             <Button
               variant={statusFilter === "upcoming" ? "solid" : "ghost"}
               size="sm"
               className={cn("rounded-lg uppercase font-bold", statusFilter === "upcoming" && "bg-primary text-black hover:bg-primary")}
               onClick={() => { searchParams.set("status", "upcoming"); setSearchParams(searchParams); }}
             >
               Mendatang
             </Button>
             <Button
               variant={statusFilter === "past" ? "solid" : "ghost"}
               size="sm"
               className={cn("rounded-lg uppercase font-bold", statusFilter === "past" && "bg-accent text-black hover:bg-accent")}
               onClick={() => { searchParams.set("status", "past"); setSearchParams(searchParams); }}
             >
               Portofolio (Berlalu)
             </Button>
           </div>
           
           <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbars border-l-0 md:border-l-2 md:border-black md:pl-4">
             <Button
                variant={categoryFilter === "all" ? "solid" : "outline"}
                size="sm"
                className="rounded-lg shrink-0 border-2 border-black border-dashed font-bold uppercase"
                onClick={() => { searchParams.set("category", "all"); setSearchParams(searchParams); }}
             >
                Semua Kategori
             </Button>
             {categories.map(cat => (
                <Button
                   key={cat}
                   variant={categoryFilter === cat ? "solid" : "outline"}
                   size="sm"
                   className="rounded-lg shrink-0 border-2 border-black font-bold uppercase"
                   onClick={() => { searchParams.set("category", cat); setSearchParams(searchParams); }}
                >
                   {cat}
                </Button>
             ))}
           </div>

         </div>
      </section>
      
      {/* Event Grid List */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {allEvents.length === 0 ? (
             <div className="py-24 text-center border-4 border-black border-dashed rounded-2xl">
               <h3 className="font-display font-black text-2xl uppercase opacity-50">Tidak ada data ditemukan</h3>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {allEvents.map((item) => {
                 const isUpcoming = item.status === "upcoming";
                 return (
                 <div key={item.id} className="group flex flex-col bg-card border-4 border-black rounded-2xl overflow-hidden shadow-brutal hover:-translate-y-2 transition-transform">
                   <div className="aspect-[3/2] border-b-4 border-black relative overflow-hidden bg-muted">
                     <img src={item.thumbnail} alt={item.title} className={cn("w-full h-full object-cover transition-transform duration-500", isUpcoming ? "group-hover:scale-105" : "grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100")} />
                     <div className={cn("absolute top-3 left-3 text-white font-display font-black text-xs uppercase px-2 py-1 border-2 border-black rounded-lg shadow-brutal-sm", isUpcoming ? "bg-secondary" : "bg-black")}>
                       {item.category}
                     </div>
                     {!isUpcoming && (
                       <div className="absolute top-0 right-0 bg-accent text-black font-body font-black text-xs uppercase px-3 pb-3 pt-6 -rotate-45 translate-x-12 -translate-y-4 shadow-brutal border-2 border-black">
                         PAST EVENT
                       </div>
                     )}
                   </div>
                   <div className="p-6 flex flex-col flex-1">
                     <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-2 leading-tight">
                       {item.title}
                     </h3>
                     <div className="flex flex-col gap-2 font-body text-xs md:text-sm font-bold text-muted-foreground mb-4">
                       <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-foreground" /> {item.date_readable}</span>
                       <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-foreground" /> {item.location}</span>
                       {!isUpcoming && 'attendance' in item && (
                         <span className="flex items-center gap-2"><Users className="w-4 h-4 text-foreground" /> {(item as any).attendance.toLocaleString()} Hadir</span>
                       )}
                     </div>
                     <p className="font-body text-sm font-medium line-clamp-2 text-muted-foreground mb-6">
                       {item.excerpt}
                     </p>
                     
                     <div className="mt-auto border-t-2 border-black pt-4">
                       <Button asChild variant="outline" className={cn("w-full rounded-xl font-bold uppercase transition-all shadow-brutal-sm", isUpcoming && 'hover:bg-primary hover:text-black border-2 border-black')}>
                         <Link to={`/events/${item.slug}`}>
                            {isUpcoming ? "AMANKAN TIKET" : "LIHAT REKAPITULASI"} <ArrowRight className="w-4 h-4 ml-2" />
                         </Link>
                       </Button>
                     </div>
                   </div>
                 </div>
               )})}
             </div>
           )}
        </div>
      </section>

    </div>
  )
}
