import { useState } from "react";
import { Wrench, X, Beaker, SunMoon, Navigation, LayoutTemplate } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";
import { useConfigStore } from "@/store/configStore";

export function DxTool() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { eventLayout, setEventLayout } = useConfigStore();

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 bg-card border-2 border-black rounded-2xl shadow-brutal p-4 flex flex-col gap-4 font-body text-black  dark:text-white dark:border-black">
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <div className="flex items-center gap-2 font-display font-bold uppercase tracking-tight">
              <Wrench className="w-5 h-5 text-accent" />
              <span>DX Panel</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-muted p-1 border-2 border-transparent hover:border-black rounded-xl">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-sm mt-2">
            <div className="space-y-2">
              <h4 className="font-bold uppercase text-xs flex items-center gap-1">
                <Navigation className="w-4 h-4" /> Navigation
              </h4>
              <div className="flex flex-col gap-2">
                <Link to="/" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-primary text-black font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-105 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]">
                  Public Page
                </Link>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-primary text-black font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-105 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]">
                  Dashboard
                </Link>
                <Link to="/ui-docs" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-primary text-black font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-105 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]">
                  UI Docs
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold uppercase text-xs flex items-center gap-1">
                <SunMoon className="w-4 h-4" /> Theme
              </h4>
              <div className="flex gap-2">
                <button 
                  onClick={() => setTheme("theme-light")}
                  className="rounded-xl px-2 py-1 border-2 border-black bg-primary text-black font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-105 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]"
                >
                  Light
                </button>
                <button 
                  onClick={() => setTheme("dark")}
                  className="rounded-xl px-2 py-1 border-2 border-black bg-black text-primary font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-110 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]"
                >
                  Dark
                </button>
                <button 
                  onClick={() => setTheme("system")}
                  className="rounded-xl px-2 py-1 border-2 border-black bg-card text-card-foreground font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-95 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px] dark:bg-gray-800 dark:text-white"
                >
                  Sys
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold uppercase text-xs flex items-center gap-1">
                <LayoutTemplate className="w-4 h-4" /> Layout Settings
              </h4>
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold font-mono flex justify-between items-center transition-colors">
                    Events Section
                    <select 
                       value={eventLayout}
                       onChange={(e) => setEventLayout(e.target.value as any)}
                       className="bg-background text-foreground border-2 border-black rounded shadow-brutal-sm outline-none font-body font-bold text-[10px] uppercase tracking-tight cursor-pointer px-2 py-1 max-w-[120px]"
                    >
                      <option value="hero-list">Hero & List</option>
                      <option value="grid">Grid Only</option>
                    </select>
                 </label>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold uppercase text-xs flex items-center gap-1">
                <Beaker className="w-4 h-4" /> Debug Action
              </h4>
              <button className="rounded-xl w-full text-left px-3 py-2 border-2 border-black bg-secondary text-white font-bold uppercase text-xs shadow-brutal-sm transition-colors hover:brightness-110 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]">
                Simulate Auth Role (soon)
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-primary text-black border-2 border-black shadow-brutal flex items-center justify-center transition-colors hover:brightness-105 active:shadow-brutal-active active:translate-x-[6px] active:translate-y-[6px]"
        title="Toggle DX Tool"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Wrench className="w-6 h-6" />}
      </button>
    </>
  );
}
