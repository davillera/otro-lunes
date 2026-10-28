import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Spinner } from "./Spinner";

export type ButtonVariant = "primary" | "secondary";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-terracota text-loza hover:bg-terracota-hondo",
  secondary: "bg-loza text-tinta shadow-loza hover:bg-piedra-hondo",
};

/** Clases compartidas por `Button` y `LinkButton` para que ambos se vean igual. */
export function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 aria-busy:cursor-wait aria-busy:opacity-100",
    variants[variant],
    className,
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={buttonClassName(variant, className)}
      {...props}
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
}
