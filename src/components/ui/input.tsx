import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-xl border-2 border-black bg-white dark:bg-black px-4 py-2 font-body text-base text-foreground shadow-brutal-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
