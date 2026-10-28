import { z } from "zod";

export const SEX_VALUES = ["femenino", "masculino"] as const;
export type Sex = (typeof SEX_VALUES)[number];
export const SEX_LABELS: Record<Sex, string> = {
  femenino: "Mujer",
  masculino: "Hombre",
};

export const BODY_TYPE_VALUES = [
  "ectomorfo",
  "mesomorfo",
  "endomorfo",
] as const;
export type BodyType = (typeof BODY_TYPE_VALUES)[number];
export const BODY_TYPE_LABELS: Record<BodyType, string> = {
  ectomorfo: "Ectomorfo",
  mesomorfo: "Mesomorfo",
  endomorfo: "Endomorfo",
};
export const BODY_TYPE_HINTS: Record<BodyType, string> = {
  ectomorfo: "Delgado, de huesos finos; le cuesta ganar peso.",
  mesomorfo: "Atlético, de hombros anchos; gana músculo con facilidad.",
  endomorfo: "Complexión más ancha; gana peso con facilidad.",
};

export const GOAL_VALUES = [
  "bajar-grasa",
  "ganar-musculo",
  "tonificar",
  "mantenerse",
] as const;
export type Goal = (typeof GOAL_VALUES)[number];
export const GOAL_LABELS: Record<Goal, string> = {
  "bajar-grasa": "Bajar grasa",
  "ganar-musculo": "Ganar músculo",
  tonificar: "Tonificar",
  mantenerse: "Mantenerme saludable",
};
/** Cómo se dice el objetivo dentro del prompt que va al modelo. */
export const GOAL_PROMPTS: Record<Goal, string> = {
  "bajar-grasa": "bajar el nivel de grasa corporal",
  "ganar-musculo": "ganar masa muscular",
  tonificar: "tonificar el cuerpo",
  mantenerse: "mantenerse saludable",
};

export const EXERCISE_DAYS = [1, 2, 3, 4, 5, 6, 7] as const;

export const profileSchema = z.object({
  sex: z.enum(SEX_VALUES, { error: "Elige una opción" }),
  age: z
    .number({ error: "Escribe tu edad" })
    .int("Usa un número entero")
    .min(15, "Desde 15 años")
    .max(80, "Hasta 80 años"),
  weight: z
    .number({ error: "Escribe tu peso" })
    .min(35, "Desde 35 kg")
    .max(150, "Hasta 150 kg"),
  height: z
    .number({ error: "Escribe tu altura" })
    .int("Usa un número entero")
    .min(100, "Desde 100 cm")
    .max(230, "Hasta 230 cm"),
  bodyType: z.enum(BODY_TYPE_VALUES, { error: "Elige un tipo de cuerpo" }),
  exerciseFrequency: z
    .number({ error: "Elige cuántos días entrenas" })
    .int()
    .min(1, "Mínimo 1 día")
    .max(7, "Máximo 7 días"),
  goal: z.enum(GOAL_VALUES, { error: "Elige un objetivo" }),
});

export type ProfileInput = z.input<typeof profileSchema>;
export type Profile = z.output<typeof profileSchema>;
