"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { LinkButton } from "@/components/atoms/LinkButton";
import { DisclaimerNotice } from "@/components/molecules/DisclaimerNotice";
import { Board } from "@/components/organisms/Board";
import { PlanViewer } from "@/components/organisms/PlanViewer";
import { StudioTemplate } from "@/components/templates/StudioTemplate";
import { APP_STEPS } from "@/lib/copy";
import { clearPlan, useStoredPlan } from "@/lib/plan/storage";

function PlanSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      <div className="h-6 w-3/4 animate-pulse rounded-2xl bg-piedra-hondo motion-reduce:animate-none" />
      <div className="h-6 w-1/2 animate-pulse rounded-2xl bg-piedra-hondo motion-reduce:animate-none" />
      <div className="h-64 animate-pulse rounded-2xl bg-piedra-hondo motion-reduce:animate-none" />
    </div>
  );
}

export function PlanPage() {
  const router = useRouter();
  const stored = useStoredPlan();

  function discard() {
    clearPlan();
    router.push("/");
  }

  const days = stored?.plan.days.length ?? 0;
  const title = stored
    ? `Plan de ${days} ${days === 1 ? "día" : "días"}`
    : "Tu plan";

  return (
    <StudioTemplate
      steps={APP_STEPS.plan}
      aside={
        <Board
          title={title}
          values={stored?.profile ?? {}}
          emptyHint="Se llena con tu primer plan"
        />
      }
      main={
        <>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-title">
            Tu plan
          </h1>

          {stored === undefined ? <PlanSkeleton /> : null}

          {stored === null ? (
            <div className="flex max-w-prose flex-col items-start gap-4">
              <p className="text-lg">
                Todavía no hay un plan guardado en este navegador. Llena el
                formulario y te armamos uno.
              </p>
              <LinkButton href="/">Ir al formulario</LinkButton>
            </div>
          ) : null}

          {stored ? (
            <>
              <PlanViewer plan={stored.plan} />
              <DisclaimerNotice />
              <div className="flex flex-wrap gap-4">
                <LinkButton href="/" variant="secondary">
                  Hacer otro plan
                </LinkButton>
              </div>
              <div className="mt-16 border-t border-linea pt-6">
                <p className="mb-3 text-sm text-tinta-suave">
                  Tu plan solo está guardado en este navegador.
                </p>
                <Button variant="secondary" onClick={discard}>
                  Borrar mi plan guardado
                </Button>
              </div>
            </>
          ) : null}
        </>
      }
    />
  );
}
