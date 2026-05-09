import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HoverCardDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Hover Card
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
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
        </div>
      </div>
    </div>
  );
}
