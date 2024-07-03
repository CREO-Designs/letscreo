import React from "react";

type HeadingPropsType = { children: React.ReactNode; className?: string };

export default function Heading({
  children,
  className,
  ...rest
}: HeadingPropsType) {
  return (
    <h2
      className={`mb-5 text-center text-base font-extrabold text-blue-950 sm:mb-10 sm:text-2xl md:mb-12 md:text-4xl lg:mb-[54px] lg:text-[40px] ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </h2>
  );
}
