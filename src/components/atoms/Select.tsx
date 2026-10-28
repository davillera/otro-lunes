import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type SelectProps = ComponentProps<"select"> & { invalid?: boolean };

export function Select({
  invalid,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <div className={cn("relative", className)}>
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          "min-h-12 w-full appearance-none rounded-2xl bg-loza py-2 pr-11 pl-4 text-base shadow-loza",
          invalid && "ring-2 ring-terracota-hondo",
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-tinta-suave"
      />
    </div>
  );
}
