import Link from "next/link";
import { Wordmark } from "@/components/atoms/Wordmark";
import { Stepper, type StepperStep } from "@/components/molecules/Stepper";

type SiteHeaderProps = {
  steps: ReadonlyArray<StepperStep>;
};

export function SiteHeader({ steps }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-piedra px-4 sm:px-8 lg:px-12">
      <Link
        href="/"
        aria-label="Otro Lunes, ir al inicio"
        className="rounded-md"
      >
        <Wordmark />
      </Link>
      <Stepper steps={steps} />
    </header>
  );
}
