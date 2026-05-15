import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CheckboxDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Checkbox
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard checkbox with a label."
        code={`import { Checkbox } from "@/components/ui/checkbox"\nimport { Label } from "@/components/ui/label"\n\nexport function CheckboxDemo() {\n  return (\n    <div className="flex items-center space-x-3">\n      <Checkbox id="terms" />\n      <Label htmlFor="terms">Accept terms and conditions</Label>\n    </div>\n  )\n}`}
        align="center"
      >
        <div className="flex items-center space-x-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="A checkbox in a disabled state."
        code={`import { Checkbox } from "@/components/ui/checkbox"\nimport { Label } from "@/components/ui/label"\n\nexport function CheckboxDisabled() {\n  return (\n    <div className="flex items-center space-x-3">\n      <Checkbox id="terms" disabled />\n      <Label htmlFor="terms">Accept terms and conditions</Label>\n    </div>\n  )\n}`}
        align="center"
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center space-x-3">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check" className="opacity-50">
              Disabled checkbox
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="disabled-checked" disabled checked />
            <Label htmlFor="disabled-checked" className="opacity-50">
              Disabled checked
            </Label>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
