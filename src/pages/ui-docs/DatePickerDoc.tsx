import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function DatePickerDoc() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Date Picker
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A component to pick a date from a calendar, popping out from a button.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A button triggered calendar."
        code={`import { useState } from "react"\nimport { format } from "date-fns"\nimport { CalendarIcon } from "lucide-react"\nimport { cn } from "@/lib/utils"\nimport { Button } from "@/components/ui/button"\nimport { Calendar } from "@/components/ui/calendar"\nimport { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"\n\nexport function DatePickerDemo() {\n  const [date, setDate] = useState<Date>()\n\n  return (\n    <Popover>\n      <PopoverTrigger asChild>\n        <Button\n          variant={"outline"}\n          className={cn(\n            "w-[240px] justify-start text-left font-normal",\n            !date && "text-muted-foreground"\n          )}\n        >\n          <CalendarIcon className="mr-2 h-4 w-4" />\n          {date ? format(date, "PPP") : <span>Pick a date</span>}\n        </Button>\n      </PopoverTrigger>\n      <PopoverContent className="w-auto p-0" align="start">\n        <Calendar\n          mode="single"\n          selected={date}\n          onSelect={setDate}\n          initialFocus\n        />\n      </PopoverContent>\n    </Popover>\n  )\n}`}
        align="center"
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 border-2 border-black rounded-xl shadow-brutal-sm"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </ComponentPreview>
    </div>
  );
}
