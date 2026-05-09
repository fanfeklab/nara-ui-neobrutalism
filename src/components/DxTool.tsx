import { useState } from "react";
import { Wrench, X, Beaker, SunMoon, Navigation } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";

export function DxTool() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-black text-[#ccff00] border-2 border-black shadow-brutal flex items-center justify-center hover:-translate-y-[2px] transition-transform"
        title="Open DX Tool"
      >
        <Wrench className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white border-2 border-black rounded-2xl shadow-brutal p-4 flex flex-col gap-4 font-body text-black dark:bg-[#112240] dark:text-white dark:border-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-2">
        <div className="flex items-center gap-2 font-display font-bold uppercase tracking-tight">
          <Wrench className="w-5 h-5 text-[#ff5500]" />
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
            <Link to="/" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-[#ccff00] text-black font-bold uppercase text-xs hover:-translate-y-1 hover:shadow-brutal transition-transform shadow-brutal-sm">
              Public Page
            </Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-[#ccff00] text-black font-bold uppercase text-xs hover:-translate-y-1 hover:shadow-brutal transition-transform shadow-brutal-sm">
              Dashboard
            </Link>
            <Link to="/ui-docs" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-2 border-2 border-black bg-[#ccff00] text-black font-bold uppercase text-xs hover:-translate-y-1 hover:shadow-brutal transition-transform shadow-brutal-sm">
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
              className="rounded-xl px-2 py-1 border-2 border-black bg-[#ccff00] text-black font-bold uppercase text-xs hover:-translate-y-1 transition-transform shadow-brutal-sm hover:shadow-brutal"
            >
              Light
            </button>
            <button 
              onClick={() => setTheme("dark")}
              className="rounded-xl px-2 py-1 border-2 border-black bg-black text-[#ccff00] font-bold uppercase text-xs hover:-translate-y-1 transition-transform shadow-brutal-sm hover:shadow-brutal"
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme("system")}
              className="rounded-xl px-2 py-1 border-2 border-black bg-white text-black font-bold uppercase text-xs hover:-translate-y-1 transition-transform shadow-brutal-sm hover:shadow-brutal dark:bg-gray-800 dark:text-white"
            >
              Sys
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold uppercase text-xs flex items-center gap-1">
            <Beaker className="w-4 h-4" /> Debug Action
          </h4>
          <button className="rounded-xl w-full text-left px-3 py-2 border-2 border-black bg-[#8a2be2] text-white font-bold uppercase text-xs shadow-brutal-sm hover:shadow-brutal hover:bg-black hover:-translate-y-1 transition-all">
            Simulate Auth Role (soon)
          </button>
        </div>
      </div>
    </div>
  );
}
