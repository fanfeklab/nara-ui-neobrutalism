import { Progress } from "@/components/ui/progress";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function ProgressDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Progress
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard progress bar."
        code={`import { Progress } from "@/components/ui/progress"\n\nexport function ProgressDemo() {\n  return <Progress value={33} />\n}`}
      >
        <div className="w-full max-w-md">
          <Progress value={33} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Colors"
        description="Progress bars in primary, secondary, and destructive colors."
        code={`import { Progress } from "@/components/ui/progress"\n\nexport function ProgressColors() {\n  return (\n    <div className="space-y-4">\n      <Progress value={45} variant="default" />\n      <Progress value={60} variant="secondary" />\n      <Progress value={75} variant="destructive" />\n    </div>\n  )\n}`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Progress value={45} variant="default" />
          <Progress value={60} variant="secondary" />
          <Progress value={75} variant="destructive" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Available sizes: sm, default, and lg."
        code={`import { Progress } from "@/components/ui/progress"\n\nexport function ProgressSizes() {\n  return (\n    <div className="space-y-4">\n      <Progress value={33} size="sm" />\n      <Progress value={50} size="default" />\n      <Progress value={66} size="lg" />\n    </div>\n  )\n}`}
      >
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Progress value={33} size="sm" />
          <Progress value={50} size="default" />
          <Progress value={66} size="lg" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Striped"
        description="A playful striped variant suitable for the Neo-Brutalism aesthetic."
        code={`import { Progress } from "@/components/ui/progress"\n\nexport function ProgressStriped() {\n  return <Progress value={80} variant="striped" size="lg" />\n}`}
      >
        <div className="w-full max-w-md">
          <Progress value={80} variant="striped" size="lg" />
        </div>
      </ComponentPreview>
    </div>
  );
}
