import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { DashboardLayout } from "@/layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center p-4 md:p-8 text-center min-h-[60vh]">
        <div className="max-w-md w-full bg-card p-8 border-2 border-black shadow-brutal rounded-2xl flex flex-col items-center">
          <div className="w-16 h-16 bg-[#8a2be2] border-2 border-black rounded-xl flex items-center justify-center mb-6 shadow-brutal-sm">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-black mb-4 text-foreground">
            Dashboard
          </h1>
          <p className="font-body text-muted-foreground mb-8">
            This area is under construction. It will contain the internal tools and external partner panels.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <Button asChild variant="outline" className="w-full">
              <Link to="/">Go to Public Page</Link>
            </Button>
            <Button asChild variant="solid" className="w-full">
              <Link to="/ui-docs">Go to UI Docs</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
