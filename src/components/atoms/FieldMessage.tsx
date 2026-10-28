import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FieldMessageProps = {
  id: string;
  tone?: "hint" | "error";
  children: ReactNode;
};

/** El error lleva icono y texto: nunca depende solo del color. */
export function FieldMessage({
  id,
  tone = "hint",
  children,
}: FieldMessageProps) {
  const isError = tone === "error";
  return (
    <p
      id={id}
      className={cn(
        "flex items-start gap-1.5 text-sm",
        isError ? "font-semibold text-terracota-hondo" : "text-tinta-suave",
      )}
    >
      {isError ? (
        <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
