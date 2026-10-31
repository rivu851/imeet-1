"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { EVENT_GROUPS, events } from "@/data/events";
import SectionBackdrop from "../home/SectionBackdrop";
import EventsHeader from "./EventsHeader";
import { TEXT_OUTLINE_RED } from "../home/styles";

const FILTERS = [{ id: "all", label: "ALL" }, ...EVENT_GROUPS];

// the home page's category cards link here as /events?group=...
const subscribeToNothing = () => () => {};
const readUrlGroup = () => {
  const group = new URLSearchParams(window.location.search).get("group");
  return FILTERS.some((f) => f.id === group) ? group : null;
};

export default function Events() {
  const urlGroup = useSyncExternalStore(subscribeToNothing, readUrlGroup, () => null);
  const [chosen, setFilter] = useState<string | null>(null);
  const filter = chosen ?? urlGroup ?? "all";
  const hide = (cat: string) => (filter === "all" || filter === cat ? "" : "hidden");

  return (
    <section id="events" className="relative overflow-clip bg-midnight py-24 md:py-32">
      {filter === "technical" ? (
        <SectionBackdrop key="technical" sticky src="/images/imeet/technical-event-bg.webp" opacity={0.85} />
      ) : (
        <SectionBackdrop key="all" sticky src="/images/imeet/bg-event.webp" mobileSrc="/images/imeet/bg-event-mobile.webp" opacity={0.85} />
      )}
      <div className="pointer-events-none absolute -left-[12%] top-[20%] h-[800px] w-[800px] bg-[radial-gradient(circle,rgba(197,42,44,0.13),transparent_65%)]"></div>
      <div className="pointer-events-none absolute -right-[10%] bottom-[5%] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(216,183,122,0.09),transparent_65%)]"></div>
      <div data-petals="10" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
        <EventsHeader note="Schedules and registration details will be announced." />

        <div
          id="event-filters"
          className="mt-12 flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-moon/20 bg-midnight/70 backdrop-blur-sm font-nav text-xs font-bold tracking-[0.3em]"
          role="toolbar"
          aria-label="Filter events"
          data-lenis-prevent-horizontal
        >
          {FILTERS.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={on}
                className={`shrink-0 border-b-2 px-4 py-4 transition-colors ${
                  on ? "border-vermilion text-moon" : "border-transparent text-moon/75 hover:text-moon"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div id="event-grid" className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {events.map((event, i) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className={`event-card js-reveal [&.is-in]:animate-reveal group flex flex-col border border-moon/15 bg-midnight/90 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-vermilion/60 md:p-7 ${hide(event.group)}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`font-display text-5xl leading-none ${TEXT_OUTLINE_RED}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-right font-nav text-[11px] font-bold uppercase tracking-[0.25em] text-amber">{event.type}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl uppercase leading-[1.05] text-moon transition-colors group-hover:text-white">
                {event.title}
              </h3>
              <p className="mt-3 font-nav text-[11px] font-semibold uppercase tracking-[0.25em] text-sakura/80">{event.theme}</p>
              <p className="mb-6 mt-4 text-sm leading-relaxed text-moon/75">{event.description}</p>
              <div className="mt-auto flex items-end justify-between border-t border-moon/15 pt-4 font-nav text-[11px] font-semibold tracking-[0.25em]">
                <div>
                  <p className="text-mist">SCHEDULE</p>
                  <p className="mt-1 text-moon">TBA</p>
                </div>
                <span className="inline-flex items-center gap-3 font-bold text-moon transition-colors group-hover:text-vermilion">
                  DETAILS <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
