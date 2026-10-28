"use client";

import { useEffect, useRef } from "react";
import { Plate } from "@/components/atoms/Plate";
import { RepaintValue } from "@/components/atoms/RepaintValue";
import { WeekDots } from "@/components/atoms/WeekDots";
import { BoardTile } from "@/components/molecules/BoardTile";
import { cn } from "@/lib/cn";
import { DISCLAIMER } from "@/lib/copy";
import {
  BODY_TYPE_LABELS,
  GOAL_LABELS,
  SEX_LABELS,
  type BodyType,
  type Goal,
  type Sex,
} from "@/lib/plan/profile";

export type BoardValues = {
  sex?: Sex;
  age?: number;
  weight?: number;
  height?: number;
  bodyType?: BodyType;
  exerciseFrequency?: number;
  goal?: Goal;
};

type BoardProps = {
  values: BoardValues;
  title: string;
  /** Mensaje de estado que se anuncia a lectores de pantalla (por ejemplo, mientras se genera el plan). */
  statusText?: string;
  /** Texto de la tarjeta compacta (celular) mientras todavía no hay datos. */
  emptyHint?: string;
};

function has(value: number | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function describe(values: BoardValues) {
  const days = values.exerciseFrequency;
  return {
    sex: values.sex ? SEX_LABELS[values.sex] : undefined,
    age: has(values.age) ? `${values.age} años` : undefined,
    weight: has(values.weight) ? `${values.weight} kg` : undefined,
    height: has(values.height) ? `${values.height} cm` : undefined,
    bodyType: values.bodyType ? BODY_TYPE_LABELS[values.bodyType] : undefined,
    days: has(days) ? `${days} ${days === 1 ? "día" : "días"}` : undefined,
    goal: values.goal ? GOAL_LABELS[values.goal] : undefined,
  };
}

/**
 * El plato: lee de vuelta lo que la persona va eligiendo. El objetivo se asienta
 * en el centro y los demás datos se sirven en tarjetas de loza debajo.
 * En pantallas grandes es una columna completa; en celular, una tarjeta compacta
 * que conserva lo esencial del plato: el objetivo y los siete puntos de la semana.
 */
export function Board({
  values,
  title,
  statusText,
  emptyHint = "Tu plato se llena mientras eliges",
}: BoardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const text = describe(values);

  // Activa la animación de "esmaltado" solo después de la primera pintura.
  useEffect(() => {
    rootRef.current?.setAttribute("data-live", "true");
  }, []);

  const compact = [text.age, text.weight, text.height, text.days].filter(
    Boolean,
  );

  return (
    <div ref={rootRef} className="lg:h-full">
      <section
        aria-label={title}
        className="mx-4 mt-4 flex flex-col gap-1 rounded-3xl bg-loza px-5 py-3 shadow-tarjeta sm:mx-8 lg:hidden"
      >
        <div className="flex items-center justify-between gap-3">
          <p
            className={cn(
              "min-w-0 font-display text-xl leading-tight text-balance",
              text.goal ? "text-terracota-hondo" : "text-tinta-suave",
            )}
          >
            <RepaintValue value={text.goal ?? "Tu objetivo"} />
          </p>
          <WeekDots lit={values.exerciseFrequency} className="shrink-0" />
        </div>
        <p className="text-sm text-tinta-suave tabular-nums">
          {compact.length > 0 ? compact.join(" · ") : emptyHint}
        </p>
        {statusText ? (
          <p
            role="status"
            className="text-sm font-semibold text-terracota-hondo"
          >
            {statusText}
          </p>
        ) : null}
      </section>

      <aside
        aria-label={title}
        className="hidden h-full flex-col overflow-y-auto px-8 py-8 lg:flex xl:px-12"
      >
        <div className="mx-auto my-auto flex w-full max-w-sm flex-col items-center gap-6">
          <h2 className="font-display text-3xl leading-none tracking-tight">
            {title}
          </h2>

          <Plate className="w-full">
            <p className="text-sm font-medium text-tinta-suave">Tu objetivo</p>
            <p
              className={cn(
                "my-3 font-display text-4xl leading-tight text-balance",
                text.goal ? "text-terracota-hondo" : "text-tinta-suave",
              )}
            >
              <RepaintValue value={text.goal ?? "—"} />
            </p>
            <WeekDots lit={values.exerciseFrequency} />
          </Plate>

          <dl className="grid w-full grid-cols-2 gap-3">
            <BoardTile label="Sexo" value={text.sex} />
            <BoardTile label="Cuerpo" value={text.bodyType} />
            <BoardTile label="Edad" value={text.age} />
            <BoardTile label="Peso" value={text.weight} />
            <BoardTile label="Altura" value={text.height} />
            <BoardTile label="Entrenas" value={text.days} />
          </dl>

          <div className="flex flex-col gap-2 text-center">
            {/* Región viva siempre presente y con altura reservada: el plato no salta al aparecer el estado. */}
            <p
              role="status"
              className="min-h-6 text-base font-semibold text-terracota-hondo"
            >
              {statusText}
            </p>
            <p className="text-sm text-balance text-tinta-suave">
              {DISCLAIMER}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
