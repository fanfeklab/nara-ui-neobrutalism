import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function ToggleDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Toggle & Toggle Group
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A two-state button that can be either on or off, and grouped together.
        </p>
      </div>

      <ComponentPreview
        title="Toggle"
        description="A single toggle button."
        code={`import { Bold } from "lucide-react"\nimport { Toggle } from "@/components/ui/toggle"\n\nexport function ToggleDemo() {\n  return (\n    <Toggle aria-label="Toggle italic">\n      <Bold className="h-4 w-4" />\n    </Toggle>\n  )\n}`}
        align="center"
      >
        <Toggle aria-label="Toggle italic">
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentPreview>

      <ComponentPreview
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled independently or mutually exclusively."
        code={`import { Bold, Italic, Underline } from "lucide-react"\nimport { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"\n\nexport function ToggleGroupDemo() {\n  return (\n    <ToggleGroup>\n      <ToggleGroupItem value="bold" aria-label="Toggle bold">\n        <Bold className="h-4 w-4" />\n      </ToggleGroupItem>\n      <ToggleGroupItem value="italic" aria-label="Toggle italic">\n        <Italic className="h-4 w-4" />\n      </ToggleGroupItem>\n      <ToggleGroupItem value="underline" aria-label="Toggle underline">\n        <Underline className="h-4 w-4" />\n      </ToggleGroupItem>\n    </ToggleGroup>\n  )\n}`}
        align="center"
      >
        <ToggleGroup spacing={2}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>
    </div>
  );
}
