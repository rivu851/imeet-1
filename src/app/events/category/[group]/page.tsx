"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PageShell from "@/components/common/PageShell";
import EventCategoryGallery from "@/components/events/EventCategoryGallery";
import SectionBackdrop from "@/components/home/SectionBackdrop";
import { EVENT_GROUPS } from "@/data/events";
import { getEvents, type ApiEvent } from "@/lib/api";

export default function EventCategoryPage() {
  const { group } = useParams<{ group: string }>();
  const category = EVENT_GROUPS.find((item) => item.id === group);
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => { getEvents().then(setEvents).catch((e: unknown) => setError(e instanceof Error ? e.message : "Events could not be loaded.")).finally(() => setLoading(false)); }, []);
  if (!category) return <PageShell><main className="min-h-svh px-6 pt-36 text-moon"><h1>Category not found</h1><Link href="/events">All events</Link></main></PageShell>;
  const items = events.filter((event) => (event.catagory || "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "").includes(category.id))
    .map((event) => ({ title: event.name || "Event", description: event.details || "Details to be announced.", image: event.event_img_url || category.image, href: `/events/${event.event_id}` }));
  return <PageShell><main className="relative flex min-h-svh flex-col overflow-hidden bg-midnight pt-24 md:pt-36 lg:pt-[calc(150*var(--u))]">
    <SectionBackdrop src={category.id === "technical" ? "/images/imeet/technical-event-bg.webp" : "/images/imeet/bg-event.webp"} mobileSrc={category.id === "technical" ? undefined : "/images/imeet/bg-event-mobile.webp"} opacity={0.5} />
    <div className="relative min-h-[24rem] flex-1"><div className="absolute inset-0 -translate-y-[15%]">{loading ? <p role="status" className="p-8 text-center text-moon">Loading events…</p> : error ? <p role="alert" className="p-8 text-center text-moon">{error}</p> : items.length ? <EventCategoryGallery items={items} /> : <p className="p-8 text-center text-moon/70">No events in this category yet.</p>}</div>
      <h1 className="pointer-events-none absolute inset-x-4 bottom-2 text-center font-display text-[9vw] uppercase leading-none text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)] md:text-6xl lg:text-[length:calc(3.4*var(--vw))]">{category.title} Events</h1>
    </div><div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 font-nav text-xs font-bold tracking-[0.3em]"><span className="text-moon/70">DRAG OR SCROLL · TAP A CARD</span><Link href={`/events?group=${category.id}`} className="text-moon transition-colors hover:text-vermilion">VIEW AS LIST</Link></div>
  </main></PageShell>;
}
