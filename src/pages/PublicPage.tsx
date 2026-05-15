import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Target,
  Ticket,
  Rocket,
  Calendar,
  Users,
  MapPin,
  Handshake,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import companyData from "@/data/company.json";
import eventsData from "@/data/events.json";
import servicesData from "@/data/services.json";
import blogData from "@/data/blog.json";
import { BRAND } from "@/config/brand.config";
import { useConfigStore } from "@/store/configStore";

// Map lucide strings to components
const IconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  handshake: Handshake,
};

export default function PublicPage() {
  const { hero_section, value_propositions, cta_banners } = companyData;
  const { eventLayout } = useConfigStore();
  const upcomingEvents = eventsData.events.upcoming.slice(0, 6);
  const pastEvents = eventsData.events.past.slice(0, 4);

  // Flatten categories to get services limit 3-5
  const serviceCategories = Object.values(servicesData.services);

  const blogArticles = blogData.blog_articles.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background border-b-2 border-black ">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center py-24 md:py-32 lg:py-40">
          <div className="inline-flex items-center gap-2 px-6 py-2 border-2 border-black rounded-full bg-primary text-primary-foreground shadow-brutal-sm font-bold uppercase tracking-tight text-sm mb-8">
            <Zap className="w-4 h-4" /> Standar Baru Event Organizer
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter max-w-5xl leading-[0.9] text-foreground">
            {hero_section.headline}
          </h1>

          <p className="mt-8 text-lg md:text-xl font-body max-w-2xl text-muted-foreground font-medium">
            {hero_section.subheadline}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="solid"
              className="w-full sm:w-auto text-lg h-16 px-8 rounded-2xl"
            >
              <Link to="/events">
                {hero_section.cta_primary.text}{" "}
                <ArrowRight className="ml-2 w-5 h-5 hidden sm:inline-block" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg h-16 px-8 rounded-2xl"
            >
              <Link to={hero_section.cta_secondary.action}>
                {hero_section.cta_secondary.text}
              </Link>
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
                ACARA <span className="text-accent">MENDATANG</span>
              </h2>
              <p className="text-muted-foreground font-body font-bold uppercase">
                Amankan tiket Anda sebelum hancur.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-xl font-bold uppercase"
            >
              <Link to="/events?status=upcoming">
                Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {upcomingEvents.map((item, index) => {
              const isHeroOnMobile = eventLayout === "hero-list" && index === 0;
              const isListOnMobile = eventLayout === "hero-list" && index > 0;
              // On desktop (md/lg), everything acts as a normal card, regardless of being hero-list.

              return (
                <div key={item.id} className="col-span-1">
                  <div
                    className={cn(
                      "group bg-card border-4 border-black rounded-2xl overflow-hidden shadow-brutal transition-all flex relative",
                      isListOnMobile
                        ? "flex-row h-32 md:flex-col md:h-full hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000]"
                        : "flex-col h-full hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000]",
                    )}
                  >
                    <div
                      className={cn(
                        "relative border-black overflow-hidden bg-muted shrink-0",
                        isListOnMobile
                          ? "w-32 border-r-4 md:w-full md:border-r-0 md:border-b-4 md:aspect-[4/3] lg:aspect-[3/2]"
                          : "w-full aspect-video md:aspect-[4/3] lg:aspect-[3/2] border-b-4",
                      )}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div
                        className={cn(
                          "absolute top-3 left-3 md:top-4 md:left-4 bg-secondary text-secondary-foreground font-display font-black text-[10px] md:text-xs uppercase px-2 py-1 md:px-3 md:py-1 border-2 border-black rounded-lg shadow-brutal-sm",
                          isListOnMobile && "hidden md:block",
                        )}
                      >
                        {item.category}
                      </div>
                      {item.ticketing.available && (
                        <div
                          className={cn(
                            "absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-primary-foreground font-body font-bold text-[10px] md:text-xs uppercase px-2 py-1 border-2 border-black rounded-lg",
                            isListOnMobile && "hidden md:block",
                          )}
                        >
                          Tersedia
                        </div>
                      )}
                    </div>
                    <div
                      className={cn(
                        "flex flex-col flex-1",
                        isListOnMobile ? "p-3 md:p-6" : "p-5 md:p-6",
                      )}
                    >
                      <h3
                        className={cn(
                          "font-display font-black uppercase tracking-tighter leading-tight line-clamp-2",
                          isListOnMobile
                            ? "text-lg md:text-2xl mb-1 md:mb-2"
                            : "text-2xl mb-2",
                        )}
                      >
                        <Link
                          to={item.slug}
                          className="hover:text-accent outline-none before:absolute before:inset-0"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <div
                        className={cn(
                          "flex flex-col sm:flex-row flex-wrap sm:items-center gap-2 md:gap-4 font-body text-xs md:text-sm font-bold text-muted-foreground mb-2",
                          isListOnMobile && "mb-0 md:mb-2 text-[10px]",
                        )}
                      >
                        <span
                          className={cn(
                            "flex items-center gap-1.5",
                            isListOnMobile && "hidden md:flex",
                          )}
                        >
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-foreground shrink-0" />{" "}
                          {item.date_readable}
                        </span>
                        <span className={cn("flex items-center gap-1.5")}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-foreground shrink-0" />{" "}
                          {item.location}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "font-body text-sm font-medium line-clamp-2 md:line-clamp-3 text-muted-foreground hidden md:block",
                          !isListOnMobile && "block",
                        )}
                      >
                        {item.excerpt}
                      </p>
                      <div
                        className={cn(
                          "mt-auto pt-4 hidden md:block",
                          !isListOnMobile && "block",
                        )}
                      >
                        <Button
                          asChild
                          size="default"
                          variant="outline"
                          className="w-full rounded-xl font-bold uppercase relative z-10 pointer-events-none"
                        >
                          <span>Lihat Detail</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 text-primary-foreground">
              MENGAPA{" "}
              <span className="text-card drop-shadow-[2px_2px_0_#000]">
                {BRAND.name}?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {value_propositions.map((vp) => {
              const Icon = IconMap[vp.icon] || Zap;
              return (
                <div
                  key={vp.id}
                  className="bg-card text-card-foreground border-4 border-black p-8 rounded-2xl shadow-brutal hover:-translate-y-2 transition-transform group flex flex-col items-start md:col-span-1"
                >
                  <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-6 shadow-brutal-sm group-hover:bg-secondary transition-colors group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="font-display font-black uppercase tracking-tight mb-3 text-card-foreground text-2xl">
                    {vp.title}
                  </h3>
                  <p className="font-body text-card-foreground/80 font-medium text-lg">
                    {vp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="w-full py-24 bg-card border-b-2 border-black overflow-hidden relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter">
                REKAM <span className="text-secondary">JEJAK</span>
              </h2>
              <p className="font-body text-muted-foreground font-medium mt-2">
                Daftar operasi yang telah sukses kami laksanakan.
              </p>
            </div>
            <Button
              variant="solid"
              asChild
              className="rounded-xl font-bold uppercase"
            >
              <Link to="/events?status=past">
                LIHAT SEMUA PORTOFOLIO <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((item) => (
              <div
                key={item.id}
                className="bg-background border-4 border-black rounded-2xl overflow-hidden shadow-brutal flex flex-col hover:-translate-y-2 transition-transform group"
              >
                <div className="aspect-video bg-muted border-b-4 border-black overflow-hidden relative shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-display font-black uppercase text-xl mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm font-bold text-secondary uppercase mb-4">
                    {item.category}
                  </p>
                  <p className="font-body text-xs font-bold text-muted-foreground uppercase flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />{" "}
                      {(item as any).attendance?.toLocaleString()} Hadir
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full py-24 bg-card text-card-foreground border-b-2 border-black relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter">
                LAYANAN{" "}
                <span className="text-primary drop-shadow-[1px_1px_0_#000]">
                  KAMI
                </span>
              </h2>
              <p className="font-body text-muted-foreground font-medium mt-2">
                Apapun peran lo, kami punya solusinya.
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="rounded-xl font-bold uppercase transition-all shadow-brutal-sm"
            >
              <Link to="/services">
                Lihat Semua Layanan <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.slice(0, 3).map((category) => (
              <div
                key={category.category_slug}
                className={
                  "bg-card text-foreground border-4 border-black rounded-2xl shadow-[6px_6px_0_0_var(--color-primary)] p-6 md:p-8"
                }
              >
                <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-2">
                  {category.category_name}
                </h3>
                <p className="font-body text-muted-foreground mb-6 font-medium">
                  {category.category_description}
                </p>
                <div className="space-y-4">
                  {category.items.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border-2 border-black rounded-xl hover:bg-muted transition-colors"
                    >
                      <Link
                        to={item.slug}
                        className="flex justify-between items-center group"
                      >
                        <div>
                          <h4 className="font-bold uppercase tracking-tight text-sm md:text-base group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.tagline}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / NEWS TEASER */}
      <section className="w-full py-24 bg-background border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
            <span className="text-accent">WAWASAN</span> LOKASI
          </h2>
          <p className="font-body text-muted-foreground font-medium mb-12">
            Berita, insight, dan tulisan keren dari {BRAND.name}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {blogArticles.map((blog) => (
              <Link
                key={blog.id}
                to={blog.slug}
                className="group bg-card border-4 border-black rounded-2xl overflow-hidden shadow-brutal flex flex-col hover:-translate-y-2 transition-transform h-full"
              >
                <div className="aspect-[3/2] bg-muted border-b-4 border-black overflow-hidden shrink-0">
                  <img
                    src={blog.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    alt="News"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-body font-bold bg-primary text-primary-foreground px-2 py-1 inline-block border-2 border-black rounded hover:brightness-110 mb-4 self-start">
                    {blog.category}
                  </div>
                  <h4 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h4>
                  <div className="text-xs text-muted-foreground font-bold mb-3">
                    {blog.date_readable}
                  </div>
                  <p className="font-body text-muted-foreground text-sm line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto border-t-2 border-black pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground">
                      Oleh {blog.author}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">
                      {blog.read_time}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Button
            asChild
            variant="solid"
            size="lg"
            className="mt-12 rounded-xl font-bold uppercase transition-all"
          >
            <Link to="/blog">BUKA SEMUA WAWASAN</Link>
          </Button>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="w-full py-32 relative overflow-hidden bg-primary text-primary-foreground border-b-2 border-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6">
            {cta_banners.collaboration.title}
          </h2>
          <p className="text-xl font-body max-w-2xl mx-auto mb-10 font-medium opacity-90 text-inherit">
            {cta_banners.collaboration.description}
          </p>
          <Button
            asChild
            size="lg"
            variant="solid"
            className="rounded-2xl h-16 px-10 text-lg transition-transform hover:-translate-y-1"
          >
            <Link to={cta_banners.collaboration.button_action}>
              {cta_banners.collaboration.button_text}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
