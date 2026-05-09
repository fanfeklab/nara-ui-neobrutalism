import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex rounded-xl shadow-brutal-sm border-2 border-black overflow-hidden focus-within:ring-2 focus-within:ring-[#ccff00] focus-within:ring-offset-2",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroup.displayName = "InputGroup"

const InputGroupText = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center px-4 bg-muted font-body text-sm text-muted-foreground border-r-2 border-black shrink-0",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroupText.displayName = "InputGroupText"

export { InputGroup, InputGroupText }
