import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function LabelDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Label
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard label used with form inputs."
        code={`import { Label } from "@/components/ui/label"\n\nexport function LabelDefault() {\n  return <Label htmlFor="email">Your email address</Label>\n}`}
      >
        <Label htmlFor="email">Your email address</Label>
      </ComponentPreview>
    </div>
  );
}
