import { LinkButton } from "@/components/atoms/LinkButton";
import { StudioTemplate } from "@/components/templates/StudioTemplate";
import { APP_STEPS } from "@/lib/copy";

export function NotFoundPage() {
  return (
    <StudioTemplate
      steps={APP_STEPS.data}
      main={
        <div className="flex max-w-prose flex-col items-start gap-4">
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-title">
            Esta página no existe
          </h1>
          <p className="text-lg text-tinta-suave">
            El enlace está mal escrito o la página ya no está. Puedes volver al
            formulario y armar tu plan desde ahí.
          </p>
          <LinkButton href="/">Volver al inicio</LinkButton>
        </div>
      }
    />
  );
}
