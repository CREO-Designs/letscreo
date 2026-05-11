import * as React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type InkLinkProps = NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    children: React.ReactNode;
    underline?: boolean;
    arrow?: boolean;
    external?: boolean;
    className?: string;
  };

export function InkLink({
  href,
  children,
  underline = true,
  arrow = false,
  external = false,
  className,
  ...rest
}: InkLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
  return (
    <NextLink
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-1 text-ink",
        underline && "ink-link",
        className,
      )}
      {...externalProps}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-fast ease-editorial group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </NextLink>
  );
}
