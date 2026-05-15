import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ui/component-preview";
import { BRAND } from "@/config/brand.config";

export default function TabsDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Tabs
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A set of layered sections of content—known as tab panels—that are
          displayed one at a time.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="Standard tabs with cards inside."
        code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\nimport { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport { Input } from "@/components/ui/input"\n\nexport function TabsDemo() {\n  return (\n    <Tabs defaultValue="account" className="w-full max-w-md">\n      <TabsList className="grid w-full grid-cols-2">\n        <TabsTrigger value="account">Account</TabsTrigger>\n        <TabsTrigger value="password">Password</TabsTrigger>\n      </TabsList>\n      <TabsContent value="account">\n        <Card>\n          <CardHeader>\n            <CardTitle>Account</CardTitle>\n            <CardDescription>\n              Make changes to your account here.\n            </CardDescription>\n          </CardHeader>\n          <CardContent className="space-y-2">\n            <div className="space-y-1">\n              <Label htmlFor="name">Name</Label>\n              <Input id="name" defaultValue=${BRAND.founder.name} />\n            </div>\n          </CardContent>\n          <CardFooter>\n            <Button>Save changes</Button>\n          </CardFooter>\n        </Card>\n      </TabsContent>\n      <TabsContent value="password">\n        <Card>\n          <CardHeader>\n            <CardTitle>Password</CardTitle>\n            <CardDescription>\n              Change your password here.\n            </CardDescription>\n          </CardHeader>\n          <CardContent className="space-y-2">\n            <div className="space-y-1">\n              <Label htmlFor="current">Current password</Label>\n              <Input id="current" type="password" />\n            </div>\n          </CardContent>\n          <CardFooter>\n            <Button>Save password</Button>\n          </CardFooter>\n        </Card>\n      </TabsContent>\n    </Tabs>\n  )\n}`}
      >
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={BRAND.founder.name} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@nadiakusuma" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentPreview>
    </div>
  );
}
