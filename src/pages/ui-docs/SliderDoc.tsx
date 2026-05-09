import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function SliderDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Slider
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div className="flex flex-col gap-8 max-w-md">
          <div className="space-y-4">
            <Label>Volume</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-4">
            <Label>Double Range</Label>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
