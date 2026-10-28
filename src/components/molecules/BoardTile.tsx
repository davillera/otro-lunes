import { RepaintValue } from "@/components/atoms/RepaintValue";
import { cn } from "@/lib/cn";

type BoardTileProps = {
  label: string;
  /** `undefined` deja la tarjeta "sin esmaltar" mientras la persona no la ha llenado. */
  value: string | undefined;
  className?: string;
};

/** Una tarjeta de loza del plato: etiqueta pequeña y el valor que la persona eligió. */
export function BoardTile({ label, value, className }: BoardTileProps) {
  const isEmpty = value === undefined;

  return (
    <div
      className={cn(
        "flex min-h-16 flex-col justify-center rounded-2xl bg-loza px-4 py-2 shadow-loza",
        className,
      )}
    >
      <dt className="text-sm font-medium text-tinta-suave">{label}</dt>
      <dd
        className={cn(
          "text-lg leading-tight font-semibold tabular-nums",
          isEmpty && "text-tinta-suave",
        )}
      >
        <RepaintValue value={isEmpty ? "—" : value} />
      </dd>
    </div>
  );
}
