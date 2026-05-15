import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { BRAND } from "@/config/brand.config";

export default function EventCardsDoc() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tighter sm:text-5xl">
          Event & Ticket Cards
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Showcase dates, locations, and booking calls-to-action. Perfect for directory indexes or ticketing dashboards.
        </p>
      </div>

      <Separator className="bg-black" />

      {/* Variant A */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">Variant A: Standard Grid Listing</h2>
          <p className="font-body text-sm text-muted-foreground mt-2">Provides thumbnail imagery alongside key logistical metadata context.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="flex flex-col h-full bg-card group">
              <div className="relative aspect-[16/6] border-b-2 border-black overflow-hidden rounded-t-xl shrink-0">
                <Badge variant="secondary" className="absolute top-3 right-3 z-10 text-[10px] py-1 px-3 border-2 border-black shadow-brutal-sm uppercase">Conference</Badge>
                <img 
                  src={`https://picsum.photos/600/300?seed=event${i}`} 
                  alt="Event Placeholder" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl line-clamp-2 leading-tight">Neo-Brutalism Summit 2026 - Day {i}</CardTitle>
                <CardDescription className="text-muted-foreground font-semibold mt-2 line-clamp-2 leading-relaxed">Gathering of the brightest minds in structural UI architecture.</CardDescription>
              </CardHeader>
              <CardContent className="p-5 py-3 grow font-body text-sm space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-bold line-clamp-1">October 24-25, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-bold line-clamp-1">09:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-bold line-clamp-1">Jakarta Convention Center</span>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-3">
                 <Button variant="solid" className="w-full group/btn font-bold">
                    Get Tickets <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">Variant B: Minimal List Index (Horizontal)</h2>
          <p className="font-body text-sm text-muted-foreground mt-2">High density for calendar views. Recommended for single or dual-column containers.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
             <Card key={i} className="flex flex-col sm:flex-row items-center border-l-[8px] border-l-secondary bg-card p-4 sm:p-5 gap-4 sm:gap-6 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col items-center justify-center shrink-0 w-full sm:w-24 px-4 py-2 bg-secondary text-secondary-foreground border-2 border-black rounded-lg shadow-brutal-sm">
                   <span className="font-body text-xs font-bold uppercase tracking-widest">Oct</span>
                   <span className="font-display text-3xl font-black leading-none">{10 + i}</span>
                </div>
                <div className="flex flex-col grow min-w-0 text-center sm:text-left">
                   <h3 className="font-display text-lg font-black uppercase truncate">Front-End Meetup #{i}</h3>
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center justify-center sm:justify-start gap-1">
                         <Clock className="w-3 h-3" /> 18:00 WIB
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-1 truncate">
                         <MapPin className="w-3 h-3 shrink-0" /> Menara Mandiri
                      </div>
                   </div>
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto shrink-0 font-bold border-black">RSVP</Button>
             </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
