import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function ResizableDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Resizable
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A resizable panel group."
        code={`import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"\n\nexport function ResizableDemo() {\n  return (\n    <ResizablePanelGroup direction="horizontal">\n      <ResizablePanel>One</ResizablePanel>\n      <ResizableHandle />\n      <ResizablePanel>Two</ResizablePanel>\n    </ResizablePanelGroup>\n  )\n}`}
        align="center"
      >
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md rounded-xl border-2 border-black md:min-w-[450px] shadow-brutal mx-auto bg-card"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6 bg-background">
              <span className="font-bold uppercase tracking-tight">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6 bg-card">
                  <span className="font-bold uppercase tracking-tight">
                    Two
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 bg-[#f3f4f6]">
                  <span className="font-bold uppercase tracking-tight">
                    Three
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ComponentPreview>
    </div>
  );
}
