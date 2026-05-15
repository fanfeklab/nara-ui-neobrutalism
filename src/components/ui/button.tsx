import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-black font-bold uppercase tracking-tight whitespace-nowrap transition-colors outline-hidden select-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-brutal-active focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-brutal hover:brightness-105 active:shadow-brutal-active",
        solid:
          "bg-primary text-primary-foreground shadow-brutal hover:brightness-105 active:shadow-brutal-active",
        outline:
          "bg-card text-card-foreground shadow-brutal hover:bg-primary hover:text-primary-foreground active:shadow-brutal-active",
        secondary:
          "bg-secondary text-secondary-foreground shadow-brutal hover:brightness-110 active:shadow-brutal-active",
        ghost:
          "border-transparent shadow-none hover:bg-muted active:translate-x-0 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-brutal hover:brightness-110 active:shadow-brutal-active",
        link: "text-foreground underline-offset-4 hover:underline border-transparent shadow-none active:translate-x-0 active:translate-y-0",
      },
      size: {
        default: "h-12 px-6 py-3 text-base gap-2",
        xs: "h-8 px-3 text-xs gap-1",
        sm: "h-10 px-4 text-sm gap-1.5",
        lg: "h-14 px-8 text-lg gap-2",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
