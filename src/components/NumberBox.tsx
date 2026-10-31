import { useEffect, useState } from "react";

/**
 * Numeric field shown next to a slider (audit of 2026-10-28: on a phone, aiming at 77 kg with the
 * finger is tedious). The text is kept while typing; the value is sent once it is a number in range,
 * and the field shows the clamped value again when it loses focus.
 */
export const NumberBox = ({ id, label, value, onChange, min, max, step = 1, unit }: {
  id: string; label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; unit: string;
}) => {
  const [text, setText] = useState(String(value));
  useEffect(() => { setText(String(value)); }, [value]);
  const commit = (raw: string) => {
    const v = Number(raw.replace(",", "."));
    if (raw.trim() !== "" && Number.isFinite(v) && v >= min && v <= max) onChange(v);
  };
  return (
    <span className="inline-flex items-baseline gap-1">
      <input
        id={id}
        aria-label={label}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={text}
        onChange={(e) => { setText(e.target.value); commit(e.target.value); }}
        onBlur={() => setText(String(value))}
        className="w-20 rounded-lg border border-border bg-background px-2 py-1 text-right text-2xl font-bold text-primary tabular-nums focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <span className="text-base font-normal text-muted-foreground">{unit}</span>
    </span>
  );
};
