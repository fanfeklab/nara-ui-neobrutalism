import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  X, Sun, Moon, LayoutGrid, CalendarDays, 
  CircleDollarSign, Users, Store, Gift, ShieldCheck, 
  Settings, ChevronDown, PanelLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { BRAND } from "@/config/brand.config";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-background text-foreground text-white border-r-2 border-black transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col ${
          isSidebarOpen ? "translate-x-0 shadow-brutal-lg" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center px-4 border-b-2 border-black/20 lg:border-transparent shrink-0 mt-2 lg:mt-0">
          <div className="w-8 h-8 rounded-lg bg-accent border-2 border-black flex items-center justify-center font-display font-bold text-black shadow-brutal-sm mr-3">
            N
          </div>
          <span className="font-display font-black text-xl tracking-tight text-white">{BRAND.name}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto lg:hidden text-white hover:bg-white/10 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {/* Section: UTAMA */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-bold font-mono tracking-wider text-slate-400">UTAMA</h3>
            <div className="space-y-1">
              <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2 bg-white/10 rounded-xl text-white font-bold transition-colors">
                <LayoutGrid className="w-4 h-4" />
                <span className="font-mono text-sm">Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Section: MODUL INTI */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-bold font-mono tracking-wider text-slate-400">MODUL INTI</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white transition-colors">
                <div className="flex items-center gap-3 font-bold">
                  <CalendarDays className="w-4 h-4" />
                  <span className="font-mono text-sm">Operasional</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pl-10 pr-3 py-1 space-y-2">
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Database Event</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Jadwal</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Logistik</Link>
              </div>

              <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white transition-colors mt-1">
                <div className="flex items-center gap-3 font-bold">
                  <CircleDollarSign className="w-4 h-4" />
                  <span className="font-mono text-sm">Keuangan &amp; Akuntansi</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pl-10 pr-3 py-1 space-y-2">
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Invoices</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Pembayaran</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Laporan Keuangan</Link>
              </div>

              <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white transition-colors mt-1">
                <div className="flex items-center gap-3 font-bold">
                  <Users className="w-4 h-4" />
                  <span className="font-mono text-sm">SDM &amp; HR</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pl-10 pr-3 py-1 space-y-2">
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Direktori Staf</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Payroll</Link>
                <Link to="#" className="block text-slate-400 hover:text-white font-mono text-sm py-1 transition-colors">Rekrutmen</Link>
              </div>
            </div>
          </div>

          {/* Section: RELASI EKSTERNAL */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-bold font-mono tracking-wider text-slate-400">RELASI EKSTERNAL</h3>
            <div className="space-y-1">
              <Link to="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white font-bold transition-colors">
                <Store className="w-4 h-4" />
                <span className="font-mono text-sm">Vendor &amp; Mitra</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white font-bold transition-colors">
                <Gift className="w-4 h-4" />
                <span className="font-mono text-sm">Sponsorship</span>
              </Link>
            </div>
          </div>

          {/* Section: SISTEM */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-bold font-mono tracking-wider text-slate-400">SISTEM</h3>
            <div className="space-y-1">
              <Link to="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white font-bold transition-colors">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-sm">Legal &amp; Kontrak</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white font-bold transition-colors">
                <Settings className="w-4 h-4" />
                <span className="font-mono text-sm">Pengaturan Sistem</span>
              </Link>
            </div>
          </div>

        </div>

        <div className="p-4 border-t-2 border-black/20 shrink-0">
          <p className="text-xs font-mono text-slate-500">Laravel 13 Edition</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-card border-b-2 border-black px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-xl hover:bg-muted" 
              onClick={() => setIsSidebarOpen(true)}
            >
              <PanelLeft className="w-5 h-5" />
            </Button>
            <span className="font-display font-black text-xl tracking-tight hidden sm:block">{BRAND.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl hover:bg-muted">
              {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            
            <div className="flex items-center gap-3 pl-4 border-l-2 border-black">
              <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-primary shadow-brutal-sm">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${BRAND.founder.name}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block leading-tight">
                <p className="text-sm font-bold font-mono">{BRAND.founder.name}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase">CEO</p>
              </div>
            </div>
          </div>
        </header>

        {/* Yellow Banner */}
        <div className="bg-warning text-black border-b-2 border-black px-4 py-2 text-center shrink-0">
          <p className="font-mono font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
            Sandbox Mode &mdash; Data ini tidak akan mempengaruhi production
          </p>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
