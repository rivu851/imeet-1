"use client";

import { useEffect, useState } from "react";

// opening day, IST
const TARGET = new Date("2026-11-19T00:00:00+05:30").getTime();
const pad = (v: number) => String(v).padStart(2, "0");

function remaining() {
  let t = Math.max(0, TARGET - Date.now());
  const d = Math.floor(t / 864e5);
  t -= d * 864e5;
  const h = Math.floor(t / 36e5);
  t -= h * 36e5;
  const m = Math.floor(t / 6e4);
  t -= m * 6e4;
  return [pad(d), pad(h), pad(m), pad(Math.floor(t / 1e3))];
}

const LABELS = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

const LABEL =
  "m-0 mb-[calc(2.4*var(--pu))] flex items-center gap-[1em] whitespace-nowrap font-nav text-[length:calc(2.3*var(--pu))] font-semibold tracking-[0.35em] text-muted before:h-px before:flex-1 before:bg-[linear-gradient(90deg,transparent,rgba(208,40,43,0.75))] after:h-px after:flex-1 after:bg-[linear-gradient(90deg,rgba(208,40,43,0.75),transparent)] hero-wide:mb-[calc(16*var(--u))] hero-wide:text-[calc(18*var(--u))]";
// red corner brackets, top-left and bottom-right
const BOX =
  "relative grid grid-cols-[repeat(4,1fr)] border border-line bg-ink py-[calc(3*var(--pu))] backdrop-blur-[6px] hero-wide:py-[calc(20*var(--u))] before:pointer-events-none before:absolute before:-left-px before:-top-px before:size-[calc(4*var(--pu))] before:border-l-2 before:border-t-2 before:border-red-hi after:pointer-events-none after:absolute after:-bottom-px after:-right-px after:size-[calc(4*var(--pu))] after:border-b-2 after:border-r-2 after:border-red-hi hero-wide:before:size-[calc(22*var(--u))] hero-wide:after:size-[calc(22*var(--u))]";

export default function HeroCountdown() {
  const [time, setTime] = useState(["00", "00", "00", "00"]);

  useEffect(() => {
    const tick = () => setTime(remaining());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute left-1/2 top-[81.5%] w-[calc(83*var(--pu))] -translate-x-1/2 hero-wide:translate-x-0 hero-wide:left-auto hero-wide:right-[calc(70*var(--u))] hero-wide:top-[calc(800*var(--u))] hero-wide:w-[calc(620*var(--u))]">
      <p className={LABEL}>THE COUNTDOWN BEGINS</p>
      <div className={BOX}>
        {LABELS.map((label, i) => (
          <div key={label} className={`flex flex-col items-center gap-[calc(0.8*var(--pu))] hero-wide:gap-[calc(6*var(--u))] ${i > 0 ? "border-l border-l-line" : ""}`}>
            <span className={`font-display text-[length:calc(7.5*var(--pu))] leading-none tabular-nums hero-wide:text-[calc(58*var(--u))] ${i === 3 ? "text-red-hi" : ""}`}>
              {time[i]}
            </span>
            <span className="font-nav text-[length:calc(2.2*var(--pu))] font-semibold tracking-[0.25em] text-muted hero-wide:text-[calc(16*var(--u))]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
