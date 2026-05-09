import React from "react";
import { cn } from "@/lib/utils";

interface SparkleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  animate?: "none" | "spin" | "pulse";
}

export function Sparkle({
  size = 48,
  color = "#ccff00",
  className,
  animate = "spin",
  ...props
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "overflow-visible",
        {
          "animate-[spin_4s_linear_infinite]": animate === "spin",
          "animate-pulse": animate === "pulse",
        },
        className
      )}
      {...props}
    >
      <path
        d="M50 0L56.5 35.5L85.5 14.5L64.5 43.5L100 50L64.5 56.5L85.5 85.5L56.5 64.5L50 100L43.5 64.5L14.5 85.5L35.5 56.5L0 50L35.5 43.5L14.5 14.5L43.5 35.5L50 0Z"
        fill={color}
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
