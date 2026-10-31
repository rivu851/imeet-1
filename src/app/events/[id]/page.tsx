import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/common/PageShell";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map(({ id }) => ({ id }));
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) notFound();

  return (
    <PageShell>
      <main className="min-h-screen px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48">
        <article className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-moon/10">
            <Image src={event.image} alt="" fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div>
            <p className="font-nav text-xs font-bold uppercase tracking-[0.4em] text-vermilion">
              IMEET 2026 · {event.type}
            </p>
            <h1 className="mt-5 font-display text-[10vw] uppercase leading-tight sm:text-5xl lg:text-6xl">{event.title}</h1>
            <p className="mt-3 font-nav text-sm font-semibold uppercase tracking-[0.25em] text-sakura/80">Theme · {event.theme}</p>
            <p className="mt-6 text-lg leading-relaxed text-moon/75">{event.description}</p>
            <p className="mt-8 border-t border-moon/10 pt-5 font-nav text-sm font-bold tracking-[0.25em]">
              SCHEDULE · {event.schedule}
            </p>
            <p className="mt-3 text-sm text-mist">Official event details and registration information will be announced.</p>
            <Link
              href="/events"
              className="mt-8 inline-flex border border-vermilion px-6 py-3 font-nav text-xs font-bold tracking-[0.25em] transition-colors hover:bg-vermilion"
            >
              ALL EVENTS
            </Link>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
