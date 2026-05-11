import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-extrabold uppercase tracking-[0.14em] transition-[background,color,box-shadow,transform] duration-fast ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-bone disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-bone hover:bg-clay hover:text-bone active:translate-y-[1px]",
        secondary:
          "bg-bone text-ink ring-1 ring-inset ring-line hover:ring-ink hover:bg-white",
        outline:
          "border border-ink/80 text-ink hover:bg-ink hover:text-bone",
        ghost: "text-ink hover:text-clay",
        link: "h-auto !p-0 text-ink hover:text-clay normal-case font-sans tracking-normal",
        invert:
          "bg-bone text-ink hover:bg-clay hover:text-bone active:translate-y-[1px]",
        clay: "bg-clay text-bone hover:bg-ink active:translate-y-[1px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-4 text-[11px]",
        md: "h-11 px-6 text-[12px]",
        lg: "h-14 px-8 text-[13px]",
        icon: "h-11 w-11",
      },
      rounded: {
        sharp: "rounded-none",
        soft: "rounded",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "sharp",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  trailingIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      trailingIcon = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const content = trailingIcon ? (
      <>
        <span>{children}</span>
        <ArrowUpRight
          className="size-4 transition-transform duration-fast ease-editorial group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          strokeWidth={2}
          aria-hidden="true"
        />
      </>
    ) : (
      children
    );
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
