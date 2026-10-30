import PageShell from "@/components/common/PageShell";
import RegisterSection from "@/components/signup/RegisterSection";

export default function SignupPage() {
  return (
    <PageShell>
      <main className="min-h-screen pt-20 lg:pt-[calc(165*var(--u))]">
        <RegisterSection />
      </main>
    </PageShell>
  );
}
