import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

export default function PublicPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-card p-8 border-2 border-black shadow-brutal rounded-2xl flex flex-col items-center">
        <div className="w-16 h-16 bg-[#ccff00] border-2 border-black rounded-xl flex items-center justify-center mb-6 shadow-brutal-sm">
          <Construction className="w-8 h-8 text-black" />
        </div>
        <h1 className="text-3xl font-display font-black mb-4 text-foreground">
          Public Page
        </h1>
        <p className="font-body text-muted-foreground mb-8">
          This area is under construction. It will contain the landing page and CMS-driven public content.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Button asChild variant="outline" className="w-full">
            <Link to="/ui-docs">Go to UI Docs</Link>
          </Button>
          <Button asChild variant="solid" className="w-full">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
