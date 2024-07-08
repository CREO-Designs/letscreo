type BoxPropsType = { children: React.ReactNode; className?: string };

export default function Box({ children, className, ...rest }: BoxPropsType) {
  return (
    <article
      className={`rounded-[10px] bg-white shadow ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </article>
  );
}
