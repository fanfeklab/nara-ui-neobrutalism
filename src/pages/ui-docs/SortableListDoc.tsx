import { useState } from "react";
import { SortableList } from "@/components/ui/sortable-list";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Card } from "@/components/ui/card";

interface MenuItem {
  id: string;
  title: string;
  url: string;
}

const initialMenuItems: MenuItem[] = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "About Us", url: "/about" },
  { id: "3", title: "Services", url: "/services" },
  { id: "4", title: "Pricing", url: "/pricing" },
  { id: "5", title: "Contact", url: "/contact" },
];

export default function SortableListDoc() {
  const [items, setItems] = useState(initialMenuItems);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Sortable List
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Drag and drop list sorting, similar to WordPress menu builder. Built
          with @dnd-kit.
        </p>
      </div>

      <ComponentPreview
        title="Menu Builder"
        description="Drag the handle to reorder menu items."
        code={`import { useState } from "react";\nimport { SortableList } from "@/components/ui/sortable-list";\n\nexport function MenuBuilderDemo() {\n  const [items, setItems] = useState([\n    { id: "1", title: "Home", url: "/" },\n    { id: "2", title: "About Us", url: "/about" },\n    // ...\n  ]);\n\n  return (\n    <SortableList\n      items={items}\n      onItemsChange={setItems}\n      renderItem={(item) => (\n        <div className="p-4 border-2 border-black rounded-xl bg-card shadow-brutal-sm">\n          <span className="font-bold">{item.title}</span>\n        </div>\n      )}\n    />\n  )\n}`}
      >
        <div className="w-full max-w-md">
          <SortableList
            items={items}
            onItemsChange={setItems}
            renderItem={(item, isDragging) => (
              <Card
                className={`p-4 transition-colors flex justify-between items-center bg-card ${isDragging ? "shadow-none translate-x-[2px] translate-y-[2px] border-primary" : ""}`}
              >
                <div className="font-display font-bold text-lg">
                  {item.title}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {item.url}
                </div>
              </Card>
            )}
          />
        </div>
      </ComponentPreview>
    </div>
  );
}
