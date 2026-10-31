/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { EVENT_GROUPS, events } from "@/data/events";
import SectionBackdrop from "../home/SectionBackdrop";
import EventsHeader from "./EventsHeader";

/* The home page's short version of the events section: one card per category, each opening the full list. */
export default function EventCategories() {
  return (
    <section id="events" className="relative overflow-clip bg-midnight py-24 md:py-32">
      <SectionBackdrop sticky src="/images/imeet/bg-event.webp" mobileSrc="/images/imeet/bg-event-mobile.webp" opacity={0.85} />
      <div data-petals="10" className="pointer-events-none absolute inset-0 overflow-hidden"></div>
      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-10 lg:px-14">
        <EventsHeader note={`${events.length} events across four categories. Schedules and registration details will be announced.`} />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {EVENT_GROUPS.map((group, i) => {
            const count = events.filter((event) => event.group === group.id).length;
            return (
              <Link
                key={group.id}
                href={`/events/category/${group.id}`}
                className="js-reveal [&.is-in]:animate-reveal group relative flex h-[340px] flex-col justify-end overflow-hidden border border-moon/15 bg-navy p-6 transition-colors duration-500 hover:border-vermilion/60 md:h-[400px] md:p-9"
              >
                <img
                  src={group.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/10"></div>
                <div className="relative">
                  <p className="flex items-center gap-3 font-nav text-[11px] font-bold tracking-[0.4em] text-sakura/90">
                    <span className="h-px w-8 bg-vermilion"></span>
                    {String(i + 1).padStart(2, "0")} · {count} {count === 1 ? "EVENT" : "EVENTS"}
                  </p>
                  <h3 className="mt-3 font-display text-[10vw] uppercase leading-none text-moon sm:text-[8vw] md:text-[4.4vw] lg:text-[3.6vw]">{group.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-moon/85">{group.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-3 font-nav text-xs font-bold tracking-[0.3em] text-moon transition-colors group-hover:text-vermilion">
                    VIEW EVENTS <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
