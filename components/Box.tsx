type BoxPropsType = { children: React.ReactNode; className?: string };

export default function Box({ children, className, ...rest }: BoxPropsType) {
  return (
    <h2
      className={`rounded-[10px] bg-white shadow ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </h2>
  );
}
