import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function SwitchDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Switch
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <ComponentPreview
        title="Theme Switch (Day & Night)"
        description="A specialized variant built for toggling between light and dark modes with Neobrutalism flair."
        code={`import { Switch } from "@/components/ui/switch"\nimport { Label } from "@/components/ui/label"\n\nexport function ThemeSwitchDemo() {\n  return (\n    <div className="flex items-center space-x-4">\n      <Label htmlFor="theme-mode">Theme</Label>\n      <Switch id="theme-mode" variant="theme" />\n    </div>\n  )\n}`}
      >
        <div className="flex items-center space-x-4 p-4 border-2 border-black shadow-brutal-sm rounded-xl bg-card">
          <Label
            htmlFor="theme-mode"
            className="font-display font-bold text-lg"
          >
            Theme
          </Label>
          <Switch id="theme-mode" variant="theme" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Default"
        description="A standard switch toggler."
        code={`import { Switch } from "@/components/ui/switch"\nimport { Label } from "@/components/ui/label"\n\nexport function SwitchDemo() {\n  return (\n    <div className="flex items-center space-x-2">\n      <Switch id="airplane-mode" />\n      <Label htmlFor="airplane-mode">Airplane Mode</Label>\n    </div>\n  )\n}`}
      >
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Description"
        description="A switch component placed within a settings card style."
        code={`import { Switch } from "@/components/ui/switch"\nimport { Label } from "@/components/ui/label"\n\nexport function SwitchCardDemo() {\n  return (\n    <div className="flex items-center justify-between w-full max-w-sm rounded-xl border-2 border-black p-4 shadow-brutal-sm bg-background">\n      <div className="space-y-0.5">\n        <Label htmlFor="wifi-mode">Wi-Fi</Label>\n        <p className="font-body text-xs text-muted-foreground">Enable wireless network.</p>\n      </div>\n      <Switch id="wifi-mode" />\n    </div>\n  )\n}`}
      >
        <div className="flex items-center justify-between w-full max-w-sm rounded-xl border-2 border-black p-4 shadow-brutal-sm bg-background">
          <div className="space-y-0.5 text-left">
            <Label htmlFor="wifi-mode">Wi-Fi</Label>
            <p className="font-body text-xs text-muted-foreground">
              Enable wireless network.
            </p>
          </div>
          <Switch id="wifi-mode" />
        </div>
      </ComponentPreview>
    </div>
  );
}
