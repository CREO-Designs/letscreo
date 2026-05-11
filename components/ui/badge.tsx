import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "ink" | "clay" | "outline";
};

const variantClass: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-bone-200 text-ink",
  ink: "bg-ink text-bone",
  clay: "bg-clay text-bone",
  outline: "border border-line text-ink-500",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-eyebrow uppercase tracking-[0.18em]",
        variantClass[variant],
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow uppercase tracking-[0.18em] text-ink-500",
        className,
      )}
      {...props}
    >
      <span className="inline-block h-px w-6 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  );
}
