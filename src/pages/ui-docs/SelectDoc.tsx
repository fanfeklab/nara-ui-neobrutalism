import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function SelectDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Select
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a list of options for the user to pick from—triggered by a
          button.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard select component."
        code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"\n\nexport function SelectDemo() {\n  return (\n    <Select>\n      <SelectTrigger className="w-[180px]">\n        <SelectValue placeholder="Theme" />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value="light">Light</SelectItem>\n        <SelectItem value="dark">Dark</SelectItem>\n        <SelectItem value="system">System</SelectItem>\n      </SelectContent>\n    </Select>\n  )\n}`}
        align="center"
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>
    </div>
  );
}
