import { twMerge } from "tailwind-merge";

type SectionPropsType = { children: React.ReactNode; className?: string };

export default function Section({
  children,
  className,
  ...rest
}: SectionPropsType) {
  return (
    <section
      className={twMerge(
        "px-4",
        "pt-9",
        "sm:px-8",
        "sm:pt-16",
        "md:px-14",
        "lg:px-[88px]",
        "lg:pt-20",
        "xl:px-[204px]",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
