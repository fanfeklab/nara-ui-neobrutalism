import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Avatars
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Profile pictures for users, teams, or AI models. Built with fallbacks.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Basic Avatars & Sizes</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Joko" />
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-card shadow-brutal rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Fallback Only</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-primary text-primary-foreground">US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
