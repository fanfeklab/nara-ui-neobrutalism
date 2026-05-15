import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ComponentPreview } from "@/components/ui/component-preview";
import { BRAND } from "@/config/brand.config";

export default function NavigationMenuDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Navigation Menu
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A collection of links for navigating websites.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard navigation menu."
        code={`import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"\n\nexport function NavigationMenuDemo() {\n  return (\n    <NavigationMenu>\n      <NavigationMenuList>\n        <NavigationMenuItem>\n          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>\n          <NavigationMenuContent>\n            <NavigationMenuLink>Link</NavigationMenuLink>\n          </NavigationMenuContent>\n        </NavigationMenuItem>\n      </NavigationMenuList>\n    </NavigationMenu>\n  )\n}`}
        align="center"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {BRAND.name}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">
                        Alert Dialog
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        A modal dialog that interrupts the user with important
                        content and expects a response.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ComponentPreview>
    </div>
  );
}
