type SectionPropsType = { children: React.ReactNode; className?: string };

export default function Section({
  children,
  className,
  ...rest
}: SectionPropsType) {
  return (
    <section
      className={`px-4 pt-9 sm:px-8 sm:pt-16 md:px-14 lg:px-[88px] lg:pt-20 xl:px-[204px] ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </section>
  );
}
