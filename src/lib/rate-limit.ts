import "server-only";

const hits = new Map<string, number[]>();

/**
 * Limitador en memoria por clave (IP). Protege el saldo del proveedor de IA de un bucle
 * accidental; en un despliegue con varias instancias cada una cuenta por su lado.
 */
export function isRateLimited(
  key: string,
  limit = 5,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 1000) {
    for (const [otherKey, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(otherKey);
    }
  }
  return false;
}
