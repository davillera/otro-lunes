type RepaintValueProps = { value: string };

/**
 * Texto que se "repinta" cuando cambia. La animación vive en globals.css y solo
 * corre dentro de un ancestro `data-live="true"`, así que la primera pintura queda quieta.
 */
export function RepaintValue({ value }: RepaintValueProps) {
  return (
    <span key={value} className="repaint-value inline-block">
      {value}
    </span>
  );
}
