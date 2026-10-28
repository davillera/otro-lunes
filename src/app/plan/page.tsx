import type { Metadata } from "next";
import { PlanPage } from "@/components/pages/PlanPage";

export const metadata: Metadata = {
  title: "Tu plan — Otro Lunes",
};

export default function Page() {
  return <PlanPage />;
}
