"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { GRAIN, TEXT_OUTLINE_RED } from "./styles";

const PILLARS = [
  {
    id: "pillar-inspire",
    n: "01",
    kanji: "志",
    romaji: "kokorozashi",
    title: "Inspire",
    titleClass: "text-moon",
    body: "Celebrate curiosity, creative thinking, and the exchange of ideas.",
    tags: ["CURIOSITY", "CREATIVITY", "DIALOGUE"],
    scene: "SCENE 02 · THE SPARK",
    img: "/images/imeet/lanterns.jpg",
    alt: "Paper lanterns and fireflies rising over moonlit grass",
    imgPosition: "object-[50%_40%]",
  },
  {
    id: "pillar-innovate",
    n: "02",
    kanji: "創",
    romaji: "tsukuru",
    title: "Innovate",
    titleClass: "text-transparent [-webkit-text-stroke:2px_rgba(220,229,241,0.9)]",
    body: "Explore technology, engineering, programming, and original solutions.",
    tags: ["TECHNOLOGY", "ENGINEERING", "PROGRAMMING"],
    scene: "SCENE 03 · THE FORGE OF IDEAS",
    img: "/images/imeet/forge.jpg",
    alt: "A swordsmith's forge glowing with embers at night",
    imgPosition: "object-center",
  },
  {
    id: "pillar-impact",
    n: "03",
    kanji: "響",
    romaji: "hibiki",
    title: "Impact",
    titleClass: "text-moon",
    body: "Transform collaboration and experimentation into meaningful outcomes.",
    tags: ["COLLABORATION", "EXPERIMENT", "OUTCOME"],
    scene: "SCENE 04 · THE RIPPLE THAT REMAINS",
    img: "/images/imeet/torii.jpg",
    alt: "A crimson torii gate standing in a moonlit misty lake with spreading ripples",
    imgPosition: "object-[60%_50%]",
  },
];

const STACK_TOP = 0.14;
const STACK_GAP = 28;
const CARD_HEIGHT = "min(72svh, 620px)";

function useStackProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [state, setState] = useState({ active: 0, progress: 0 });

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const slots = Array.from(ref.current?.querySelectorAll<HTMLElement>("[data-stack-slot]") ?? []);
      if (!slots.length) return;
      const vh = window.innerHeight;
      let active = 0;
      let partial = 0;
      slots.forEach((slot, i) => {
        const pin = vh * STACK_TOP + i * STACK_GAP;
        const top = slot.getBoundingClientRect().top;
        if (top <= pin + 2) active = i;
        if (i === active + 1) partial = Math.min(1, Math.max(0, 1 - (top - pin) / (vh * 0.8)));
      });
      const progress = Math.min(1, (active + (active < slots.length - 1 ? partial : 0)) / (slots.length - 1));
      setState((s) => (s.active === active && Math.abs(s.progress - progress) < 0.005 ? s : { active, progress }));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return state;
}

function onCardPointer(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  el.style.setProperty("--dx", `${((e.clientX - r.left) / r.width - 0.5) * -18}px`);
  el.style.setProperty("--dy", `${((e.clientY - r.top) / r.height - 0.5) * -12}px`);
}

function onCardLeave(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--dx", "0px");
  e.currentTarget.style.setProperty("--dy", "0px");
}

