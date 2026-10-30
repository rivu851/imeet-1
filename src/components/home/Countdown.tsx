"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { GRAIN } from "./styles";

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
  const s = Math.floor(t / 1e3);
  return { days: pad(d), hours: pad(h), minutes: pad(m), seconds: pad(s) };
}

const NUMBER = "flex justify-center font-display text-[20vw] leading-none md:text-[8vw] lg:text-[8.5rem]";

function Digits({ value }: { value: string }) {
  return [...value].map((ch, i) => (
    <span key={i} className="inline-block w-[0.8em] text-center">
      {ch}
    </span>
  ));
}

function Label({ children }: { children: string }) {
  return (
    <span className="mt-4 flex items-center justify-center gap-3 font-nav text-xs font-bold tracking-[0.5em] text-mist">
      <span className="h-1 w-1 rotate-45 bg-vermilion"></span>
      {children}
    </span>
  );
}

export default function Countdown() {
  const [time, setTime] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const tick = () => setTime(remaining());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="countdown" className="relative overflow-hidden py-28 md:py-40">
      <img
        src="/images/imeet/moon.jpg"
        alt="Crescent moon behind drifting clouds over dark mountain peaks"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight/40 to-midnight"></div>
      <div className={GRAIN}></div>
      <div className="relative mx-auto w-full max-w-[1480px] px-6 text-center md:px-10 lg:px-14">
        <p className="js-reveal [&.is-in]:animate-reveal flex items-center justify-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
          <span className="h-px w-10 bg-vermilion/70"></span>04 · THE HOUR<span className="h-px w-10 bg-vermilion/70"></span>
        </p>
        <h2 className="js-reveal [&.is-in]:animate-reveal mt-6 font-display text-[13vw] uppercase leading-[0.9] text-moon md:text-7xl md:leading-none lg:text-[7.5rem]">
          The moment approaches.
        </h2>
        <div id="countdown-grid" className="js-reveal [&.is-in]:animate-reveal mx-auto mt-16 grid max-w-6xl grid-cols-2 md:grid-cols-4">
          <div className="border-b border-r border-crimson/40 px-3 py-8 md:border-b-0 md:py-4">
            <span id="cd-days" className={`${NUMBER} text-moon`}>
              <Digits value={time.days} />
            </span>
            <Label>DAYS</Label>
          </div>
          <div className="border-b border-crimson/40 px-3 py-8 md:border-b-0 md:border-r md:py-4">
            <span id="cd-hours" className={`${NUMBER} text-moon`}>
              <Digits value={time.hours} />
            </span>
            <Label>HOURS</Label>
          </div>
          <div className="border-r border-crimson/40 px-3 py-8 md:py-4">
            <span id="cd-minutes" className={`${NUMBER} text-moon`}>
              <Digits value={time.minutes} />
            </span>
            <Label>MINUTES</Label>
          </div>
          <div className="px-3 py-8 md:py-4">
            <span id="cd-seconds" className={`${NUMBER} text-vermilion`}>
              <Digits value={time.seconds} />
            </span>
            <Label>SECONDS</Label>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-xl text-sm leading-relaxed text-mist">
          Counting down to 19 November 2026 · Kolkata time (IST, UTC+05:30). Official opening time to be announced.
        </p>
      </div>
    </section>
  );
}
