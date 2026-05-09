import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function CardDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Card
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard card with a form."
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport { Input } from "@/components/ui/input"\n\nexport function CardDefault() {\n  return (\n    <Card className="w-[350px]">\n      <CardHeader>\n        <CardTitle>Event Registration</CardTitle>\n        <CardDescription>Register for our upcoming Neo-Brutalism tech meetup.</CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-4">\n        <div className="space-y-2">\n          <Label htmlFor="name">Full Name</Label>\n          <Input type="text" id="name" placeholder="John Doe" />\n        </div>\n      </CardContent>\n      <CardFooter>\n        <Button variant="solid" className="w-full">Register Now</Button>\n      </CardFooter>\n    </Card>\n  )\n}`}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Event Registration</CardTitle>
            <CardDescription>Register for our upcoming Neo-Brutalism tech meetup.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Nadia Kirana" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="solid" className="w-full">Register Now</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Stats Card"
        description="A card styled for displaying metrics, utilizing background colors."
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Button } from "@/components/ui/button"\n\nexport function CardStats() {\n  return (\n    <Card className="w-[350px] bg-primary">\n      <CardHeader>\n        <CardTitle>Sales Stats</CardTitle>\n        <CardDescription className="text-primary-foreground/70">Monthly ticket sales</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p className="text-5xl font-mono font-black tracking-tighter text-black">1,240 <span className="text-xl">qty</span></p>\n      </CardContent>\n      <CardFooter className="justify-end">\n        <Button variant="solid" className="bg-white hover:bg-white text-black">View Report</Button>\n      </CardFooter>\n    </Card>\n  )\n}`}
      >
        <Card className="w-[350px] bg-primary text-primary-foreground">
          <CardHeader className="border-black">
            <CardTitle>Sales Stats</CardTitle>
            <CardDescription className="text-black/80">Monthly ticket sales</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-mono font-black tracking-tighter text-black">1,240 <span className="text-xl">qty</span></p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="solid" className="bg-white hover:bg-white text-black border-black">View Report</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
    </div>
  );
}
