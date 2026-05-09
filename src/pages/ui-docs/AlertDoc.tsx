import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function AlertDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Alert
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a callout for user attention.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard alert."
        code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\nimport { Terminal } from "lucide-react"\n\nexport function AlertDefault() {\n  return (\n    <Alert>\n      <Terminal className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>\n        You can add components to your app using the cli.\n      </AlertDescription>\n    </Alert>\n  )\n}`}
        align="start"
      >
        <div className="w-full">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Destructive"
        description="Alert for error messages."
        code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\nimport { AlertCircle } from "lucide-react"\n\nexport function AlertDestructive() {\n  return (\n    <Alert variant="destructive">\n      <AlertCircle className="h-4 w-4" />\n      <AlertTitle>Error</AlertTitle>\n      <AlertDescription>\n        Your session has expired. Please log in again.\n      </AlertDescription>\n    </Alert>\n  )\n}`}
        align="start"
      >
        <div className="w-full">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>
    </div>
  );
}
