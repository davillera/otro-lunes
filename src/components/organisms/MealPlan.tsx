import { MEAL_LABELS, MEAL_SLOTS, type Plan } from "@/lib/plan/plan";

type MealPlanProps = { meals: Plan["meals"] };

export function MealPlan({ meals }: MealPlanProps) {
  const bySlot = new Map(meals.map((meal) => [meal.slot, meal.description]));

  return (
    <dl className="flex flex-col">
      {MEAL_SLOTS.map((slot) => (
        <div
          key={slot}
          className="grid gap-1 border-b border-linea py-5 first:pt-0 last:border-b-0 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
        >
          <dt className="font-display text-2xl leading-tight">
            {MEAL_LABELS[slot]}
          </dt>
          <dd className="max-w-prose text-base">{bySlot.get(slot)}</dd>
        </div>
      ))}
    </dl>
  );
}
