import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Search, Mail } from "lucide-react";
import { BRAND } from "@/config/brand.config";

export default function InputDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Input
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard input field."
        code={`import { Input } from "@/components/ui/input"\n\nexport function InputDefault() {\n  return <Input type="email" placeholder="Email" />\n}`}
      >
        <div className="w-full max-w-sm">
          <Input type="email" placeholder="Email" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Input in disabled state."
        code={`import { Input } from "@/components/ui/input"\n\nexport function InputDisabled() {\n  return <Input disabled type="email" placeholder="Email" />\n}`}
      >
        <div className="w-full max-w-sm">
          <Input disabled type="email" placeholder="Email" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        description="Input field with a label."
        code={`import { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\n\nexport function InputWithLabel() {\n  return (\n    <div className="grid w-full max-w-sm items-center gap-1.5">\n      <Label htmlFor="email">Email</Label>\n      <Input type="email" id="email" placeholder="Email" />\n    </div>\n  )\n}`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="email@naraevents.com" />
        </div>
      </ComponentPreview>
      
      <ComponentPreview
        title="File"
        description="Input field for uploading files."
        code={`import { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\n\nexport function InputFile() {\n  return (\n    <div className="grid w-full max-w-sm items-center gap-1.5">\n      <Label htmlFor="picture">Picture</Label>\n      <Input id="picture" type="file" />\n    </div>\n  )\n}`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </ComponentPreview>
    </div>
  );
}
