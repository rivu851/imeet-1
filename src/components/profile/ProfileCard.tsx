"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProfileUser, RegisteredEvent } from "@/data/profileUser";
import ProfileEditForm from "@/components/profile/ProfileEditForm";
import MyEventsPanel from "@/components/profile/MyEventsPanel";

function StatusPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span role="status" aria-live="polite" className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 font-nav text-[10px] font-bold uppercase tracking-[0.13em] ${className ?? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"}`}>
      {children}
    </span>
  );
}

function ProfileCardHeader({ profileComplete, saved }: { profileComplete: boolean; saved: boolean }) {
  const statusClass = profileComplete
    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
    : "border-amber-400/25 bg-amber-400/10 text-amber-300";

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 border-b border-moon/10 pb-5 sm:pb-6">
      <div>
        <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
          My Profile
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-moon/60">
          Manage your ImeeT&apos;26 participant account.
        </p>
      </div>
      <StatusPill className={saved ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300" : statusClass}>
        <i className={`fa-solid ${saved || profileComplete ? "fa-circle-check" : "fa-triangle-exclamation"}`} aria-hidden="true" />
        {saved ? "Saved" : profileComplete ? "Profile Complete" : "Profile Incomplete"}
      </StatusPill>
    </header>
  );
}

function ParticipantSummary({ user, avatarUrl }: { user: ProfileUser; avatarUrl: string | null }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-moon/10 py-5 sm:gap-5 sm:py-6">
      <div className="flex size-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-moon/10 bg-moon/10 text-moon/75 sm:size-20">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={`${user.name} profile`} className="size-full object-cover" />
        ) : (
          <i className="fa-regular fa-user text-3xl sm:text-4xl" aria-hidden="true" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-body text-lg font-semibold text-white sm:text-xl">
          {user.name}
        </h3>
        <p className="mt-1 text-sm text-moon/60">
          {user.department} <span className="px-1 text-moon/35">·</span> {user.year}
        </p>
        <div className="mt-2.5">
          <StatusPill>
            <i className="fa-solid fa-circle-check" aria-hidden="true" />
            Verified Participant
          </StatusPill>
        </div>
      </div>
    </div>
  );
}

function InformationRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="grid gap-1 border-b border-moon/10 px-4 py-3.5 last:border-b-0 sm:grid-cols-[minmax(9rem,0.8fr)_1.2fr] sm:items-center sm:gap-4 sm:px-5 sm:py-4">
      <span className="font-nav text-[11px] font-semibold uppercase tracking-[0.13em] text-moon/45">
        {label}
      </span>
      <span className="min-w-0 break-words text-sm font-medium text-white sm:text-[15px]">
        {value}
        {note && (
          <span className="mt-1 flex items-center gap-1.5 text-xs font-normal text-emerald-300/90 sm:mt-1.5">
            <i className="fa-solid fa-circle-check text-[10px]" aria-hidden="true" />
            {note}
          </span>
        )}
      </span>
    </div>
  );
}

function InformationSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-3 font-nav text-xs font-bold uppercase tracking-[0.2em] text-moon sm:text-sm">
          <span aria-hidden="true" className="h-5 w-[3px] bg-red-hi shadow-[0_0_10px_rgba(208,40,43,0.4)]" />
          {title}
        </h3>
        <span className="rounded-full border border-moon/10 bg-moon/5 px-2.5 py-1 font-nav text-[9px] font-bold uppercase tracking-[0.14em] text-moon/50">
          Saved
        </span>
      </div>
      <div className="overflow-hidden rounded-md border border-moon/10 bg-midnight/25">
        {children}
      </div>
    </section>
  );
}

function PersonalInformation({ user }: { user: ProfileUser }) {
  return (
    <InformationSection title="Personal Information">
      <InformationRow label="Full Name" value={user.name} />
      <InformationRow label="Email Address" value={user.email} note="Verified email" />
      <InformationRow label="Contact Number" value={user.contactNumber} />
    </InformationSection>
  );
}

function AcademicInformation({ user }: { user: ProfileUser }) {
  return (
    <InformationSection title="Academic Information">
      <InformationRow label="Department" value={user.department} />
      <InformationRow label="Current Year" value={user.year} />
      <InformationRow label="College Roll Number" value={user.rollNumber} />
    </InformationSection>
  );
}

