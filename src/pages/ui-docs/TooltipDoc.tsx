import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function TooltipDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Tooltip
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A popup that displays information related to an element when the
          element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">
          Examples
        </h2>
        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="solid">Try Me</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Side Right Tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
