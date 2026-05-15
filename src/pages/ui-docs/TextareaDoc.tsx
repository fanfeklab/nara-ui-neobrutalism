import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function TextareaDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Textarea
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a form textarea or a component that looks like an textarea.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A basic textarea component."
        code={`import { Textarea } from "@/components/ui/textarea"\n\nexport function TextareaDemo() {\n  return (\n    <Textarea placeholder="Type your message here." />\n  )\n}`}
      >
        <div className="w-full max-w-sm">
          <Textarea placeholder="Type your message here." />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        description="Textarea combined with a Label."
        code={`import { Textarea } from "@/components/ui/textarea"\nimport { Label } from "@/components/ui/label"\n\nexport function TextareaWithLabel() {\n  return (\n    <div className="grid w-full gap-1.5">\n      <Label htmlFor="message">Your message</Label>\n      <Textarea id="message" placeholder="Type your message here." />\n      <p className="text-xs text-muted-foreground">\n        Your message will be copied to the support team.\n      </p>\n    </div>\n  )\n}`}
      >
        <div className="grid w-full max-w-sm gap-1.5 text-left">
          <Label htmlFor="message">Your message</Label>
          <Textarea id="message" placeholder="Type your message here." />
          <p className="text-xs font-body text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
      </ComponentPreview>
    </div>
  );
}
