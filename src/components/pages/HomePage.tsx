"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { DisclaimerNotice } from "@/components/molecules/DisclaimerNotice";
import { Board } from "@/components/organisms/Board";
import { ProfileForm } from "@/components/organisms/ProfileForm";
import { StudioTemplate } from "@/components/templates/StudioTemplate";
import { APP_STEPS } from "@/lib/copy";
import { PlanRequestError, requestPlan } from "@/lib/plan/client";
import {
  profileSchema,
  type Profile,
  type ProfileInput,
} from "@/lib/plan/profile";
import { savePlan, useStoredPlan } from "@/lib/plan/storage";

export function HomePage() {
  const router = useRouter();
  const stored = useStoredPlan();
  const form = useForm<ProfileInput, unknown, Profile>({
    resolver: zodResolver(profileSchema),
    mode: "onTouched",
  });
  const values = useWatch({ control: form.control });
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  // Al volver desde un plan guardado, deja el formulario con los últimos datos.
  const prefilled = useRef(false);
  useEffect(() => {
    if (stored && !prefilled.current) {
      prefilled.current = true;
      form.reset(stored.profile);
    }
  }, [stored, form]);

  async function onSubmit(profile: Profile) {
    setSending(true);
    setErrorMessage(undefined);
    try {
      const plan = await requestPlan(profile);
      savePlan(profile, plan);
      router.push("/plan");
    } catch (error) {
      if (error instanceof PlanRequestError) {
        for (const [field, messages] of Object.entries(
          error.fieldErrors ?? {},
        )) {
          if (messages?.[0]) {
            form.setError(field as keyof ProfileInput, {
              message: messages[0],
            });
          }
        }
        setErrorMessage(error.message);
      } else {
        setErrorMessage("No pudimos generar tu plan. Intenta de nuevo.");
      }
      setSending(false);
    }
  }

  return (
    <StudioTemplate
      steps={APP_STEPS.data}
      stickyAside
      aside={
        <Board
          title="Tu tablero"
          values={values}
          statusText={
            sending ? "Armando tu plan… tarda unos segundos." : undefined
          }
        />
      }
      main={
        <>
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-title">
              Tu plan de comida y entreno
            </h1>
            <p className="max-w-prose text-lg text-tinta-suave">
              Siete datos y listo: un plan por comidas y una rutina por cada día
              que entrenas.
            </p>
          </div>
          <ProfileForm
            form={form}
            onSubmit={onSubmit}
            sending={sending}
            errorMessage={errorMessage}
            savedPlanHref={stored ? "/plan" : undefined}
          />
          <DisclaimerNotice />
        </>
      }
    />
  );
}
