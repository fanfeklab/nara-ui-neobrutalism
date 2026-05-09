import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function PublicLayout() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navGroups = [
    {
      title: "Events",
      links: [
        { name: "Acara Mendatang", to: "/events" },
        { name: "Kalender Acara", to: "/events?view=calendar" },
        { name: "Acara Berlalu (Portfolio)", to: "/portfolio" },
      ]
    },
    {
      title: "Perusahaan",
      links: [
        { name: "Tentang Kami", to: "/about" },
        { name: "Layanan Kami", to: "/services" },
        { name: "Klien & Mitra", to: "/clients" },
      ]
    },
    {
      title: "Wawasan",
      links: [
        { name: "Blog & Berita", to: "/blog" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-foreground">
      {/* Public Navbar */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-card">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2 group">
            {/* Animated Text Logo purely CSS */}
            <span className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter hover:skew-x-[-10deg] hover:scale-105 transition-transform origin-left cursor-pointer inline-block duration-200">
              NARA EVENTS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-bold uppercase tracking-tight text-sm">
            <Link to="/" className="hover:text-primary hover:underline underline-offset-4 decoration-2">Beranda</Link>
            
            {navGroups.map((group) => (
              <div 
                key={group.title} 
                className="relative group/dropdown"
                onMouseEnter={() => setOpenDropdown(group.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center hover:text-primary">
                  {group.title} <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {/* Dropdown Content */}
                <div className={cn(
                  "absolute top-full left-0 mt-0 pt-4 w-56 transition-all duration-200 origin-top-left",
                  openDropdown === group.title ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                )}>
                  <div className="bg-white dark:bg-card border-2 border-black shadow-brutal flex flex-col p-2 rounded-xl">
                    {group.links.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.to} 
                        className="px-4 py-2 hover:bg-[#ccff00] hover:text-black rounded-lg transition-colors font-bold whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden lg:flex rounded-xl font-bold h-10 md:h-12 border-2 border-black dark:bg-card">
              <Link to="/login">Portal Klien</Link>
            </Button>
            <Button asChild variant="solid" className="hidden md:flex rounded-xl font-bold h-10 md:h-12">
              <Link to="/events">Beli Tiket <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 bg-[#ccff00] text-black border-2 border-black rounded-xl shadow-brutal-sm h-10 w-10 md:h-12 md:w-12 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )} onClick={() => setMobileMenuOpen(false)}>
        {/* Drawer */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l-2 border-black p-6 overflow-y-auto transition-transform duration-300 flex flex-col shadow-brutal",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-black text-2xl uppercase tracking-tighter">
              MENU
            </span>
            <button 
              className="p-2 bg-muted text-foreground border-2 border-black rounded-xl shadow-brutal-sm hover:bg-[#ef4444] hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 font-display font-bold uppercase tracking-tight text-lg mb-8">
            <Link to="/" className="pb-2 border-b-2 border-muted hover:text-primary">Beranda</Link>
            
            {navGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span className="text-muted-foreground text-sm">{group.title}</span>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-black">
                  {group.links.map((link) => (
                    <Link key={link.name} to={link.to} className="hover:text-primary hover:translate-x-1 transition-transform">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t-2 border-black flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full justify-center rounded-xl h-12">
              <Link to="/login">Login Portal</Link>
            </Button>
            <Button asChild variant="solid" className="w-full justify-center rounded-xl h-12 text-lg">
              <Link to="/events">BELI TIKET <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full items-center">
        <PageTransition key={pathname} className="w-full flex-1 flex flex-col">
          <Outlet />
        </PageTransition>
      </main>

      {/* Public Footer */}
      <footer className="border-t-2 border-black bg-white dark:bg-[#0a192f] mt-auto w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <span className="font-display font-black text-3xl uppercase tracking-tighter inline-block">
                NARA EVENTS
              </span>
              <p className="font-body text-muted-foreground font-medium">
                Kreator eksekusi acara terdepan. Mengombinasikan inovasi agresif dengan presisi teknis untuk pengalaman yang tak tertandingi.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">Hubungi Kami</h4>
              <ul className="space-y-4 font-body font-bold text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>PT. Nara Sukses Bersama.<br/>Kota Malang, Jawa Timur,<br/>Indonesia.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+62 857 3100 0806</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>hello@naraevents.id</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0" />
                  <span>www.naraevents.id</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">Eksplorasi</h4>
              <ul className="space-y-3 font-body font-bold text-sm uppercase tracking-tight">
                <li><Link to="/events" className="hover:text-primary transition-colors">Acara Mendatang</Link></li>
                <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portofolio Kinerja</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Layanan Kami</Link></li>
                <li><Link to="/clients" className="hover:text-primary transition-colors">Klien & Mitra</Link></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">Sosial Media</h4>
              <p className="font-body text-sm font-bold text-muted-foreground mb-4">@naraevents.id</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-12 h-12 bg-[#E1306C] text-white flex items-center justify-center rounded-xl border-2 border-black hover:-translate-y-1 transition-all shadow-brutal-sm group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#1877F2] text-white flex items-center justify-center rounded-xl border-2 border-black hover:-translate-y-1 transition-all shadow-brutal-sm group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#FF0000] text-white flex items-center justify-center rounded-xl border-2 border-black hover:-translate-y-1 transition-all shadow-brutal-sm group">
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl border-2 border-black hover:bg-[#25F4EE] hover:text-black hover:-translate-y-1 transition-all shadow-brutal-sm group">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-tight font-body">
              &copy; {new Date().getFullYear()} PT. NARA SUKSES BERSAMA. HAK CIPTA DILINDUNGI.
            </p>
            <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-tight font-body">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privasi</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
