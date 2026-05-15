import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-xl border-2 border-black px-2.5 py-0.5 text-xs font-bold uppercase tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-black shadow-brutal-sm",
        secondary:
          "bg-secondary text-white shadow-brutal-sm",
        destructive:
          "bg-[#ef4444] text-white shadow-brutal-sm",
        outline: "text-foreground shadow-brutal-sm bg-background border-2 border-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
