"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-sm";

  const variants = {
    primary:
      "bg-secondary text-background hover:bg-accent hover:shadow-[0_0_30px_rgba(200,164,78,0.3)]",
    secondary:
      "border border-secondary/40 text-secondary hover:border-secondary hover:bg-secondary/10",
    ghost: "text-foreground hover:text-secondary",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
