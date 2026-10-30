"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import SectionBackdrop from "../home/SectionBackdrop";
import { TEXT_OUTLINE_RED } from "../home/styles";

const FILTERS = [
  { id: "all", label: "ALL" },
  { id: "technical", label: "TECHNICAL" },
  { id: "coding", label: "CODING" },
  { id: "showcase", label: "SHOWCASES" },
  { id: "workshop", label: "WORKSHOPS" },
  { id: "talk", label: "TALKS" },
  { id: "activity", label: "ACTIVITIES" },
];

const ARROW = <i className="fa-solid fa-arrow-right-long text-[10px]"></i>;

function Meta({ regLabel = "REGISTRATION", gap = "gap-8" }: { regLabel?: string; gap?: string }) {
  return (
    <dl className={`flex ${gap} font-nav text-[11px] font-semibold tracking-[0.3em]`}>
      <div>
        <dt className="text-mist">SCHEDULE</dt>
        <dd className="mt-1 text-moon">TBA</dd>
      </div>
      <div>
        <dt className="text-mist">{regLabel}</dt>
        <dd className="mt-1 text-moon">TBA</dd>
      </div>
    </dl>
  );
}

function Category({ n }: { n: string }) {
  return (
    <p className="flex items-center gap-3 font-nav text-[11px] font-bold tracking-[0.4em] text-vermilion">
      <span className="h-px w-8 bg-vermilion"></span>CATEGORY · {n}
    </p>
  );
}

