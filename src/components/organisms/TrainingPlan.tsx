import type { PlanDay } from "@/lib/plan/plan";

type TrainingPlanProps = { days: ReadonlyArray<PlanDay> };

/** Cada día repite exactamente la misma anatomía para poder compararlos de un vistazo. */
export function TrainingPlan({ days }: TrainingPlanProps) {
  return (
    <div className="flex flex-col gap-6">
      {days.map((day, index) => {
        const headingId = `day-${index}`;
        return (
          <section
            key={`${day.label}-${index}`}
            aria-labelledby={headingId}
            className="overflow-hidden rounded-3xl bg-loza shadow-tarjeta"
          >
            <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-4">
              <h3 id={headingId} className="font-display text-2xl leading-none">
                {day.label}
              </h3>
              <p className="text-base font-medium text-terracota-hondo">
                {day.focus}
              </p>
            </header>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Ejercicios de {day.label}: {day.focus}
              </caption>
              <thead>
                <tr className="border-y border-linea text-sm text-tinta-suave">
                  <th scope="col" className="px-5 py-2 font-medium">
                    Ejercicio
                  </th>
                  <th
                    scope="col"
                    className="w-14 px-2 py-2 text-right font-medium sm:w-20"
                  >
                    Series
                  </th>
                  <th
                    scope="col"
                    className="w-24 px-3 py-2 text-right font-medium sm:w-28 sm:px-5"
                  >
                    <span className="sm:hidden">Reps</span>
                    <span className="hidden sm:inline">Repeticiones</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {day.exercises.map((exercise, exerciseIndex) => (
                  <tr
                    key={`${exercise.name}-${exerciseIndex}`}
                    className="border-b border-linea last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-5 py-3 align-top font-semibold"
                    >
                      {exercise.name}
                      {exercise.notes ? (
                        <span className="mt-0.5 block text-sm font-normal text-tinta-suave">
                          {exercise.notes}
                        </span>
                      ) : null}
                    </th>
                    <td className="px-2 py-3 text-right align-top tabular-nums">
                      {exercise.sets}
                    </td>
                    <td className="px-3 py-3 text-right align-top tabular-nums sm:px-5">
                      {exercise.reps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}
    </div>
  );
}
