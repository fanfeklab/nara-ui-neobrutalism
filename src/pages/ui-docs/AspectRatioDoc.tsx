import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function AspectRatioDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Aspect Ratio
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays content within a desired ratio.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A 16:9 aspect ratio."
        code={`import { AspectRatio } from "@/components/ui/aspect-ratio"\n\nexport function AspectRatioDemo() {\n  return (\n    <AspectRatio ratio={16 / 9} className="bg-muted">\n      <img\n        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"\n        alt="Photo by Drew Beamer"\n        className="h-full w-full object-cover"\n      />\n    </AspectRatio>\n  )\n}`}
        align="center"
      >
        <div className="w-[400px] border-2 border-black rounded-xl overflow-hidden shadow-brutal">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://picsum.photos/800/450"
              alt="Random placeholder"
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      </ComponentPreview>
    </div>
  );
}
