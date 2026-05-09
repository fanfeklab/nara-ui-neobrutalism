import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-2 group-[.toaster]:border-black group-[.toaster]:shadow-brutal group-[.toaster]:rounded-2xl font-body p-4",
          title: "font-display font-bold text-lg leading-none tracking-tight mb-1",
          description: "group-[.toast]:text-muted-foreground font-body text-sm",
          success: "group-[.toaster]:!bg-success group-[.toaster]:!text-white [&>div>svg]:!text-white group-[.toast]:[&_[data-title]]:!text-white group-[.toast]:[&_[data-description]]:!text-white/90 group-[.toaster]:!border-black",
          error: "group-[.toaster]:!bg-destructive group-[.toaster]:!text-white [&>div>svg]:!text-white group-[.toast]:[&_[data-title]]:!text-white group-[.toast]:[&_[data-description]]:!text-white/90 group-[.toaster]:!border-black",
          info: "group-[.toaster]:!bg-info group-[.toaster]:!text-white [&>div>svg]:!text-white group-[.toast]:[&_[data-title]]:!text-white group-[.toast]:[&_[data-description]]:!text-white/90 group-[.toaster]:!border-black",
          warning: "group-[.toaster]:!bg-warning group-[.toaster]:!text-black [&>div>svg]:!text-black group-[.toast]:[&_[data-title]]:!text-black group-[.toast]:[&_[data-description]]:!text-black/90 group-[.toaster]:!border-black",
          actionButton:
            "group-[.toast]:bg-[#ccff00] group-[.toast]:text-black group-[.toast]:border-2 group-[.toast]:border-black group-[.toast]:font-bold group-[.toast]:shadow-brutal-sm hover:group-[.toast]:translate-x-[2px] hover:group-[.toast]:translate-y-[2px] hover:group-[.toast]:shadow-none transition-all",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-2 group-[.toast]:border-black group-[.toast]:font-bold",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
