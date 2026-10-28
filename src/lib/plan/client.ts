import { planSchema, type Plan } from "./plan";
import type { Profile } from "./profile";

export class PlanRequestError extends Error {
  constructor(
    message: string,
    readonly fieldErrors?: Record<string, string[] | undefined>,
  ) {
    super(message);
    this.name = "PlanRequestError";
  }
}

const NETWORK_MESSAGE =
  "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.";

export async function requestPlan(profile: Profile): Promise<Plan> {
  let response: Response;
  try {
    response = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
  } catch {
    throw new PlanRequestError(NETWORK_MESSAGE);
  }

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const error = (
      payload as {
        error?: { message?: string; fieldErrors?: Record<string, string[]> };
      } | null
    )?.error;
    throw new PlanRequestError(
      error?.message ?? "No pudimos generar tu plan. Intenta de nuevo.",
      error?.fieldErrors,
    );
  }

  const parsed = planSchema.safeParse(
    (payload as { plan?: unknown } | null)?.plan,
  );
  if (!parsed.success) {
    throw new PlanRequestError(
      "La respuesta del servidor llegó incompleta. Intenta de nuevo.",
    );
  }
  return parsed.data;
}
