"use client";

import { useMemo, useSyncExternalStore } from "react";
import { z } from "zod";
import { planSchema, type Plan } from "./plan";
import { profileSchema, type Profile } from "./profile";

const KEY = "dietgpt:last-plan";
const CHANGE_EVENT = "dietgpt:plan-change";

const storedSchema = z.object({
  profile: profileSchema,
  plan: planSchema,
  createdAt: z.string(),
});

export type StoredPlan = { profile: Profile; plan: Plan; createdAt: string };

export function savePlan(profile: Profile, plan: Plan) {
  const value: StoredPlan = {
    profile,
    plan,
    createdAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // Sin almacenamiento (modo privado o lleno): el plan igual se ve esta vez.
    memoryFallback = value;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function clearPlan() {
  memoryFallback = null;
  try {
    localStorage.removeItem(KEY);
  } catch {
    // nada que borrar
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

let memoryFallback: StoredPlan | null = null;

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

/**
 * `undefined` mientras aún no se sabe (render del servidor y primera pintura),
 * `null` cuando no hay plan guardado.
 */
export function useStoredPlan(): StoredPlan | null | undefined {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => undefined);

  return useMemo(() => {
    if (raw === undefined) return undefined;
    if (raw === null) return memoryFallback;
    try {
      const parsed = storedSchema.safeParse(JSON.parse(raw));
      return parsed.success ? parsed.data : null;
    } catch {
      return null;
    }
  }, [raw]);
}
