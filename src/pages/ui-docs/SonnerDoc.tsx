import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function SonnerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Sonner (Toast)
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          An opinionated toast component for React, styled with Neo-Brutalism.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A simple toast."
        code={`import { toast } from "sonner"\nimport { Button } from "@/components/ui/button"\n\nexport function SonnerDemo() {\n  return (\n    <Button\n      variant="outline"\n      onClick={() =>\n        toast("Event has been created", {\n          description: "Sunday, December 03, 2026 at 9:00 AM",\n          action: {\n            label: "Undo",\n            onClick: () => console.log("Undo"),\n          },\n        })\n      }\n    >\n      Show Toast\n    </Button>\n  )\n}`}
        align="center"
      >
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2026 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo clicked"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </ComponentPreview>
    </div>
  );
}
