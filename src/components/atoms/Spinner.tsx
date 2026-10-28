import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type SpinnerProps = { className?: string };

export function Spinner({ className }: SpinnerProps) {
  return (
    <LoaderCircle
      aria-hidden="true"
      className={cn(
        "size-5 animate-spin motion-reduce:animate-none",
        className,
      )}
    />
  );
}
