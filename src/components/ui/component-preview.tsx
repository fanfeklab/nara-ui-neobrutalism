import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  align?: "center" | "start" | "end";
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
  align = "center"
}: ComponentPreviewProps) {
  return (
    <div className="space-y-4 mb-12">
      <div>
        <h3 className="text-xl font-display font-black tracking-tight uppercase mb-1 drop-shadow-sm">{title}</h3>
        {description && <p className="text-muted-foreground font-body text-sm mb-4">{description}</p>}
      </div>
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="focus-visible:outline-none mt-2">
          <div className={cn(
            "rounded-2xl border-2 border-black bg-card p-6 md:p-12 shadow-brutal flex w-full",
            align === "center" ? "items-center justify-center" : "",
            align === "start" ? "items-start justify-start" : "",
            align === "end" ? "items-end justify-end" : ""
          )}>
            <div className="w-full max-w-full overflow-x-auto pb-4 px-2 pt-2 flex flex-col items-center justify-center gap-4">
               {children}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="focus-visible:outline-none">
          <CodeBlock code={code} language="tsx" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
