import EventCategories from "@/components/events/EventCategories";
import PageShell from "@/components/common/PageShell";

export default function EventsPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <EventCategories />
      </main>
    </PageShell>
  );
}
