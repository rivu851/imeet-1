import PageShell from "@/components/common/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="flex min-h-screen items-center px-6 pb-24 pt-32 text-moon md:px-10 lg:px-14 lg:pt-48">
        <section className="mx-auto w-full max-w-4xl">
          <p className="font-nav text-xs font-bold tracking-[0.4em] text-vermilion">IMEET 2026 · RCCIIT</p>
          <h1 className="mt-5 font-display text-6xl uppercase md:text-8xl">Contact</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-moon/75">
            Contact information for IMEET 2026 will be published here when it is confirmed.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
