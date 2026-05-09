import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Trash2, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export default function AlertDialogDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Alert Dialog
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      <ComponentPreview
        title="Confirm Modal (Basic)"
        description="A standard confirmation dialog for destructive actions."
        code={`<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button variant="outline">Delete Account</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n      <AlertDialogDescription>...</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">Delete</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Project</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="flex items-center gap-3 mb-2 text-destructive">
                <Trash2 className="w-8 h-8 animate-pulse" />
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                project and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90 hover:text-white">Delete Permanently</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentPreview>

      <ComponentPreview
        title="Success Modal"
        description="An alert dialog styled specifically for successful operations."
        code={`// Customize content for success`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-success text-white hover:bg-success/90">Complete Payment</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-t-8 border-t-success">
            <AlertDialogHeader>
              <div className="flex items-center gap-3 mb-2 text-success">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
                <AlertDialogTitle className="text-2xl">Payment Successful!</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                Your payment of $120.00 has been processed successfully. You will receive an email confirmation shortly.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="w-full sm:w-auto bg-success text-white hover:bg-success/90 hover:text-white">Done</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentPreview>

      <ComponentPreview
        title="Warning Modal"
        description="A warning dialog before performing a sensitive but non-destructive action."
        code={`// Customize content for warning`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-warning text-black hover:bg-warning/90">Change Visibility</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-t-8 border-t-warning">
            <AlertDialogHeader>
              <div className="flex items-center gap-3 mb-2 text-warning-foreground">
                <AlertTriangle className="w-8 h-8 animate-ping duration-1000" />
                <AlertDialogTitle className="text-2xl">Make Project Public?</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                This will make your project visible to anyone on the internet. Sensitive data might be exposed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep Private</AlertDialogCancel>
              <AlertDialogAction className="bg-warning text-black hover:bg-warning/90 hover:text-black">Yes, Make Public</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentPreview>

      <ComponentPreview
        title="Error Modal"
        description="A dialog showing a critical error that requires user acknowledgment."
        code={`// Customize content for error`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-destructive">Simulate Error</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-t-8 border-t-destructive">
            <AlertDialogHeader>
              <div className="flex items-center gap-3 mb-2 text-destructive">
                <XCircle className="w-8 h-8 animate-[spin_3s_linear_infinite]" />
                <AlertDialogTitle className="text-2xl">Connection Failed</AlertDialogTitle>
              </div>
              <AlertDialogDescription className="text-foreground font-medium">
                We couldn't connect to the server to save your changes. Please check your internet connection and try again.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90 hover:text-white">Retry Connection</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentPreview>
    </div>
  );
}
