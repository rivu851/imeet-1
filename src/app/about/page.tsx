import AboutSection from "@/components/home/AboutSection";
import Pillars from "@/components/home/Pillars";
import PageShell from "@/components/common/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <AboutSection standalone />
        <Pillars />
      </main>
    </PageShell>
  );
}
