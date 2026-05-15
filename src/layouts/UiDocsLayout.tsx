import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UiDocsSearch } from "@/components/ui-docs/UiDocsSearch";
import { PageTransition } from "@/components/layout/PageTransition";
import { docsNavGroups } from "@/config/docs.config";
import { BRAND } from "@/config/brand.config";

export default function UiDocsLayout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bg-grid text-foreground flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-2 border-border bg-card z-20">
        <h1 className="font-display font-black text-xl uppercase tracking-tighter">
          {BRAND.name} UI Kit
        </h1>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-card border-r-2 border-border z-40 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:w-64 shrink-0 flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 border-b-2 border-border flex justify-between items-center bg-primary text-primary-foreground">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-tighter">
              {BRAND.name}
            </h1>
            <p className="font-body text-xs font-bold uppercase">
              Neo-Brutalism UI
            </p>
          </div>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <UiDocsSearch navGroups={docsNavGroups} />
          {docsNavGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold uppercase tracking-tight mb-3 text-muted-foreground">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "block px-3 py-2 -mx-3 rounded-lg font-body text-sm font-bold transition-all",
                          isActive
                            ? "bg-foreground text-background"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 border-t-2 border-border bg-muted text-center font-body text-xs">
          <Link to="/" className="hover:underline font-bold text-foreground">
            ← Back to App
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 md:h-screen md:overflow-y-auto">
        <div className="p-6 md:p-12 max-w-5xl mx-auto pb-32">
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </div>
      </main>
    </div>
  );
}
