import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function SliderDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Slider
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard single-value slider."
        code={`import { Slider } from "@/components/ui/slider"\n\nexport function SliderDemo() {\n  return (\n    <Slider defaultValue={[50]} max={100} step={1} />\n  )\n}`}
      >
        <div className="w-full max-w-sm">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Double Range"
        description="A slider that accepts an array of values."
        code={`import { Slider } from "@/components/ui/slider"\n\nexport function SliderDoubleDemo() {\n  return (\n    <Slider defaultValue={[25, 75]} max={100} step={1} />\n  )\n}`}
      >
        <div className="w-full max-w-sm">
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      </ComponentPreview>
    </div>
  );
}
