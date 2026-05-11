import * as React from "react";
import { cn } from "@/lib/utils";

type FieldShellProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
};

export function FieldShell({
  label,
  htmlFor,
  hint,
  required,
  className,
  children,
}: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-center justify-between text-eyebrow text-ink-500"
      >
        <span>
          {label}
          {required && <span className="text-clay"> *</span>}
        </span>
        {hint && <span className="normal-case tracking-normal text-ink-300">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

const fieldClass =
  "w-full bg-transparent border-0 border-b border-ink/30 px-0 py-3 font-sans text-base text-ink placeholder:text-ink-300 focus:border-ink focus-visible:outline-none focus-visible:ring-0 transition-colors duration-DEFAULT ease-editorial";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(fieldClass, className)}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(fieldClass, "resize-none", className)}
      {...props}
    />
  );
});
