"use client";
import { useEffect, useState } from "react";

function getTarget() {
  const now = new Date();
  const target = new Date(now);
  const daysUntilSat = (6 - now.getUTCDay() + 7) % 7 || 7;
  target.setUTCDate(now.getUTCDate() + daysUntilSat);
  target.setUTCHours(14, 0, 0, 0);
  return target;
}

function diff(t: Date) {
  const ms = Math.max(0, t.getTime() - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const target = getTarget();
    setT(diff(target));
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (compact) {
    if (!t) return <span className="font-mono opacity-40">—D --:--:--</span>;
    return (
      <span className="font-mono">
        {t.d}D {pad(t.h)}:{pad(t.m)}:{pad(t.s)}
      </span>
    );
  }

  if (!t) {
    return (
      <div className="flex items-end gap-3 font-mono opacity-30">
        <Unit value={0} label="DAYS" />
        <span className="text-zinc-700 text-3xl pb-3">:</span>
        <Unit value={0} label="HRS" pad />
        <span className="text-zinc-700 text-3xl pb-3">:</span>
        <Unit value={0} label="MIN" pad />
        <span className="text-zinc-700 text-3xl pb-3">:</span>
        <Unit value={0} label="SEC" pad />
      </div>
    );
  }

  return (
    <div className="flex items-end gap-3 font-mono">
      <Unit value={t.d} label="DAYS" />
      <span className="text-zinc-700 text-3xl pb-3">:</span>
      <Unit value={t.h} label="HRS" pad />
      <span className="text-zinc-700 text-3xl pb-3">:</span>
      <Unit value={t.m} label="MIN" pad />
      <span className="text-zinc-700 text-3xl pb-3">:</span>
      <Unit value={t.s} label="SEC" pad />
    </div>
  );
}

function Unit({
  value,
  label,
  pad = false,
}: {
  value: number;
  label: string;
  pad?: boolean;
}) {
  const display = pad ? value.toString().padStart(2, "0") : value.toString();
  return (
    <div className="flex flex-col items-start">
      <span className="text-4xl sm:text-5xl font-bold tabular-nums leading-none">
        {display}
      </span>
      <span className="text-[10px] tracking-[0.3em] text-muted mt-2">
        {label}
      </span>
    </div>
  );
}
