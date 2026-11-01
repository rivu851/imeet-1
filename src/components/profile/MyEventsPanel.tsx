import Link from "next/link";
import { useEffect, useRef } from "react";
import type { RegisteredEvent } from "@/data/profileUser";

function EventCard({ event }: { event: RegisteredEvent }) {
  const confirmed = event.status === "Confirmed";

  return (
    <article className="relative border border-moon/15 bg-midnight/55 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.2)] [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_14px),calc(100%_-_14px)_100%,0_100%)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-xl uppercase tracking-[0.05em] text-white sm:text-2xl">
          {event.name}
        </h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-nav text-[9px] font-bold uppercase tracking-[0.13em] ${
            confirmed
              ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
              : "border-amber-400/25 bg-amber-400/10 text-amber-300"
          }`}
        >
          <i className={`fa-solid ${confirmed ? "fa-circle-check" : "fa-clock"}`} aria-hidden="true" />
          {event.status}
        </span>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-moon/75 sm:grid-cols-2">
        <p className="flex items-center gap-2.5">
          <i className="fa-regular fa-calendar text-red-hi" aria-hidden="true" />
          <span>{event.date} <span className="text-moon/40">·</span> {event.time}</span>
        </p>
        <p className="flex items-center gap-2.5">
          <i className="fa-solid fa-location-dot text-red-hi" aria-hidden="true" />
          <span>{event.venue}</span>
        </p>
      </div>

      {event.ticketId && <p className="mt-4 border-t border-moon/10 pt-3 font-mono text-[10px] tracking-[0.12em] text-moon/45">
        TEAM NAME <span className="ml-2 text-moon/75">{event.ticketId}</span>
      </p>}
    </article>
  );
}

export default function MyEventsPanel({
  events,
  onBack,
  active,
}: {
  events: RegisteredEvent[];
  onBack: () => void;
  active: boolean;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (active) headingRef.current?.focus();
  }, [active]);

  return (
    <section aria-label="Registered events">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-nav font-semibold text-moon/75 transition-colors duration-300 hover:bg-vermilion/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion"
      >
        <i className="fa-solid fa-arrow-left text-vermilion" aria-hidden="true" />
        Back
      </button>

      <header className="mt-4 flex flex-wrap items-end justify-between gap-3 border-b border-moon/10 pb-5">
        <h2 ref={headingRef} tabIndex={-1} className="font-display text-3xl uppercase tracking-[0.08em] text-white focus:outline-none sm:text-4xl">
          My Events
        </h2>
        <span className="rounded-full border border-vermilion/25 bg-vermilion/10 px-3 py-1.5 font-nav text-[10px] font-bold uppercase tracking-[0.13em] text-moon">
          {events.length} Registered
        </span>
      </header>

      {events.length ? (
        <div className="mt-5 space-y-4">
          {events.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center px-5 py-12 text-center">
          <i className="fa-solid fa-ticket-simple text-4xl text-vermilion/80" aria-hidden="true" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-moon/65">
            You haven&apos;t registered for any events yet
          </p>
          <Link
            href="/events"
            className="mt-6 inline-flex min-h-11 items-center gap-2 bg-red-hi px-5 py-2.5 font-nav text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_18px_rgba(168,24,27,0.3)] transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-hi focus-visible:ring-offset-2 focus-visible:ring-offset-midnight [clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]"
          >
            Explore Events <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}
