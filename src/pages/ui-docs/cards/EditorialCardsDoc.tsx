import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BRAND } from "@/config/brand.config";

export default function EditorialCardsDoc() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tighter sm:text-5xl">
          Editorial & Blog
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Card layouts for content-heavy pages like blogs, news aggregators, or magazines. Testing text density and excerpt clamping.
        </p>
      </div>

      <Separator className="bg-black" />

      {/* Variant A */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">Variant A: Standard Article Grid</h2>
          <p className="font-body text-sm text-muted-foreground mt-2">Best for main blog feeds. 3 columns on desktop.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="flex flex-col h-full bg-card hover:-rotate-1 transition-transform duration-200">
              <div className="aspect-[16/9] border-b-2 border-black overflow-hidden relative rounded-t-xl group">
                 <img 
                    src={`https://picsum.photos/600/400?seed=blog${i}`} 
                    alt="Blog Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
              </div>
              <CardHeader className="p-5 pb-3">
                <Badge variant="default" className="w-fit mb-3 uppercase font-bold text-[10px]">Topic {i}</Badge>
                <CardTitle className="leading-tight text-xl hover:underline cursor-pointer decoration-4 underline-offset-4 line-clamp-2">
                  Building Neo-Brutalist Layouts (Part {i})
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                  Explore the rise of bold borders, high-contrast colors, and unabashed structural honesty in modern UI design. 
                  Learn spacing strategies and shadow utilities in Tailwind CSS.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-5 mt-auto flex items-center justify-between border-t-2 border-dashed border-black/30">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border-2 border-black shadow-brutal-sm">
                    <AvatarImage src={'https://api.dicebear.com/7.x/notionists/svg?seed=Nadia' + i} />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-tight leading-none line-clamp-1">Author {i}</span>
                    <span className="font-mono text-xs text-muted-foreground mt-1">May {10 + i}, 2026</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-1 bg-muted rounded-md border-2 border-black flex-shrink-0">5 MIN</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="bg-black" />

      {/* Variant B */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">Variant B: Magazine Header Grid</h2>
          <p className="font-body text-sm text-muted-foreground mt-2">Denser 4-column layout for diverse content catalogs.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
             <Card key={i} className="flex flex-col h-full bg-card group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                <CardContent className="p-5 z-10 flex flex-col h-full grow">
                  <span className="font-mono text-xs font-bold underline mb-3 text-foreground group-hover:text-primary-foreground transition-colors">#TECH</span>
                  <CardTitle className="leading-tight text-lg underline-offset-2 text-foreground group-hover:text-primary-foreground transition-colors">
                    The State of React Server Components in 2026
                  </CardTitle>
                  <p className="font-body text-xs text-muted-foreground group-hover:text-primary-foreground/90 mt-3 line-clamp-3 transition-colors">
                    A deep dive into how frontend architectures evolved prioritizing performance and streaming over client bundles.
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                     <span className="font-mono text-xs font-bold text-foreground group-hover:text-primary-foreground border-b-[3px] border-foreground group-hover:border-primary-foreground pb-0.5 transition-colors">READ MORE</span>
                  </div>
                </CardContent>
             </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
