"use client";

import { Button } from "@/components/atoms/Button";
import { StudioTemplate } from "@/components/templates/StudioTemplate";
import { APP_STEPS } from "@/lib/copy";

type ErrorPageProps = { reset: () => void };

export function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <StudioTemplate
      steps={APP_STEPS.data}
      main={
        <div className="flex max-w-prose flex-col items-start gap-4">
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-title">
            Algo salió mal
          </h1>
          <p className="text-lg text-tinta-suave">
            Tuvimos un problema al mostrar esta página. Tus datos no se
            perdieron.
          </p>
          <Button onClick={reset}>Intentar de nuevo</Button>
        </div>
      }
    />
  );
}
