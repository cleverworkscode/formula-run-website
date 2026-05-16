"use client";
import { useEffect, useState } from "react";

export function StartLights() {
  const [lit, setLit] = useState(0);
  const [off, setOff] = useState(false);

  useEffect(() => {
    const ts = [0.5, 0.9, 1.3, 1.7, 2.1].map((s, i) =>
      window.setTimeout(() => setLit((n) => Math.max(n, i + 1)), s * 1000),
    );
    const offT = window.setTimeout(() => setOff(true), 3400);
    const cycle = window.setInterval(() => {
      setLit(0);
      setOff(false);
      [0.5, 0.9, 1.3, 1.7, 2.1].forEach((s, i) =>
        window.setTimeout(
          () => setLit((n) => Math.max(n, i + 1)),
          s * 1000,
        ),
      );
      window.setTimeout(() => setOff(true), 3400);
    }, 7000);
    return () => {
      ts.forEach(clearTimeout);
      clearTimeout(offT);
      clearInterval(cycle);
    };
  }, []);

  return (
    <div className="flex items-center gap-3" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`light ${!off && i < lit ? "on" : ""}`}
        />
      ))}
      <span
        className={`ml-4 font-mono text-xs tracking-[0.3em] transition-colors ${
          off ? "text-lime" : "text-red"
        }`}
      >
        {off ? "● GO" : "● STANDBY"}
      </span>
    </div>
  );
}
