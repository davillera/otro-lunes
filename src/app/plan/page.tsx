import type { Metadata } from "next";
import { PlanPage } from "@/components/pages/PlanPage";

export const metadata: Metadata = {
  title: "Tu plan — DietGPT",
};

export default function Page() {
  return <PlanPage />;
}
