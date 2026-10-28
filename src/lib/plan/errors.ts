/** Error con un mensaje apto para mostrarse al usuario y su código HTTP. */
export class PlanError extends Error {
  constructor(
    readonly code:
      | "service_unavailable"
      | "rate_limited"
      | "generation_failed"
      | "invalid_request",
    readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "PlanError";
  }
}

export const planErrors = {
  notConfigured: () =>
    new PlanError(
      "service_unavailable",
      503,
      "El servicio de planes todavía no está configurado. Intenta más tarde.",
    ),
  busy: () =>
    new PlanError(
      "service_unavailable",
      503,
      "El servicio está saturado. Espera un minuto e intenta de nuevo.",
    ),
  tooManyRequests: () =>
    new PlanError(
      "rate_limited",
      429,
      "Has pedido varios planes seguidos. Espera un minuto e intenta de nuevo.",
    ),
  failed: () =>
    new PlanError(
      "generation_failed",
      502,
      "No pudimos generar tu plan. Intenta de nuevo.",
    ),
  incomplete: () =>
    new PlanError(
      "generation_failed",
      502,
      "El plan salió incompleto. Intenta de nuevo.",
    ),
};
