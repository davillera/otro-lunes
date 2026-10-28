"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tab = { id: string; label: string; icon?: ReactNode };

type TabsProps = {
  label: string;
  /** Prefijo para enlazar cada pestaña con su panel (`${idPrefix}-tab-x`, `${idPrefix}-panel-x`). */
  idPrefix: string;
  tabs: ReadonlyArray<Tab>;
  value: string;
  onValueChange: (id: string) => void;
};

export function tabIds(idPrefix: string, id: string) {
  return { tab: `${idPrefix}-tab-${id}`, panel: `${idPrefix}-panel-${id}` };
}

/** Pestañas con activación automática y flechas, inicio y fin del teclado. */
export function Tabs({
  label,
  idPrefix,
  tabs,
  value,
  onValueChange,
}: TabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(event: KeyboardEvent, index: number) {
    const last = tabs.length - 1;
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : event.key === "ArrowLeft"
          ? (index - 1 + tabs.length) % tabs.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    onValueChange(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      className="inline-flex max-w-full gap-1 self-start rounded-full bg-piedra-hondo p-1"
    >
      {tabs.map((tab, index) => {
        const selected = tab.id === value;
        const ids = tabIds(idPrefix, tab.id);
        return (
          <button
            key={tab.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={ids.tab}
            aria-selected={selected}
            aria-controls={ids.panel}
            tabIndex={selected ? 0 : -1}
            onClick={() => onValueChange(tab.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm whitespace-nowrap transition-colors duration-150 sm:px-5 sm:text-base",
              selected
                ? "bg-loza font-semibold text-tinta shadow-loza"
                : "font-medium text-tinta hover:bg-loza/60",
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
