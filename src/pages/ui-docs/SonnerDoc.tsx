import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function SonnerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Sonner (Toast)
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          An opinionated toast component for React, styled with Neo-Brutalism.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A simple toast."
        code={`import { toast } from "sonner"\nimport { Button } from "@/components/ui/button"\n\nexport function SonnerDemo() {\n  return (\n    <Button\n      variant="outline"\n      onClick={() =>\n        toast("Event has been created", {\n          description: "Sunday, December 03, 2026 at 9:00 AM",\n          action: {\n            label: "Undo",\n            onClick: () => console.log("Undo"),\n          },\n        })\n      }\n    >\n      Show Toast\n    </Button>\n  )\n}`}
        align="center"
      >
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2026 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo clicked"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </ComponentPreview>

      <ComponentPreview
        title="Positions"
        description="Toast can be positioned anywhere on the screen."
        code={`toast("Positioned toast", { position: "top-right" })`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button variant="outline" onClick={() => toast("Top Left Toast", { position: "top-left" })}>Top Left</Button>
          <Button variant="outline" onClick={() => toast("Top Center Toast", { position: "top-center" })}>Top Center</Button>
          <Button variant="outline" onClick={() => toast("Top Right Toast", { position: "top-right" })}>Top Right</Button>
          <Button variant="outline" onClick={() => toast("Bottom Left Toast", { position: "bottom-left" })}>Bottom Left</Button>
          <Button variant="outline" onClick={() => toast("Bottom Center Toast", { position: "bottom-center" })}>Bottom Center</Button>
          <Button variant="outline" onClick={() => toast("Bottom Right Toast", { position: "bottom-right" })}>Bottom Right</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Types"
        description="Different types of toasts."
        code={`toast.success("Success!")\ntoast.error("Error!")\ntoast.info("Info")`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button className="bg-success text-white border-2 border-black hover:bg-success/80" onClick={() => toast.success("Event Created!", { description: "Your event was successfully created." })}>Success</Button>
          <Button variant="destructive" onClick={() => toast.error("Error occurred!", { description: "We couldn't create your event." })}>Error</Button>
          <Button className="bg-info text-white border-2 border-black hover:bg-info/80" onClick={() => toast.info("New Update", { description: "A new version of the app is available." })}>Info</Button>
          <Button className="bg-warning text-black border-2 border-black hover:bg-warning/80" onClick={() => toast.warning("Warning!", { description: "Your storage is almost full." })}>Warning</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Action"
        description="Toast can include custom actions for user interaction."
        code={`toast("Event deleted", {\n  action: {\n    label: "Undo",\n    onClick: () => console.log("Undo")\n  }\n})`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button variant="solid" onClick={() => toast("Event deleted", { 
            description: "The event 'Tech Summit' has been removed.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo clicked")
            }
          })}>Show Toast with Action</Button>
        </div>
      </ComponentPreview>
    </div>
  );
}
