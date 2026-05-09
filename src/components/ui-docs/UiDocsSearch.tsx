import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface UiDocsSearchProps {
  navGroups: {
    title: string;
    links: { name: string; href: string }[];
  }[];
}

export function UiDocsSearch({ navGroups }: UiDocsSearchProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-between rounded-xl border-2 border-black bg-card px-3 py-2 text-sm text-muted-foreground shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none w-full max-w-sm mb-6"
      >
        <span className="inline-flex items-center gap-2 font-bold font-body">
          <SearchIcon className="h-4 w-4" />
          Search docs...
        </span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border-2 border-black bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navGroups.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.links.map((link) => (
                <CommandItem
                  key={link.href}
                  value={link.name}
                  onSelect={() => {
                    runCommand(() => navigate(link.href));
                  }}
                >
                  <span className="font-bold">{link.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
