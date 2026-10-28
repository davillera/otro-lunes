import { CircleAlert, Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NoticeProps = {
  tone?: "info" | "error";
  children: ReactNode;
  className?: string;
};

/** Aviso en línea: el error se anuncia con `role="alert"` y lleva icono además del color. */
export function Notice({ tone = "info", children, className }: NoticeProps) {
  const isError = tone === "error";
  const Icon = isError ? CircleAlert : Info;

  return (
    <div
      role={isError ? "alert" : undefined}
      className={cn(
        "flex items-start gap-3 rounded-2xl bg-loza p-4 text-sm shadow-loza",
        isError ? "text-tinta ring-2 ring-terracota-hondo" : "text-tinta-suave",
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "mt-0.5 size-4 shrink-0",
          isError && "text-terracota-hondo",
        )}
      />
      <div>{children}</div>
    </div>
  );
}
