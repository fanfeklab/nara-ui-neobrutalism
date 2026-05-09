import { Progress } from "@/components/ui/progress";

export default function ProgressDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Progress
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div className="flex flex-col gap-6 max-w-md">
          <Progress value={33} />
          <Progress value={75} />
          <Progress value={100} className="[&>div]:bg-success" />
        </div>
      </div>
    </div>
  );
}
