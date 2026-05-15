import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function RadioGroupDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Radio Group
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A set of checkable buttons—known as radio buttons—where no more than
          one of the buttons can be checked at a time.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A list of radio buttons."
        code={`import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\nexport function RadioGroupDemo() {\n  return (\n    <RadioGroup defaultValue="comfortable">\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="default" id="r1" />\n        <Label htmlFor="r1">Default</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="comfortable" id="r2" />\n        <Label htmlFor="r2">Comfortable</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem value="compact" id="r3" />\n        <Label htmlFor="r3">Compact</Label>\n      </div>\n    </RadioGroup>\n  )\n}`}
        align="center"
      >
        <RadioGroup
          defaultValue="comfortable"
          className="flex flex-col gap-4 text-left"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>
    </div>
  );
}
