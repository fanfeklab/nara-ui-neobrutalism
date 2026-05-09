import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Checkbox
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check" className="opacity-50">Disabled checkbox</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="disabled-checked" disabled checked />
            <Label htmlFor="disabled-checked" className="opacity-50">Disabled checked</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
