import { cn } from "@/lib/cn";

const WEEK = 7;

type WeekDotsProps = {
  className?: string;
  /** Días de entrenamiento por semana; cada uno ilumina un punto. */
  lit: number | undefined;
};

/** Siete puntos, uno por día: decorativo, el dato ya se lee en la tarjeta "Entrenas". */
export function WeekDots({ lit, className }: WeekDotsProps) {
  const count = typeof lit === "number" ? Math.min(Math.max(lit, 0), WEEK) : 0;

  return (
    <div
      aria-hidden="true"
      className={cn("flex justify-center gap-1.5", className)}
    >
      {Array.from({ length: WEEK }, (_, index) => (
        <span
          key={index}
          className={cn(
            "size-2.5 rounded-full transition-colors duration-300 lg:size-3",
            index < count ? "bg-mostaza" : "bg-celadon/60",
          )}
        />
      ))}
    </div>
  );
}
