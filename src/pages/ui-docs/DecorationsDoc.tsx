import { Sparkle } from "@/components/decorations/Sparkle";
import { Marquee } from "@/components/decorations/Marquee";
import { AbstractBlob } from "@/components/decorations/AbstractBlob";
import { Wave } from "@/components/decorations/Wave";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DecorationsDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Decorations
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Animated patterns and shapes to enrich the Neo-Brutalism aesthetic.
        </p>
      </div>

      {/* Sparkle */}
      <section className="space-y-4">
        <h2 className="text-2xl font-display font-bold border-b-2 border-black pb-2">
          Sparkle
        </h2>
        <p className="font-body text-muted-foreground">
          Standard 4-point star used for accents and pop-ups.
        </p>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="p-8 border-2 border-black rounded-xl bg-card shadow-brutal flex gap-8 items-center justify-center min-h-[200px]"
          >
            <Sparkle size={64} animate="spin" />
            <Sparkle size={64} color="var(--color-secondary)" animate="pulse" />
            <Sparkle size={64} color="var(--color-accent)" animate="none" />
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              code={`import { Sparkle } from "@/components/decorations/Sparkle";

export function SparkleDemo() {
  return (
    <div className="flex gap-4">
      <Sparkle size={64} animate="spin" />
      <Sparkle size={64} color="var(--color-secondary)" animate="pulse" />
    </div>
  )
}`}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Marquee */}
      <section className="space-y-4">
        <h2 className="text-2xl font-display font-bold border-b-2 border-black pb-2">
          Marquee
        </h2>
        <p className="font-body text-muted-foreground">
          Endless scrolling text. Ideal for banners or footers.
        </p>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border-2 border-black rounded-xl overflow-hidden shadow-brutal bg-card"
          >
            <div className="py-8">
              <Marquee
                text="NEO-BRUTALISM UI"
                speed="normal"
                direction="left"
              />
              <div className="h-4" />
              <Marquee
                text="COMPONENTS"
                speed="fast"
                direction="right"
                bg="bg-secondary"
                itemClassName="text-white"
              />
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              code={`import { Marquee } from "@/components/decorations/Marquee";

export function MarqueeDemo() {
  return (
    <div className="space-y-4">
      <Marquee text="NEO-BRUTALISM UI" speed="normal" direction="left" />
      <Marquee text="COMPONENTS" speed="fast" direction="right" bg="bg-secondary" itemClassName="text-white" />
    </div>
  )
}`}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Abstract Blob */}
      <section className="space-y-4">
        <h2 className="text-2xl font-display font-bold border-b-2 border-black pb-2">
          Abstract Blob
        </h2>
        <p className="font-body text-muted-foreground">
          Floating blobs used to create depth or as background elements.
        </p>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="p-8 border-2 border-black rounded-xl bg-card shadow-brutal flex gap-8 items-center justify-center min-h-[300px]"
          >
            <AbstractBlob
              variant={1}
              color="var(--color-accent)"
              animate="float"
              className="w-32 h-32"
            />
            <AbstractBlob
              variant={2}
              color="var(--color-primary)"
              animate="spin"
              className="w-32 h-32"
            />
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              code={`import { AbstractBlob } from "@/components/decorations/AbstractBlob";

export function BlobDemo() {
  return (
    <div className="flex gap-4">
      <AbstractBlob variant={1} color="var(--color-accent)" animate="float" className="w-32 h-32" />
      <AbstractBlob variant={2} color="var(--color-primary)" animate="spin" className="w-32 h-32" />
    </div>
  )
}`}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Wave */}
      <section className="space-y-4">
        <h2 className="text-2xl font-display font-bold border-b-2 border-black pb-2">
          Wave
        </h2>
        <p className="font-body text-muted-foreground">
          Animated wave shape patterns useful for connecting sections or dynamic
          backgrounds.
        </p>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="border-2 border-black rounded-xl bg-card shadow-brutal overflow-hidden"
          >
            <div className="h-24 bg-card" />
            <Wave
              color="var(--color-primary)"
              animate="flow"
              className="-mt-10"
            />
            <div className="h-24 bg-primary" />
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              code={`import { Wave } from "@/components/decorations/Wave";

export function WaveDemo() {
  return (
    <div className="overflow-hidden">
      <div className="h-24 bg-card" />
      {/* Pull the wave up slightly using negative margin to eliminate gaps */}
      <Wave color="var(--color-primary)" animate="flow" className="-mt-10" />
      <div className="h-24 bg-primary" />
    </div>
  )
}`}
            />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
