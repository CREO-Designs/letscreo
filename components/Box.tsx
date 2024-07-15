import { twMerge } from "tailwind-merge";

type BoxPropsType = { children: React.ReactNode; className?: string };

export default function Box({ children, className, ...rest }: BoxPropsType) {
  return (
    <article
      className={twMerge("rounded-[10px]", "bg-white", "shadow", className)}
      {...rest}
    >
      {children}
    </article>
  );
}
