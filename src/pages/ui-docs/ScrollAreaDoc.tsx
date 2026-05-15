import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Scroll Area
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div>
          <ScrollArea className="h-72 w-48 rounded-xl border-2 border-black bg-card shadow-brutal-sm">
            <div className="p-4">
              <h4 className="mb-4 font-display font-bold leading-none uppercase tracking-tighter">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="font-body text-sm py-2">
                    {tag}
                  </div>
                  <Separator className="my-1 border-t border-black/10" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
