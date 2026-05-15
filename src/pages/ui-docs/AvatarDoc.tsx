import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/ui/component-preview";
import { BRAND } from "@/config/brand.config";

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
        description="Standard sizes: sm, default, lg."
        code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport function AvatarDemo() {\n  return (\n    <div className="flex gap-4 items-center">\n      <Avatar size="sm">\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" alt="@hanif" />\n        <AvatarFallback>HA</AvatarFallback>\n      </Avatar>\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" alt="@nadia" />\n        <AvatarFallback>NA</AvatarFallback>\n      </Avatar>\n      <Avatar size="lg">\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" alt="@budi" />\n        <AvatarFallback>BU</AvatarFallback>\n      </Avatar>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar size="sm">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>

          <Avatar size="lg">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Badge / Status Indicator"
        description="A badge can indicate online status or notifications."
        code={`import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar"\n\nexport function AvatarBadgeDemo() {\n  return (\n    <div className="flex gap-4">\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />\n        <AvatarFallback>NA</AvatarFallback>\n        <AvatarBadge className="bg-success" />\n      </Avatar>\n      <Avatar size="lg">\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />\n        <AvatarFallback>BU</AvatarFallback>\n        <AvatarBadge className="bg-destructive bottom-[-4px] right-[-4px] h-5 w-5" />\n      </Avatar>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />
            <AvatarFallback>NA</AvatarFallback>
            <AvatarBadge className="bg-success" />
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />
            <AvatarFallback>BU</AvatarFallback>
            <AvatarBadge className="bg-destructive bottom-[-4px] right-[-4px] h-5 w-5" />
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar Group"
        description="Merge multiple avatars into a group."
        code={`import { Avatar, AvatarFallback, AvatarImage, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"\n\nexport function AvatarGroupDemo() {\n  return (\n    <AvatarGroup>\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />\n        <AvatarFallback>NA</AvatarFallback>\n      </Avatar>\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />\n        <AvatarFallback>BU</AvatarFallback>\n      </Avatar>\n      <Avatar>\n        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" />\n        <AvatarFallback>HA</AvatarFallback>\n      </Avatar>\n      <AvatarGroupCount>+2</AvatarGroupCount>\n    </AvatarGroup>\n  )\n}`}
      >
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Budi" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+2</AvatarGroupCount>
        </AvatarGroup>
      </ComponentPreview>

      <ComponentPreview
        title="Fallback Only"
        description="If the image fails to load or isn't provided."
        code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"\n\nexport function AvatarFallbackDemo() {\n  return (\n    <div className="flex gap-4 items-center">\n      <Avatar>\n        <AvatarFallback>NA</AvatarFallback>\n      </Avatar>\n      <Avatar size="lg">\n        <AvatarFallback className="bg-primary text-primary-foreground">US</AvatarFallback>\n      </Avatar>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <Avatar>
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>

          <Avatar size="lg">
            <AvatarFallback className="bg-primary text-black">
              US
            </AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>
    </div>
  );
}
