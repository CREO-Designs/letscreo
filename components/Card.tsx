import { twMerge } from "tailwind-merge";

type CardPropsType = { children: React.ReactNode; className?: string };

export default function Card({ children, className, ...rest }: CardPropsType) {
  return (
    <article
      className={twMerge(
        "rounded-[10px]",
        "border",
        "border-zinc-300",
        "bg-white",
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  );
}
