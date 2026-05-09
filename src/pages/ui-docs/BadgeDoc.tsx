import { Badge } from "@/components/ui/badge";

export default function BadgeDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Badges
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Small indicators, labels, or tags.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Badge variant="default">Default Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  );
}
