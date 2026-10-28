import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonClassName, type ButtonVariant } from "./Button";

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function LinkButton({
  variant = "primary",
  className,
  ...props
}: LinkButtonProps) {
  return <Link className={buttonClassName(variant, className)} {...props} />;
}
