"use client";

import { ErrorPage } from "@/components/pages/ErrorPage";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorPage reset={reset} />;
}
