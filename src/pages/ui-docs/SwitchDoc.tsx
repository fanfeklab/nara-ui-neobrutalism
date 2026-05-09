import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Switch
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between max-w-sm rounded-xl border-2 border-black p-4 shadow-brutal-sm bg-background">
            <div className="space-y-0.5">
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
              <p className="font-body text-xs text-muted-foreground">Disables all wireless connections.</p>
            </div>
            <Switch id="airplane-mode" />
          </div>
        </div>
      </div>
    </div>
  );
}
