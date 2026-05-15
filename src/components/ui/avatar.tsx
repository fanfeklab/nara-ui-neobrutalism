import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "default" | "sm" | "lg";
  }
>(({ className, size = "default", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-xl border-2 border-black shadow-brutal-sm bg-muted",
      size === "default" && "h-10 w-10",
      size === "sm" && "h-8 w-8 rounded-lg",
      size === "lg" && "h-14 w-14 rounded-2xl",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-xl bg-muted font-display font-bold uppercase",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-[-2px] right-[-2px] z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-black bg-success",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-inherit" />
  </div>
));
AvatarBadge.displayName = "AvatarBadge";

const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row items-center -space-x-3 [&>div]:shadow-none [&>div]:ring-2 [&>div]:ring-background",
      className,
    )}
    {...props}
  />
));
AvatarGroup.displayName = "AvatarGroup";

const AvatarGroupCount = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-muted font-display font-bold uppercase ring-2 ring-background",
      className,
    )}
    {...props}
  />
));
AvatarGroupCount.displayName = "AvatarGroupCount";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
