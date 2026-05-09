import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComponentPreview } from "@/components/ui/component-preview";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ComboboxDoc() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Combobox
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Autocomplete input and command palette with a list of suggestions.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard combobox powered by Command."
        code={`import * as React from "react"\nimport { Check, ChevronsUpDown } from "lucide-react"\nimport { cn } from "@/lib/utils"\nimport { Button } from "@/components/ui/button"\nimport { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"\nimport { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"\n\nconst frameworks = [\n  {\n    value: "next.js",\n    label: "Next.js",\n  },\n  // ...\n]\n\nexport function ComboboxDemo() {\n  const [open, setOpen] = React.useState(false)\n  const [value, setValue] = React.useState("")\n\n  return (\n    <Popover open={open} onOpenChange={setOpen}>\n      <PopoverTrigger asChild>\n        <Button\n          variant="outline"\n          role="combobox"\n          aria-expanded={open}\n          className="w-[200px] justify-between"\n        >\n          {value\n            ? frameworks.find((framework) => framework.value === value)?.label\n            : "Select framework..."}\n          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />\n        </Button>\n      </PopoverTrigger>\n      <PopoverContent className="w-[200px] p-0">\n        <Command>\n          <CommandInput placeholder="Search framework..." />\n          <CommandList>\n            <CommandEmpty>No framework found.</CommandEmpty>\n            <CommandGroup>\n              {frameworks.map((framework) => (\n                <CommandItem\n                  key={framework.value}\n                  value={framework.value}\n                  onSelect={(currentValue) => {\n                    setValue(currentValue === value ? "" : currentValue)\n                    setOpen(false)\n                  }}\n                >\n                  <Check\n                    className={cn(\n                      "mr-2 h-4 w-4",\n                      value === framework.value ? "opacity-100" : "opacity-0"\n                    )}\n                  />\n                  {framework.label}\n                </CommandItem>\n              ))}\n            </CommandGroup>\n          </CommandList>\n        </Command>\n      </PopoverContent>\n    </Popover>\n  )\n}`}
        align="center"
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[280px] justify-between px-4"
            >
              <span className="flex-1 truncate text-left">
                {value
                  ? frameworks.find((framework) => framework.value === value)?.label
                  : "Select framework..."}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[280px] p-0 border-2 border-black rounded-xl shadow-brutal-sm font-body">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </ComponentPreview>
    </div>
  );
}
