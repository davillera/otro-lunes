import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { StepperStep } from "@/components/molecules/Stepper";
import { SiteHeader } from "@/components/organisms/SiteHeader";

type StudioTemplateProps = {
  steps: ReadonlyArray<StepperStep>;
  main: ReactNode;
  /** Tablero lateral. En pantallas grandes queda fijo a la derecha; en celular va arriba. */
  aside?: ReactNode;
  /** En celular deja el tablero fijo bajo la cabecera, útil mientras se llena un formulario. */
  stickyAside?: boolean;
};

export function StudioTemplate({
  steps,
  main,
  aside,
  stickyAside = false,
}: StudioTemplateProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-20 focus:rounded-full focus:bg-loza focus:px-5 focus:py-2 focus:font-semibold focus:text-tinta focus:shadow-tarjeta"
      >
        Saltar al contenido
      </a>
      <SiteHeader steps={steps} />
      <div className="grid flex-1 grid-cols-1 content-start lg:grid-cols-12">
        <main
          id="contenido"
          className="flex flex-col gap-6 px-4 py-8 sm:px-8 lg:col-span-7 lg:gap-10 lg:px-12 lg:py-14"
        >
          {main}
        </main>
        {aside ? (
          <div
            className={cn(
              "order-first lg:order-last lg:col-span-5",
              stickyAside &&
                "sticky top-16 z-[5] bg-piedra pb-2 lg:static lg:pb-0",
            )}
          >
            <div className="lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)]">
              {aside}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