export default function ProfileCard({
  user,
  onSaveUser,
  view,
  events,
  onShowEvents,
  onBackToProfile,
}: {
  user: ProfileUser;
  onSaveUser: (formData: ProfileUser) => Promise<void>;
  view: "profile" | "events";
  events: RegisteredEvent[];
  onShowEvents: () => void;
  onBackToProfile: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const profileComplete = Boolean(
    user.name.trim() && /^\d{10}$/.test(user.contactNumber.trim()) && user.department.trim() && user.year.trim() && user.rollNumber.trim(),
  );
  const profileVisible = view === "profile";

  useEffect(() => {
    if (!saved) return;
    const timeout = window.setTimeout(() => setSaved(false), 2500);
    return () => window.clearTimeout(timeout);
  }, [saved]);

  useEffect(() => {
    return () => {
      if (avatarUrl) URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  // Keep all persistence here so this local update can later be replaced with an API call.
  const saveProfile = async (updatedUser: ProfileUser, avatarFile: File | null) => {
    await onSaveUser(updatedUser);
    if (avatarFile) setAvatarUrl(URL.createObjectURL(avatarFile));
    setSaved(true);
    setEditing(false);
  };

  return (
    <section
      aria-label="Participant profile"
      className="w-full rounded-xl border border-moon/15 bg-midnight/65 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-6 lg:p-7"
    >
      <div className="grid grid-cols-1">
        <div
          aria-hidden={!profileVisible}
          inert={!profileVisible}
          className={`col-start-1 row-start-1 min-w-0 transition-[opacity,transform] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-opacity ${
            profileVisible ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none -translate-x-6 opacity-0"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={editing ? "edit-mode" : "view-mode"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {editing ? (
                <ProfileEditForm user={user} avatarUrl={avatarUrl} onCancel={() => setEditing(false)} onSave={saveProfile} />
              ) : (
                <>
                  <ProfileCardHeader profileComplete={profileComplete} saved={saved} />
                  <ParticipantSummary user={user} avatarUrl={avatarUrl} />
                  <div className="space-y-5 pt-5 sm:space-y-6 sm:pt-6">
                    <PersonalInformation user={user} />
                    <AcademicInformation user={user} />
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setEditing(true)}
                      className="flex w-full items-center justify-center gap-2.5 rounded-full border border-moon/20 bg-midnight/20 px-5 py-3 font-nav text-xs font-bold uppercase tracking-[0.2em] text-moon/85 transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-vermilion/70 hover:bg-vermilion/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
                    >
                      <i className="fa-solid fa-pen-to-square text-vermilion" aria-hidden="true" />
                      Edit Profile
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={onShowEvents}
                    className="group mt-5 flex w-full items-center gap-4 rounded-md border-t border-moon/10 px-3 py-4 text-left transition-colors duration-300 hover:bg-vermilion/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion"
                  >
                    <i className="fa-solid fa-ticket text-lg text-vermilion" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-moon transition-colors group-hover:text-white">My Events</span>
                      <span className="mt-1 block text-xs text-moon/50">View the events you&apos;ve registered for</span>
                    </span>
                    <i className="fa-solid fa-chevron-right text-xs text-moon/40 transition-colors group-hover:text-vermilion" aria-hidden="true" />
                  </button>
                  <div className="border-t border-moon/10 pt-2">
                    <button
                      type="button"
                      className="group flex w-full items-center gap-4 rounded-md px-3 py-3 text-left transition-colors duration-300 hover:bg-vermilion/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermilion"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket text-lg text-vermilion" aria-hidden="true" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-moon transition-colors group-hover:text-white">Logout</span>
                        <span className="mt-1 block text-xs text-moon/50">Sign out of your participant account.</span>
                      </span>
                      <i className="fa-solid fa-chevron-right text-xs text-moon/40 transition-colors group-hover:text-vermilion" aria-hidden="true" />
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          aria-hidden={profileVisible}
          inert={profileVisible}
          className={`col-start-1 row-start-1 min-w-0 transition-[opacity,transform] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-opacity ${
            profileVisible ? "pointer-events-none translate-x-6 opacity-0" : "pointer-events-auto translate-x-0 opacity-100"
          }`}
        >
          <MyEventsPanel events={events} onBack={onBackToProfile} active={!profileVisible} />
        </div>
      </div>
    </section>
  );
}
