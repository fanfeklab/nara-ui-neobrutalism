import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Mail, Loader2, ArrowRight, Wallet, Github } from "lucide-react";

export default function ButtonDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Buttons
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Primary interactive elements designed with solid shadows and high contrast hover states.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="Core button styles including solid, outline, destructive, and ghost."
        code={`import { Button } from "@/components/ui/button"\n\nexport function ButtonVariants() {\n  return (\n    <div className="flex flex-wrap gap-4">\n      <Button variant="solid">Solid Button</Button>\n      <Button variant="outline">Outline Button</Button>\n      <Button variant="destructive">Destructive</Button>\n      <Button variant="ghost">Ghost Button</Button>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button variant="solid">Solid Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Buttons come in three standard sizes: small, default, and large."
        code={`import { Button } from "@/components/ui/button"\n\nexport function ButtonSizes() {\n  return (\n    <div className="flex flex-wrap gap-4 items-center">\n      <Button size="sm">Small</Button>\n      <Button size="default">Default</Button>\n      <Button size="lg">Large</Button>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button size="sm">Small Size</Button>
          <Button size="default">Default Size</Button>
          <Button size="lg">Large Size</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icon"
        description="Icons can be added to buttons. Standard sizing is h-4 w-4 with mr-2 or ml-2."
        code={`import { Button } from "@/components/ui/button"\nimport { Mail, ArrowRight } from "lucide-react"\n\nexport function ButtonIcons() {\n  return (\n    <div className="flex gap-4">\n      <Button>\n        <Mail className="mr-2 h-4 w-4" /> Login with Email\n      </Button>\n      <Button variant="outline">\n        Continue <ArrowRight className="ml-2 h-4 w-4" />\n      </Button>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <Button variant="outline">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Icon Button"
        description="Buttons can contain only an icon by using the icon size variant."
        code={`import { Button } from "@/components/ui/button"\nimport { Mail } from "lucide-react"\n\nexport function IconButton() {\n  return (\n    <Button size="icon" aria-label="Send Email">\n      <Mail className="h-4 w-4" />\n    </Button>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button size="icon" aria-label="Send Email">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Send Email">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading State"
        description="Combine spinning icons and disabled state for loading indicators."
        code={`import { Button } from "@/components/ui/button"\nimport { Loader2 } from "lucide-react"\n\nexport function ButtonLoading() {\n  return (\n    <Button disabled>\n      <Loader2 className="mr-2 h-4 w-4 animate-spin" />\n      Please wait\n    </Button>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Social & Payment"
        description="Buttons can be customized for specific third party actions."
        code={`import { Button } from "@/components/ui/button"\nimport { Github, Wallet } from "lucide-react"\n\nexport function ButtonSocial() {\n  return (\n    <div className="flex flex-wrap gap-4">\n      <Button className="bg-[#181717] text-white hover:bg-[#181717]/90">\n        <Github className="mr-2 h-4 w-4" /> Login with GitHub\n      </Button>\n      <Button className="bg-blue-600 text-white hover:bg-blue-700">\n        <Wallet className="mr-2 h-4 w-4" /> Pay with wallet\n      </Button>\n    </div>\n  )\n}`}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Button className="bg-[#181717] text-white hover:bg-[#181717]/90 hover:text-white">
            <Github className="mr-2 h-4 w-4" /> Login with GitHub
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
            <Wallet className="mr-2 h-4 w-4" /> Pay with wallet
          </Button>
        </div>
      </ComponentPreview>
    </div>
  );
}
