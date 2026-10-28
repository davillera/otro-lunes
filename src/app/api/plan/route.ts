import { z } from "zod";
import { PlanError, planErrors } from "@/lib/plan/errors";
import { generatePlan } from "@/lib/plan/generate";
import { profileSchema } from "@/lib/plan/profile";
import { isRateLimited } from "@/lib/rate-limit";

function errorResponse(
  status: number,
  code: string,
  message: string,
  fieldErrors?: Record<string, string[] | undefined>,
) {
  return Response.json({ error: { code, message, fieldErrors } }, { status });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    const error = planErrors.tooManyRequests();
    return errorResponse(error.status, error.code, error.message);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse(
      400,
      "invalid_request",
      "La solicitud no es un JSON válido.",
    );
  }

  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) {
    return errorResponse(
      422,
      "invalid_request",
      "Revisa los datos del formulario.",
      z.flattenError(parsed.error).fieldErrors,
    );
  }

  try {
    const plan = await generatePlan(parsed.data);
    return Response.json({ plan });
  } catch (error) {
    const planError = error instanceof PlanError ? error : planErrors.failed();
    return errorResponse(planError.status, planError.code, planError.message);
  }
}
