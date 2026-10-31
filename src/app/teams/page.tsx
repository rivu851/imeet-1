import type { Metadata } from "next";
import PageShell from "@/components/common/PageShell";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "Teams · IMEET 2026",
  description:
    "Meet the Nakama — the organizers, technical leads, designers, and faculty advisors behind IMEET 2026, Department of Information Technology, RCCIIT.",
};

export default function TeamsRoute() {
  return (
    <PageShell>
      <main className="min-h-screen">
        <TeamPage />
      </main>
    </PageShell>
  );
}
