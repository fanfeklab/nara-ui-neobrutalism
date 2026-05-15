import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";
import { toast } from "sonner";

export default function MaintenancePage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-[#ccff00] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] p-4">
        <div className="max-w-2xl w-full bg-card border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal text-center">
          <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 transform -rotate-12 shadow-[8px_8px_0_0_#ffffff]">
            <Hammer className="w-12 h-12 text-[#ccff00]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 text-black">
            Under Maintenance
          </h1>
          
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg mx-auto border-2 border-black p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-brutal-sm">
            We're currently doing some work on the platform to upgrade your experience. Please check back soon!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
               onClick={() => toast.success("You'll be notified when we're back!")}
               size="lg" 
               className="w-full sm:w-auto font-bold border-2 border-black shadow-brutal"
            >
              Notify Me
            </Button>
            <Button 
               onClick={() => window.history.back()}
               variant="outline"
               size="lg" 
               className="w-full sm:w-auto border-2 border-black bg-white shadow-brutal-sm font-bold"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
