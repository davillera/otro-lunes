import { cn } from "@/lib/cn";

type WordmarkProps = { className?: string };

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display text-xl leading-none tracking-tight whitespace-nowrap sm:text-3xl",
        className,
      )}
    >
      Otro <span className="text-terracota">Lunes</span>
    </span>
  );
}
