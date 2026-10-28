export const DISCLAIMER =
  "Es una guía general generada con IA y no sustituye a un médico, nutricionista o entrenador. Si tienes una condición de salud, consúltalo antes de empezar.";

export const APP_STEPS = {
  data: [
    { label: "Tus datos", state: "current" },
    { label: "Tu plan", state: "todo" },
  ],
  plan: [
    { label: "Tus datos", state: "done" },
    { label: "Tu plan", state: "current" },
  ],
} as const;
