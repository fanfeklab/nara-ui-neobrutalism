import { BRAND } from "@/config/brand.config";
export default function IntroDoc() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          UI Documentation
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Welcome to the {BRAND.name} Neo-Brutalism UI Kit. This component
          library follows strict atomic design principles.
        </p>
      </div>

      <div className="p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-4 border-b-2 border-black pb-2">
          Design Principles
        </h2>
        <ul className="list-disc list-inside space-y-2 font-body text-foreground">
          <li>
            <strong>Neo-Brutalism:</strong> High contrast, solid borders, offset
            shadows. Avoid soft blur shadows.
          </li>
          <li>
            <strong>Atomic Design:</strong> Build from Atoms to Pages.
          </li>
          <li>
            <strong>Data-Driven:</strong> Components should use DTOs (Data
            Transfer Objects) and remain fully presentational where possible.
          </li>
          <li>
            <strong>Mobile First:</strong> Assume touch interaction first.
          </li>
        </ul>
      </div>

      <div className="p-8 border-2 border-black bg-card shadow-brutal rounded-xl">
        <h2 className="text-2xl font-display font-black uppercase tracking-tight mb-4 border-b-2 border-black pb-2">
          Philosophy & Color Schema
        </h2>
        <p className="font-body text-base text-muted-foreground mb-6">
          The Neo-Brutalism aesthetic of {BRAND.name} is driven by contrast,
          solid geometry, and striking legibility. The color palette emphasizes
          raw, unapologetic tones that invoke a playful yet highly professional
          vibe. In stark contrast to modern flat or blurred designs, border
          lines and shadows are strictly solid black (<strong>#000000</strong>)
          to outline structure and enforce a bold edge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border-2 border-black rounded-xl overflow-hidden shadow-brutal-sm">
            <div className="h-24 bg-primary border-b-2 border-black flex items-center justify-center p-2">
              <span className="font-mono text-primary-foreground font-bold">
                var(--color-primary)
              </span>
            </div>
            <div className="p-3 bg-card font-body text-sm">
              <p className="font-bold text-card-foreground">Primary (Lime)</p>
              <p className="text-muted-foreground text-xs mt-1">
                The core action color. Represents energy, digital rave, and
                highlights. Always paired with black text for readability.
              </p>
            </div>
          </div>

          <div className="border-2 border-black rounded-xl overflow-hidden shadow-brutal-sm">
            <div className="h-24 bg-secondary border-b-2 border-black flex items-center justify-center p-2">
              <span className="font-mono text-secondary-foreground font-bold">
                var(--color-secondary)
              </span>
            </div>
            <div className="p-3 bg-card font-body text-sm">
              <p className="font-bold text-card-foreground">
                Secondary (Violet)
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Used for deep accents and secondary actions. Conveys mystery and
                creativity within the tech space.
              </p>
            </div>
          </div>

          <div className="border-2 border-black rounded-xl overflow-hidden shadow-brutal-sm">
            <div className="h-24 bg-[#FDFBD4] border-b-2 border-black flex items-center justify-center p-2">
              <span className="font-mono text-black font-bold">#FDFBD4</span>
            </div>
            <div className="p-3 bg-card font-body text-sm">
              <p className="font-bold text-card-foreground">Light Bg (Cream)</p>
              <p className="text-muted-foreground text-xs mt-1">
                The retro-paper feel of the default light mode background.
                Easier on the eyes than pure white.
              </p>
            </div>
          </div>

          <div className="border-2 border-black rounded-xl overflow-hidden shadow-brutal-sm">
            <div className="h-24 bg-[#0a192f] border-b-2 border-black flex items-center justify-center p-2">
              <span className="font-mono text-white font-bold">#0a192f</span>
            </div>
            <div className="p-3 bg-card font-body text-sm">
              <p className="font-bold text-card-foreground">Dark Bg (Navy)</p>
              <p className="text-muted-foreground text-xs mt-1">
                A deep, cyberpunk-inspired navy for dark mode. Retains brutalist
                black borders over bright colors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 border-2 border-black bg-primary text-primary-foreground shadow-brutal rounded-xl">
        <h2 className="text-2xl font-display font-black uppercase tracking-tight mb-4 border-b-2 border-black pb-2">
          How to Use
        </h2>
        <p className="font-body font-medium">
          Use the sidebar to explore components. Copy the source implementation
          directly from `src/components/ui/` for your needs if porting outside.
        </p>
      </div>
    </div>
  );
}
