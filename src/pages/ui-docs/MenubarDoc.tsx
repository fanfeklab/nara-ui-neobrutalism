import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function MenubarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Menubar
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A visually persistent menu common in desktop applications that
          provides quick access to a consistent set of commands.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard menubar."
        code={`import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"\n\nexport function MenubarDemo() {\n  return (\n    <Menubar>\n      <MenubarMenu>\n        <MenubarTrigger>File</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>\n            New Tab <MenubarShortcut>⌘T</MenubarShortcut>\n          </MenubarItem>\n          <MenubarItem>New Window</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>Share</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>Print</MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n    </Menubar>\n  )\n}`}
        align="center"
      >
        <Menubar className="border-2 border-black rounded-lg shadow-brutal-sm py-4 px-2">
          <MenubarMenu>
            <MenubarTrigger className="font-bold">File</MenubarTrigger>
            <MenubarContent className="border-2 border-black rounded-lg shadow-brutal font-body">
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator className="bg-black" />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator className="bg-black" />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="font-bold">Edit</MenubarTrigger>
            <MenubarContent className="border-2 border-black rounded-lg shadow-brutal font-body">
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator className="bg-black" />
              <MenubarItem>
                Cut <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Copy <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Paste <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ComponentPreview>
    </div>
  );
}
