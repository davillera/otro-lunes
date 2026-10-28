"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Controller, useWatch, type UseFormReturn } from "react-hook-form";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { Field } from "@/components/molecules/Field";
import { Notice } from "@/components/molecules/Notice";
import { SegmentedControl } from "@/components/molecules/SegmentedControl";
import {
  BODY_TYPE_HINTS,
  BODY_TYPE_LABELS,
  BODY_TYPE_VALUES,
  EXERCISE_DAYS,
  GOAL_LABELS,
  GOAL_VALUES,
  SEX_LABELS,
  SEX_VALUES,
  type Profile,
  type ProfileInput,
} from "@/lib/plan/profile";

type ProfileFormProps = {
  form: UseFormReturn<ProfileInput, unknown, Profile>;
  onSubmit: (profile: Profile) => void | Promise<void>;
  sending: boolean;
  errorMessage?: string;
  /** Si hay un plan guardado en este navegador, a dónde llevar para verlo. */
  savedPlanHref?: string;
};

const sexOptions = SEX_VALUES.map((value) => ({
  value,
  label: SEX_LABELS[value],
}));
const goalOptions = GOAL_VALUES.map((value) => ({
  value,
  label: GOAL_LABELS[value],
}));
const dayOptions = EXERCISE_DAYS.map((value) => ({
  value,
  label: String(value),
}));

export function ProfileForm({
  form,
  onSubmit,
  sending,
  errorMessage,
  savedPlanHref,
}: ProfileFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  const bodyType = useWatch({ control, name: "bodyType" });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6"
    >
      <div className="sm:col-span-3">
        <Controller
          control={control}
          name="sex"
          render={({ field }) => (
            <SegmentedControl
              legend="Sexo"
              name={field.name}
              options={sexOptions}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.sex?.message}
            />
          )}
        />
      </div>

      <div className="sm:col-span-3">
        <Field
          id="bodyType"
          label="Tipo de cuerpo"
          error={errors.bodyType?.message}
          hint={
            // Reserva dos líneas para que elegir un tipo no empuje el resto del formulario.
            <span className="block sm:min-h-10">
              {bodyType ? `${BODY_TYPE_HINTS[bodyType]} ` : null}
              <Link
                href="https://www.tuasaude.com/es/somatotipo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-terracota-hondo underline"
              >
                ¿No sabes cuál eres?
                <ExternalLink aria-hidden="true" className="size-3.5" />
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </Link>
            </span>
          }
        >
          {(control) => (
            <Select {...control} defaultValue="" {...register("bodyType")}>
              <option value="" disabled>
                Elige uno
              </option>
              {BODY_TYPE_VALUES.map((value) => (
                <option key={value} value={value}>
                  {BODY_TYPE_LABELS[value]}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field id="age" label="Edad" error={errors.age?.message}>
          {(control) => (
            <Input
              {...control}
              type="number"
              inputMode="numeric"
              autoComplete="off"
              unit="años"
              {...register("age", { valueAsNumber: true })}
            />
          )}
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field id="weight" label="Peso" error={errors.weight?.message}>
          {(control) => (
            <Input
              {...control}
              type="number"
              inputMode="decimal"
              step="any"
              autoComplete="off"
              unit="kg"
              {...register("weight", { valueAsNumber: true })}
            />
          )}
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field id="height" label="Altura" error={errors.height?.message}>
          {(control) => (
            <Input
              {...control}
              type="number"
              inputMode="numeric"
              autoComplete="off"
              unit="cm"
              {...register("height", { valueAsNumber: true })}
            />
          )}
        </Field>
      </div>

      <div className="sm:col-span-6">
        <Controller
          control={control}
          name="exerciseFrequency"
          render={({ field }) => (
            <SegmentedControl
              legend="Días de ejercicio por semana"
              name={field.name}
              options={dayOptions}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.exerciseFrequency?.message}
              columns="seven"
            />
          )}
        />
      </div>

      <div className="sm:col-span-6">
        <Controller
          control={control}
          name="goal"
          render={({ field }) => (
            <SegmentedControl
              legend="Objetivo"
              name={field.name}
              options={goalOptions}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.goal?.message}
              columns="four"
            />
          )}
        />
      </div>

      {errorMessage ? (
        <Notice tone="error" className="sm:col-span-6">
          {errorMessage}
        </Notice>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-6">
        <Button type="submit" loading={sending} className="min-w-52">
          {sending ? "Armando tu plan…" : "Armar mi plan"}
          {sending ? null : (
            <ArrowRight aria-hidden="true" className="size-5" />
          )}
        </Button>
        {savedPlanHref ? (
          <Link
            href={savedPlanHref}
            className="font-semibold text-terracota-hondo underline"
          >
            Ver mi plan guardado
          </Link>
        ) : null}
      </div>
    </form>
  );
}
