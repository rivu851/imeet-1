import EventHighlights from "@/components/events/EventHighlights";
import PageShell from "@/components/common/PageShell";

export default function EventsPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <EventHighlights />
      </main>
    </PageShell>
  );
}
