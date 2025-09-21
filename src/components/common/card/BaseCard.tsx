// BaseCard.tsx
import { cn } from "@/utils/style";
import React from "react";

type BaseCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "a" | React.ElementType;
  href?: string;
  clickable?: boolean;
  shadow?: "sm" | "md" | "lg" | "none";
  radius?: "md" | "xl" | "2xl";
  padded?: boolean; // 내부 패딩 여부(상세 카드에서 분리하고 싶을 때 false)
};

const shadow = {
  none: "",
  sm: "shadow",
  md: "shadow-md",
  lg: "shadow-lg",
} as const;

const radius = {
  md: "rounded-xl",
  xl: "rounded-2xl",
  "2xl": "rounded-3xl",
} as const;

export const BaseCard = React.forwardRef<HTMLElement, BaseCardProps>(
  (
    {
      as: Comp = "div",
      href,
      clickable,
      shadow: sh = "md",
      radius: rd = "xl",
      padded = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Comp
        ref={ref as any}
        href={href as any}
        className={cn(
          "bg-white border border-slate-200/70 overflow-hidden flex flex-col h-full",
          shadow[sh],
          radius[rd],
          clickable && "transition hover:-translate-y-0.5 hover:shadow-lg",
          padded && "p-6",
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);
BaseCard.displayName = "BaseCard";