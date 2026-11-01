"use client";

import { useEffect, useState } from "react";
import ProfileCard from "@/components/profile/ProfileCard";
import type { ProfileUser, RegisteredEvent } from "@/data/profileUser";
import { ApiError, getMe } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<ProfileUser | null>(null);
  const [events, setEvents] = useState<RegisteredEvent[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("Loading your participant account…");
  const [view, setView] = useState<"profile" | "events">("profile");
  const router = useRouter();

  useEffect(() => { getMe().then((account) => {
    const profile = account.profile;
    setImageUrl(profile?.image_url || null);
    setUser({ name: profile?.name || account.user.name || "", email: profile?.email || account.user.email, contactNumber: profile?.contact_no || "", department: profile?.dept || "", year: profile?.year ? `${profile.year}${profile.year === 1 ? "st" : profile.year === 2 ? "nd" : profile.year === 3 ? "rd" : "th"} Year` : "", rollNumber: profile?.college_roll || "" });
    setEvents((account.participatedEvents || []).map((item) => ({ id: String(item.event_id), name: item.name || `Event ${item.event_id}`, date: item.date || "To be announced", time: "", venue: item.venue || "To be announced", status: "Confirmed", ticketId: item.team_name || "Registered" })));
    setMessage("");
  }).catch((error: unknown) => { if (error instanceof ApiError && error.status === 401) { router.push(`/auth/login?returnTo=${encodeURIComponent("/profile")}`); return; } setMessage(error instanceof Error ? error.message : "Could not load your account."); }); }, [router]);

  const saveUser = async (formData: ProfileUser) => {
    const years: Record<string, number> = { "1st Year": 1, "2nd Year": 2, "3rd Year": 3, "4th Year": 4 };
    const department = ({ "Information Technology": "IT", "Computer Science and Engineering": "CSE", "Electronics and Communication Engineering": "ECE" } as Record<string, string>)[formData.department] || formData.department;
    const response = await fetch("/api/profile", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: formData.name, contact_no: formData.contactNumber, dept: department, year: years[formData.year] || Number.parseInt(formData.year, 10), college_roll: formData.rollNumber }) });
    const result = await response.json().catch(() => null);
    if (!response.ok) throw new Error(result?.message || "Profile could not be saved.");
    setUser({ ...formData, department });
    const returnTo = new URLSearchParams(window.location.search).get("returnTo");
    if (returnTo && /^\/events\/[1-9]\d*(?:\/register)?$/.test(returnTo)) router.push(returnTo.replace(/\/register$/, ""));
  };

  const uploadPhoto = async (file: File) => {
    const upload = new FormData();
    upload.append("file", file, file.name);
    const response = await fetch("/api/profile/photo", { method: "POST", credentials: "same-origin", body: upload });
    const result = await response.json().catch(() => null);
    if (!response.ok) throw new Error(result?.message || "Profile photo could not be saved. Please try again.");
    if (typeof result?.image_url !== "string" || !result.image_url) throw new Error("The upload succeeded, but no image URL was returned.");
    setImageUrl(result.image_url);
    return result.image_url as string;
  };

  return (
    <main className="relative min-h-svh overflow-x-clip bg-midnight text-moon">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/imeet/moonlight%20with%20sakura.png')] bg-cover bg-[center_45%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,17,0.48),rgba(5,9,17,0.82)_48%,rgba(5,9,17,0.92)),linear-gradient(0deg,rgba(5,9,17,0.55),transparent_55%,rgba(5,9,17,0.35)]"
      />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-[1680px] grid-cols-1 gap-8 px-4 pb-12 pt-[100px] sm:gap-10 sm:px-8 sm:pb-14 sm:pt-[110px] md:px-10 xl:grid-cols-[0.92fr_1.08fr] xl:gap-12 xl:px-16 xl:pb-10 xl:pt-[calc(150*var(--u))]">
        <section className="relative flex min-h-0 items-start pl-0 pt-0 xl:sticky xl:top-[calc(150*var(--u)+16px)] xl:min-h-0 xl:self-start xl:pl-24 xl:pt-4">
          <div className="absolute left-0 top-4 hidden flex-col items-center text-center xl:flex">
            <span className="my-3 h-20 w-px bg-gradient-to-b from-red-hi/80 via-moon/50 to-moon/10 md:h-28" />
            <span className="font-jp text-xs tracking-[0.18em] text-moon/75">プロフィール</span>
            <span className="mt-4 [writing-mode:vertical-rl] rotate-180 font-nav text-xs font-semibold tracking-[0.34em] text-moon/75">
              PROFILE
            </span>
          </div>

          <div className="max-w-2xl">
            <h1 className="font-display uppercase leading-[0.8] tracking-[0.02em] text-white">
              <span className="block text-[clamp(3.8rem,9.5vw,9rem)] md:text-[clamp(4.7rem,12vw,9rem)]">MY</span>
              <span className="mt-3 flex items-end gap-2 whitespace-nowrap text-[clamp(2.5rem,6.6vw,6.9rem)] sm:gap-3 md:text-[clamp(3.1rem,8vw,6.9rem)]">
                <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.9)]">
                  PROFILE
                </span>
                <span aria-hidden="true" className="mb-[0.08em] size-[0.16em] shrink-0 bg-red-hi shadow-[0_0_18px_rgba(208,40,43,0.55)]" />
              </span>
            </h1>
            <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-moon/75 md:mt-9 md:text-xl">
              Manage your ImeeT&apos;26 participant account.
            </p>
            {user && !user.email.trim().toLowerCase().endsWith("@rcciit.org.in") && <p role="note" className="mt-5 max-w-lg border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">You are signed in with {user.email}. Event registration requires a verified @rcciit.org.in account. Sign out and use your college account to register.</p>}
          </div>
        </section>

        {!user ? <p role={message.startsWith("Loading") ? "status" : "alert"} className="rounded-xl border border-moon/15 bg-midnight/65 p-6">{message}</p> : <ProfileCard
          user={user}
          avatarUrl={imageUrl}
          onSaveUser={saveUser}
          onUploadPhoto={uploadPhoto}
          view={view}
          events={events}
          onShowEvents={() => setView("events")}
          onBackToProfile={() => setView("profile")}
        />}
      </div>
    </main>
  );
}