export default function Events() {
  const [filter, setFilter] = useState("all");
  const hide = (cat: string) => (filter === "all" || filter === cat ? "" : "hidden");

  return (
    <section id="events" className="relative overflow-clip bg-midnight py-24 md:py-32">
      <SectionBackdrop sticky src="/images/imeet/valley.jpg" opacity={0.45} />
      <div className="pointer-events-none absolute -left-[12%] top-[20%] h-[800px] w-[800px] bg-[radial-gradient(circle,rgba(197,42,44,0.13),transparent_65%)]"></div>
      <div className="pointer-events-none absolute -right-[10%] bottom-[5%] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(216,183,122,0.09),transparent_65%)]"></div>
      <div data-petals="10" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <span className="pointer-events-none absolute right-0 top-16 select-none font-jp text-[18rem] leading-none text-moon/[0.03] md:text-[26rem]">
        闘
      </span>
      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
        <div id="events-head" className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="js-reveal [&.is-in]:animate-reveal md:col-span-7">
            <p className="flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
              03 <span className="h-px w-10 bg-vermilion/70"></span> THE ARENA
            </p>
            <h2 className="mt-5 font-display text-[15vw] uppercase leading-[0.88] text-moon md:text-8xl md:leading-none lg:text-[8rem]">
              The arena awaits.
            </h2>
          </div>
          <div className="js-reveal [&.is-in]:animate-reveal md:col-span-5 md:pb-3">
            <p className="text-lg font-light leading-relaxed text-moon/75 md:text-xl md:leading-7">
              “Discover the challenges, ideas, and experiences of IMEET 2026.”
            </p>
            <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-mist">
              <i className="fa-solid fa-circle-info mt-1 text-xs text-amber"></i>
              Categories are shown as placeholders. Official event names, schedules and registration details will be
              announced.
            </p>
          </div>
        </div>

        <div
          id="event-filters"
          className="mt-12 flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-moon/10 font-nav text-xs font-bold tracking-[0.3em]"
          role="toolbar"
          aria-label="Filter events"
        >
          {FILTERS.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={on}
                className={`shrink-0 border-b-2 px-4 py-4 transition-colors ${
                  on ? "border-vermilion text-moon" : "border-transparent text-mist hover:text-moon"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div id="event-grid" className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
          {/* Technical */}
          <article
            id="event-technical"
            className={`event-card js-reveal [&.is-in]:animate-reveal group relative h-[520px] overflow-hidden bg-navy md:col-span-6 lg:col-span-7 lg:h-[580px] ${hide("technical")}`}
          >
            <img
              src="/images/events/bridge.jpg"
              alt="Two samurai silhouettes facing each other on a misty moonlit bridge"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-700 group-hover:-translate-y-1 md:p-9">
              <Category n="01" />
              <h3 className="mt-3 font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl md:text-6xl">Technical Competitions</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">EVENT NAMES TO BE ANNOUNCED</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-moon/70">
                Contests of skill and strategy that test problem-solving, precision and engineering instinct.
              </p>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-moon/15 pt-5">
                <Meta />
                <Link href="/events/technical-competitions" className="inline-flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-moon transition-colors hover:text-vermilion">
                  EVENT DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>

          {/* Coding */}
          <article
            id="event-coding"
            className={`event-card js-reveal [&.is-in]:animate-reveal group flex flex-col overflow-hidden border border-moon/10 bg-navy/70 transition-colors duration-500 hover:border-vermilion/40 md:col-span-6 lg:col-span-5 lg:h-[580px] ${hide("coding")}`}
          >
            <div className="relative h-[260px] overflow-hidden lg:h-[300px]">
              <img
                src="/images/events/scroll.jpg"
                alt="A scholar writing glowing characters on a scroll by lantern light"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <Category n="02" />
              <h3 className="mt-3 font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl">Coding Challenges</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">EVENT NAMES TO BE ANNOUNCED</p>
              <p className="mt-4 text-sm leading-relaxed text-moon/70">
                Timed programming challenges for those who think in logic and write with clarity.
              </p>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-moon/10 pt-5">
                <Meta />
                <Link href="/events/coding-challenges" className="inline-flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-moon transition-colors hover:text-vermilion">
                  DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>

          {/* Showcase */}
          <article
            id="event-showcase"
            className={`event-card js-reveal [&.is-in]:animate-reveal group grid overflow-hidden border-y border-moon/10 md:col-span-6 md:grid-cols-12 lg:col-span-12 ${hide("showcase")}`}
          >
            <div className="relative h-[280px] overflow-hidden md:col-span-7 md:h-[400px]">
              <img
                src="/images/events/courtyard.jpg"
                alt="A lantern-lit hilltop courtyard with pavilions displaying inventions"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-midnight/70"></div>
            </div>
            <div className="relative flex flex-col justify-center p-6 md:col-span-5 md:p-12">
              <span className={`font-display text-8xl leading-none ${TEXT_OUTLINE_RED}`}>03</span>
              <p className="mt-4 font-nav text-[11px] font-bold tracking-[0.4em] text-vermilion">CATEGORY · 03</p>
              <h3 className="mt-3 font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl md:text-5xl">Project Showcases</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">EVENT NAMES TO BE ANNOUNCED</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-moon/70">
                A stage for original student projects, prototypes and ideas ready to meet the world.
              </p>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4">
                <Meta />
                <Link href="/events/project-showcases" className="inline-flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-moon transition-colors hover:text-vermilion">
                  EVENT DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>

          {/* Workshops */}
          <article
            id="event-workshop"
            className={`event-card js-reveal [&.is-in]:animate-reveal group relative h-[460px] overflow-hidden bg-navy md:col-span-6 lg:col-span-5 ${hide("workshop")}`}
          >
            <img
              src="/images/events/workshop.jpg"
              alt="A wooden workshop with tools and scrolls lit by amber lanterns"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-700 group-hover:-translate-y-1 md:p-8">
              <Category n="04" />
              <h3 className="mt-3 font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl">Workshops</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">EVENT NAMES TO BE ANNOUNCED</p>
              <p className="mt-3 text-sm leading-relaxed text-moon/70">
                Hands-on sessions to learn new tools, techniques and ways of building.
              </p>
              <div className="mt-5 flex items-end justify-between gap-4 border-t border-moon/15 pt-4">
                <Meta regLabel="REG." gap="gap-6" />
                <Link href="/events/workshops" className="inline-flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-moon transition-colors hover:text-vermilion">
                  DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>

          {/* Talks */}
          <article
            id="event-talk"
            className={`event-card js-reveal [&.is-in]:animate-reveal group relative flex h-[460px] flex-col justify-between overflow-hidden border border-moon/10 bg-gradient-to-b from-storm/40 to-navy p-7 transition-all duration-500 hover:-translate-y-1 hover:border-vermilion/40 md:col-span-3 lg:col-span-4 ${hide("talk")}`}
          >
            <span className="pointer-events-none absolute -right-4 -top-6 font-jp text-[11rem] leading-none text-moon/[0.05]">話</span>
            <div>
              <span className={`font-display text-7xl leading-none ${TEXT_OUTLINE_RED}`}>05</span>
              <p className="mt-4 font-nav text-[11px] font-bold tracking-[0.4em] text-vermilion">CATEGORY · 05</p>
            </div>
            <div>
              <h3 className="font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl">Talks</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">SPEAKERS TO BE ANNOUNCED</p>
              <p className="mt-3 text-sm leading-relaxed text-moon/70">
                Sessions that open new perspectives on technology and where it is headed.
              </p>
              <div className="mt-5 flex items-end justify-between border-t border-moon/10 pt-4 font-nav text-[11px] font-semibold tracking-[0.3em]">
                <span className="text-mist">
                  SCHEDULE <span className="text-moon">TBA</span>
                </span>
                <Link href="/events/talks" className="font-bold text-moon transition-colors hover:text-vermilion">
                  DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>

          {/* Activities */}
          <article
            id="event-activity"
            className={`event-card js-reveal [&.is-in]:animate-reveal group relative flex h-[460px] flex-col justify-between overflow-hidden border border-moon/10 bg-navy p-7 transition-all duration-500 hover:-translate-y-1 hover:border-vermilion/40 md:col-span-3 lg:col-span-3 ${hide("activity")}`}
          >
            <span className="pointer-events-none absolute -bottom-8 -right-4 font-jp text-[11rem] leading-none text-amber/[0.07]">祭</span>
            <div>
              <span className={`font-display text-7xl leading-none ${TEXT_OUTLINE_RED}`}>06</span>
              <p className="mt-4 font-nav text-[11px] font-bold tracking-[0.4em] text-vermilion">CATEGORY · 06</p>
            </div>
            <div>
              <h3 className="font-display text-[8.6vw] uppercase leading-none text-moon sm:text-4xl">Festival Activities</h3>
              <p className="mt-2 font-nav text-xs font-semibold tracking-[0.3em] text-amber">DETAILS TO BE ANNOUNCED</p>
              <p className="mt-3 text-sm leading-relaxed text-moon/70">
                Moments of play, culture and community beyond the competitions.
              </p>
              <div className="mt-5 flex items-end justify-between border-t border-moon/10 pt-4 font-nav text-[11px] font-semibold tracking-[0.3em]">
                <span className="text-mist">TBA</span>
                <Link href="/events/festival-activities" className="font-bold text-moon transition-colors hover:text-vermilion">
                  DETAILS {ARROW}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
