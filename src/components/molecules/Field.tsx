import type { ReactNode } from "react";
import { FieldMessage } from "@/components/atoms/FieldMessage";
import { Label } from "@/components/atoms/Label";

type ControlProps = {
  id: string;
  "aria-describedby": string | undefined;
  invalid: boolean;
};

type FieldProps = {
  id: string;
  label: string;
  hint?: ReactNode;
  error?: string;
  children: (control: ControlProps) => ReactNode;
};

/** Etiqueta + control + ayuda + error, con los ids de accesibilidad ya conectados. */
export function Field({ id, label, hint, error, children }: FieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children({
        id,
        "aria-describedby": describedBy,
        invalid: Boolean(error),
      })}
      {hint ? <FieldMessage id={hintId}>{hint}</FieldMessage> : null}
      {error ? (
        <FieldMessage id={errorId} tone="error">
          {error}
        </FieldMessage>
      ) : null}
    </div>
  );
}
