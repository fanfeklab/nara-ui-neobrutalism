import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function AvatarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Avatars
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Profile pictures for users, teams, or AI models. Built with fallbacks.
        </p>
      </div>

      <ComponentPreview
        title="Basic Avatars & Sizes"
        description="Standard sizes."
        code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport function AvatarDemo() {\n  return (\n    <div className="flex gap-4 items-center">\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" alt="@nadia" />\n        <AvatarFallback>NA</AvatarFallback>\n      </Avatar>\n      <Avatar className="w-16 h-16">\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" alt="@budi" />\n        <AvatarFallback>BU</AvatarFallback>\n      </Avatar>\n      <Avatar className="w-24 h-24">\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" alt="@hanif" />\n        <AvatarFallback>HA</AvatarFallback>\n      </Avatar>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Fallback Only"
        description="If the image fails to load or isn't provided."
        code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"\n\nexport function AvatarFallbackDemo() {\n  return (\n    <div className="flex gap-4 items-center">\n      <Avatar>\n        <AvatarFallback>NA</AvatarFallback>\n      </Avatar>\n      <Avatar className="w-16 h-16">\n        <AvatarFallback className="bg-primary text-primary-foreground">US</AvatarFallback>\n      </Avatar>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-primary text-primary-foreground">US</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>
    </div>
  );
}
