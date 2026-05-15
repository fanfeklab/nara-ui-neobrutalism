import React from "react";
import { cn } from "@/lib/utils";

interface AbstractBlobProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  variant?: 1 | 2;
  animate?: "none" | "float" | "spin";
}

export function AbstractBlob({
  color = "var(--color-secondary)",
  className,
  variant = 1,
  animate = "float",
  ...props
}: AbstractBlobProps) {
  const d1 =
    "M18.5,-23.4C26.1,-19.1,35.9,-17,41.9,-10.8C47.9,-4.6,50.1,5.6,47.1,14.6C44.1,23.6,35.8,31.4,26.4,36.9C16.9,42.4,6.2,45.5,-3.6,41.5C-13.4,37.5,-22.3,26.4,-31.2,16.5C-40,6.5,-48.9,-2.4,-50.2,-12.3C-51.4,-22.2,-45,-33,-35.1,-37C-25.2,-41,-12.6,-38,-2.6,-34.5C7.3,-31,10.9,-27.7,18.5,-23.4Z";
  const d2 =
    "M24.7,-29.4C32.1,-21.5,38.3,-12.6,40.1,-3.1C41.9,6.4,39.3,16.5,33.5,25C27.7,33.5,18.6,40.4,8.5,43.2C-1.5,45.9,-12.5,44.5,-20.9,38.8C-29.4,33.1,-35.3,23.2,-40.1,12.8C-44.8,2.4,-48.4,-8.6,-45.3,-17.1C-42.3,-25.6,-32.6,-31.7,-22.9,-38.5C-13.2,-45.3,-3.5,-52.8,4.5,-58.3C12.5,-63.8,24.9,-67.2,24.7,-29.4Z";

  return (
    <svg
      viewBox="-50 -50 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "overflow-visible",
        {
          "animate-[float_6s_ease-in-out_infinite]": animate === "float",
          "animate-[spin_10s_linear_infinite]": animate === "spin",
        },
        className,
      )}
      {...props}
    >
      <path
        d={variant === 1 ? d1 : d2}
        fill={color}
        stroke="#000000"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
