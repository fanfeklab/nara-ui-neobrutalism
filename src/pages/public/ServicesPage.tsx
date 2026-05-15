import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Combine, Map, Users, Lightbulb, ClipboardList, Shield, Speaker } from "lucide-react";
import { cn } from "@/lib/utils";
import servicesData from "@/data/services.json";

const IconMap: Record<string, React.ElementType> = {
  "zap": Zap,
  "combine": Combine,
  "map": Map,
  "users": Users,
  "lightbulb": Lightbulb,
  "clipboard-list": ClipboardList,
  "shield": Shield,
  "speaker": Speaker,
};

export default function ServicesPage() {
  const serviceCategories = Object.values(servicesData.services);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="w-full py-20 bg-background  border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block text-foreground">
            LAYANAN <span className="text-primary drop-shadow-[2px_2px_0_#000] dark:drop-shadow-none bg-black px-4 ml-2 border-4 border-black dark:border-white rounded-xl">KAMI</span>
          </h1>
          <p className="text-xl font-body max-w-2xl text-muted-foreground font-medium">
            Dari sketsa kasar hingga gemuruh tepuk tangan. Kami orkestrasikan semuanya.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="flex flex-col">
        {serviceCategories.map((category, index) => (
          <section 
            key={category.category_slug} 
            className={cn("w-full py-16 md:py-24 border-b-2 border-black", index % 2 === 0 ? "bg-card" : "bg-card text-card-foreground text-white dark:bg-card dark:text-foreground")}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="mb-12 md:max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">
                  {category.category_name}
                </h2>
                <p className={cn("text-lg font-body font-medium", index % 2 === 0 ? "text-muted-foreground" : "text-gray-300 dark:text-muted-foreground")}>
                  {category.category_description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items.map(item => {
                  const Icon = IconMap[item.icon] || Zap;
                  
                  return (
                    <div key={item.id} className="bg-card text-card-foreground border-4 border-black rounded-2xl shadow-brutal hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all flex flex-col group">
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 shadow-brutal-sm group-hover:bg-secondary transition-colors group-hover:rotate-6">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-display font-black text-2xl uppercase tracking-tight leading-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm font-bold text-secondary uppercase mb-4">
                          {item.tagline}
                        </p>
                        <p className="font-body text-gray-700 font-medium mb-6 line-clamp-3">
                          {item.excerpt}
                        </p>
                        
                        <div className="mt-auto border-t-2 border-black pt-4">
                           <Link to={item.slug} className="flex items-center gap-2 font-display font-black uppercase text-lg text-black hover:text-accent transition-colors">
                             LIHAT DETAIL <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </section>
        ))}
      </div>

    </div>
  )
}
