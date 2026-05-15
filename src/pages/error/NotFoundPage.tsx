import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-background bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] p-4">
        <div className="max-w-md w-full bg-card border-4 border-black rounded-3xl p-8 shadow-brutal text-center relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary transform translate-x-16 -translate-y-16 rotate-45 border-4 border-black border-r-0 border-t-0" />
          
          <div className="relative z-10">
             <h1 className="text-8xl font-display font-black tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0_rgba(204,255,0,1)]">
               404
             </h1>
             <h2 className="text-2xl font-display font-black uppercase mb-4">
               Looks like you're lost
             </h2>
             <p className="font-body text-muted-foreground mb-8">
               The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
             </p>
             <Button asChild size="lg" className="w-full font-bold border-2 border-black shadow-brutal uppercase tracking-wider group">
               <Link to="/">
                 <MoveLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                 Take Me Home
               </Link>
             </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
