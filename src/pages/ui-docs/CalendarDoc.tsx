import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CalendarDoc() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Calendar
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A date field component that allows users to enter and edit date.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard calendar."
        code={`import { useState } from "react"\nimport { Calendar } from "@/components/ui/calendar"\n\nexport function CalendarDemo() {\n  const [date, setDate] = useState<Date | undefined>(new Date())\n\n  return (\n    <Calendar\n      mode="single"\n      selected={date}\n      onSelect={setDate}\n    />\n  )\n}`}
        align="center"
      >
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </ComponentPreview>
    </div>
  );
}
