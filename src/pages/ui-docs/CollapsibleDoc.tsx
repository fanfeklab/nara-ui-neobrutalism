import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CollapsibleDoc() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Collapsible
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard collapsible panel."
        code={`import * as React from "react"\nimport { ChevronsUpDown } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"\n\nexport function CollapsibleDemo() {\n  const [isOpen, setIsOpen] = React.useState(false)\n\n  return (\n    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">\n      <div className="flex items-center justify-between space-x-4 px-4">\n        <h4 className="text-sm font-semibold">\n          @peduarte starred 3 repositories\n        </h4>\n        <CollapsibleTrigger asChild>\n          <Button variant="ghost" size="sm" className="w-9 p-0">\n            <ChevronsUpDown className="h-4 w-4" />\n            <span className="sr-only">Toggle</span>\n          </Button>\n        </CollapsibleTrigger>\n      </div>\n      <div className="rounded-md border px-4 py-3 font-mono text-sm">\n        @radix-ui/primitives\n      </div>\n      <CollapsibleContent className="space-y-2">\n        <div className="rounded-md border px-4 py-3 font-mono text-sm">\n          @radix-ui/colors\n        </div>\n        <div className="rounded-md border px-4 py-3 font-mono text-sm">\n          @stitches/react\n        </div>\n      </CollapsibleContent>\n    </Collapsible>\n  )\n}`}
        align="center"
      >
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2 bg-popover p-4 border-2 border-black rounded-xl shadow-brutal-sm text-left font-body"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-bold uppercase tracking-tight font-display">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-lg border-2 border-black font-mono px-4 py-3 text-sm font-bold bg-background">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-lg border-2 border-black font-mono px-4 py-3 text-sm font-bold bg-background">
              @radix-ui/colors
            </div>
            <div className="rounded-lg border-2 border-black font-mono px-4 py-3 text-sm font-bold bg-background">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentPreview>
    </div>
  );
}
