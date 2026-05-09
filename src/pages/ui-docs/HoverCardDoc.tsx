import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function HoverCardDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Hover Card
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard hover card."
        code={`import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"\nimport { Button } from "@/components/ui/button"\nimport { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport function HoverCardDemo() {\n  return (\n    <HoverCard>\n      <HoverCardTrigger asChild>\n        <Button variant="outline">@nextjs</Button>\n      </HoverCardTrigger>\n      <HoverCardContent className="w-80">\n        <div className="flex justify-between space-x-4">\n          <Avatar>\n            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=NextJS" />\n            <AvatarFallback>VC</AvatarFallback>\n          </Avatar>\n          <div className="space-y-1">\n            <h4 className="text-sm font-semibold font-display">@nextjs</h4>\n            <p className="text-sm font-body">\n              The React Framework - created and maintained by @vercel.\n            </p>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n  )\n}`}
        align="center"
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 border-2 border-black rounded-xl shadow-brutal text-left">
            <div className="flex justify-between space-x-4">
              <Avatar className="h-12 w-12 border-2 border-black shadow-brutal-sm">
                <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=NextJS" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold font-display">@nextjs</h4>
                <p className="text-sm font-body">
                  The React Framework - created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground font-body">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreview>
    </div>
  );
}
