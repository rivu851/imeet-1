"use client";

import { useState } from "react";
import ProfileCard from "@/components/profile/ProfileCard";
import { PLACEHOLDER_USER, REGISTERED_EVENTS, type ProfileUser } from "@/data/profileUser";

export default function ProfilePage() {
  const [user, setUser] = useState<ProfileUser>(PLACEHOLDER_USER);
  const [view, setView] = useState<"profile" | "events">("profile");

  const saveUser = async (formData: ProfileUser) => {
    setUser({ ...user, ...formData });
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
          </div>
        </section>

        <ProfileCard
          user={user}
          onSaveUser={saveUser}
          view={view}
          events={REGISTERED_EVENTS}
          onShowEvents={() => setView("events")}
          onBackToProfile={() => setView("profile")}
        />
      </div>
    </main>
  );
}
