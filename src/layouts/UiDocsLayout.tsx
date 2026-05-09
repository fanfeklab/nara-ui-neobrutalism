import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UiDocsSearch } from "@/components/ui-docs/UiDocsSearch";
import { PageTransition } from "@/components/layout/PageTransition";

const navGroups = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/ui-docs" },
      { name: "Decorations", href: "/ui-docs/decorations" },
    ],
  },
  {
    title: "Atoms",
    links: [
      { name: "Typography", href: "/ui-docs/typography" },
      { name: "Buttons", href: "/ui-docs/buttons" },
      { name: "Combobox", href: "/ui-docs/combobox" },
      { name: "Badges", href: "/ui-docs/badges" },
      { name: "Avatars", href: "/ui-docs/avatars" },
      { name: "Input", href: "/ui-docs/inputs" },
      { name: "Label", href: "/ui-docs/labels" },
      { name: "Checkbox", href: "/ui-docs/checkbox" },
      { name: "Switch", href: "/ui-docs/switch" },
      { name: "Slider", href: "/ui-docs/slider" },
      { name: "Progress", href: "/ui-docs/progress" },
      { name: "Textarea", href: "/ui-docs/textarea" },
      { name: "Radio", href: "/ui-docs/radio-group" },
      { name: "Toggle", href: "/ui-docs/toggle" },
      { name: "Aspect Ratio", href: "/ui-docs/aspect-ratio" },
    ],
  },
  {
    title: "Molecules",
    links: [
      { name: "Alert", href: "/ui-docs/alert" },
      { name: "Breadcrumb", href: "/ui-docs/breadcrumb" },
      { name: "Card", href: "/ui-docs/cards" },
      { name: "Calendar", href: "/ui-docs/calendar" },
      { name: "Form", href: "/ui-docs/form" },
      { name: "Collapsible", href: "/ui-docs/collapsible" },
      { name: "Date Picker", href: "/ui-docs/date-picker" },
      { name: "Table", href: "/ui-docs/table" },
      { name: "Data Table", href: "/ui-docs/data-table" },
      { name: "Chart", href: "/ui-docs/chart" },
      { name: "Stepper", href: "/ui-docs/stepper" },
      { name: "Tabs", href: "/ui-docs/tabs" },
      { name: "Hover Card", href: "/ui-docs/hover-card" },
      { name: "Popover", href: "/ui-docs/popover" },
      { name: "Select", href: "/ui-docs/select" },
      { name: "Scroll Area", href: "/ui-docs/scroll-area" },
      { name: "Separator", href: "/ui-docs/separator" },
      { name: "Skeleton", href: "/ui-docs/skeleton" },
      { name: "Tooltip", href: "/ui-docs/tooltip" },
    ],
  },
  {
    title: "Organisms",
    links: [
      { name: "Accordion", href: "/ui-docs/accordion" },
      { name: "Carousel", href: "/ui-docs/carousel" },
      { name: "Drawer", href: "/ui-docs/drawer" },
      { name: "Alert Dialog", href: "/ui-docs/alert-dialog" },
      { name: "Context Menu", href: "/ui-docs/context-menu" },
      { name: "Dialog", href: "/ui-docs/dialog" },
      { name: "File Upload", href: "/ui-docs/file-upload" },
      { name: "Input OTP", href: "/ui-docs/input-otp" },
      { name: "Command", href: "/ui-docs/command" },
      { name: "Pagination", href: "/ui-docs/pagination" },
      { name: "Navigation Menu", href: "/ui-docs/navigation-menu" },
      { name: "Sortable List", href: "/ui-docs/sortable-list" },
      { name: "Menubar", href: "/ui-docs/menubar" },
      { name: "Resizable", href: "/ui-docs/resizable" },
      { name: "Sheet", href: "/ui-docs/sheet" },
      { name: "Sonner", href: "/ui-docs/sonner" },
    ],
  },
];

export default function UiDocsLayout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bg-grid text-foreground flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-2 border-border bg-card z-20">
        <h1 className="font-display font-black text-xl uppercase tracking-tighter">NARA UI Kit</h1>
        <Button variant="outline" size="sm" onClick={() => setSidebarOpen(true)}>
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
      <aside className={cn(
        "fixed inset-y-0 left-0 w-64 bg-card border-r-2 border-border z-40 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:w-64 shrink-0 flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b-2 border-border flex justify-between items-center bg-primary text-primary-foreground">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-tighter">NARA EVENTS</h1>
            <p className="font-body text-xs font-bold uppercase">Neo-Brutalism UI</p>
          </div>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <UiDocsSearch navGroups={navGroups} />
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold uppercase tracking-tight mb-3 text-muted-foreground">{group.title}</h4>
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
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 border-t-2 border-border bg-muted text-center font-body text-xs">
          <Link to="/" className="hover:underline font-bold text-foreground">← Back to App</Link>
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
