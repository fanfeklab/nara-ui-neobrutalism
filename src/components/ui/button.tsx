import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-black font-bold uppercase tracking-tight whitespace-nowrap transition-all outline-hidden select-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus-visible:ring-2 focus-visible:ring-[#ccff00] active:translate-y-[2px] active:translate-x-[2px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-[#ccff00] text-black shadow-brutal",
        solid: "bg-[#ccff00] text-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        outline: "bg-white text-black shadow-brutal hover:bg-[#ccff00] hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        secondary: "bg-[#8a2be2] text-white shadow-brutal",
        ghost: "border-transparent shadow-none hover:bg-muted active:shadow-none active:translate-x-0 active:translate-y-0",
        destructive: "bg-[#ef4444] text-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none active:translate-x-0 active:translate-y-0",
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
  }
)

const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
