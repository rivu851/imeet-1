import Gallery from "@/components/home/Gallery";
import PageShell from "@/components/common/PageShell";

export default function GalleryPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <Gallery />
      </main>
    </PageShell>
  );
}
