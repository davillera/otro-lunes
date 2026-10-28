import "server-only";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { PlanError, planErrors } from "./errors";
import { checkPlan, planSchema, type Plan } from "./plan";
import type { Profile } from "./profile";
import { buildUserPrompt, SYSTEM_PROMPT } from "./prompt";
import { samplePlan } from "./sample";

const MAX_ATTEMPTS = 2;

// Gemini expone un endpoint compatible con el SDK de OpenAI, así que ambos
// proveedores usan el mismo cliente y solo cambian la clave, la URL y el modelo.
const PROVIDERS = {
  gemini: {
    name: "Gemini",
    keyEnv: "GEMINI_API_KEY",
    modelEnv: "GEMINI_MODEL",
    // Alias vigentes: los nombres fechados caducan (gemini-2.5-flash ya da 404).
    // Se evita `gemini-flash-latest`: con este esquema agota el tiempo de espera.
    defaultModel: "gemini-flash-lite-latest",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  },
  openai: {
    name: "OpenAI",
    keyEnv: "OPENAI_API_KEY",
    modelEnv: "OPENAI_MODEL",
    defaultModel: "gpt-4o-mini",
    baseURL: undefined,
  },
} as const;

type ProviderId = keyof typeof PROVIDERS;

const clients = new Map<ProviderId, OpenAI>();

function getProviderId(): ProviderId {
  const id = (process.env.AI_PROVIDER || "gemini").toLowerCase();
  if (id in PROVIDERS) return id as ProviderId;
  console.error(`[plan] AI_PROVIDER "${id}" no es válido (gemini u openai)`);
  throw planErrors.notConfigured();
}

function getClient(id: ProviderId): OpenAI {
  const provider = PROVIDERS[id];
  const apiKey = process.env[provider.keyEnv];
  if (!apiKey) {
    console.error(`[plan] falta ${provider.keyEnv}`);
    throw planErrors.notConfigured();
  }
  let client = clients.get(id);
  if (!client) {
    client = new OpenAI({
      apiKey,
      baseURL: provider.baseURL,
      timeout: 60_000,
      maxRetries: 1,
    });
    clients.set(id, client);
  }
  return client;
}

function toPlanError(error: unknown, providerName: string): PlanError {
  if (error instanceof PlanError) return error;
  if (error instanceof OpenAI.APIError) {
    console.error(
      `[plan] ${providerName} respondió ${error.status}: ${error.message}`,
    );
    if (error.status === 401 || error.status === 403) {
      return planErrors.notConfigured();
    }
    if (error.status === 429 || error.status === 503) {
      return planErrors.busy();
    }
    return planErrors.failed();
  }
  console.error("[plan] error inesperado", error);
  return planErrors.failed();
}

export async function generatePlan(profile: Profile): Promise<Plan> {
  // Solo desarrollo: una variable perdida en producción no debe servir el plan falso.
  if (process.env.PLAN_MOCK === "1" && process.env.NODE_ENV !== "production") {
    await new Promise((resolve) => setTimeout(resolve, 1800));
    return samplePlan(profile);
  }

  let providerName: string = PROVIDERS.gemini.name;

  try {
    const id = getProviderId();
    const provider = PROVIDERS[id];
    providerName = provider.name;
    const model = process.env[provider.modelEnv] || provider.defaultModel;
    const ai = getClient(id);

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const completion = await ai.chat.completions.parse({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(profile) },
        ],
        response_format: zodResponseFormat(planSchema, "plan"),
        max_completion_tokens: 4000,
      });

      const message = completion.choices[0]?.message;
      if (message?.refusal) {
        console.error(
          `[plan] el modelo rechazó la solicitud: ${message.refusal}`,
        );
        throw planErrors.failed();
      }

      const plan = message?.parsed;
      const problem = plan
        ? checkPlan(plan, profile.exerciseFrequency)
        : "respuesta vacía";
      if (plan && !problem) return plan;

      console.error(`[plan] intento ${attempt} descartado: ${problem}`);
    }
    throw planErrors.incomplete();
  } catch (error) {
    throw toPlanError(error, providerName);
  }
}
