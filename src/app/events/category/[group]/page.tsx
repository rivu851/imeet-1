import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/common/PageShell";
import EventCategoryGallery from "@/components/events/EventCategoryGallery";
import SectionBackdrop from "@/components/home/SectionBackdrop";
import { EVENT_GROUPS, events } from "@/data/events";

export function generateStaticParams() {
  return EVENT_GROUPS.map(({ id }) => ({ group: id }));
}

export default async function EventCategoryPage({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  const category = EVENT_GROUPS.find((item) => item.id === group);

  if (!category) notFound();

  const items = events
    .filter((event) => event.group === category.id)
    .map((event) => ({ title: event.title, description: event.description, image: event.image, href: `/events/${event.id}` }));

  return (
    <PageShell>
      <main className="relative flex min-h-svh flex-col overflow-hidden bg-midnight pt-24 md:pt-36 lg:pt-[calc(150*var(--u))]">
        <SectionBackdrop
          src={category.id === "technical" ? "/images/imeet/technical-event-bg.webp" : "/images/imeet/bg-event.webp"}
          mobileSrc={category.id === "technical" ? undefined : "/images/imeet/bg-event-mobile.webp"}
          opacity={0.5}
        />
        <div className="relative min-h-[24rem] flex-1">
          <div className="absolute inset-0 -translate-y-[15%]">
            <EventCategoryGallery items={items} />
          </div>
          {/* the title sits in the hollow under the curve of cards */}
          <h1 className="pointer-events-none absolute inset-x-4 bottom-2 text-center font-display text-[9vw] uppercase leading-none text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)] md:text-6xl lg:text-[length:calc(3.4*var(--vw))]">
            {category.title} Events
          </h1>
        </div>
        <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 font-nav text-xs font-bold tracking-[0.3em]">
          <span className="text-moon/70">DRAG OR SCROLL · TAP A CARD</span>
          <Link href={`/events?group=${category.id}`} className="text-moon transition-colors hover:text-vermilion">
            VIEW AS LIST
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
