import "server-only";
import type { Plan } from "./plan";
import type { Profile } from "./profile";

/** Plan de ejemplo para desarrollo (PLAN_MOCK=1). No viene de ningún modelo. */
export function samplePlan(profile: Profile): Plan {
  const templates = [
    {
      focus: "Pierna y glúteo",
      exercises: [
        [
          "Sentadilla con peso corporal",
          4,
          "12-15",
          "Baja hasta que el muslo quede paralelo.",
        ],
        ["Zancadas alternas", 3, "10 por pierna", ""],
        ["Puente de glúteo", 4, "15", "Aprieta arriba un segundo."],
        ["Peso muerto rumano", 3, "10-12", "Espalda neutra, rodillas suaves."],
        ["Elevación de talones", 3, "20", ""],
      ],
    },
    {
      focus: "Empuje: pecho, hombro y tríceps",
      exercises: [
        ["Flexiones de pecho", 4, "8-12", "Si es difícil, apoya las rodillas."],
        ["Press de hombro con mancuernas", 3, "10-12", ""],
        ["Fondos en banco", 3, "10-12", ""],
        [
          "Elevaciones laterales",
          3,
          "12-15",
          "Sube hasta la altura del hombro.",
        ],
        ["Plancha", 3, "40 s", "Descansa 30 s entre series."],
      ],
    },
    {
      focus: "Tirón: espalda y bíceps",
      exercises: [
        ["Remo con mancuerna", 4, "10-12", "Codo pegado al costado."],
        ["Jalón al pecho o dominadas asistidas", 3, "8-10", ""],
        ["Remo invertido", 3, "10-12", ""],
        ["Curl de bíceps", 3, "12", ""],
        ["Superman en el suelo", 3, "15", "Pausa de dos segundos arriba."],
      ],
    },
    {
      focus: "Cuerpo completo y cardio suave",
      exercises: [
        ["Burpees sin salto", 3, "10", ""],
        ["Sentadilla goblet", 3, "12", ""],
        ["Remo con banda", 3, "15", ""],
        ["Mountain climbers", 3, "30 s", ""],
        [
          "Caminata rápida",
          1,
          "20 min",
          "Ritmo en que puedas hablar entrecortado.",
        ],
      ],
    },
  ];

  const days = Array.from({ length: profile.exerciseFrequency }, (_, index) => {
    const template = templates[index % templates.length];
    return {
      label: `Día ${index + 1}`,
      focus: template.focus,
      exercises: template.exercises.map(([name, sets, reps, notes]) => ({
        name: String(name),
        sets: Number(sets),
        reps: String(reps),
        notes: String(notes),
      })),
    };
  });

  return {
    summary:
      "Plan de ejemplo para probar la interfaz: no lo generó ningún modelo. Reparte la proteína en todas las comidas y deja un día de descanso entre sesiones parecidas.",
    meals: [
      {
        slot: "desayuno",
        description:
          "2 huevos revueltos, 1 arepa mediana, media taza de papaya y un café con leche.",
      },
      {
        slot: "media_manana",
        description:
          "1 yogur natural con 2 cucharadas de avena y un puñado de nueces.",
      },
      {
        slot: "almuerzo",
        description:
          "150 g de pechuga a la plancha, 1 taza de arroz integral, ensalada grande y media taza de frijoles.",
      },
      {
        slot: "merienda",
        description:
          "1 banano y 2 cucharadas de mantequilla de maní sobre pan integral.",
      },
      {
        slot: "cena",
        description:
          "Sopa de verduras con 120 g de pescado, 1 papa mediana y agua de panela sin exceso.",
      },
    ],
    days,
  };
}
