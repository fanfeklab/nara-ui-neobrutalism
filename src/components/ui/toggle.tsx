import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-xl text-sm font-bold uppercase tracking-tight whitespace-nowrap transition-all outline-hidden hover:bg-[#ccff00] hover:text-black hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal focus-visible:ring-2 focus-visible:ring-[#ccff00] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-pressed:bg-[#ccff00] aria-pressed:text-black data-[state=on]:bg-[#ccff00] data-[state=on]:text-black [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "border-2 border-transparent hover:border-black data-[state=on]:border-black data-[state=on]:shadow-brutal data-[state=on]:-translate-x-[2px] data-[state=on]:-translate-y-[2px]",
        outline: "border-2 border-black bg-transparent data-[state=on]:shadow-brutal data-[state=on]:-translate-x-[2px] data-[state=on]:-translate-y-[2px]",
      },
      size: {
        default:
          "h-10 min-w-10 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-8 min-w-8 px-2 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 min-w-12 px-4 text-base has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
