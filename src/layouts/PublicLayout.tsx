import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Globe, ChevronDown, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

import navigationData from "@/data/navigation.json";
import companyData from "@/data/company.json";

const IconMap: Record<string, React.ElementType> = {
  "instagram": Instagram,
  "facebook": Facebook,
  "youtube": Youtube,
  "linkedin": Linkedin,
  "twitter": Twitter,
  "tiktok": Instagram, // using instagram as fallback for tiktok
};

export function PublicLayout() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const { main_navigation: main_nav, footer_navigation: footer_nav, cta_button } = navigationData;
  const { brand, footer } = companyData;
  const contact = footer.company_info;

  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-foreground">
      {/* Public Navbar */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-card">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter hover:skew-x-[-10deg] hover:scale-105 transition-transform origin-left cursor-pointer inline-block duration-200 text-foreground dark:text-primary">
              {brand.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-bold uppercase tracking-tight text-sm">
            <Link to="/" className="hover:text-primary hover:underline underline-offset-4 decoration-2">Beranda</Link>
            
            {main_nav.map((item) => (
              item.children ? (
                <div 
                  key={item.label} 
                  className="relative group/dropdown"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center hover:text-primary">
                    {item.label} <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className={cn(
                    "absolute top-full left-0 mt-0 pt-4 w-56 transition-all duration-200 origin-top-left",
                    openDropdown === item.label ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  )}>
                    <div className="bg-card border-2 border-black shadow-brutal flex flex-col p-2 rounded-xl">
                      {item.children.map((child) => (
                        <Link 
                          key={child.label} 
                          to={child.url} 
                          className="px-4 py-2 hover:bg-primary hover:text-black rounded-lg transition-colors font-bold whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} to={item.url} className="hover:text-primary hover:underline underline-offset-4 decoration-2">{item.label}</Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden lg:flex rounded-xl font-bold h-10 md:h-12 border-2 border-black dark:bg-card">
              <Link to="/login">Portal Klien</Link>
            </Button>
            <Button asChild variant="solid" className="hidden md:flex rounded-xl font-bold h-10 md:h-12">
              <Link to={cta_button.url}>{cta_button.label} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 bg-primary text-black border-2 border-black rounded-xl shadow-brutal-sm h-10 w-10 md:h-12 md:w-12 flex items-center justify-center"
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
            <span className="font-display font-black text-2xl uppercase tracking-tighter text-foreground dark:text-primary">
              {brand.name}
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
            
            {main_nav.map((item) => (
              item.children ? (
                <div key={item.label} className="flex flex-col gap-3">
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-black">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.url} className="hover:text-primary hover:translate-x-1 transition-transform">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} to={item.url} className="pb-2 border-b-2 border-muted hover:text-primary">{item.label}</Link>
              )
            ))}
          </div>

          <div className="mt-auto pt-8 border-t-2 border-black flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full justify-center rounded-xl h-12">
              <Link to="/login">Login Portal</Link>
            </Button>
            <Button asChild variant="solid" className="w-full justify-center rounded-xl h-12 text-lg">
              <Link to={cta_button.url}>{cta_button.label.toUpperCase()} <ArrowRight className="w-5 h-5 ml-2" /></Link>
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
      <footer className="border-t-2 border-black bg-card  mt-auto w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <span className="font-display font-black text-3xl uppercase tracking-tighter inline-block text-foreground dark:text-primary">
                {brand.name}
              </span>
              <p className="font-body text-muted-foreground font-medium">
                {brand.tagline}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">Hubungi Kami</h4>
              <ul className="space-y-4 font-body font-bold text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>{contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>{contact.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>{contact.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0" />
                  <span>{contact.website}</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 col-span-1 md:col-span-2 lg:col-span-1">
              {footer_nav.map(nav => (
                <div key={nav.group} className="space-y-6">
                  <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">{nav.group}</h4>
                  <ul className="space-y-3 font-body font-bold text-sm uppercase tracking-tight">
                    {nav.links.map(link => (
                      <li key={link.label}><Link to={link.url} className="hover:text-primary transition-colors">{link.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="space-y-6 md:col-span-2 lg:col-span-1">
              <h4 className="font-display font-black text-xl uppercase tracking-tighter border-b-2 border-black pb-2 inline-block">Sosial Media</h4>
              <p className="font-body text-sm font-bold text-muted-foreground mb-4">Ikuti kami untuk update terbaru.</p>
              <div className="flex flex-wrap items-center gap-3">
                {Object.entries(footer.social_media).map(([platform, url]) => {
                  const Icon = IconMap[platform];
                  if (!Icon) return null;
                  return (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card text-foreground flex items-center justify-center rounded-xl border-2 border-black hover:-translate-y-1 hover:bg-primary hover:text-black transition-all shadow-brutal-sm group">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-tight font-body">
              {footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-tight font-body">
              {footer.legal.map(link => (
                <Link key={link.text} to={link.url} className="hover:text-primary transition-colors">{link.text}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
