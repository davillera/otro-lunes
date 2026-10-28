import { Check } from "lucide-react";
import { useId } from "react";
import { FieldMessage } from "@/components/atoms/FieldMessage";
import { cn } from "@/lib/cn";

type Option<T extends string | number> = { value: T; label: string };

type SegmentedControlProps<T extends string | number> = {
  legend: string;
  name: string;
  options: ReadonlyArray<Option<T>>;
  value: T | undefined;
  onChange: (value: T) => void;
  onBlur?: () => void;
  error?: string;
  columns?: "two" | "four" | "seven";
};

const columnClasses = {
  two: "grid-cols-2",
  four: "grid-cols-2 sm:grid-cols-4",
  seven: "grid-cols-7",
} as const;

/** Grupo de radios reales con apariencia de segmentos; el elegido lleva marca y peso, no solo color. */
export function SegmentedControl<T extends string | number>({
  legend,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  columns = "two",
}: SegmentedControlProps<T>) {
  const errorId = useId();

  return (
    <fieldset
      className="flex min-w-0 flex-col gap-1.5"
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="mb-1.5 text-sm font-semibold">{legend}</legend>
      <div className={cn("grid gap-2", columnClasses[columns])}>
        {options.map((option) => (
          <label key={String(option.value)} className="relative flex">
            <input
              type="radio"
              name={name}
              value={String(option.value)}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              onBlur={onBlur}
              className="peer sr-only"
            />
            <span
              className={cn(
                "flex min-h-12 w-full flex-1 items-center justify-center gap-1.5 rounded-2xl bg-loza px-2 text-center text-base font-medium text-tinta shadow-loza transition-colors duration-150 hover:bg-piedra-hondo",
                "peer-checked:bg-pizarra peer-checked:font-semibold peer-checked:text-loza peer-checked:hover:bg-pizarra-hondo",
                "peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-pizarra",
                error && "ring-2 ring-terracota-hondo",
              )}
            >
              <Check
                aria-hidden="true"
                className="hidden size-4 [input:checked+span_&]:block"
              />
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <FieldMessage id={errorId} tone="error">
          {error}
        </FieldMessage>
      ) : null}
    </fieldset>
  );
}
