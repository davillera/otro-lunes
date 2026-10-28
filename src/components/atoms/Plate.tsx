import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PlateProps = { children: ReactNode; className?: string };

/** El plato de loza: borde elevado y un pozo hundido donde se asienta el contenido. */
export function Plate({ children, className }: PlateProps) {
  return (
    <div
      className={cn(
        "relative grid aspect-square place-items-center rounded-full bg-[radial-gradient(circle_at_50%_30%,white,var(--color-loza)_55%,oklch(0.95_0.015_85))] shadow-plato",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[8.5%] rounded-full bg-[linear-gradient(to_bottom,oklch(0.945_0.012_85),var(--color-loza)_65%)] shadow-pozo"
      />
      <div className="relative px-6 text-center">{children}</div>
    </div>
  );
}
