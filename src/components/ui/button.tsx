import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold tracking-tight rounded-xl border-2 border-black transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-[#ccff00] text-black shadow-brutal hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-brutal-lg hover:brightness-110 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        outline: "bg-transparent text-foreground shadow-brutal hover:bg-[#ccff00] hover:text-black hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-brutal-lg active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        destructive: "bg-[#ef4444] text-white shadow-brutal hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-brutal-lg hover:brightness-110 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        ghost: "border-transparent shadow-none hover:bg-muted active:scale-95",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
