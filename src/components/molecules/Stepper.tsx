import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export type StepperStep = { label: string; state: "done" | "current" | "todo" };

type StepperProps = { steps: ReadonlyArray<StepperStep> };

/** Indicador de pasos estándar: el actual va subrayado y en negrita, el hecho lleva marca. */
export function Stepper({ steps }: StepperProps) {
  return (
    <ol aria-label="Pasos" className="flex items-center gap-4 text-sm sm:gap-6">
      {steps.map((step, index) => (
        <li
          key={step.label}
          aria-current={step.state === "current" ? "step" : undefined}
          className={cn(
            "flex items-center gap-1.5 border-b-2 pb-0.5 whitespace-nowrap",
            step.state === "current"
              ? "border-terracota font-semibold text-tinta"
              : "border-transparent font-medium text-tinta-suave",
          )}
        >
          {step.state === "done" ? (
            <Check aria-hidden="true" className="size-4" />
          ) : (
            <span className="tabular-nums">{index + 1}</span>
          )}
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  );
}
