import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const variants = {
  default: "bg-slate-900 text-white hover:opacity-90",
  outline: "border border-slate-200 hover:bg-slate-50",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
};

export function Button({ className, variant = "default", size = "md", asChild, href, children, ...props }: ButtonProps) {
  const classes = clsx("inline-flex items-center rounded-2xl font-semibold shadow-sm", sizes[size], variants[variant], className);
  if (asChild && href) {
    return <a href={href} className={classes} {...(props as any)}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
