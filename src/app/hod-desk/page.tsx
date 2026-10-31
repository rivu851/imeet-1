import HodDeskPage from "@/components/hod-desk/HodDeskPage";
import PageShell from "@/components/common/PageShell";

export default function HodsDeskPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <HodDeskPage />
      </main>
    </PageShell>
  );
}
