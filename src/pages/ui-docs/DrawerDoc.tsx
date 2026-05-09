import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function DrawerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Drawer
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A drawer component for React.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard drawer component."
        code={`import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"\nimport { Button } from "@/components/ui/button"\n\nexport function DrawerDemo() {\n  return (\n    <Drawer>\n      <DrawerTrigger>Open</DrawerTrigger>\n      <DrawerContent>\n        <DrawerHeader>\n          <DrawerTitle>Are you absolutely sure?</DrawerTitle>\n          <DrawerDescription>This action cannot be undone.</DrawerDescription>\n        </DrawerHeader>\n        <DrawerFooter>\n          <Button>Submit</Button>\n          <DrawerClose>\n            <Button variant="outline">Cancel</Button>\n          </DrawerClose>\n        </DrawerFooter>\n      </DrawerContent>\n    </Drawer>\n  )\n}`}
        align="center"
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="border-t-2 border-black rounded-t-2xl">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="font-display font-black uppercase">Are you absolutely sure?</DrawerTitle>
                <DrawerDescription className="font-body">This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </ComponentPreview>
    </div>
  );
}
