import { cn } from "@/lib/cn";

type WordmarkProps = { className?: string };

/** Nombre de trabajo; el nombre definitivo del producto sigue pendiente. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display text-2xl leading-none tracking-tight sm:text-3xl",
        className,
      )}
    >
      Diet<span className="text-terracota">GPT</span>
    </span>
  );
}
