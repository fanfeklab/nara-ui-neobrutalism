import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function InputDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Inputs & Labels
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Form elements designed with high visibility focus states and neo-brutalist borders.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Text Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="contoh@naraevents.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="••••••••" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input type="text" id="disabled" disabled placeholder="Can't type here" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Textarea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled-area">Disabled Textarea</Label>
              <Textarea id="disabled-area" disabled placeholder="Can't type here either" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
