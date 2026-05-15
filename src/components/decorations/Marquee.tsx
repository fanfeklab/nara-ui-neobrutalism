import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
  itemClassName?: string;
  repeat?: number;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  bg?: string;
}

export function Marquee({
  text,
  className,
  itemClassName,
  repeat = 10,
  speed = "normal",
  direction = "left",
  bg = "bg-primary",
}: MarqueeProps) {
  const items = Array.from({ length: repeat });

  return (
    <div
      className={cn(
        "relative flex overflow-hidden whitespace-nowrap border-y-2 border-black py-2",
        bg,
        className,
      )}
    >
      <div
        className={cn("flex min-w-full shrink-0", {
          "animate-[marquee_20s_linear_infinite]":
            speed === "slow" && direction === "left",
          "animate-[marquee_10s_linear_infinite]":
            speed === "normal" && direction === "left",
          "animate-[marquee_5s_linear_infinite]":
            speed === "fast" && direction === "left",
          "animate-[marqueeRight_20s_linear_infinite]":
            speed === "slow" && direction === "right",
          "animate-[marqueeRight_10s_linear_infinite]":
            speed === "normal" && direction === "right",
          "animate-[marqueeRight_5s_linear_infinite]":
            speed === "fast" && direction === "right",
        })}
      >
        {items.map((_, i) => (
          <span
            key={"a" + i}
            className={cn(
              "mx-4 text-lg font-black font-display uppercase tracking-tight text-black",
              itemClassName,
            )}
          >
            {text} <span className="inline-block mx-4">✦</span>
          </span>
        ))}
      </div>
      <div
        className={cn("flex min-w-full shrink-0", {
          "animate-[marquee_20s_linear_infinite]":
            speed === "slow" && direction === "left",
          "animate-[marquee_10s_linear_infinite]":
            speed === "normal" && direction === "left",
          "animate-[marquee_5s_linear_infinite]":
            speed === "fast" && direction === "left",
          "animate-[marqueeRight_20s_linear_infinite]":
            speed === "slow" && direction === "right",
          "animate-[marqueeRight_10s_linear_infinite]":
            speed === "normal" && direction === "right",
          "animate-[marqueeRight_5s_linear_infinite]":
            speed === "fast" && direction === "right",
        })}
      >
        {items.map((_, i) => (
          <span
            key={"b" + i}
            className={cn(
              "mx-4 text-lg font-black font-display uppercase tracking-tight text-black",
              itemClassName,
            )}
          >
            {text} <span className="inline-block mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
