import { Button } from "@/components/ui/button";

export default function ButtonDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Buttons
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Primary interactive elements designed with solid shadows and high contrast hover states.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="solid">Solid Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small Size</Button>
          <Button size="default">Default Size</Button>
          <Button size="lg">Large Size</Button>
        </div>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">States</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button disabled variant="solid">Disabled Solid</Button>
          <Button disabled variant="outline">Disabled Outline</Button>
        </div>
      </div>
    </div>
  );
}
