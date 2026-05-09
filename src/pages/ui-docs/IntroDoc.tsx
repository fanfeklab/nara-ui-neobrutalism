export default function IntroDoc() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          UI Documentation
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Welcome to the NARA EVENTS Neo-Brutalism UI Kit. This component library follows strict atomic design principles.
        </p>
      </div>

      <div className="p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-4 border-b-2 border-black pb-2">Design Principles</h2>
        <ul className="list-disc list-inside space-y-2 font-body text-foreground">
          <li><strong>Neo-Brutalism:</strong> High contrast, solid borders, offset shadows. Avoid soft blur shadows.</li>
          <li><strong>Atomic Design:</strong> Build from Atoms to Pages.</li>
          <li><strong>Data-Driven:</strong> Components should use DTOs (Data Transfer Objects) and remain fully presentational where possible.</li>
          <li><strong>Mobile First:</strong> Assume touch interaction first.</li>
        </ul>
      </div>

      <div className="p-8 border-2 border-black bg-[#ccff00] shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-4 border-b-2 border-black pb-2">How to Use</h2>
        <p className="font-body">
          Use the sidebar to explore components. Copy the source implementation directly from `src/components/ui/` for your needs if porting outside.
        </p>
      </div>
    </div>
  );
}
