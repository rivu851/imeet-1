"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageShell from "@/components/common/PageShell";
import { getEventById, type ApiEvent } from "@/lib/api";
import RegistrationForm from "@/components/events/RegistrationForm";

export default function EventDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<ApiEvent | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => { getEventById(id).then(setEvent).catch((e: unknown) => setError(e instanceof Error ? e.message : "Event details could not be loaded.")).finally(() => setLoading(false)); }, [id]);
  return <PageShell><main className="min-h-screen px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48">
    {loading ? <p role="status">Loading event…</p> : error ? <p role="alert">{error}</p> : !event ? <section><h1>Event not found</h1><Link href="/events">All events</Link></section> : <article className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
      <div className="relative aspect-[4/3] overflow-hidden border border-moon/10">{event.event_img_url && <Image src={event.event_img_url} alt="" fill priority unoptimized className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />}</div>
      <div><p className="font-nav text-xs font-bold uppercase tracking-[0.4em] text-vermilion">IMEET 2026 · {event.catagory || "EVENT"}</p><h1 className="mt-5 font-display text-[10vw] uppercase leading-tight sm:text-5xl lg:text-6xl">{event.name || "Event"}</h1><p className="mt-6 text-lg leading-relaxed text-moon/75">{event.details || "Event details will be announced."}</p>
        <p className="mt-8 border-t border-moon/10 pt-5 font-nav text-sm font-bold tracking-[0.15em]">{event.date || "Date to be announced"} · {event.start_time || "Time TBA"}{event.venue ? ` · ${event.venue}` : ""}</p>{event.rules && <p className="mt-4 whitespace-pre-wrap text-sm text-moon/70">{event.rules}</p>}
        <p className="mt-3 text-sm text-mist">{event.registrations ? "Registration is open." : "Registration is currently closed."}</p>{event.registrations && <RegistrationForm event={event} />}<Link href="/events" className="mt-8 inline-flex border border-vermilion px-6 py-3 font-nav text-xs font-bold tracking-[0.25em] transition-colors hover:bg-vermilion">ALL EVENTS</Link>
      </div></article>}
  </main></PageShell>;
}
