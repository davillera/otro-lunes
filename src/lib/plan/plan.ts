import { z } from "zod";

export const MEAL_SLOTS = [
  "desayuno",
  "media_manana",
  "almuerzo",
  "merienda",
  "cena",
] as const;
export type MealSlot = (typeof MEAL_SLOTS)[number];
export const MEAL_LABELS: Record<MealSlot, string> = {
  desayuno: "Desayuno",
  media_manana: "Media mañana",
  almuerzo: "Almuerzo",
  merienda: "Merienda",
  cena: "Cena",
};

// Este esquema también es el formato de respuesta estructurada que se le pide a
// el modelo (Gemini u OpenAI), así que evita restricciones que el modo estricto no admite (min/max
// de arreglos, campos opcionales). Esas reglas se validan en `checkPlan`.
export const planSchema = z.object({
  summary: z.string(),
  meals: z.array(
    z.object({
      slot: z.enum(MEAL_SLOTS),
      description: z.string(),
    }),
  ),
  days: z.array(
    z.object({
      label: z.string(),
      focus: z.string(),
      exercises: z.array(
        z.object({
          name: z.string(),
          sets: z.number().int(),
          reps: z.string(),
          notes: z.string(),
        }),
      ),
    }),
  ),
});

export type Plan = z.infer<typeof planSchema>;
export type PlanDay = Plan["days"][number];

/** Devuelve el motivo por el que el plan no sirve, o null si está completo. */
export function checkPlan(plan: Plan, expectedDays: number): string | null {
  const slots = new Set(plan.meals.map((meal) => meal.slot));
  if (slots.size !== MEAL_SLOTS.length) {
    return "faltan comidas del día";
  }
  if (plan.days.length !== expectedDays) {
    return `se pidieron ${expectedDays} días de entrenamiento y llegaron ${plan.days.length}`;
  }
  if (plan.days.some((day) => day.exercises.length === 0)) {
    return "hay un día sin ejercicios";
  }
  return null;
}
