"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { CATEGORIES, type TeamMember } from "./teamData";
import { apiRequest, type ApiTeamMember } from "@/lib/api";
import { PAUSE_OFFSCREEN } from "@/components/home/styles";

const CARD_CLIP =
  "[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => { apiRequest<{ data: ApiTeamMember[] }>("/api/teams").then(({ data }) => setMembers((data || []).map((person) => {
    const role = person.role.toLowerCase();
    const category = /faculty|hod|advisor|mentor|patron/.test(role) ? "mentors" : /design|media/.test(role) ? "design" : /event|operation/.test(role) ? "events" : /pr|sponsor|public/.test(role) ? "pr" : /tech|web|developer/.test(role) ? "tech" : "core";
    return { id: person.user_id, name: person.name, role: person.role, category, categoryLabel: CATEGORIES.find((entry) => entry.id === category)?.label || "Team", department: "IMEET 2026", spiritQuote: "", avatar: person.img_url || undefined, socials: { github: person.github || undefined, linkedin: person.linkedin || undefined, instagram: person.insta || undefined, email: person.email ? `mailto:${person.email}` : undefined } };
  }))).catch((e: unknown) => setError(e instanceof Error ? e.message : "Could not load the team.")).finally(() => setLoading(false)); }, []);

  const groups = CATEGORIES.filter((c) => c.id !== "all" && (activeTab === "all" || activeTab === c.id)).map((c) => ({
    ...c,
    members: members.filter((m) => m.category === c.id),
  }));

  const ordered = groups.flatMap((group) => group.members);

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-moon">
      {/* Background art, dimmed so the page reads cleanly over it */}
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/team/bg-teams-mobile.webp" />
          <img src="/images/team/team-hero.webp" alt="" className="h-full w-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/85 to-midnight/95" />
      </div>

      <div
        data-petals="14"
        className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${PAUSE_OFFSCREEN}`}
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-4 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44 lg:px-10 lg:pt-[calc(190*var(--u))]">
        <header className="[text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
          <p className="js-reveal [&.is-in]:animate-reveal flex items-center gap-4 font-nav text-xs font-bold tracking-[0.45em] text-vermilion">
            IMEET 2026 <span className="h-px w-10 bg-vermilion/70"></span> THE TEAM
          </p>
          <h1 className="js-reveal [&.is-in]:animate-reveal mt-5 font-display text-[12.5vw] uppercase leading-none text-white md:text-7xl">
            Organising Team
          </h1>
          <p className="js-reveal [&.is-in]:animate-reveal mt-4 max-w-2xl text-base font-light leading-relaxed text-moon/90 md:text-lg">
            The faculty and students of the Department of Information Technology, RCCIIT, behind IMEET 2026.
          </p>
        </header>

        <div
          className="js-reveal [&.is-in]:animate-reveal mt-8 flex gap-1 overflow-x-auto border-b border-moon/20 bg-midnight/70 font-nav text-xs font-bold tracking-[0.2em] backdrop-blur-sm [scrollbar-width:none] md:mt-10 [&::-webkit-scrollbar]:hidden"
          role="toolbar"
          aria-label="Filter team members"
          data-lenis-prevent-horizontal
        >
          {CATEGORIES.map((tab) => {
            const on = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={on}
                className={`shrink-0 border-b-2 px-4 py-4 uppercase transition-colors ${
                  on ? "border-vermilion text-white" : "border-transparent text-moon/70 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {loading && <p role="status" className="mt-10">Loading team…</p>}{error && <p role="alert" className="mt-10">{error}</p>}{!loading && !error && members.length === 0 && <p className="mt-10 text-moon/70">No team members are available yet.</p>}
        <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
          {groups.map((group) => (
            <section key={group.id} aria-label={group.label}>
              <div className="flex items-baseline gap-3 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] md:gap-4">
                <h2 className="font-display text-xl uppercase text-white md:text-3xl">{group.label}</h2>
                <span className="font-jp text-sm text-moon/60 md:text-base">{group.kanji}</span>
                <span className="h-px flex-1 self-center bg-moon/20"></span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 md:mt-6 lg:gap-6">
                {group.members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} index={ordered.indexOf(member)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  // Deterministic avatar gradient styling
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden border border-white/15 bg-midnight/90 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-vermilion/70 hover:bg-midnight/95 hover:shadow-[0_20px_50px_rgba(197,42,44,0.35)] sm:p-5 md:p-6 ${CARD_CLIP}`}
    >
      {/* Top corner cyber accent */}
      <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-vermilion/40 transition-colors group-hover:border-vermilion" />

      <div>
        {/* Top bar: Badge & Category */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-medium tracking-wider text-tag-cyan">
            {member.categoryLabel}
          </span>
          {member.badge && (
            <span className="rounded-full border border-vermilion/40 bg-vermilion/15 px-2.5 py-0.5 font-nav text-[10px] font-bold uppercase tracking-widest text-vermilion">
              {member.badge}
            </span>
          )}
        </div>

        {/* Member Identity & Avatar Header */}
        <div className="mt-4 flex flex-col gap-3 md:mt-5 md:flex-row md:items-center md:gap-4">
          <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-midnight via-navy to-midnight font-display text-base tracking-wider text-moon shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-vermilion/70 group-hover:text-white md:size-14 md:text-lg">
            {member.avatar ? <img src={member.avatar} alt={`${member.name}`} className="absolute inset-0 size-full object-cover" /> : initials}
            <span className="absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-midnight bg-tag-cyan" />
          </div>

          <div className="min-w-0">
            <h3 className="break-words font-display text-[13px] uppercase leading-tight tracking-wide sm:text-base lg:truncate lg:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors group-hover:text-vermilion">
              {member.name}
            </h3>
            <p className="mt-1 font-nav text-xs font-semibold md:mt-0 lg:truncate tracking-wider text-moon/90">
              {member.role}
            </p>
            <p className="mt-0.5 font-mono lg:truncate text-[11px] text-mist">
              {member.department}
            </p>
          </div>
        </div>

        {/* Spirit Quote */}
        <div className="mt-4 rounded-lg border border-white/10 bg-midnight/70 p-2.5 backdrop-blur-sm md:mt-5 md:p-3.5">
          <p className="font-body text-xs italic leading-relaxed text-moon/85">
            &ldquo;{member.spiritQuote}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer Socials */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 md:mt-6 md:pt-4">
        <span className="font-mono text-[10px] tracking-wider text-mist">
          NAKAMA #{String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-3">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-github text-xs" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-linkedin-in text-xs" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Instagram`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-brands fa-instagram text-xs" />
            </a>
          )}
          {member.socials.email && (
            <a
              href={member.socials.email}
              aria-label={`Email ${member.name}`}
              className="flex size-7 items-center justify-center rounded border border-white/15 bg-midnight/90 text-moon/80 transition-all hover:border-vermilion hover:text-vermilion"
            >
              <i className="fa-regular fa-envelope text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
