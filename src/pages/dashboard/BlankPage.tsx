import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function BlankPage() {
  const codeSnippet = `import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";

export default function MyNewPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="p-4 md:p-8">
          <h1 className="text-3xl font-display font-black uppercase mb-4">My New Page</h1>
          <div className="bg-card border-4 border-black rounded-3xl p-6 shadow-brutal">
            {/* Content here */}
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}`;

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6 p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-black text-foreground tracking-tight uppercase">
                Blank Starter
              </h1>
              <p className="font-body text-muted-foreground mt-1">
                A clean slate for you to build your custom dashboard views.
              </p>
            </div>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(codeSnippet);
                toast.success("Boilerplate code copied to clipboard!");
              }}
              className="border-2 border-black font-bold shadow-brutal-sm"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Boilerplate
            </Button>
          </div>

          <div className="flex-1 min-h-[400px] bg-card border-4 border-black rounded-3xl p-8 shadow-brutal flex items-center justify-center border-dashed">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-muted/50 border-2 border-black rounded-xl flex items-center justify-center mx-auto mb-4 -rotate-6">
                 <div className="w-8 h-8 rounded bg-primary" />
              </div>
              <h2 className="text-xl font-display font-black uppercase mb-2">Start Adding Components</h2>
              <p className="font-body opacity-80 mb-6">
                Combine the pre-built UI components from <span className="font-mono bg-muted px-1 py-0.5 border border-black rounded">@/components/ui</span> to build your feature.
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
