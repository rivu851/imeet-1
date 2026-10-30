import PageShell from "@/components/common/PageShell";

export default function HolidaysPage() {
  return (
    <PageShell>
      <main className="flex min-h-screen items-center px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48">
        <section className="mx-auto w-full max-w-4xl">
          <p className="font-nav text-xs font-bold tracking-[0.4em] text-vermilion">IMEET 2026</p>
          <h1 className="mt-5 font-display text-6xl uppercase md:text-8xl">Announcements</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-moon/75">
            There are no holiday announcements available yet. Please check back for updates from the event organizers.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
