import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type InputProps = ComponentProps<"input"> & {
  /** Unidad que se muestra pegada al valor, por ejemplo "kg". */
  unit?: string;
  invalid?: boolean;
};

export function Input({ unit, invalid, className, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex min-h-12 items-center rounded-2xl bg-loza shadow-loza focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-pizarra",
        invalid && "ring-2 ring-terracota-hondo",
        className,
      )}
    >
      <input
        aria-invalid={invalid || undefined}
        className="min-w-0 flex-1 bg-transparent px-4 py-2 text-base tabular-nums outline-none placeholder:text-tinta-suave"
        {...props}
      />
      {unit ? (
        <span
          aria-hidden="true"
          className="pr-4 text-sm font-medium text-tinta-suave"
        >
          {unit}
        </span>
      ) : null}
    </div>
  );
}
