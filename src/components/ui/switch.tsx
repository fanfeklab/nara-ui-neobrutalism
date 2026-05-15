import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { Sun, Moon, Cloud, CloudRain, Star } from "lucide-react"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer group inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-black shadow-brutal-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 active:shadow-brutal-active active:translate-x-[4px] active:translate-y-[4px]",
  {
    variants: {
      variant: {
        default:
          "h-7 w-12 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted",
        theme:
          "h-9 w-16 relative overflow-hidden data-[state=checked]:bg-[#1e293b] data-[state=unchecked]:bg-[#bae6fd]", // slate-800 vs sky-200
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full border-2 border-black bg-card ring-0 transition-transform flex items-center justify-center overflow-hidden z-20 group relative",
  {
    variants: {
      variant: {
        default:
          "h-5 w-5 data-[state=checked]:translate-x-[20px] data-[state=unchecked]:translate-x-[2px]",
        theme:
          "h-7 w-7 bg-[#fde047] data-[state=checked]:bg-[#e2e8f0] data-[state=checked]:translate-x-[30px] data-[state=unchecked]:translate-x-[4px]", // yellow-300 vs slate-200
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant }), className)}
    {...props}
    ref={ref}
  >
    {variant === "theme" && (
      <div className="absolute inset-0 pointer-events-none h-full w-full z-10 group/bg overflow-hidden flex items-center transition-all">
        {/* Unchecked state details (Day) */}
        <div className="absolute inset-0 transition-opacity duration-300 transform opacity-100 group-data-[state=checked]:opacity-0">
          <Cloud className="absolute -bottom-2 -right-1 h-6 w-6 text-white fill-white" strokeWidth={0} />
          <Cloud className="absolute bottom-0 right-3 h-5 w-5 text-white fill-white" strokeWidth={0} />
          <Cloud className="absolute -bottom-1 left-2 h-4 w-4 text-white fill-white" strokeWidth={0} />
        </div>

        {/* Checked state details (Night) */}
        <div className="absolute inset-0 transition-opacity duration-300 transform opacity-0 group-data-[state=checked]:opacity-100">
          <Star className="absolute top-2 left-2 h-2 w-2 text-white fill-white animate-pulse" strokeWidth={0} />
          <Star className="absolute bottom-2 left-4 h-1.5 w-1.5 text-white fill-white animate-pulse" strokeWidth={0} style={{ animationDelay: '200ms' }} />
          <Star className="absolute top-1 left-6 h-1 w-1 text-white fill-white animate-pulse" strokeWidth={0} style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    )}

    <SwitchPrimitives.Thumb
      className={cn(thumbVariants({ variant }))}
      // Note: the Radix UI Thumb automatically receives data-state
    >
      {variant === "theme" && (
        <>
          <div className="absolute inset-0 rounded-full flex items-center justify-center transition-opacity duration-300 opacity-100 group-data-[state=checked]:opacity-0">
            {/* Minimal line inside the sun maybe? Or just keep it solid yellow */}
          </div>
          <div className="absolute inset-0 rounded-full flex items-center justify-center transition-opacity duration-300 opacity-0 group-data-[state=checked]:opacity-100">
            {/* Crater for moon */}
            <div className="absolute top-1.5 left-1 h-1.5 w-1.5 rounded-full bg-[#cbd5e1] shadow-inner" />
            <div className="absolute bottom-1.5 right-1.5 h-2 w-2 rounded-full bg-[#cbd5e1] shadow-inner" />
            <div className="absolute top-3 left-3 h-1 w-1 rounded-full bg-[#cbd5e1] shadow-inner" />
          </div>
        </>
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

