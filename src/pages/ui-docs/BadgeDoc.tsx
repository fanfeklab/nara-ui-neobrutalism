import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Check } from "lucide-react";

export default function BadgeDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Badges
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Small indicators, labels, or tags.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="Different colors based on the context."
        code={`import { Badge } from "@/components/ui/badge"\n\nexport function BadgeVariants() {\n  return (\n    <div className="flex flex-wrap gap-4">\n      <Badge variant="default">Default</Badge>\n      <Badge variant="secondary">Secondary</Badge>\n      <Badge variant="destructive">Destructive</Badge>\n      <Badge variant="outline">Outline</Badge>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icon"
        description="Badges can contain icons for added meaning."
        code={`import { Badge } from "@/components/ui/badge"\nimport { Check } from "lucide-react"\n\nexport function BadgeWithIcon() {\n  return (\n    <Badge variant="default">\n      <Check className="mr-1 h-3 w-3" />\n      Completed\n    </Badge>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Badge variant="default">
            <Check className="mr-1 h-3 w-3" />
            Completed
          </Badge>
          <Badge variant="secondary">
            v2.3.0
          </Badge>
        </div>
      </ComponentPreview>
    </div>
  );
}