function LeftRail({ active, progress }: { active: number; progress: number }) {
  return (
    <div className="flex h-full flex-col items-center py-6">
      <span className="font-nav text-[10px] font-bold tracking-[0.4em] text-mist [writing-mode:vertical-rl]">THE PATH</span>
      <div className="relative my-6 w-px flex-1 bg-moon/15">
        <motion.span
          className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-vermilion to-crimson shadow-[0_0_12px_rgba(197,42,44,0.8)]"
          style={{ height: "100%" }}
          animate={{ scaleY: progress }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
        {PILLARS.map((p, i) => {
          const on = i <= active;
          return (
            <span
              key={p.id}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${(i / (PILLARS.length - 1)) * 100}%` }}
            >
              <motion.span
                className="block h-3 w-3 rotate-45 border"
                animate={{
                  backgroundColor: on ? "#C52A2C" : "#080B14",
                  borderColor: on ? "#C52A2C" : "rgba(220,229,241,0.35)",
                  scale: i === active ? 1.35 : 1,
                  boxShadow: i === active ? "0 0 18px rgba(197,42,44,0.9)" : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
              />
              <span
                className={`absolute left-6 top-1/2 -translate-y-1/2 font-nav text-xs font-bold tracking-[0.3em] transition-colors duration-500 ${
                  i === active ? "text-moon" : "text-mist/60"
                }`}
              >
                {p.n}
              </span>
            </span>
          );
        })}
      </div>
      <div className="relative h-28 w-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            className="absolute inset-0 font-display text-lg uppercase tracking-[0.3em] text-vermilion [writing-mode:vertical-rl]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {PILLARS[active].title}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function RightRail({ active }: { active: number }) {
  const p = PILLARS[active];
  return (
    <div className="flex h-full flex-col items-center justify-between py-6">
      <div className="relative h-[72px] w-[72px] lg:h-24 lg:w-24 xl:h-28 xl:w-28">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite]" aria-hidden="true">
          <defs>
            <path id="pillar-ring" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" />
          </defs>
          <text className="fill-moon/50 font-nav text-[9px] font-semibold tracking-[0.3em]">
            <textPath href="#pillar-ring">IMEET 2026 · RCCIIT · KOLKATA ·</textPath>
          </text>
        </svg>
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-vermilion shadow-[0_0_12px_rgba(197,42,44,0.9)]"></span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="relative h-20 w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32">
          <AnimatePresence mode="wait">
            <motion.span
              key={p.kanji}
              className="absolute inset-0 flex items-center justify-center font-jp text-6xl text-moon/90 drop-shadow-[0_0_24px_rgba(197,42,44,0.45)] lg:text-7xl xl:text-8xl"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {p.kanji}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="font-jp text-xs tracking-[0.3em] text-mist [writing-mode:vertical-rl]">{p.romaji}</span>
      </div>

      <p className="font-display text-2xl tabular-nums text-moon">
        <span className="text-vermilion">{p.n}</span>
        <span className="text-moon/30"> / 0{PILLARS.length}</span>
      </p>
    </div>
  );
}

export default function PillarsStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { active, progress } = useStackProgress(ref);

  const rail = "pointer-events-none absolute inset-y-0 hidden md:block md:w-20 lg:w-28 xl:w-36";
  const railInner = "sticky";
  const railStyle = { top: `${STACK_TOP * 100}%`, height: CARD_HEIGHT };

  return (
    <div ref={ref} className="relative mx-auto mt-16 w-full max-w-[1480px] md:mt-20 md:px-20 lg:px-28 xl:px-36">
      <div className={`${rail} left-0`}>
        <div className={railInner} style={railStyle}>
          <LeftRail active={active} progress={progress} />
        </div>
      </div>
      <div className={`${rail} right-0`}>
        <div className={railInner} style={railStyle}>
          <RightRail active={active} />
        </div>
      </div>

      <ScrollStack
        useWindowScroll
        smoothScroll={false}
        stackPosition={`${STACK_TOP * 100}%`}
        itemDistance={120}
        itemStackDistance={STACK_GAP}
        itemScale={0.04}
        baseScale={0.86}
        dimAmount={0.35}
        holdDistance={160}
      >
        {PILLARS.map((p) => (
          <ScrollStackItem
            key={p.id}
            itemClassName="overflow-hidden border border-moon/10"
            style={{ height: CARD_HEIGHT, padding: 0, borderRadius: 4, background: "#111B2A", color: "#DCE5F1" }}
          >
            <article
              id={p.id}
              onPointerMove={onCardPointer}
              onPointerLeave={onCardLeave}
              className="group relative h-full w-full"
            >
              <img
                src={p.img}
                alt={p.alt}
                className={`absolute inset-0 h-full w-full scale-[1.08] object-cover transition-transform duration-700 ease-out [translate:var(--dx,0px)_var(--dy,0px)] group-hover:scale-[1.12] ${p.imgPosition}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/60 to-midnight/10"></div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgba(220,229,241,0.12),rgba(197,42,44,0.08)_40%,transparent_70%)] group-hover:opacity-100"></div>
              <div className={GRAIN}></div>
              <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-vermilion via-crimson/60 to-transparent transition-[width] duration-500 group-hover:w-1.5"></span>

              <div className="relative flex h-full flex-col justify-end p-7 md:p-12 lg:p-16">
                <div className="flex items-center gap-5">
                  <span className={`font-display text-6xl leading-none ${TEXT_OUTLINE_RED} md:text-7xl`}>{p.n}</span>
                  <span className="h-px w-16 bg-gradient-to-r from-crimson to-transparent transition-[width] duration-700 group-hover:w-28 md:w-28 md:group-hover:w-44"></span>
                  <span className="font-jp text-base text-moon/70 md:text-lg">
                    {p.kanji} · {p.romaji}
                  </span>
                </div>
                <h3
                  className={`mt-4 font-display text-[13vw] uppercase leading-[0.82] transition-transform duration-700 ease-out group-hover:translate-x-2 md:text-[9vw] lg:text-[9.5rem] ${p.titleClass}`}
                >
                  {p.title}
                </h3>
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <p className="max-w-md text-base font-light leading-relaxed text-moon/80 md:text-xl md:leading-8">{p.body}</p>
                  <ul className="flex flex-wrap gap-2 font-nav text-[11px] font-semibold tracking-[0.3em] text-moon/80 md:text-xs">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex cursor-default items-center gap-2 border border-moon/15 bg-midnight/70 px-3 py-2 transition-colors duration-300 hover:border-vermilion hover:bg-crimson/80 hover:text-moon"
                      >
                        <span className="h-1.5 w-1.5 rotate-45 bg-vermilion"></span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="absolute right-7 top-7 font-nav text-[10px] font-semibold tracking-[0.4em] text-moon/60 md:right-12 md:top-10">
                {p.scene}
              </p>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
