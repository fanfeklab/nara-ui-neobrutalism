import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CommandDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Command
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Fast, composable, unstyled command menu for React.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard command menu."
        code={`import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"\n\nexport function CommandDemo() {\n  return (\n    <Command className="rounded-xl border-2 border-black shadow-brutal-sm">\n      <CommandInput placeholder="Type a command or search..." />\n      <CommandList>\n        <CommandEmpty>No results found.</CommandEmpty>\n        <CommandGroup heading="Suggestions">\n          <CommandItem>Calendar</CommandItem>\n          <CommandItem>Search Emoji</CommandItem>\n          <CommandItem>Calculator</CommandItem>\n        </CommandGroup>\n      </CommandList>\n    </Command>\n  )\n}`}
        align="center"
      >
        <div className="w-full max-w-sm border-2 border-black rounded-xl shadow-brutal overflow-hidden">
          <Command>
            <CommandInput placeholder="Type a command or search..." className="font-body" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </ComponentPreview>
    </div>
  );
}
