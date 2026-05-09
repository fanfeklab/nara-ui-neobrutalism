import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CardDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Cards
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <div className="p-6 sm:p-8 border-2 border-black bg-background border-dashed rounded-2xl">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-black pb-2">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Registration</CardTitle>
              <CardDescription>Register for our upcoming Neo-Brutalism tech meetup.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="John Doe" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="solid" className="w-full">Register Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#ccff00]">
            <CardHeader>
              <CardTitle>Sales Stats</CardTitle>
              <CardDescription className="text-black/70">Monthly ticket sales</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-mono font-black tracking-tighter">1,240 <span className="text-xl">qty</span></p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="ghost" className="border-2 border-black shadow-brutal-sm bg-white hover:bg-white text-black">View Report</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
