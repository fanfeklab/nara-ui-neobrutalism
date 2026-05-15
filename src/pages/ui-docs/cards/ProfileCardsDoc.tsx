import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BRAND } from "@/config/brand.config";

export default function ProfileCardsDoc() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tighter sm:text-5xl">
          User & Profile Cards
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Centered layouts for displaying team members, speakers, or user
          directories. Excellent for 'About' sections and social feeds.
        </p>
      </div>

      <Separator className="bg-black" />

      {/* Variant A */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Variant A: Speaker Roster
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Vertical centered alignment. Primary call to action spans across
            bottom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card
              key={i}
              className="text-center bg-card flex flex-col items-center p-6 lg:p-8 hover:-translate-y-1 transition-transform"
            >
              <Avatar className="w-24 h-24 lg:w-32 lg:h-32 border-4 border-black shadow-brutal mb-4 bg-primary shrink-0 relative">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=Speaker${i}`}
                />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <CardHeader className="p-0 mb-4 items-center w-full">
                <CardTitle className="text-xl lg:text-2xl line-clamp-1 uppercase">
                  Speaker {i}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-semibold font-mono mt-1 text-xs lg:text-sm line-clamp-1">
                  UI/UX Engineer
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 font-body text-sm text-muted-foreground mb-8 line-clamp-3">
                Expert in building highly accessible and scalable front-end
                systems using modern Next.js and Tailwind architecture.
              </CardContent>
              <CardFooter className="p-0 w-full flex flex-col sm:flex-row gap-3 justify-center mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto flex-1 font-bold"
                >
                  Follow
                </Button>
                <Button
                  variant="solid"
                  size="sm"
                  className="w-full sm:w-auto flex-1 font-bold"
                >
                  Connect
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="bg-black" />

      {/* Variant B */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            Variant B: Contact List directory
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Horizontal alignment optimized for scanning multiple users
            vertically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="flex flex-row items-center bg-card p-4 gap-4 hover:bg-muted/50 transition-colors"
            >
              <Avatar className="w-16 h-16 border-2 border-black bg-primary shrink-0">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=Contact${i}`}
                />
                <AvatarFallback>C{i}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col grow min-w-0">
                <h3 className="font-display text-lg font-black uppercase truncate">
                  Participant Name {i}
                </h3>
                <p className="font-mono text-xs text-muted-foreground truncate">
                  participant{i}@naraevents.com
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 border-black rounded-full w-10 h-10 shadow-brutal-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    className="hidden"
                  />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
