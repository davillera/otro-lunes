"use client";

import { Dumbbell, Utensils } from "lucide-react";
import { useState } from "react";
import { Tabs, tabIds } from "@/components/molecules/Tabs";
import type { Plan } from "@/lib/plan/plan";
import { MealPlan } from "./MealPlan";
import { TrainingPlan } from "./TrainingPlan";

type PlanViewerProps = { plan: Plan };

const ID_PREFIX = "plan";

export function PlanViewer({ plan }: PlanViewerProps) {
  const [active, setActive] = useState("meals");

  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-prose text-lg">{plan.summary}</p>

      <Tabs
        label="Secciones del plan"
        idPrefix={ID_PREFIX}
        value={active}
        onValueChange={setActive}
        tabs={[
          {
            id: "meals",
            label: "Alimentación",
            icon: (
              <Utensils
                aria-hidden="true"
                className="size-4 max-[22.5rem]:hidden"
              />
            ),
          },
          {
            id: "training",
            label: `Entrenamiento (${plan.days.length})`,
            icon: (
              <Dumbbell
                aria-hidden="true"
                className="size-4 max-[22.5rem]:hidden"
              />
            ),
          },
        ]}
      />

      <div
        role="tabpanel"
        id={tabIds(ID_PREFIX, "meals").panel}
        aria-labelledby={tabIds(ID_PREFIX, "meals").tab}
        hidden={active !== "meals"}
        tabIndex={0}
      >
        <MealPlan meals={plan.meals} />
      </div>
      <div
        role="tabpanel"
        id={tabIds(ID_PREFIX, "training").panel}
        aria-labelledby={tabIds(ID_PREFIX, "training").tab}
        hidden={active !== "training"}
        tabIndex={0}
      >
        <TrainingPlan days={plan.days} />
      </div>
    </div>
  );
}
