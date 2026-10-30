import HodsDesk from "@/components/hod-desk/HodsDesk";
import PageShell from "@/components/common/PageShell";

export default function HodsDeskPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <HodsDesk />
      </main>
    </PageShell>
  );
}
