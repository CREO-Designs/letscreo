type CardPropsType = { children: React.ReactNode; className?: string };

export default function Card({ children, className, ...rest }: CardPropsType) {
  return (
    <h2
      className={`rounded-[10px] border border-zinc-300 bg-white ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </h2>
  );
}
