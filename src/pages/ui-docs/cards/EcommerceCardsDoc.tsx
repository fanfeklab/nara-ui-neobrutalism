import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star } from "lucide-react";

export default function EcommerceCardsDoc() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tighter sm:text-5xl">
          E-Commerce Cards
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Product grids and commerce cards tailored for Neo-Brutalism online
          stores. Shows behaviour across columns and viewports.
        </p>
      </div>

      <Separator className="bg-black" />

      {/* Variant A */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Variant A: Standard Retail Grid
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Grid of 3 columns (desktop), 2 (tablet), 1 (mobile). Image on top,
            button taking full width at the bottom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform"
            >
              <div className="relative border-b-2 border-black bg-card group overflow-hidden">
                <Badge
                  variant="default"
                  className="absolute top-4 left-4 z-10 text-xs py-1 px-2 border-2 border-black shadow-brutal-sm"
                >
                  New Arrival {i}
                </Badge>
                <img
                  src={`https://picsum.photos/400/400?seed=sneaker${i}`}
                  alt="Product"
                  className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="flex-none p-5 pb-0">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl leading-tight">
                    Neo-Retro Runner V{i}
                  </CardTitle>
                  <span className="font-mono text-xl font-black bg-primary px-2 border-2 border-black shadow-brutal-sm tracking-tighter shrink-0">
                    ${120 + i * 5}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-3 grow">
                <p className="font-body text-sm text-muted-foreground line-clamp-3">
                  The ultimate mix of 90s aesthetic and modern comfort
                  technology for urban explorers. Features breathable mesh.
                </p>
              </CardContent>
              <CardFooter className="p-5 pt-0 mt-auto border-none">
                <Button
                  variant="solid"
                  className="w-full gap-2 font-bold mb-[2px]"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="bg-black" />

      {/* Variant B */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Variant B: Detailed Product List
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Horizontal layouts ideal for search result views or narrower
            2-column configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="flex flex-col sm:flex-row h-full items-stretch overflow-hidden group"
            >
              <div className="relative w-full sm:w-48 xl:w-56 shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-black bg-muted">
                <img
                  src={`https://picsum.photos/300/300?seed=apparel${i}`}
                  alt="Product"
                  className="object-cover w-full h-full min-h-[200px]"
                />
              </div>
              <div className="flex flex-col grow p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <CardTitle className="text-xl leading-tight">
                    Heavyweight Hoodie {i}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="shrink-0 bg-background shadow-none"
                  >
                    Stock: {i * 12}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 mb-3 text-warning">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold text-muted-foreground ml-2">
                    (4.0)
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                  Constructed with 500gsm organic cotton. Drop shoulder and
                  oversized brutalist fit.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="font-mono text-2xl font-black tracking-tighter">
                    ${80 + i * 2}
                  </div>
                  <Button
                    variant="solid"
                    size="sm"
                    className="font-bold border-black gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Buy
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
