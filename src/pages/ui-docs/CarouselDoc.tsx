import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CarouselDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Carousel
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A carousel with motion and swipe built using Embla.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard carousel component."
        code={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"\nimport { Card, CardContent } from "@/components/ui/card"\n\nexport function CarouselDemo() {\n  return (\n    <Carousel className="w-full max-w-xs">\n      <CarouselContent>\n        {Array.from({ length: 5 }).map((_, index) => (\n          <CarouselItem key={index}>\n            <div className="p-1">\n              <Card>\n                <CardContent className="flex aspect-square items-center justify-center p-6">\n                  <span className="text-4xl font-semibold">{index + 1}</span>\n                </CardContent>\n              </Card>\n            </div>\n          </CarouselItem>\n        ))}\n      </CarouselContent>\n      <CarouselPrevious />\n      <CarouselNext />\n    </Carousel>\n  )\n}`}
        align="center"
      >
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="rounded-2xl">
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-primary rounded-xl border-y-0">
                      <span className="text-4xl font-black font-display">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ComponentPreview>
    </div>
  );
}
