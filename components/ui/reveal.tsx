"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  threshold = 0.18,
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsShown(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsShown(false);
          }
        });
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return React.createElement(
    Tag as string,
    {
      ref: ref as React.RefObject<HTMLElement>,
      className: cn("reveal", className),
      "data-revealed": isShown ? "true" : "false",
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
