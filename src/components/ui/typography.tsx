import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter",
      h2: "scroll-m-20 border-b-2 border-border pb-2 font-display text-3xl font-black uppercase tracking-tighter first:mt-0 mt-10",
      h3: "scroll-m-20 font-display text-2xl font-black uppercase tracking-tighter mt-8",
      h4: "scroll-m-20 font-display text-xl font-black uppercase tracking-tighter mt-8",
      p: "leading-7 font-body [&:not(:first-child)]:mt-6",
      blockquote:
        "mt-6 border-l-4 border-black pl-6 italic font-body bg-muted py-2 pr-4 shadow-brutal-sm",
      code: "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "font-body text-xl text-muted-foreground",
      large: "font-body text-lg font-semibold",
      small: "font-body text-sm font-medium leading-none",
      muted: "font-body text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends
    React.HTMLAttributes<
      HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLElement
    >,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp =
      as ||
      ((variant && ["h1", "h2", "h3", "h4", "p", "blockquote"].includes(variant)
        ? variant
        : "p") as React.ElementType);
    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
